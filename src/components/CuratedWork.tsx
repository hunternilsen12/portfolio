import { PROJECT_DATA } from '../data/projects'

const CURATED_SLUGS = [
  'rev-suite-catalog',
  'rev-research',
  'rev-radar-expand',
  'clay-old-opportunity-workflow',
  'no-lead-left-behind',
  'new-adm-comp-plan',
  'adm-daily-command-center',
  'free-trial-growth-initiative',
]

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
            <h2 className="work-section-title">What I've built.</h2>
          </div>
          <a href="#/resume" className="work-resume-link">
            Full resume →
          </a>
        </div>

        <div className="editorial-list">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`#/project/${project.slug}`}
              className="editorial-row"
            >
              <span className="editorial-date">{project.dateLabel}</span>
              <div className="editorial-body">
                <h3 className="editorial-title">{project.title}</h3>
                <p className="editorial-summary">{project.summary}</p>
                {project.cardStats && project.cardStats[0] && (
                  <span className="editorial-stat">{project.cardStats[0]}</span>
                )}
              </div>
              <svg
                className="editorial-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
