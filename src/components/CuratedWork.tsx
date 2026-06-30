import { PROJECT_DATA } from '../data/projects'

const CURATED_SLUGS = [
  'revops-report-library',
  'rev-radar-expand',
  'free-trial-growth-initiative',
  'new-adm-comp-plan',
  'clay-old-opportunity-workflow',
  'call-review-coaching-app',
  'rev-routine',
  'brother-bear',
]

const FDE_CUSTOMERS = ['Feld Entertainment', 'ESPN', 'Ocean Partners']

export function CuratedWork() {
  const projects = CURATED_SLUGS
    .map((slug) => PROJECT_DATA.find((p) => p.slug === slug))
    .filter(Boolean) as typeof PROJECT_DATA

  return (
    <section className="work-section" id="projects">
      <div className="work-section-inner">
        <div className="work-section-header">
          <div>
            <p className="work-section-label">Selected Work</p>
            <h2 className="work-section-title">Top Projects</h2>
          </div>
        </div>

        <div className="editorial-list">
          {/* FDE AI Sprints — combined hardcoded entry */}
          <div className="editorial-row">
            <div className="editorial-body">
              <h3 className="editorial-title">FDE AI Solution Sprints</h3>
              <p className="editorial-summary">
                Three enterprise AI onsites delivering production Domo solutions including AI-powered account intelligence, contact enrichment, and trading analytics. Generated $1.2M in measurable customer upsell.
              </p>
              <div className="editorial-customers">
                {FDE_CUSTOMERS.map((name) => (
                  <span key={name} className="editorial-customer-chip">{name}</span>
                ))}
              </div>
              <p className="editorial-value">$1.2M · Customer Upsell</p>
            </div>
          </div>

          {projects.map((project) => (
            <div key={project.slug} className="editorial-row">
              <div className="editorial-body">
                <h3 className="editorial-title">{project.title}</h3>
                <p className="editorial-summary">{project.summary}</p>
                {project.detail.metrics[0] && (
                  <p className="editorial-value">
                    {project.detail.metrics[0].value} · {project.detail.metrics[0].label}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
