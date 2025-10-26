// Enhanced GA4 Analytics with Beta User Tracking
// Includes Consent Mode v2 and comprehensive user tracking

export function initializeGA() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  
  // Initialize with strict consent defaults
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'functionality_storage': 'granted',
    'security_storage': 'granted'
  });

  gtag('js', new Date());
  
  gtag('config', 'G-24LMEN7WRQ', {
    anonymize_ip: true,
    cookie_flags: 'SameSite=Strict;Secure',
    allow_google_signals: false, 
    allow_ad_personalization_signals: false,
    cookie_expires: 63072000, 
    storage: 'none'
  });
  
  window.gtag = gtag;
  
  // Check for existing consents and apply them
  const existingConsents = getStoredConsents();
  if (existingConsents) {
    updateConsentMode(existingConsents);
  }
}

export function updateConsentMode(consents) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('consent', 'update', {
      'analytics_storage': consents.analytics ? 'granted' : 'denied',
      'ad_storage': consents.marketing ? 'granted' : 'denied',
      'ad_user_data': consents.marketing ? 'granted' : 'denied',
      'ad_personalization': consents.marketing ? 'granted' : 'denied',
      'functionality_storage': 'granted',
      'security_storage': 'granted'
    });
    
    window.gtag('config', 'G-24LMEN7WRQ', {
      allow_google_signals: consents.marketing,
      allow_ad_personalization_signals: consents.marketing
    });
  }
}

// ============================================
// BETA USER TRACKING
// ============================================

/**
 * Mark a user as beta user and track their onboarding
 * Call this when a user first registers during beta period
 */
export function trackBetaUserRegistration(userId, email, metadata = {}) {
  const betaData = {
    user_id: userId,
    beta_user: true,
    registration_date: new Date().toISOString(),
    beta_cohort: 'launch_2025',
    ...metadata
  };
  
  // Store beta user status locally
  try {
    localStorage.setItem('beta_user_data', JSON.stringify(betaData));
  } catch (error) {
    console.warn('Could not store beta user data:', error);
  }
  
  // Track registration event
  trackEvent('beta_user_registration', {
    event_category: 'Beta Program',
    event_label: 'New Beta User',
    user_type: 'beta'
  });
  
  console.log('✓ Beta user registered:', userId);
}

/**
 * Check if current user is a beta user
 */
export function isBetaUser() {
  try {
    const betaData = localStorage.getItem('beta_user_data');
    return betaData !== null;
  } catch {
    return false;
  }
}

/**
 * Get beta user data
 */
