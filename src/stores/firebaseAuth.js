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
import { auth } from '../config/firebase.js';
import { 
  trackBetaUserRegistration, 
  trackLogin, 
  trackRegistration,
  trackEmailVerification 
} from '../utils/analytics.js';

export const authStore = reactive({
  user: null,
  loading: false,
  isAuthenticated: false,
  error: null,

  async register(email, password, firstName, lastName, marketingConsent) {
    this.loading = true;
    this.error = null;
    
    try {
      // Step 1: Create Firebase user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      // Step 2: Send verification email
      await sendEmailVerification(firebaseUser);

      // Step 3: Update display name
      await updateProfile(firebaseUser, {
        displayName: `${firstName} ${lastName}`
      });

      // Step 4: Get Firebase ID token
      const idToken = await firebaseUser.getIdToken();
      
      // Step 5: Complete registration on backend
      const response = await fetch(`${process.env.VUE_APP_API_URL}/auth/complete-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`
        },
        body: JSON.stringify({
          idToken,
          firstName,
          lastName,
          marketingConsent,
          isBetaUser: true, // Mark as beta user during early access
          registrationSource: 'web_app'
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Backend error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        // If backend registration fails, delete Firebase user
        await firebaseUser.delete();
        throw new Error(data.error || 'Registration failed on backend');
      }
      
      // Step 6: Set up user object
      this.user = {
        ...data.user,
        firebaseUser,
        consents: data.consents,
        emailVerified: firebaseUser.emailVerified,
        isBetaUser: true
      };
      this.isAuthenticated = true;
      
      // Step 7: Track registration in analytics
      trackRegistration(data.user.id, 'email');
      trackBetaUserRegistration(data.user.id, email, {
        firstName,
        lastName,
        marketingConsent
      });
      
      console.log('✓ Registration successful:', data.user.id);
      
      return { 
        success: true, 
        needsVerification: !firebaseUser.emailVerified,
        userId: data.user.id
      };
      
    } catch (error) {
      console.error('Registration error:', error);
      this.error = error.message;
      
      // More detailed error messages
      let userMessage = 'Registration failed';
      if (error.code === 'auth/email-already-in-use') {
        userMessage = 'This email is already registered. Try logging in instead.';
      } else if (error.code === 'auth/weak-password') {
        userMessage = 'Password should be at least 6 characters.';
      } else if (error.code === 'auth/invalid-email') {
        userMessage = 'Please enter a valid email address.';
      } else if (error.message.includes('Backend error')) {
        userMessage = 'Server error. Please try again in a moment.';
      } else {
        userMessage = error.message;
      }
      
      return { 
        success: false, 
        error: userMessage
      };
    } finally {
      this.loading = false;
    }
  },

  async resendVerificationEmail() {
    try {
      if (this.user?.firebaseUser && !this.user.firebaseUser.emailVerified) {
        await sendEmailVerification(this.user.firebaseUser);
        console.log('✓ Verification email sent');
        return { success: true, message: 'Verification email sent! Check your inbox.' };
      }
      return { 
        success: false, 
        error: 'User not found or already verified' 
      };
    } catch (error) {
      console.error('Resend verification error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to send verification email'
      };
    }
  },

  async resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('✓ Password reset email sent to:', email);
      return { 
        success: true, 
        message: 'Password reset email sent! Check your inbox.' 
      };
    } catch (error) {
      console.error('Password reset error:', error);
      
      let errorMessage = 'Failed to send password reset email';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email address.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      }
      
      return { 
        success: false, 
        error: errorMessage 
      };
    }
  },

  async login(email, password) {
    this.loading = true;
    this.error = null;
    
    try {
      // Step 1: Firebase authentication
      console.log('Attempting Firebase login...');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      console.log('✓ Firebase login successful');
      
      // Step 2: Get Firebase ID token
      const idToken = await firebaseUser.getIdToken();
      
      // Step 3: Fetch user profile from backend
      console.log('Fetching user profile from backend...');
      const response = await fetch(`${process.env.VUE_APP_API_URL}/user/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${idToken}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Backend error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Backend response:', data.success ? '✓ Success' : '✗ Failed');
      
      if (data.success) {
        // Step 4: Set up user state
        this.user = {
          ...data.user,
          firebaseUser,
          consents: data.consents,
          emailVerified: firebaseUser.emailVerified,
          isBetaUser: data.user.isBetaUser || true // All early users are beta
        };
        this.isAuthenticated = true;
        
        // Step 5: Track login
        trackLogin(data.user.id, 'email');
        
        console.log('✓ Login complete:', {
          userId: data.user.id,
          email: data.user.email,
          emailVerified: firebaseUser.emailVerified,
          isBetaUser: this.user.isBetaUser
        });
        
        return { 
          success: true, 
          emailVerified: firebaseUser.emailVerified,
          userId: data.user.id
        };
      } else {
        throw new Error(data.error || 'Failed to load user profile');
      }
      
    } catch (error) {
      console.error('Login error:', error);
      this.error = error.message;
      
      // Detailed error messages
      let userMessage = 'Login failed';
      if (error.code === 'auth/user-not-found') {
        userMessage = 'No account found with this email. Please register first.';
      } else if (error.code === 'auth/wrong-password') {
        userMessage = 'Incorrect password. Try again or reset your password.';
      } else if (error.code === 'auth/invalid-email') {
        userMessage = 'Please enter a valid email address.';
      } else if (error.code === 'auth/too-many-requests') {
        userMessage = 'Too many failed attempts. Please try again later.';
      } else if (error.message.includes('Backend error')) {
        userMessage = 'Server connection error. Please check your internet connection.';
      } else if (error.message.includes('Failed to fetch')) {
        userMessage = 'Cannot connect to server. Please check your internet connection.';
      } else {
        userMessage = error.message;
      }
      
      return { 
        success: false, 
        error: userMessage
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
      this.error = null;
      console.log('✓ Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
      this.error = error.message;
    }
  },

  async getCurrentToken() {
    if (this.user?.firebaseUser) {
      try {
        return await this.user.firebaseUser.getIdToken(true); // Force refresh
      } catch (error) {
        console.error('Error getting token:', error);
        return null;
      }
    }
    return null;
  },

  async refreshUserProfile() {
    if (!this.isAuthenticated || !this.user?.firebaseUser) {
      return { success: false, error: 'Not authenticated' };
    }
    
    try {
      const idToken = await this.getCurrentToken();
      const response = await fetch(`${process.env.VUE_APP_API_URL}/user/profile`, {
        headers: {
          'Authorization': `Bearer ${idToken}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        this.user = {
          ...data.user,
          firebaseUser: this.user.firebaseUser,
          consents: data.consents,
          emailVerified: this.user.firebaseUser.emailVerified,
          isBetaUser: data.user.isBetaUser || true
        };
        
        // Track email verification if it changed
        if (this.user.firebaseUser.emailVerified && !this.user.emailVerified) {
          trackEmailVerification(data.user.id);
        }
        
        return { success: true };
      }
      
      return { success: false, error: data.error };
    } catch (error) {
      console.error('Error refreshing profile:', error);
      return { success: false, error: error.message };
    }
  },

  initAuthListener() {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          console.log('Auth state changed: User logged in');
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
              emailVerified: firebaseUser.emailVerified,
              isBetaUser: data.user.isBetaUser || true
            };
            this.isAuthenticated = true;
            console.log('✓ User profile loaded via auth listener');
          }
        } catch (error) {
          console.error('Error loading user profile in auth listener:', error);
          // Don't logout on error - might be temporary network issue
          if (error.message.includes('Backend error') || error.message.includes('Failed to fetch')) {
            console.warn('Backend temporarily unavailable, keeping user logged in');
          } else {
            this.logout();
          }
        }
      } else {
        console.log('Auth state changed: User logged out');
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
  },

  // Check if backend is accessible
  async checkBackendHealth() {
    try {
      const response = await fetch(`${process.env.VUE_APP_API_URL}/health`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.ok;
    } catch (error) {
      console.error('Backend health check failed:', error);
      return false;
    }
  }
});