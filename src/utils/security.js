export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateMessage = (message) => {
  return message && message.length > 0 && message.length <= 1000
}

export const sanitizeFormData = (formData) => {
  const sanitized = {}
  for (const [key, value] of Object.entries(formData)) {
    sanitized[key] = sanitizeInput(value)
  }
  return sanitized
}