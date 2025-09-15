import { reactive } from 'vue';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../config/firebase.js'

export const authStore = reactive({
  user: null,
  loading: false,
  isAuthenticated: false,

  async register(email, password, firstName, lastName, marketingConsent) {
    this.loading = true;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      await sendEmailVerification(firebaseUser);

      await updateProfile(firebaseUser, {
       displayName: `${firstName} ${lastName}`
      });

      const idToken = await firebaseUser.getIdToken();
      
      const response = await fetch(`${process.env.VUE_APP_API_URL}/auth/complete-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idToken,
          firstName,
          lastName,
          marketingConsent
        })
      });
      
      const data = await response.json();
      
      if (!data.success) {
        await firebaseUser.delete();
        throw new Error(data.error || 'Registration failed');
      }
      
      this.user = {
        ...data.user,
        firebaseUser,
        consents: data.consents,
        emailVerified: firebaseUser.emailVerified
        };
      this.isAuthenticated = true;
      
      return { success: true, needsVerification: !firebaseUser.emailVerified };
      
    } catch (error) {
      console.error('Registration error:', error);
      return { 
        success: false, 
        error: error.message || 'Registration failed' 
      };
    } finally {
      this.loading = false;
    }
  },

  async resendVerificationEmail() {
  try {
    if (this.user?.firebaseUser && !this.user.firebaseUser.emailVerified) {
      await sendEmailVerification(this.user.firebaseUser);
      return { success: true };
    }
    return { success: false, error: 'User not found or already verified' };
  } catch (error) {
    return { success: false, error: error.message };
  }
},

async resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
},

  async login(email, password) {
    this.loading = true;
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      const idToken = await firebaseUser.getIdToken();
      const response = await fetch(`${process.env.VUE_APP_API_URL}/user/profile`, {
        headers: {
          'Authorization': `Bearer ${idToken}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        this.user = {
        ...data.user,
        firebaseUser,
        consents: data.consents,
        emailVerified: firebaseUser.emailVerified
        };
        this.isAuthenticated = true;
        return { success: true, emailVerified: firebaseUser.emailVerified };
      } else {
        throw new Error(data.error || 'Failed to load user profile');
      }
      
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.message || 'Login failed' 
      };
    } finally {
      this.loading = false;
    }
  },

  async logout() {
    try {
      await signOut(auth);
      this.user = null;
      this.isAuthenticated = false;
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  async getCurrentToken() {
    if (this.user?.firebaseUser) {
      return await this.user.firebaseUser.getIdToken();
    }
    return null;
  },

  initAuthListener() {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const idToken = await firebaseUser.getIdToken();
          const response = await fetch(`${process.env.VUE_APP_API_URL}/user/profile`, {
            headers: {
              'Authorization': `Bearer ${idToken}`
            }
          });
          
          const data = await response.json();
          
          if (data.success) {
            this.user = {
            ...data.user,
            firebaseUser,
            consents: data.consents,
            emailVerified: firebaseUser.emailVerified
            };
            this.isAuthenticated = true;
          }
        } catch (error) {
          console.error('Error loading user profile:', error);
          this.logout();
        }
      } else {
        this.user = null;
        this.isAuthenticated = false;
      }
    });
  },
  async captureAuditEmail(auditId) {
    try {
      if (this.isAuthenticated && this.user) {
        const idToken = await this.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/audit/capture-existing-user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
          },
          body: JSON.stringify({ auditId })
        });
        
        const data = await response.json();
        return data;
      }
      return { success: false, error: 'User not authenticated' };
    } catch (error) {
      console.error('Error capturing audit email:', error);
      return { success: false, error: error.message };
    }
  }
});