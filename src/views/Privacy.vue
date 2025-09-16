<template>
  <div class="privacy-container">
    <section class="privacy-hero">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="n in 4" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span class="status-dot"></span>
          Legal Information
        </div>
        
        <h1 class="hero-headline">
          Privacy <span class="gradient-text">Policy</span>
        </h1>
        
        <p class="hero-subhead">
          Your privacy is important to us. This policy explains how N15 Labs collects, uses, and protects 
          your personal information when you use our website and services.
        </p>
        
        <div class="last-updated">
          <strong>Last Updated:</strong> {{ lastUpdated }}
        </div>
      </div>
    </section>

    <section class="privacy-content">
      <div class="container">
        <div class="privacy-section">
          <h2 class="section-title">Overview</h2>
          <div class="content-card">
            <p class="intro-text">
              N15 Labs ("we," "our," or "us") operates the website n15labs.co.uk and provides web development 
              services. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services under UK GDPR.
            </p>
            
            <div class="key-points">
              <div class="key-point">
                <div class="point-icon">🛡️</div>
                <div>
                  <strong>Data Protection:</strong>
                  <span>We comply with UK GDPR and handle your data responsibly with clear lawful basis</span>
                </div>
              </div>
              <div class="key-point">
                <div class="point-icon">🔒</div>
                <div>
                  <strong>Secure Storage:</strong>
                  <span>Your personal information is encrypted and securely stored with access controls</span>
                </div>
              </div>
              <div class="key-point">
                <div class="point-icon">⚡</div>
                <div>
                  <strong>Your Rights:</strong>
                  <span>You can access, modify, or delete your data at any time under UK GDPR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="privacy-section">
          <h2 class="section-title">Information We Collect and Lawful Basis</h2>
          
          <div class="subsection-grid">
            <div class="subsection-card">
              <h3 class="subsection-title">Contact Information</h3>
              <p class="subsection-text">
                When you contact us through our website forms, we collect:
              </p>
              <ul class="data-list">
                <li>Name and email address</li>
                <li>Phone number (if provided)</li>
                <li>Company/business name (if provided)</li>
                <li>Project details and messages</li>
                <li>Preferred contact methods and timing</li>
              </ul>
              <div class="lawful-basis">
                <strong>Lawful Basis:</strong> Consent (Article 6(1)(a) UK GDPR) - You provide explicit consent when submitting contact forms
              </div>
            </div>

            <div class="subsection-card">
              <h3 class="subsection-title">Website Analytics</h3>
              <p class="subsection-text">
                We use Google Analytics 4 (GA4) to understand website usage:
              </p>
              <ul class="data-list">
                <li>Pages visited and time spent</li>
                <li>Device and browser information</li>
                <li>Geographic location (city/country level)</li>
                <li>Referral sources and search terms</li>
                <li>User interactions and navigation patterns</li>
              </ul>
              <div class="lawful-basis">
                <strong>Lawful Basis:</strong> Legitimate interests (Article 6(1)(f) UK GDPR) - We have a legitimate interest in understanding website performance to improve user experience. Your privacy rights and freedoms do not override this interest.
              </div>
            </div>

            <div class="subsection-card">
              <h3 class="subsection-title">Technical Data</h3>
              <p class="subsection-text">
                Automatically collected to improve website performance:
              </p>
              <ul class="data-list">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Website performance metrics</li>
                <li>Error logs and debugging information</li>
                <li>Session data and user preferences</li>
              </ul>
              <div class="lawful-basis">
                <strong>Lawful Basis:</strong> Legitimate interests (Article 6(1)(f) UK GDPR) - Essential for website security, functionality, and performance optimization
              </div>
            </div>

            <div class="subsection-card">
              <h3 class="subsection-title">Client Project Data</h3>
              <p class="subsection-text">
                When providing web development services, we process:
              </p>
              <ul class="data-list">
                <li>Project requirements and specifications</li>
                <li>Business information and content</li>
                <li>Communication records and meeting notes</li>
                <li>Payment and billing information</li>
                <li>Project deliverables and documentation</li>
              </ul>
              <div class="lawful-basis">
                <strong>Lawful Basis:</strong> Contract performance (Article 6(1)(b) UK GDPR) - Processing necessary to perform our contractual obligations and Legal obligation (Article 6(1)(c) UK GDPR) for accounting and tax purposes
              </div>
            </div>
          </div>
        </div>

        <div class="privacy-section">
          <h2 class="section-title">How We Use Your Information</h2>
          
          <div class="usage-grid">
            <div class="usage-card">
              <div class="usage-icon">📞</div>
              <h3>Communication</h3>
              <p>Respond to your inquiries, provide quotes, and manage ongoing projects and client relationships.</p>
              <div class="usage-basis">Basis: Consent and Contract performance</div>
            </div>
            
            <div class="usage-card">
              <div class="usage-icon">🔧</div>
              <h3>Service Delivery</h3>
              <p>Deliver web development services, maintain project records, and provide technical support.</p>
              <div class="usage-basis">Basis: Contract performance</div>
            </div>
            
            <div class="usage-card">
              <div class="usage-icon">📊</div>
              <h3>Website Improvement</h3>
              <p>Analyze website performance, user experience, and optimize content based on visitor behavior.</p>
              <div class="usage-basis">Basis: Legitimate interests</div>
            </div>
            
            <div class="usage-card">
              <div class="usage-icon">⚖️</div>
              <h3>Legal Requirements</h3>
              <p>Comply with legal obligations, resolve disputes, and enforce our terms of service.</p>
              <div class="usage-basis">Basis: Legal obligation</div>
            </div>
          </div>
        </div>

        <div class="privacy-section">
          <h2 class="section-title">Cookies and Tracking Technologies</h2>
          
          <div class="content-card">
            <p class="intro-text">
              We use cookies and similar technologies to enhance your browsing experience and analyze website performance. 
              You can control these through our cookie banner and browser settings.
            </p>
            
            <div class="cookie-types">
              <div class="cookie-type">
                <h4>Essential Cookies</h4>
                <p>Required for basic website functionality, security, and user preferences. These cannot be disabled as they are necessary for the website to function.</p>
                <span class="cookie-status required">Required</span>
              </div>
              
              <div class="cookie-type">
                <h4>Analytics Cookies (GA4)</h4>
                <p>Help us understand website usage patterns and improve user experience through data analysis. You can opt-out of these.</p>
                <span class="cookie-status optional">Optional</span>
              </div>
              
              <div class="cookie-type">
                <h4>Performance Cookies</h4>
                <p>Monitor website performance, load times, and technical issues to maintain optimal functionality.</p>
                <span class="cookie-status optional">Optional</span>
              </div>
            </div>
            
            <div class="cookie-control">
              <h4>Managing Your Cookie Preferences</h4>
              <p><strong>Website Cookie Banner:</strong> You can accept or reject optional cookies through our cookie banner when you first visit our site.</p>
              <p><strong>Changing Preferences:</strong> You can update your cookie preferences at any time by clearing your browser cookies and revisiting our site, or by contacting us directly.</p>
              <p><strong>Browser Settings:</strong> You can also control cookies through your browser settings, though this may affect website functionality.</p>
              <p><strong>Analytics Opt-out:</strong> To opt-out of Google Analytics specifically, you can use Google's opt-out tool at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">tools.google.com/dlpage/gaoptout</a></p>
            </div>
          </div>
        </div>

        <div class="privacy-section">
          <h2 class="section-title">Data Sharing and International Transfers</h2>
          
          <div class="sharing-grid">
            <div class="sharing-card">
              <h3>Google Analytics 4</h3>
              <p>Website analytics and performance monitoring service</p>
              <div class="sharing-purpose">Analytics and website optimization</div>
              <div class="transfer-info">
                <strong>International Transfer:</strong> Data may be transferred to Google servers in the United States. Google LLC participates in the EU-US Data Privacy Framework, providing adequate protection for your data.
              </div>
              <a href="https://policies.google.com/privacy" target="_blank" class="privacy-link">
                View Google's Privacy Policy →
              </a>
            </div>
            
            <div class="sharing-card">
              <h3>Email Service Providers</h3>
              <p>Secure email delivery and communication management</p>
              <div class="sharing-purpose">Business communication and support</div>
              <div class="transfer-info">
                <strong>Data Location:</strong> Email services may use servers in the UK and EU with appropriate safeguards.
              </div>
            </div>
            
            <div class="sharing-card">
              <h3>Hosting Providers</h3>
              <p>Secure website hosting and data storage infrastructure</p>
              <div class="sharing-purpose">Website operation and data security</div>
              <div class="transfer-info">
                <strong>Data Location:</strong> Website hosted on servers with appropriate technical and organizational security measures.
              </div>
            </div>
          </div>
          
          <div class="sharing-note">
            <p><strong>Important:</strong> We never sell your personal information to third parties. Data sharing 
            is limited to trusted service providers who help us operate our business and serve you better. All 
            third-party processors are bound by data processing agreements ensuring they meet UK GDPR standards.</p>
          </div>
        </div>

        <div class="privacy-section">
          <h2 class="section-title">Your Rights Under UK GDPR</h2>
          
          <div class="rights-grid">
            <div class="right-card">
              <div class="right-icon">👁️</div>
              <h3>Right to Access</h3>
              <p>Request a copy of all personal data we hold about you, including how it's being used and on what lawful basis.</p>
            </div>
            
            <div class="right-card">
              <div class="right-icon">✏️</div>
              <h3>Right to Rectification</h3>
              <p>Request correction of inaccurate or incomplete personal information in our records.</p>
            </div>
            
            <div class="right-card">
              <div class="right-icon">🗑️</div>
              <h3>Right to Erasure</h3>
              <p>Request deletion of your personal data when it's no longer necessary for our services or you withdraw consent.</p>
            </div>
            
            <div class="right-card">
              <div class="right-icon">📋</div>
              <h3>Right to Portability</h3>
              <p>Receive your personal data in a structured, machine-readable format for transfer to another service.</p>
            </div>
            
            <div class="right-card">
              <div class="right-icon">🚫</div>
              <h3>Right to Object</h3>
              <p>Object to processing of your personal data for legitimate interests or direct marketing purposes.</p>
            </div>
            
            <div class="right-card">
              <div class="right-icon">⏸️</div>
              <h3>Right to Restrict</h3>
              <p>Request temporary suspension of data processing while disputes are being resolved or during objection reviews.</p>
            </div>
          </div>
          
          <div class="consent-withdrawal">
            <h3>Withdrawing Consent</h3>
            <p>Where we process your data based on consent, you have the right to withdraw that consent at any time:</p>
            <ul class="withdrawal-methods">
              <li><strong>Contact Forms:</strong> Email us at dre_86@hotmail.co.uk to withdraw consent for future contact</li>
              <li><strong>Analytics Cookies:</strong> Use browser settings or Google's opt-out tool to stop analytics tracking</li>
              <li><strong>Marketing Communications:</strong> Unsubscribe links in emails or contact us directly</li>
            </ul>
            <p><em>Note: Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.</em></p>
          </div>
        </div>

        <div class="privacy-section">
          <h2 class="section-title">Data Security and Retention</h2>
          
          <div class="security-content">
            <div class="security-measures">
              <h3>Security Measures</h3>
              <div class="security-list">
                <div class="security-item">
                  <div class="security-icon">🔐</div>
                  <div>
                    <strong>Encryption:</strong>
                    <span>All data transmitted using HTTPS/TLS encryption and stored using industry-standard encryption protocols</span>
                  </div>
                </div>
                <div class="security-item">
                  <div class="security-icon">🛡️</div>
                  <div>
                    <strong>Access Control:</strong>
                    <span>Strict access controls, multi-factor authentication, and role-based permissions for all data handling</span>
                  </div>
                </div>
                <div class="security-item">
                  <div class="security-icon">📊</div>
                  <div>
                    <strong>Monitoring:</strong>
                    <span>Continuous monitoring for security threats, unauthorized access attempts, and data breaches</span>
                  </div>
                </div>
                <div class="security-item">
                  <div class="security-icon">💾</div>
                  <div>
                    <strong>Backups:</strong>
                    <span>Regular encrypted backups with secure storage to prevent data loss and ensure business continuity</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="retention-policy">
              <h3>Data Retention</h3>
              <div class="retention-grid">
                <div class="retention-item">
                  <h4>Contact Form Data</h4>
                  <p>Retained for up to 3 years to maintain business relationships, or until you request deletion or withdraw consent</p>
                </div>
                <div class="retention-item">
                  <h4>Analytics Data</h4>
                  <p>Anonymous analytics data retained for 26 months (Google Analytics default), then automatically deleted</p>
                </div>
                <div class="retention-item">
                  <h4>Project Records</h4>
                  <p>Client project data retained for 7 years for legal and business purposes, then securely deleted</p>
                </div>
                <div class="retention-item">
                  <h4>Marketing Data</h4>
                  <p>Marketing preferences retained until you unsubscribe, request deletion, or withdraw consent</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="privacy-section">
          <h2 class="section-title">Contact and Data Protection</h2>
          
          <div class="contact-grid">
            <div class="contact-card">
              <h3>Privacy Requests</h3>
              <p>For any privacy-related requests or questions:</p>
              <div class="contact-details">
                <div class="contact-item">
                  <strong>Email:</strong> 
                  <a href="mailto:dre_86@hotmail.co.uk?subject=Privacy Request">dre_86@hotmail.co.uk</a>
                </div>
                <div class="contact-item">
                  <strong>Subject:</strong> Privacy Request - [specify your request type]
                </div>
                <div class="contact-item">
                  <strong>Response Time:</strong> Within 30 days (may be extended by 2 months for complex requests)
                </div>
                <div class="contact-item">
                  <strong>ID Verification:</strong> We may request proof of identity to protect your personal data
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h3>Data Controller</h3>
              <p>N15 Labs is the data controller for your personal information:</p>
              <div class="controller-details">
                <div class="controller-item">
                  <strong>Business Name:</strong> N15 Labs
                </div>
                <div class="controller-item">
                  <strong>Owner:</strong> Andre Simpson
                </div>
                <div class="controller-item">
                  <strong>Location:</strong> Stoke-on-Trent, Staffordshire, UK
                </div>
                <div class="controller-item">
                  <strong>Email:</strong> dre_86@hotmail.co.uk
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h3>Regulatory Authority</h3>
              <p>You have the right to lodge a complaint with the UK's data protection authority:</p>
              <div class="authority-details">
                <div class="authority-item">
                  <strong>Authority:</strong> Information Commissioner's Office (ICO)
                </div>
                <div class="authority-item">
                  <strong>Website:</strong> 
                  <a href="https://ico.org.uk" target="_blank">ico.org.uk</a>
                </div>
                <div class="authority-item">
                  <strong>Phone:</strong> 0303 123 1113
                </div>
                <div class="authority-item">
                  <strong>Live Chat:</strong> Available on ICO website
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="privacy-section">
          <h2 class="section-title">Policy Updates and Changes</h2>
          
          <div class="updates-card">
            <div class="updates-content">
              <h3>How We Handle Updates</h3>
              <p class="updates-text">
                We may update this Privacy Policy periodically to reflect changes in our practices, 
                legal requirements, or service offerings. When we make significant changes:
              </p>
              
              <div class="update-process">
                <div class="update-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <strong>Email Notification:</strong>
                    <span>We'll email existing clients about important changes at least 30 days in advance</span>
                  </div>
                </div>
                <div class="update-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <strong>Website Notice:</strong>
                    <span>Prominent notices will be displayed on our website highlighting key changes</span>
                  </div>
                </div>
                <div class="update-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <strong>Consent Collection:</strong>
                    <span>If required, we'll collect new consent for expanded data processing activities</span>
                  </div>
                </div>
              </div>
              
              <div class="version-info">
                <p><strong>Version History:</strong> Previous versions of this policy are available upon request. 
                Contact us if you need access to earlier versions for reference or legal purposes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  data() {
    return {
      lastUpdated: 'September 16, 2025'
    }
  },
  methods: {
    getParticleStyle(n) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: (n * 0.8) + 's',
        animationDuration: (4 + Math.random() * 2) + 's'
      }
    }
  },
  mounted() {
    document.title = 'Privacy Policy - N15 Labs | Andre Simpson'
  }
}
</script>

