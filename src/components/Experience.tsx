import { useInView } from '../hooks/useInView'

export function Experience() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.05 })

  return (
    <section id="experience" className="exp-edu-section" ref={sectionRef}>
      <div className="container">
        <div className="exp-edu-grid">
          <div className={'exp-edu-card fade-up' + (inView ? ' in-view' : '')}>
            <h2>Experience</h2>
            <p className="company-name">Domo</p>
            <p className="company-meta">American Fork, Utah · Full-time · 2 yrs</p>
            <div className="timeline">
              <div className="timeline-item current">
                <div className="timeline-dot"></div>
                <div>
                  <p className="timeline-title">RevOps Analyst & AI Engineer <span className="timeline-badge">Current</span></p>
                  <p className="timeline-date">Dec 2025 – Present</p>
                  <ul className="timeline-bullets">
                    <li>Led 3 Forward Deployed Engineering onsites, delivering AI-powered Domo solutions generating $1.2M in upsell value</li>
                    <li>Authored weekly CRO/CMO pipeline reports synthesizing MQL conversion, rep efficiency, and keyword performance</li>
                    <li>Engineered 2 internal apps replacing enterprise sales tools, saving an estimated $100K–$200K annually</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div>
                  <p className="timeline-title">Account Development Operations Analyst</p>
                  <p className="timeline-date">Feb 2025 – Dec 2025 · 11 mos</p>
                  <ul className="timeline-bullets">
                    <li>Built automated workflow surfacing lapsed opportunities and account context, generating $500K in new revenue within 3 months</li>
                    <li>Built Clay and Apollo.io-powered research workflows to identify prospect pain points and craft personalized outreach</li>
                    <li>Enhanced team efficiency through AI-driven automation via prompt engineering</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div>
                  <p className="timeline-title">Account Development Manager</p>
                  <p className="timeline-date">Apr 2024 – Feb 2025 · 11 mos</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'exp-edu-card fade-up delay-1' + (inView ? ' in-view' : '')}>
            <h2>Education</h2>
            <p className="school-name">University of Utah</p>
            <p className="school-meta">David Eccles School of Business</p>
            <div className="degree-list">
              <div className="degree-item">
                <div className="degree-icon"></div>
                <div>
                  <p className="degree-name">Master of Science</p>
                  <p className="degree-field">Business Analytics · Dec 2024</p>
                </div>
              </div>
              <div className="degree-item">
                <div className="degree-icon"></div>
                <div>
                  <p className="degree-name">Bachelor of Science</p>
                  <p className="degree-field">Information Systems · May 2023</p>
                </div>
              </div>
            </div>
            <div className="cert-list">
              <p className="cert-list-title">Certifications</p>
              <div className="cert-item">
                <span className="cert-name">Domo MajorDomo Certified</span>
                <span className="cert-date">May 2024</span>
              </div>
              <div className="cert-item">
                <span className="cert-name">Snowflake SnowPro Core</span>
                <span className="cert-date">Sept 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
