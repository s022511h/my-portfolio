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
    cookie_flags: 'SameSite=Strict;Secure'
  });
  
  window.gtag = gtag;
}

export function trackEvent(eventName, parameters = {}) {
  const consents = getStoredConsents();
  if (consents && consents.analytics && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
}

export function getStoredConsents() {
  try {
    const stored = localStorage.getItem('cookie-consents');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}