<style scoped>
.privacy-container {
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.privacy-hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.floating-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(139, 92, 246, 0.4);
  border-radius: 50%;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.2;
  }
  50% { 
    transform: translateY(-80px) translateX(40px);
    opacity: 0.8;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: #8b5cf6;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #8b5cf6;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-headline {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 2rem 0;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subhead {
  font-size: 1.375rem;
  line-height: 1.7;
  color: #a1a1aa;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.last-updated {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  color: #d1d5db;
  backdrop-filter: blur(10px);
}

.privacy-content {
  padding: 6rem 0;
  background: white;
}

.privacy-section {
  margin-bottom: 5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 2.5rem;
  text-align: center;
}

.content-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.intro-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 2rem;
}

.key-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.key-point {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
}

.point-icon {
  font-size: 1.5rem;
  margin-top: 0.25rem;
}

.key-point strong {
  display: block;
  color: #111827;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.key-point span {
  color: #6b7280;
  line-height: 1.5;
}

.subsection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.subsection-card {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.subsection-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  border-color: #3b82f6;
}

.subsection-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.subsection-text {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.data-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.data-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.data-list li:before {
  content: '•';
  color: #3b82f6;
  font-weight: bold;
  margin-right: 0.75rem;
}

.lawful-basis {
  padding: 1rem;
  background: #f0f9ff;
  border-radius: 8px;
  border-left: 4px solid #0ea5e9;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #0c4a6e;
}

.usage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.usage-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.usage-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.usage-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.usage-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.usage-card p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.usage-basis {
  font-size: 0.875rem;
  color: #059669;
  font-weight: 600;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
}

.cookie-types {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.cookie-type {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.cookie-type h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.5rem 0;
}

.cookie-type p {
  color: #6b7280;
  margin: 0;
  flex: 1;
  padding-right: 1rem;
}

.cookie-status {
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.cookie-status.required {
  background: #fee2e2;
  color: #dc2626;
}

.cookie-status.optional {
  background: #dbeafe;
  color: #2563eb;
}

.cookie-control {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f3f4f6;
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
}

.cookie-control h4 {
  color: #111827;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.cookie-control p {
  margin-bottom: 0.75rem;
  color: #6b7280;
  line-height: 1.6;
}

.cookie-control p:last-child {
  margin-bottom: 0;
}

.cookie-control a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.cookie-control a:hover {
  text-decoration: underline;
}

.sharing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.sharing-card {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.sharing-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  border-color: #3b82f6;
}

.sharing-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
}

.sharing-card p {
  color: #6b7280;
  margin-bottom: 1rem;
}

.sharing-purpose {
  background: #f3f4f6;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
}

.transfer-info {
  background: #fef3c7;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
  margin-bottom: 1rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #92400e;
}

.privacy-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.privacy-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.sharing-note {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #22c55e;
}

.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.right-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.right-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #22c55e;
}

.right-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.right-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.right-card p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.consent-withdrawal {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
}

.consent-withdrawal h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.consent-withdrawal p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.withdrawal-methods {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.withdrawal-methods li {
  padding: 0.75rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.withdrawal-methods li:before {
  content: '→';
  color: #3b82f6;
  font-weight: bold;
  margin-right: 0.75rem;
}

.security-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.security-measures h3,
.retention-policy h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.security-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.security-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.security-icon {
  font-size: 1.5rem;
  margin-top: 0.25rem;
}

.security-item strong {
  display: block;
  color: #111827;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.security-item span {
  color: #6b7280;
  line-height: 1.5;
}

.retention-grid {
  display: grid;
  gap: 1.5rem;
}

.retention-item {
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  border-left: 4px solid #8b5cf6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.retention-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.retention-item p {
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.contact-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.contact-card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.contact-details,
.controller-details,
.authority-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item,
.controller-item,
.authority-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-item strong,
.controller-item strong,
.authority-item strong {
  color: #374151;
  font-weight: 600;
  font-size: 0.9375rem;
}

.contact-item a,
.authority-item a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.contact-item a:hover,
.authority-item a:hover {
  text-decoration: underline;
}

.updates-card {
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.updates-content {
  padding: 2.5rem;
}

.updates-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.updates-text {
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.update-process {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.update-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.step-content strong {
  display: block;
  color: #111827;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.step-content span {
  color: #6b7280;
  line-height: 1.5;
}

.version-info {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  border-left: 4px solid #8b5cf6;
}

.version-info p {
  margin: 0;
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 2rem 1rem;
  }
  
  .hero-headline {
    font-size: 2.75rem;
  }
  
  .hero-subhead {
    font-size: 1.25rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .subsection-grid,
  .usage-grid,
  .sharing-grid,
  .rights-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .security-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .key-points {
    grid-template-columns: 1fr;
  }
  
  .cookie-type {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cookie-type p {
    padding-right: 0;
  }
  
  .content-card,
  .updates-content {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-headline {
    font-size: 2.25rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .subsection-card,
  .usage-card,
  .sharing-card,
  .right-card,
  .contact-card {
    padding: 1.5rem;
  }
  
  .content-card,
  .updates-content {
    padding: 1.5rem;
  }
  
  .key-point,
  .security-item,
  .retention-item,
  .update-step {
    padding: 1.25rem;
  }
}
</style>