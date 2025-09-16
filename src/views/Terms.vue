<template>
  <div class="terms-container">
    <section class="terms-hero">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="n in 4" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span class="status-dot"></span>
          Legal Terms
        </div>
        
        <h1 class="hero-headline">
          Terms of <span class="gradient-text">Service</span>
        </h1>
        
        <p class="hero-subhead">
          These terms govern your use of N15 Labs' services and website. By using our services, 
          you agree to these terms and conditions.
        </p>
        
        <div class="last-updated">
          <strong>Last Updated:</strong> {{ lastUpdated }}
        </div>
      </div>
    </section>

    <section class="terms-content">
      <div class="container">
        <div class="terms-section">
          <h2 class="section-title">Agreement to Terms</h2>
          <div class="content-card">
            <p class="intro-text">
              By accessing and using the N15 Labs website (n15labs.co.uk) or engaging our web development services, 
              you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              Please also review our Privacy Policy which explains how we handle your personal data.
            </p>
            
            <div class="key-points">
              <div class="key-point">
                <div class="point-icon">📋</div>
                <div>
                  <strong>Binding Agreement:</strong>
                  <span>These terms create a legally binding agreement between you and N15 Labs</span>
                </div>
              </div>
              <div class="key-point">
                <div class="point-icon">📄</div>
                <div>
                  <strong>Regular Updates:</strong>
                  <span>Terms may be updated periodically with advance notice for significant changes</span>
                </div>
              </div>
              <div class="key-point">
                <div class="point-icon">⚖️</div>
                <div>
                  <strong>UK Law:</strong>
                  <span>These terms are governed by the laws of England and Wales</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Services Provided</h2>
          
          <div class="subsection-grid">
            <div class="subsection-card">
              <h3 class="subsection-title">Web Development</h3>
              <p class="subsection-text">
                Custom website design and development using modern technologies:
              </p>
              <ul class="service-list">
                <li>Vue.js and React applications</li>
                <li>Node.js backend development</li>
                <li>Performance optimization</li>
                <li>SEO implementation</li>
                <li>Responsive design</li>
              </ul>
            </div>

            <div class="subsection-card">
              <h3 class="subsection-title">Website Audits</h3>
              <p class="subsection-text">
                Comprehensive analysis and optimization recommendations:
              </p>
              <ul class="service-list">
                <li>Core Web Vitals assessment</li>
                <li>Performance benchmarking</li>
                <li>SEO analysis and recommendations</li>
                <li>Competitor comparison</li>
                <li>Conversion optimization roadmap</li>
              </ul>
            </div>

            <div class="subsection-card">
              <h3 class="subsection-title">Custom Tools</h3>
              <p class="subsection-text">
                Bespoke applications and automation solutions:
              </p>
              <ul class="service-list">
                <li>Business process automation</li>
                <li>Data management tools</li>
                <li>API integrations</li>
                <li>Workflow optimization</li>
                <li>Custom software solutions</li>
              </ul>
            </div>

            <div class="subsection-card">
              <h3 class="subsection-title">Consultation</h3>
              <p class="subsection-text">
                Expert advice and strategic planning:
              </p>
              <ul class="service-list">
                <li>Technology strategy consultation</li>
                <li>Project planning and estimation</li>
                <li>Technical architecture review</li>
                <li>Best practices guidance</li>
                <li>Ongoing technical support</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Client Responsibilities</h2>
          
          <div class="responsibility-grid">
            <div class="responsibility-card">
              <div class="responsibility-icon">📝</div>
              <h3>Content Provision</h3>
              <p>Provide accurate, complete, and timely content including text, images, and specifications required for project completion.</p>
            </div>
            
            <div class="responsibility-card">
              <div class="responsibility-icon">💬</div>
              <h3>Communication</h3>
              <p>Respond to requests for information, feedback, or approval within agreed timeframes to maintain project schedules.</p>
            </div>
            
            <div class="responsibility-card">
              <div class="responsibility-icon">✅</div>
              <h3>Review & Approval</h3>
              <p>Review deliverables thoroughly and provide clear, actionable feedback within the specified review periods.</p>
            </div>
            
            <div class="responsibility-card">
              <div class="responsibility-icon">🛡️</div>
              <h3>Legal Compliance</h3>
              <p>Ensure all provided content complies with applicable laws, regulations, and intellectual property rights.</p>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Payment Terms</h2>
          
          <div class="content-card">
            <div class="payment-structure">
              <h3>Payment Structure</h3>
              <div class="payment-grid">
                <div class="payment-item">
                  <h4>Project Deposit</h4>
                  <p>50% deposit required before project commencement for all projects over £1,000</p>
                </div>
                <div class="payment-item">
                  <h4>Progress Payments</h4>
                  <p>Monthly invoicing for ongoing projects with payment due within 14 days of invoice date</p>
                </div>
                <div class="payment-item">
                  <h4>Final Payment</h4>
                  <p>Remaining balance due upon project completion and before final delivery</p>
                </div>
                <div class="payment-item">
                  <h4>Late Payments</h4>
                  <p>1.5% monthly charge on overdue amounts after 30 days from invoice date</p>
                </div>
              </div>
            </div>
            
            <div class="payment-methods">
              <h3>Accepted Payment Methods</h3>
              <ul class="payment-list">
                <li>Bank transfer (BACS) - preferred method</li>
                <li>PayPal for international clients</li>
                <li>Cheque payments (UK clients only)</li>
                <li>Credit/debit card payments for smaller amounts</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Data Protection and Privacy</h2>
          
          <div class="content-card">
            <p class="intro-text">
              N15 Labs is committed to protecting your privacy and personal data in accordance with UK GDPR. 
              This section outlines how data protection relates to our service delivery.
            </p>
            
            <div class="data-protection-points">
              <div class="protection-point">
                <h4>Data Processing for Services</h4>
                <p>When providing web development services, we may process your business data, project information, 
                and communication records as necessary to fulfill our contractual obligations. This processing 
                is based on contract performance under Article 6(1)(b) of UK GDPR.</p>
              </div>
              
              <div class="protection-point">
                <h4>Client Data Responsibilities</h4>
                <p>If your project involves processing personal data of your customers or users, you remain the 
                data controller. We may act as a data processor, and appropriate data processing agreements 
                will be established when required.</p>
              </div>
              
              <div class="protection-point">
                <h4>Privacy Policy Reference</h4>
                <p>For complete details on how we collect, use, and protect personal information, please review 
                our comprehensive Privacy Policy. This includes your rights under UK GDPR and how to contact 
                us regarding data protection matters.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Intellectual Property Rights</h2>
          
          <div class="ip-content">
            <div class="ip-section">
              <h3>Client Ownership</h3>
              <div class="ip-card">
                <p><strong>Upon full payment:</strong> Clients receive full ownership rights to custom-developed code, designs, and deliverables specifically created for their project.</p>
                <ul class="ip-list">
                  <li>Custom website designs and layouts</li>
                  <li>Bespoke application code</li>
                  <li>Project-specific documentation</li>
                  <li>Custom graphics and visual assets</li>
                </ul>
              </div>
            </div>
            
            <div class="ip-section">
              <h3>N15 Labs Retention</h3>
              <div class="ip-card">
                <p><strong>We retain rights to:</strong> General methodologies, frameworks, and pre-existing intellectual property used in delivering services.</p>
                <ul class="ip-list">
                  <li>Development frameworks and tools</li>
                  <li>General business processes and methodologies</li>
                  <li>Pre-existing code libraries and components</li>
                  <li>Technical know-how and expertise</li>
                </ul>
              </div>
            </div>
            
            <div class="ip-section">
              <h3>Third-Party Rights</h3>
              <div class="ip-card">
                <p><strong>Third-party assets:</strong> Software licenses, fonts, images, and other third-party materials remain subject to their respective licensing terms.</p>
                <ul class="ip-list">
                  <li>Open source software licenses (MIT, GPL, etc.)</li>
                  <li>Font licensing agreements</li>
                  <li>Stock photography and asset licenses</li>
                  <li>Third-party API terms of service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Project Management & Timelines</h2>
          
          <div class="project-management-content">
            <div class="timeline-section">
              <h3>Timeline Management</h3>
              <div class="timeline-grid">
                <div class="timeline-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <strong>Project Scoping:</strong>
                    <span>Detailed requirements gathering and timeline estimation (1-2 weeks)</span>
                  </div>
                </div>
                <div class="timeline-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <strong>Development Phase:</strong>
                    <span>Active development with regular progress updates and milestone reviews</span>
                  </div>
                </div>
                <div class="timeline-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <strong>Review & Revisions:</strong>
                    <span>Client review periods with reasonable revision rounds included</span>
                  </div>
                </div>
                <div class="timeline-step">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <strong>Final Delivery:</strong>
                    <span>Project completion, testing, and handover upon final payment</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="revision-policy">
              <h3>Revision Policy</h3>
              <div class="revision-content">
                <p>Each project includes reasonable revisions within the agreed scope:</p>
                <ul class="revision-list">
                  <li><strong>Minor revisions:</strong> Text changes, color adjustments, small layout tweaks</li>
                  <li><strong>Major revisions:</strong> Significant design changes, functionality additions, scope expansions</li>
                  <li><strong>Additional work:</strong> Changes beyond original scope subject to separate quotation</li>
                  <li><strong>Approval deadlines:</strong> Client feedback required within 7 days of milestone delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Warranties and Limitations</h2>
          
          <div class="warranty-grid">
            <div class="warranty-card">
              <h3>Service Warranties</h3>
              <p><strong>We warrant that:</strong></p>
              <ul class="warranty-list">
                <li>Services will be performed with professional skill and care</li>
                <li>Deliverables will substantially conform to agreed specifications</li>
                <li>We have the right to provide the services offered</li>
                <li>Work will be original and not infringe third-party rights</li>
              </ul>
            </div>
            
            <div class="warranty-card">
              <h3>Limitation of Liability</h3>
              <p><strong>Our liability is limited to:</strong></p>
              <ul class="warranty-list">
                <li>The total amount paid for the specific project or service</li>
                <li>Direct damages only (no consequential or indirect damages)</li>
                <li>Claims made within 12 months of project completion</li>
                <li>Reasonable remedial efforts to correct defects</li>
              </ul>
            </div>
            
            <div class="warranty-card">
              <h3>Support Period</h3>
              <p><strong>Post-launch support includes:</strong></p>
              <ul class="warranty-list">
                <li>30 days of bug fixes and technical support</li>
                <li>Assistance with initial launch and deployment</li>
                <li>Basic training on content management systems</li>
                <li>Resolution of functionality issues within scope</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Project Termination</h2>
          
          <div class="termination-content">
            <div class="termination-grid">
              <div class="termination-card">
                <h3>Client Termination</h3>
                <p>Clients may terminate projects with 14 days written notice:</p>
                <ul class="termination-list">
                  <li>Payment due for all work completed to termination date</li>
                  <li>Client receives all deliverables completed at termination</li>
                  <li>No refund of deposits or payments for completed work</li>
                  <li>Additional charges may apply for project handover</li>
                </ul>
              </div>
              
              <div class="termination-card">
                <h3>N15 Labs Termination</h3>
                <p>We may terminate projects in case of:</p>
                <ul class="termination-list">
                  <li>Non-payment after 30 days of invoice due date</li>
                  <li>Breach of these terms by the client</li>
                  <li>Abusive or unprofessional behavior</li>
                  <li>Requests for illegal or unethical work</li>
                </ul>
              </div>
            </div>
            
            <div class="termination-notice">
              <p><strong>Termination Process:</strong> All terminations must be in writing via email. 
              A final invoice will be issued for work completed, and project files will be provided 
              upon settlement of outstanding amounts.</p>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Confidentiality</h2>
          
          <div class="content-card">
            <h3>Mutual Confidentiality</h3>
            <p class="intro-text">
              Both parties agree to maintain the confidentiality of proprietary information 
              shared during the course of the business relationship.
            </p>
            
            <div class="confidentiality-grid">
              <div class="conf-section">
                <h4>Confidential Information Includes:</h4>
                <ul class="conf-list">
                  <li>Business strategies and plans</li>
                  <li>Financial information and projections</li>
                  <li>Customer and supplier data</li>
                  <li>Technical specifications and processes</li>
                  <li>Marketing strategies and campaigns</li>
                  <li>Any information marked as confidential</li>
                </ul>
              </div>
              
              <div class="conf-section">
                <h4>Exceptions to Confidentiality:</h4>
                <ul class="conf-list">
                  <li>Information already in public domain</li>
                  <li>Information independently developed</li>
                  <li>Information required by law to disclose</li>
                  <li>Information approved for disclosure in writing</li>
                  <li>General knowledge and experience gained</li>
                </ul>
              </div>
            </div>
            
            <div class="portfolio-rights">
              <h4>Portfolio and Marketing Rights</h4>
              <p>Unless specifically restricted in writing, N15 Labs may use completed projects 
              for portfolio, case study, and marketing purposes, with appropriate anonymization 
              of confidential client information.</p>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Dispute Resolution</h2>
          
          <div class="dispute-content">
            <div class="dispute-process">
              <h3>Resolution Process</h3>
              <div class="process-steps">
                <div class="process-step">
                  <div class="process-number">1</div>
                  <div class="process-info">
                    <strong>Direct Communication</strong>
                    <p>Initial attempt to resolve disputes through direct discussion and negotiation</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="process-number">2</div>
                  <div class="process-info">
                    <strong>Mediation</strong>
                    <p>Formal mediation through an agreed neutral third party if direct resolution fails</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="process-number">3</div>
                  <div class="process-info">
                    <strong>Legal Action</strong>
                    <p>Court proceedings as a last resort, governed by English and Welsh law</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="jurisdiction-info">
              <h3>Jurisdiction and Governing Law</h3>
              <p>These terms are governed by the laws of England and Wales. Any legal proceedings 
              will be subject to the exclusive jurisdiction of the English courts. For international 
              clients, we will make reasonable efforts to resolve disputes through alternative 
              means before resorting to formal legal proceedings.</p>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Contact Information</h2>
          
          <div class="contact-grid">
            <div class="contact-card">
              <h3>Business Details</h3>
              <div class="contact-details">
                <div class="contact-item">
                  <strong>Business Name:</strong> N15 Labs
                </div>
                <div class="contact-item">
                  <strong>Owner:</strong> Andre Simpson
                </div>
                <div class="contact-item">
                  <strong>Location:</strong> Stoke-on-Trent, Staffordshire, UK
                </div>
                <div class="contact-item">
                  <strong>Email:</strong> 
                  <a href="mailto:dre_86@hotmail.co.uk">dre_86@hotmail.co.uk</a>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h3>Legal Queries</h3>
              <p>For questions about these terms or legal matters:</p>
              <div class="contact-details">
                <div class="contact-item">
                  <strong>Email Subject:</strong> Legal/Terms Query
                </div>
                <div class="contact-item">
                  <strong>Response Time:</strong> Within 3 business days
                </div>
                <div class="contact-item">
                  <strong>Preferred Contact:</strong> Email communication
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h3>Document Updates</h3>
              <p>Stay informed about changes to these terms:</p>
              <div class="contact-details">
                <div class="contact-item">
                  <strong>Notification Method:</strong> Email to active clients
                </div>
                <div class="contact-item">
                  <strong>Advance Notice:</strong> 30 days for significant changes
                </div>
                <div class="contact-item">
                  <strong>Version History:</strong> Available upon request
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="terms-section">
          <h2 class="section-title">Updates to Terms</h2>
          
          <div class="updates-card">
            <div class="updates-content">
              <h3>How We Handle Updates</h3>
              <p class="updates-text">
                We may update these Terms of Service to reflect changes in our business practices, 
                legal requirements, or service offerings. We are committed to transparent communication 
                about any changes that affect your rights or obligations.
              </p>
              
              <div class="update-types">
                <div class="update-type">
                  <h4>Minor Updates</h4>
                  <p>Clarifications, formatting changes, or updates to contact information may be made without advance notice.</p>
                </div>
                <div class="update-type">
                  <h4>Significant Changes</h4>
                  <p>Changes to payment terms, liability, or client obligations will be communicated 30 days in advance via email.</p>
                </div>
                <div class="update-type">
                  <h4>Legal Requirements</h4>
                  <p>Updates required by law or regulation may be implemented immediately with subsequent notification.</p>
                </div>
              </div>
              
              <div class="version-info">
                <p><strong>Effective Date:</strong> Updates take effect 30 days after notification for significant changes, 
                or immediately for minor clarifications. Continued use of our services constitutes acceptance of updated terms.</p>
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
  name: 'TermsOfService',
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
    document.title = 'Terms of Service - N15 Labs | Andre Simpson'
  }
}
</script>