export function getBetaUserData() {
  try {
    const data = localStorage.getItem('beta_user_data');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

/**
 * Track beta user actions
 */
export function trackBetaUserAction(action, details = {}) {
  if (!isBetaUser()) return;
  
  trackEvent('beta_user_action', {
    event_category: 'Beta Program',
    event_label: action,
    ...details
  });
}

/**
 * Track beta feature usage
 */
export function trackBetaFeatureUsage(featureName, metadata = {}) {
  if (!isBetaUser()) return;
  
  trackEvent('beta_feature_used', {
    event_category: 'Beta Features',
    event_label: featureName,
    ...metadata
  });
  
  // Log feature usage for analytics
  try {
    const usageLog = JSON.parse(localStorage.getItem('beta_feature_usage') || '{}');
    if (!usageLog[featureName]) {
      usageLog[featureName] = {
        first_used: new Date().toISOString(),
        usage_count: 0
      };
    }
    usageLog[featureName].usage_count++;
    usageLog[featureName].last_used = new Date().toISOString();
    localStorage.setItem('beta_feature_usage', JSON.stringify(usageLog));
  } catch (error) {
    console.warn('Could not log beta feature usage:', error);
  }
}

// ============================================
// STANDARD EVENT TRACKING
// ============================================

export function trackEvent(eventName, parameters = {}) {
  const consents = getStoredConsents();
  
  // Add beta user context to all events
  if (isBetaUser()) {
    parameters.user_type = 'beta';
  }
  
  if (consents && consents.analytics && typeof window.gtag !== 'undefined') {
    const sanitizedParams = sanitizeEventParameters(parameters);
    
    window.gtag('event', eventName, sanitizedParams);
    
    logEventTracking(eventName, sanitizedParams);
  }
}

export function trackPageView(path) {
  const consents = getStoredConsents();
  
  if (consents && consents.analytics && typeof window.gtag !== 'undefined') {
    const pageViewData = {
      page_path: path,
      anonymize_ip: true
    };
    
    // Add beta user context
    if (isBetaUser()) {
      pageViewData.user_type = 'beta';
    }
    
    window.gtag('config', 'G-24LMEN7WRQ', pageViewData);
  }
}

// ============================================
// USER AUTHENTICATION TRACKING
// ============================================

/**
 * Track user login
 */
export function trackLogin(userId, method = 'email') {
  trackEvent('login', {
    event_category: 'Authentication',
    event_label: method,
    method: method
  });
  
  // Check and track if beta user
  if (isBetaUser()) {
    trackBetaUserAction('login');
  }
}

/**
 * Track user registration
 */
export function trackRegistration(userId, method = 'email') {
  trackEvent('sign_up', {
    event_category: 'Authentication',
    event_label: method,
    method: method
  });
}

/**
 * Track email verification
 */
export function trackEmailVerification() {
  trackEvent('email_verified', {
    event_category: 'Authentication',
    event_label: 'Email Verified'
  });
  
  if (isBetaUser()) {
    trackBetaUserAction('email_verified');
  }
}

// ============================================
// AUDIT TOOL TRACKING
// ============================================

/**
 * Track audit submissions
 */
export function trackAuditSubmission(url) {
  trackEvent('audit_submitted', {
    event_category: 'Audit Tool',
    event_label: 'Website Audit Started',
    page_location: url
  });
  
  if (isBetaUser()) {
    trackBetaFeatureUsage('audit_tool');
  }
}

/**
 * Track audit completions
 */
export function trackAuditCompletion(url, score) {
  trackEvent('audit_completed', {
    event_category: 'Audit Tool',
    event_label: 'Audit Completed',
    value: Math.round(score)
  });
}

// ============================================
// CONSENT MANAGEMENT
// ============================================

export function getStoredConsents() {
  try {
    const stored = localStorage.getItem('cookie-consents');
    const timestamp = localStorage.getItem('cookie-consent-timestamp');
    
    if (!stored || !timestamp) return null;
    
    const consentDate = new Date(timestamp);
    const now = new Date();
    const daysDiff = (now - consentDate) / (1000 * 60 * 60 * 24);
    
    // Expire consents after 365 days (GDPR requirement)
    if (daysDiff > 365) {
      removeStoredConsents();
      return null;
    }
    
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function removeStoredConsents() {
  localStorage.removeItem('cookie-consents');
  localStorage.removeItem('cookie-consent-timestamp');
  localStorage.removeItem('cookie-consent-details');
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function sanitizeEventParameters(params) {
  const sanitized = {};
  const allowedKeys = [
    'event_category', 'event_label', 'value', 'currency',
    'page_title', 'page_location', 'content_type', 'item_id',
    'method', 'user_type' // Added for beta tracking
  ];
  
  for (const [key, value] of Object.entries(params)) {
    if (allowedKeys.includes(key) && typeof value !== 'object') {
      sanitized[key] = String(value)
        .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[email]')
        .replace(/\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, '[card]')
        .replace(/\b\d{3}-?\d{2}-?\d{4}\b/g, '[ssn]');
    }
  }
  
  return sanitized;
}

function logEventTracking(eventName, parameters) {
  try {
    const logEntry = {
      event: eventName,
      parameters: parameters,
      timestamp: new Date().toISOString(),
      consent_status: getStoredConsents(),
      is_beta_user: isBetaUser(),
      user_agent: navigator.userAgent.substring(0, 200)
    };
    
    const existingLogs = JSON.parse(localStorage.getItem('analytics-logs') || '[]');
    existingLogs.push(logEntry);
    
    // Keep only last 100 logs
    if (existingLogs.length > 100) {
      existingLogs.splice(0, existingLogs.length - 100);
    }
    
    localStorage.setItem('analytics-logs', JSON.stringify(existingLogs));
  } catch (error) {
    console.warn('Failed to log analytics event:', error);
  }
}

// ============================================
// COMPLIANCE & REPORTING
// ============================================

export function getComplianceLogs() {
  try {
    return {
      consent_logs: JSON.parse(localStorage.getItem('consent-logs') || '[]'),
      analytics_logs: JSON.parse(localStorage.getItem('analytics-logs') || '[]'),
      consent_details: JSON.parse(localStorage.getItem('cookie-consent-details') || '{}'),
      beta_user_data: getBetaUserData(),
      beta_feature_usage: JSON.parse(localStorage.getItem('beta_feature_usage') || '{}')
    };
  } catch {
    return { 
      consent_logs: [], 
      analytics_logs: [], 
      consent_details: {},
      beta_user_data: null,
      beta_feature_usage: {}
    };
  }
}

export function deleteAllStoredData() {
  const keysToRemove = [
    'cookie-consents',
    'cookie-consent-timestamp', 
    'cookie-consent-details',
    'consent-logs',
    'analytics-logs',
    'beta_user_data',
    'beta_feature_usage'
  ];
  
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });
  
  removeStoredConsents();
  
  return true;
}

// ============================================
// BETA PROGRAM UTILITIES
// ============================================

/**
 * Get beta program statistics
 */
export function getBetaProgramStats() {
  if (!isBetaUser()) return null;
  
  const betaData = getBetaUserData();
  const featureUsage = JSON.parse(localStorage.getItem('beta_feature_usage') || '{}');
  const analyticsLogs = JSON.parse(localStorage.getItem('analytics-logs') || '[]');
  
  // Count beta-specific events
  const betaEvents = analyticsLogs.filter(log => 
    log.event.includes('beta') || log.parameters?.user_type === 'beta'
  );
  
  return {
    registration_date: betaData?.registration_date,
    days_in_beta: betaData?.registration_date ? 
      Math.floor((Date.now() - new Date(betaData.registration_date)) / (1000 * 60 * 60 * 24)) : 0,
    features_used: Object.keys(featureUsage).length,
    total_feature_uses: Object.values(featureUsage).reduce((sum, f) => sum + f.usage_count, 0),
    total_events: betaEvents.length,
    most_used_feature: Object.entries(featureUsage)
      .sort((a, b) => b[1].usage_count - a[1].usage_count)[0]?.[0] || 'none'
  };
}