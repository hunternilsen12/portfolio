import type { Project, ImageGallerySection } from '../types/project'

function extractGallery(project: Project): ImageGallerySection | null {
  const section = project.richDetail?.sections.find(s => s.type === 'image-gallery')
  return (section as ImageGallerySection | undefined) ?? null
}

interface ValueDetailProps {
  project: Project
  prev: Project | null
  next: Project | null
}

export function ValueDetail({ project, prev, next }: ValueDetailProps) {
  const gallery = extractGallery(project)
  const { detail } = project

  return (
    <div className="value-detail">
      <div className="container">
        <a href="#/" className="detail-back">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </a>

        {/* Title block */}
        <div className="vd-header">
          <div className="vd-title-row">
            <h1 className="vd-title">{project.title}</h1>
            <span className="vd-role-badge">{project.roleLabel}</span>
          </div>
          <div className="vd-meta">
            <span>{project.dateLabel}</span>
            {project.tags.map(tag => (
              <span key={tag} className="vd-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Impact metrics */}
        {detail.metrics.length > 0 && (
          <div className="vd-metrics">
            {detail.metrics.map((m, i) => (
              <div key={i} className="vd-metric">
                <span className="vd-metric-value">{m.value}</span>
                <span className="vd-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Narrative */}
        <div className="vd-content">
          <div className="vd-block">
            <p className="vd-block-label">The Approach</p>
            <p className="vd-block-text">{detail.solution}</p>
          </div>
          {detail.results && (
            <div className="vd-block">
              <p className="vd-block-label">The Outcome</p>
              <p className="vd-block-text">{detail.results}</p>
            </div>
          )}
        </div>

        {/* Screenshots */}
        {gallery && gallery.images.length > 0 && (
          <div className="vd-gallery">
            {gallery.title && <h2 className="vd-gallery-title">{gallery.title}</h2>}
            <div className="vd-gallery-grid">
              {gallery.images.map((img, i) => (
                <figure key={i} className="vd-gallery-item">
                  <img src={img.src} alt={img.alt} className="vd-gallery-img" loading="lazy" />
                  {img.caption && <figcaption className="vd-gallery-caption">{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="vd-prevnext">
            {prev ? (
              <a href={`#/project/${prev.slug}`} className="vd-prevnext-link vd-prevnext-prev">
                <span className="vd-prevnext-dir">← Previous</span>
                <span className="vd-prevnext-title">{prev.title}</span>
              </a>
            ) : <div />}
            {next ? (
              <a href={`#/project/${next.slug}`} className="vd-prevnext-link vd-prevnext-next">
                <span className="vd-prevnext-dir">Next →</span>
                <span className="vd-prevnext-title">{next.title}</span>
              </a>
            ) : <div />}
          </div>
        )}
      </div>
    </div>
  )
}
