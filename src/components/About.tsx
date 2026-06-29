import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

export function About() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.1 })
  const revenueCount = useCountUp(1.2, 1200, inView)
  const onsiteCount = useCountUp(3, 900, inView)

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className={'about-content fade-up' + (inView ? ' in-view' : '')}>
          <h1>Hunter Nilsen</h1>
          <p className="about-subtitle">Revenue Operations &amp; AI Engineering at Domo</p>
          <p className="about-text">
            I run revenue operations at Domo — owning pipeline reporting, funnel analytics, and GTM systems for the CRO and CMO while engineering the internal tools that make those workflows possible. My focus is on the full sales motion: MQL→SAL lifecycle definitions, attribution modeling, pipeline hygiene, and conversion optimization.
          </p>
          <p className="about-text">
            Beyond the analytics work, I've led 3 Forward Deployed Engineering onsites with Feld Entertainment, ESPN, and Ocean Partners — delivering AI-powered solutions that generated <strong>${revenueCount.toFixed(1)}M+ in measurable revenue impact</strong>. I also own and maintain the RevenueSuite, a set of internal GTM tools that replaced $350K+ in enterprise SaaS spend.
          </p>
          <div className={'about-stats fade-up delay-1' + (inView ? ' in-view' : '')}>
            <span className="about-stat"><strong>${revenueCount.toFixed(1)}M+</strong> Revenue Impact</span>
            <span className="about-stat"><strong>{Math.round(onsiteCount)}</strong> FDE Onsites</span>
            <span className="about-stat"><strong>$350K</strong> Gong Replacement</span>
            <span className="about-stat"><strong>Weekly</strong> CRO/CMO Reports</span>
          </div>
          <div className={'fade-up delay-2' + (inView ? ' in-view' : '')}>
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
    </section>
  )
}
