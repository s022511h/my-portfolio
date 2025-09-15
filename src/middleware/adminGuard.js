import { authStore } from '../stores/firebaseAuth';

export const requireAdmin = (to, from, next) => {
  if (!authStore.isAuthenticated) {
    next('/login');
    return;
  }
  
  if (authStore.user?.id !== 1) {
    next('/profile');
    return;
  }
  
  next();
};