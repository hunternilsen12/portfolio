import headshot from '../assets/Headshot.jpg'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

export function About() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.1 })
  const revenueCount = useCountUp(1.2, 1200, inView)
  const onsiteCount = useCountUp(3, 900, inView)

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-inner">
          <div className={'about-photo fade-up' + (inView ? ' in-view' : '')}>
            <img src={headshot} alt="Hunter Nilsen" width={180} height={180} />
          </div>
          <div className={'about-content fade-up delay-1' + (inView ? ' in-view' : '')}>
            <h1>Hunter Nilsen</h1>
            <p className="about-subtitle">RevOps Analyst & AI Engineer at Domo</p>
            <p className="about-text">
              I build AI-powered tools and data products for internal business units and enterprise customers — combining full-stack engineering with applied AI to automate revenue workflows and surface actionable intelligence for executive stakeholders.
            </p>
            <p className="about-text">
              My work has driven <strong>${revenueCount.toFixed(1)}M+ in measurable revenue impact</strong> through forward-deployed engineering, internal product development, and data-driven automation. I specialize in closing the gap between raw data and decisions that move the business.
            </p>
            <div className={'about-stats fade-up delay-2' + (inView ? ' in-view' : '')}>
              <span className="about-stat"><strong>${revenueCount.toFixed(1)}M+</strong> Revenue Impact</span>
              <span className="about-stat"><strong>{Math.round(onsiteCount)}</strong> FDE Onsites</span>
              <span className="about-stat"><strong>$100–200K</strong> Tool Savings</span>
              <span className="about-stat"><strong>MS</strong> Business Analytics</span>
            </div>
            <div className={'fade-up delay-3' + (inView ? ' in-view' : '')}>
              <a href="#/resume" className="btn-resume-download">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
