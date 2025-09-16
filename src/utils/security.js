export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/data:/gi, '')
    .trim()
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254 
}

export const validateMessage = (message) => {
  return message && message.length > 0 && message.length <= 1000
}

export const validateName = (name) => {
  return name && name.length > 0 && name.length <= 100 && /^[a-zA-Z\s'-]+$/.test(name)
}

export const validatePhone = (phone) => {
  if (!phone) return true
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/ 
  return phoneRegex.test(phone.replace(/[\s\-()]/g, ''))
}

export const sanitizeFormData = (formData) => {
  const sanitized = {}
  const maxLengths = {
    name: 100,
    email: 254,
    phone: 20,
    company: 100,
    message: 1000,
    subject: 200
  }
  
  for (const [key, value] of Object.entries(formData)) {
    let sanitizedValue = sanitizeInput(value)
    
    if (maxLengths[key]) {
      sanitizedValue = sanitizedValue.substring(0, maxLengths[key])
    }
    
    if (key !== 'email' && key !== 'phone') {
      sanitizedValue = removePIIPatterns(sanitizedValue)
    }
    
    sanitized[key] = sanitizedValue
  }
  
  return sanitized
}

export const removePIIPatterns = (text) => {
  if (typeof text !== 'string') return text
  
  return text
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL_REMOVED]')
    .replace(/\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, '[CARD_REMOVED]')
    .replace(/\b\d{3}-?\d{2}-?\d{4}\b/g, '[SSN_REMOVED]')
    .replace(/\b[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-D]{1}\b/g, '[NI_REMOVED]')
    .replace(/\b[+]?[1-9][\d\s\-()]{7,15}\b/g, '[PHONE_REMOVED]')
}

export const logSecurityEvent = (eventType, details = {}) => {
  try {
    const logEntry = {
      type: eventType,
      timestamp: new Date().toISOString(),
      details: sanitizeSecurityLog(details),
      userAgent: navigator.userAgent.substring(0, 200),
      url: window.location.href
    }
    
    const existingLogs = JSON.parse(localStorage.getItem('security-logs') || '[]')
    existingLogs.push(logEntry)
    
    if (existingLogs.length > 50) {
      existingLogs.splice(0, existingLogs.length - 50)
    }
    
    localStorage.setItem('security-logs', JSON.stringify(existingLogs))
  } catch (error) {
    console.warn('Failed to log security event:', error)
  }
}

const sanitizeSecurityLog = (details) => {
  const sanitized = {}
  for (const [key, value] of Object.entries(details)) {
    if (typeof value === 'string') {
      sanitized[key] = removePIIPatterns(value).substring(0, 500)
    } else {
      sanitized[key] = value
    }
  }
  return sanitized
}

export const validateConsentData = (consentData) => {
  const requiredFields = ['necessary', 'analytics', 'marketing']
  
  if (!consentData || typeof consentData !== 'object') {
    return false
  }
  
  return requiredFields.every(field => 
    Object.prototype.hasOwnProperty.call(consentData, field) && 
    typeof consentData[field] === 'boolean'
  )
}

export const encryptSensitiveData = (data, key) => {
  try {
    const encrypted = btoa(String.fromCharCode(...new Uint8Array(
      new TextEncoder().encode(JSON.stringify(data))
        .map((byte, i) => byte ^ key.charCodeAt(i % key.length))
    )))
    return encrypted
  } catch {
    return null
  }
}

export const decryptSensitiveData = (encryptedData, key) => {
  try {
    const decrypted = new TextDecoder().decode(new Uint8Array(
      atob(encryptedData)
        .split('')
        .map((char, i) => char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    ))
    return JSON.parse(decrypted)
  } catch {
    return null
  }
}

export const generateCSRFToken = () => {
  const array = new Uint32Array(8)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

export const validateCSRFToken = (token, expectedToken) => {
  return token && expectedToken && token === expectedToken
}

export const rateLimit = (key, maxAttempts = 5, windowMs = 900000) => { 
  try {
    const now = Date.now()
    const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]')
    
    const validAttempts = attempts.filter(timestamp => now - timestamp < windowMs)
    
    if (validAttempts.length >= maxAttempts) {
      logSecurityEvent('rate_limit_exceeded', { key, attempts: validAttempts.length })
      return false
    }
    
    validAttempts.push(now)
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(validAttempts))
    return true
  } catch {
    return true 
  }
}

export const getDataRetentionInfo = () => {
  return {
    contact_forms: '3 years from submission',
    analytics_data: '26 months (Google Analytics default)',
    client_projects: '7 years (accounting) + 2 years (project files)',
    authentication: '3 years from last login',
    consent_records: '3 years from withdrawal',
    security_logs: '1 year',
    error_logs: '1 year'
  }
}

export const cleanupExpiredData = () => {
  try {
    const now = Date.now()
    const oneYear = 365 * 24 * 60 * 60 * 1000
    
    const securityLogs = JSON.parse(localStorage.getItem('security-logs') || '[]')
    const validSecurityLogs = securityLogs.filter(log => 
      now - new Date(log.timestamp).getTime() < oneYear
    )
    localStorage.setItem('security-logs', JSON.stringify(validSecurityLogs))
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('rate_limit_')) {
        const attempts = JSON.parse(localStorage.getItem(key) || '[]')
        const validAttempts = attempts.filter(timestamp => now - timestamp < 900000) 
        if (validAttempts.length === 0) {
          localStorage.removeItem(key)
        } else {
          localStorage.setItem(key, JSON.stringify(validAttempts))
        }
      }
    }
    
    return true
  } catch (error) {
    console.warn('Failed to cleanup expired data:', error)
    return false
  }
}

cleanupExpiredData()