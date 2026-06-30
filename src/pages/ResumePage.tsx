import { useEffect } from 'react'
import { TopNav } from '../components/TopNav'
import { Footer } from '../components/Footer'
import { announceRoute } from '../components/common/RouteAnnouncer'

export function ResumePage() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Resume · Hunter Nilsen'
    announceRoute('Resume · Hunter Nilsen')
    return () => { document.title = prev }
  }, [])

  return (
    <div className="layout-shell">
      <TopNav />
      <div className="main-content">
        <main id="main" className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
          <a href="#/" className="resume-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Portfolio
          </a>

          <div className="resume-header-block">
            <h1>Hunter Nilsen</h1>
            <div className="resume-contact">
              <span>Sandy, UT 84092</span>
              <span>(801) 995-8442</span>
              <a href="mailto:hunternilsen12@gmail.com">hunternilsen12@gmail.com</a>
              <a href="https://linkedin.com/in/hunternilsen" target="_blank" rel="noopener noreferrer">linkedin.com/in/hunternilsen</a>
            </div>
            <p className="resume-summary">
              At Domo, I build the systems the revenue org runs on: pipeline reporting, AI tools, agentic workflows, and GTM data products that span the full sales motion from paid spend to close. My work sits at the intersection of RevOps and applied AI engineering. Claude Code, agentic pipelines, RAG, and MCP tool use paired with attribution modeling, lead lifecycle design, and comp design.
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

          <div className="resume-section">
            <h2 className="resume-section-title">Experience</h2>

            <div className="resume-role">
              <div className="resume-role-header">
                <span className="resume-role-title">RevOps Analyst &amp; AI Engineer</span>
                <span className="resume-role-dates">Dec 2025 – Present</span>
              </div>
              <p className="resume-role-company">Domo · American Fork, UT</p>
              <ul className="resume-bullets">
                <li>Led first 3 FDE onsites (Feld Entertainment, ESPN, Ocean Partners), delivering AI solutions that generated $1.2M in immediate pipeline</li>
                <li>Run CRO/CMO pipeline reporting: MQL conversion trends, pipeline hygiene, Google keyword performance, and sales efficiency to guide operational decisions across Sales and Marketing</li>
                <li>Developed and own a suite of internal AI-powered revenue tools including pipeline visibility and intelligence, call review and coaching, sales roleplay, and pre-call briefing used daily by the revenue org</li>
                <li>Designed and implemented a new BDR comp plan including financial modeling and cost-neutral scenario analysis to increase rep incentives without adding program cost</li>
              </ul>
            </div>

            <div className="resume-role">
              <div className="resume-role-header">
                <span className="resume-role-title">Account Development Operations Analyst</span>
                <span className="resume-role-dates">Feb 2025 – Dec 2025</span>
              </div>
              <p className="resume-role-company">Domo · American Fork, UT</p>
              <ul className="resume-bullets">
                <li>Built automated workflows to surface old opportunities and historical account context, generating $500K in new logo revenue within 3 months</li>
                <li>Led free trial redesign that improved MQL to SAL conversion 32%, cut time-to-first-onboarding 71%, and doubled attendance rates through end-to-end lifecycle restructuring</li>
                <li>Conducted analysis into a persistent decline in marketing-sourced SALs. Identified that a 5x reduction in outbound BDR headcount had cut the inbound lead seeding effect, a structural attribution gap that reframed the team's pipeline strategy</li>
                <li>Built Clay and Apollo.io workflows with custom prompt engineering to surface prospect pain points and generate personalized outreach at scale, reducing manual research time per rep</li>
              </ul>
            </div>

            <div className="resume-role">
              <div className="resume-role-header">
                <span className="resume-role-title">Account Development Manager</span>
                <span className="resume-role-dates">Apr 2024 – Jan 2025</span>
              </div>
              <p className="resume-role-company">Domo · American Fork, UT</p>
              <ul className="resume-bullets">
                <li>Partnered with Account Executives and CSMs to uncover upsell opportunities across the customer base through strategic account reviews, new user engagement campaigns, and executive-level customer events</li>
                <li>Sourced qualified opportunities contributing net new ARR pipeline through proactive discovery and cross-functional account coordination</li>
              </ul>
            </div>
          </div>

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

          <div className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <div className="resume-skill-row">
              <span className="resume-skill-label">AI &amp; Code</span>
              <span className="resume-skill-value">Claude API, Claude Code, Agentic Workflows, Python, TypeScript, SQL, React</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">RevOps</span>
              <span className="resume-skill-value">Funnel Analytics, Attribution Modeling, Pipeline Forecasting, MQL/SQL Lifecycle, Commission Design, SLA Design</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-label">GTM Stack</span>
              <span className="resume-skill-value">Salesforce, HubSpot (cert in progress), Clay, Apollo.io, Domo, Snowflake</span>
            </div>
          </div>

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
            <div className="resume-cert-row">
              <span className="resume-cert-name">HubSpot Revenue Operations</span>
              <span className="resume-cert-date">In Progress (2026)</span>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
