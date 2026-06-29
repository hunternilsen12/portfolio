import { useInView } from '../hooks/useInView'

const CORE_STRENGTHS = [
  {
    title: 'RevOps',
    pills: ['Pipeline Reporting', 'Attribution Modeling', 'Funnel Analytics', 'MQL/SQL Lifecycle', 'SLA Design'],
  },
  {
    title: 'Outbound',
    pills: ['Clay', 'Apollo.io', 'Enrichment Workflows', 'Outreach Automation'],
  },
  {
    title: 'AI & Code',
    pills: ['Claude API', 'Agentic Workflows', 'Python', 'TypeScript', 'SQL', 'React'],
  },
  {
    title: 'Data',
    pills: ['Snowflake', 'Domo', 'Salesforce'],
  },
]

const BUILDING_TOWARD = [
  {
    title: 'Commission Design',
    pills: ['Quota Modeling', 'Attainment Tiers', 'CSM Commission'],
  },
  {
    title: 'Forecasting',
    pills: ['Forecast vs. Actuals', 'Pipeline Coverage Ratios'],
  },
  {
    title: 'CRM Admin',
    pills: ['HubSpot Operations Hub', 'Lifecycle Automation', 'Lead Scoring'],
  },
  {
    title: 'Territory',
    pills: ['Territory Model Design', 'Account Routing Rules'],
  },
]

export function Skills() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className={'section-header fade-up' + (inView ? ' in-view' : '')}>Skills & Development</h2>

        <div className={'skills-tier-label fade-up delay-1' + (inView ? ' in-view' : '')}>
          Core Strengths
        </div>
        <div className="skills-grid">
          {CORE_STRENGTHS.map((cat, i) => (
            <div
              key={cat.title}
              className={'skill-category fade-up delay-' + (Math.min(i + 2, 4)) + (inView ? ' in-view' : '')}
            >
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-pills">
                {cat.pills.map((pill) => (
                  <span key={pill} className="skill-pill">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={'skills-tier-label building fade-up delay-2' + (inView ? ' in-view' : '')}>
          Building Toward
        </div>
        <div className="skills-grid">
          {BUILDING_TOWARD.map((cat, i) => (
            <div
              key={cat.title}
              className={'skill-category fade-up delay-' + (Math.min(i + 2, 4)) + (inView ? ' in-view' : '')}
            >
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-pills">
                {cat.pills.map((pill) => (
                  <span key={pill} className="skill-pill building">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
