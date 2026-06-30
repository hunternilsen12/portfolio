import headshotUrl from '../assets/Headshot.jpg'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-headline">
          I'll own the pipeline and build the AI that runs it.
        </h1>
        <ul className="hero-bullets">
          <li>CRO and CMO pipeline reporting: MQL trends, pipeline hygiene, keyword performance, and sales efficiency</li>
          <li>Internal AI revenue tools: pipeline intelligence, call coaching, sales roleplay, and pre-call briefing used daily by the revenue org</li>
          <li>Free trial redesign: 32% MQL to SAL lift, 71% faster to first onboarding, attendance doubled</li>
          <li>FDE onsites: $1.2M in pipeline across Feld Entertainment, ESPN, and Ocean Partners</li>
        </ul>
        <div className="hero-byline">
          <img src={headshotUrl} alt="Hunter Nilsen" className="hero-avatar" />
          <div className="hero-byline-text">
            <div className="hero-byline-name">Hunter Nilsen</div>
            <div>RevOps & AI @ Domo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
