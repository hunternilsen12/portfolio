import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { announceRoute } from '../components/common/RouteAnnouncer'

export function ResumePage() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Resume — Hunter Nilsen'
    announceRoute('Resume — Hunter Nilsen')
    return () => { document.title = prev }
  }, [])

  return (
    <div className="resume-page">
      <Header activeSection="" onNavClick={() => {}} />
      <main id="main" className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <a href="#/" className="resume-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Portfolio
        </a>

        {/* Header */}
        <div className="resume-header-block">
          <h1>Hunter Nilsen</h1>
          <div className="resume-contact">
            <span>Sandy, UT 84092</span>
            <span>(801) 995-8442</span>
            <a href="mailto:hunternilsen12@gmail.com">hunternilsen12@gmail.com</a>
            <a href="https://linkedin.com/in/hunternilsen" target="_blank" rel="noopener noreferrer">linkedin.com/in/hunternilsen</a>
          </div>
          <p className="resume-summary">
            RevOps Analyst &amp; AI Engineer at Domo building AI-powered tools and data products for internal business units and enterprise customers that have driven $1.2M+ in measurable revenue impact. Combines full-stack engineering with applied AI to automate revenue workflows and surface actionable intelligence for executive stakeholders.
          </p>
          <div className="resume-actions">
            <a href="hunter-nilsen-resume.pdf" download className="btn-resume-download">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        {/* Experience */}
        <div className="resume-section">
          <h2 className="resume-section-title">Experience</h2>

          <div className="resume-role">
            <div className="resume-role-header">
              <span className="resume-role-title">RevOps Analyst &amp; AI Engineer</span>
              <span className="resume-role-dates">Dec 2025 – Present</span>
            </div>
            <p className="resume-role-company">Domo — American Fork, UT</p>
            <ul className="resume-bullets">
              <li>Led 3 Forward Deployed Engineering onsites with corporate and enterprise customers, delivering AI-powered Domo solutions that generated $1.2M in upsell value</li>
              <li>Build and maintain internal revenue tools and data products that equip the revenue team with actionable intelligence, AI roleplay coaching, and automated revenue workflows</li>
              <li>Author weekly data-driven pipeline reports for the CRO and CMO, synthesizing MQL conversion trends, rep efficiency, and keyword performance to guide operational decisions</li>
              <li>Engineered 2 internal Domo applications replacing enterprise sales tools, saving an estimated $100K–$200K annually</li>
            </ul>
          </div>

          <div className="resume-role">
            <div className="resume-role-header">
              <span className="resume-role-title">Account Development Operations Analyst</span>
              <span className="resume-role-dates">Feb 2025 – Dec 2025</span>
            </div>
            <p className="resume-role-company">Domo — American Fork, UT</p>
            <ul className="resume-bullets">
              <li>Built automated workflow to surface lapsed opportunities and historical account context for ADMs, generating $500K in new revenue within 3 months</li>
              <li>Enhanced team efficiency through AI-driven automation via prompt engineering</li>
              <li>Built Clay and Apollo.io-powered research workflows to identify prospect pain points and craft personalized outreach campaigns</li>
            </ul>
          </div>

          <div className="resume-role">
            <div className="resume-role-header">
              <span className="resume-role-title">Account Development Manager</span>
              <span className="resume-role-dates">Apr 2024 – Jan 2025</span>
            </div>
            <p className="resume-role-company">Domo — American Fork, UT</p>
          </div>
        </div>

        {/* Education */}
        <div className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-edu-item">
            <div>
              <p className="resume-degree">Master of Science in Business Analytics</p>
              <p className="resume-school">University of Utah, David Eccles School of Business</p>
            </div>
            <span className="resume-edu-date">Dec 2024</span>
          </div>
          <div className="resume-edu-item">
            <div>
              <p className="resume-degree">Bachelor of Science in Information Systems</p>
              <p className="resume-school">University of Utah, David Eccles School of Business</p>
            </div>
            <span className="resume-edu-date">May 2023</span>
          </div>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="resume-skill-row">
            <span className="resume-skill-label">AI</span>
            <span className="resume-skill-value">Claude API, LLMs, Agentic Workflows, Prompt Engineering, AI Agents, MCP</span>
          </div>
          <div className="resume-skill-row">
            <span className="resume-skill-label">Code</span>
            <span className="resume-skill-value">TypeScript, Python, SQL, React, Vite</span>
          </div>
          <div className="resume-skill-row">
            <span className="resume-skill-label">Platforms</span>
            <span className="resume-skill-value">Domo, Salesforce, Apollo.io, Clay, Snowflake</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="resume-section">
          <h2 className="resume-section-title">Certifications</h2>
          <div className="resume-cert-row">
            <span className="resume-cert-name">Domo MajorDomo Certified</span>
            <span className="resume-cert-date">May 2024</span>
          </div>
          <div className="resume-cert-row">
            <span className="resume-cert-name">Snowflake SnowPro Core Certified</span>
            <span className="resume-cert-date">Sept 2024</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