<style scoped>
.terms-container {
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.terms-hero {
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
  background: rgba(34, 197, 94, 0.4);
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
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
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
  background: linear-gradient(135deg, #22c55e, #16a34a);
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

.terms-content {
  padding: 6rem 0;
  background: white;
}

.terms-section {
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
  border-left: 4px solid #22c55e;
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

.data-protection-points {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.protection-point {
  padding: 1.5rem;
  background: #f0f9ff;
  border-radius: 12px;
  border-left: 4px solid #0ea5e9;
}

.protection-point h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.protection-point p {
  color: #374151;
  line-height: 1.6;
  margin: 0;
}

.subsection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.subsection-card {
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
  border-color: #22c55e;
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

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.service-list li:before {
  content: '✓';
  color: #22c55e;
  font-weight: bold;
  margin-right: 0.75rem;
}

.responsibility-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.responsibility-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.responsibility-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #22c55e;
}

.responsibility-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.responsibility-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.responsibility-card p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.payment-structure h3,
.payment-methods h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.payment-item {
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  border-left: 4px solid #22c55e;
}

.payment-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.payment-item p {
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.payment-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.payment-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.payment-list li:before {
  content: '💳';
  margin-right: 0.75rem;
}

.ip-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.ip-section h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.ip-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.ip-card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.ip-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ip-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.ip-list li:before {
  content: '📋';
  margin-right: 0.75rem;
}

.project-management-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.timeline-section h3,
.revision-policy h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.timeline-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #22c55e;
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

.revision-content {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.revision-content p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.revision-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.revision-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.revision-list li:before {
  content: '✏️';
  margin-right: 0.75rem;
}

.warranty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.warranty-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.warranty-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  border-color: #22c55e;
}

.warranty-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.warranty-card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.warranty-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.warranty-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.warranty-list li:before {
  content: '🛡️';
  margin-right: 0.75rem;
}

.termination-content {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.termination-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.termination-card {
  padding: 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border-left: 4px solid #ef4444;
}

.termination-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.termination-card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.termination-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.termination-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.termination-list li:before {
  content: '⚠️';
  margin-right: 0.75rem;
}

.termination-notice {
  background: #fef2f2;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ef4444;
}

.termination-notice p {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.6;
  font-weight: 500;
}

.confidentiality-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.conf-section h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.conf-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.conf-list li {
  padding: 0.5rem 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  font-weight: 500;
}

.conf-list li:before {
  content: '🔒';
  margin-right: 0.75rem;
}

.portfolio-rights {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f3f4f6;
  border-radius: 12px;
  border-left: 4px solid #8b5cf6;
}

.portfolio-rights h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.portfolio-rights p {
  margin: 0;
  color: #6b7280;
  line-height: 1.6;
}

.dispute-content {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.dispute-process h3,
.jurisdiction-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.process-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #8b5cf6;
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.process-info strong {
  display: block;
  color: #111827;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.process-info p {
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

.jurisdiction-info p {
  color: #6b7280;
  line-height: 1.6;
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

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.contact-item strong {
  color: #374151;
  font-weight: 600;
  font-size: 0.9375rem;
}

.contact-item a {
  color: #22c55e;
  text-decoration: none;
  font-weight: 500;
}

.contact-item a:hover {
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

.update-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.update-type {
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  border-left: 4px solid #22c55e;
}

.update-type h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.update-type p {
  color: #6b7280;
  margin: 0;
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
  .responsibility-grid,
  .warranty-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .project-management-content,
  .termination-grid,
  .confidentiality-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .ip-content {
    grid-template-columns: 1fr;
  }
  
  .key-points {
    grid-template-columns: 1fr;
  }
  
  .payment-grid {
    grid-template-columns: 1fr;
  }
  
  .update-types {
    grid-template-columns: 1fr;
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
  .responsibility-card,
  .warranty-card,
  .contact-card {
    padding: 1.5rem;
  }
  
  .content-card,
  .updates-content {
    padding: 1.5rem;
  }
  
  .key-point,
  .timeline-step,
  .update-type {
    padding: 1.25rem;
  }
}
</style>