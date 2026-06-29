import headshotUrl from '../assets/Headshot.jpg'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-label">Hunter Nilsen · Revenue Operations & AI Engineering</p>
          <h1 className="hero-headline">
            I build RevOps systems that <em>actually</em> get used.
          </h1>
          <p className="hero-body">
            Most RevOps teams describe what they want. I build it. At Domo, I own the CRO and CMO
            reporting relationship, engineered $350K in tool replacement, and designed the commission
            plan — all with Claude Code running daily in production.
          </p>
          <div className="hero-byline">
            <img src={headshotUrl} alt="Hunter Nilsen" className="hero-avatar" />
            <div className="hero-byline-text">
              <div className="hero-byline-name">Hunter Nilsen</div>
              <div>RevOps & AI Engineer · Domo</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="hero-cta" onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View Work ↓
            </a>
            <a
              href="https://linkedin.com/in/hunternilsen"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-linkedin"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <div className="hero-metrics">
          <div className="hero-metric">
            <div className="hero-metric-value">$350K</div>
            <div className="hero-metric-label">SaaS Replaced</div>
          </div>
          <div className="hero-metric">
            <div className="hero-metric-value">$1.2M</div>
            <div className="hero-metric-label">Upsell Value</div>
          </div>
          <div className="hero-metric">
            <div className="hero-metric-value">27–32%</div>
            <div className="hero-metric-label">MQL→SAL Lift</div>
          </div>
        </div>
      </div>
    </section>
  )
}
