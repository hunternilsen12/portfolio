import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { ProjectCard } from '../components/ProjectCard'
import { PROJECT_DATA } from '../data/projects'
import { COMPANY_FOCUS } from '../data/companyFocus'
import { announceRoute } from '../components/common/RouteAnnouncer'

export function ForCompanyPage() {
  const { company } = useParams<{ company: string }>()
  const focus = company ? COMPANY_FOCUS[company] : undefined

  useEffect(() => {
    if (!focus) return
    const prev = document.title
    document.title = `For ${focus.companyName} — Hunter Nilsen`
    announceRoute(`Portfolio curated for ${focus.companyName}`)
    return () => { document.title = prev }
  }, [focus])

  if (!focus) return <Navigate to="/" replace />

  const projects = focus.projectSlugs
    .map((slug) => PROJECT_DATA.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)

  const { coverLetter } = focus

  return (
    <div className="layout-shell">
      <Sidebar activeSection="" onNavClick={() => {}} />
      <div className="main-content">
        <main id="main" className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
          <a href="#/" className="resume-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Portfolio
          </a>

          <div className="focus-cover-letter">
            <div className="focus-cover-letter-meta">
              <span className="focus-company-label">{focus.companyName}</span>
              <span className="focus-role-label">{focus.role}</span>
            </div>

            <p className="focus-greeting">{coverLetter.greeting}</p>

            {coverLetter.paragraphs.map((para, i) => (
              <p key={i} className="focus-para">{para}</p>
            ))}

            <div className="focus-closing">
              <p className="focus-closing-line">Sincerely,</p>
              <p className="focus-closing-name">{coverLetter.closing}</p>
              <a href="mailto:hunternilsen12@gmail.com" className="focus-closing-email">
                hunternilsen12@gmail.com
              </a>
            </div>
          </div>

          <div className="focus-projects-header">
            <h2 className="focus-projects-title">Here's the work that proves it</h2>
            <p className="focus-projects-sub">Selected projects most relevant to {focus.companyName}.</p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="focus-footer-link">
            <a href="#/" className="focus-view-all">
              View full portfolio
              <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
