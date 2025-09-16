export function initializeGA() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  
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

export function trackEvent(eventName, parameters = {}) {
  const consents = getStoredConsents();
  
  if (consents && consents.analytics && typeof window.gtag !== 'undefined') {
    const sanitizedParams = sanitizeEventParameters(parameters);
    
    window.gtag('event', eventName, sanitizedParams);
    
    logEventTracking(eventName, sanitizedParams);
  }
}

export function trackPageView(path) {
  const consents = getStoredConsents();
  
  if (consents && consents.analytics && typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-24LMEN7WRQ', {
      page_path: path,
      anonymize_ip: true
    });
  }
}

export function getStoredConsents() {
  try {
    const stored = localStorage.getItem('cookie-consents');
    const timestamp = localStorage.getItem('cookie-consent-timestamp');
    
    if (!stored || !timestamp) return null;
    
    const consentDate = new Date(timestamp);
    const now = new Date();
    const daysDiff = (now - consentDate) / (1000 * 60 * 60 * 24);
    
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

function sanitizeEventParameters(params) {
  const sanitized = {};
  const allowedKeys = [
    'event_category', 'event_label', 'value', 'currency',
    'page_title', 'page_location', 'content_type', 'item_id'
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
      user_agent: navigator.userAgent.substring(0, 200) 
    };
    
    const existingLogs = JSON.parse(localStorage.getItem('analytics-logs') || '[]');
    existingLogs.push(logEntry);
    
    if (existingLogs.length > 100) {
      existingLogs.splice(0, existingLogs.length - 100);
    }
    
    localStorage.setItem('analytics-logs', JSON.stringify(existingLogs));
  } catch (error) {
    console.warn('Failed to log analytics event:', error);
  }
}

export function getComplianceLogs() {
  try {
    return {
      consent_logs: JSON.parse(localStorage.getItem('consent-logs') || '[]'),
      analytics_logs: JSON.parse(localStorage.getItem('analytics-logs') || '[]'),
      consent_details: JSON.parse(localStorage.getItem('cookie-consent-details') || '{}')
    };
  } catch {
    return { consent_logs: [], analytics_logs: [], consent_details: {} };
  }
}

export function deleteAllStoredData() {
  const keysToRemove = [
    'cookie-consents',
    'cookie-consent-timestamp', 
    'cookie-consent-details',
    'consent-logs',
    'analytics-logs'
  ];
  
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });
  
  removeStoredConsents();
  
  return true;
}