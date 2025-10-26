// src/middleware/adminGuard.js
// Updated admin guard that checks is_admin flag instead of user ID

import { authStore } from '../stores/firebaseAuth';

export const requireAdmin = (to, from, next) => {
  // Check if user is authenticated
  if (!authStore.isAuthenticated) {
    console.log('❌ Admin guard: User not authenticated, redirecting to login');
    next('/login');
    return;
  }
  
  // Check if user has admin privileges
  if (!authStore.user?.isAdmin) {
    console.log('❌ Admin guard: User is not an admin, redirecting to profile');
    next('/profile');
    return;
  }
  
  // User is authenticated and is admin
  console.log('✅ Admin guard: Access granted to admin dashboard');
  next();
};