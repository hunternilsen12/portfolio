import { useState } from 'react'

interface TopNavProps {
  activeSection?: string
  onNavClick?: (id: string) => void
}

export function TopNav({ activeSection, onNavClick }: TopNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleLink = (id: string) => {
    setDrawerOpen(false)
    if (onNavClick) {
      onNavClick(id)
    }
  }

  const isActive = (id: string) => activeSection === id ? 'active' : ''

  return (
    <>
      <nav className="top-nav" role="navigation" aria-label="Main navigation">
        <a href="#/" className="top-nav-brand" aria-label="Hunter Nilsen — home">
          <div className="top-nav-monogram" aria-hidden="true">HN</div>
          <span className="top-nav-wordmark">Hunter Nilsen</span>
        </a>

        <ul className="top-nav-links" role="list">
          <li>
            <a
              href="#projects"
              className={isActive('projects')}
              onClick={(e) => { e.preventDefault(); handleLink('projects') }}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={isActive('experience')}
              onClick={(e) => { e.preventDefault(); handleLink('experience') }}
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#/resume">Resume</a>
          </li>
        </ul>

        <a
          href="mailto:hunternilsen12@gmail.com"
          className="top-nav-email"
        >
          Email
        </a>

        <button
          className="top-nav-hamburger"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`top-nav-drawer${drawerOpen ? ' open' : ''}`} aria-hidden={!drawerOpen}>
        <a href="#projects" onClick={() => handleLink('projects')}>Work</a>
        <a href="#experience" onClick={() => handleLink('experience')}>Experience</a>
        <a href="#/resume" onClick={() => setDrawerOpen(false)}>Resume</a>
        <a href="mailto:hunternilsen12@gmail.com" onClick={() => setDrawerOpen(false)}>Email</a>
      </div>
    </>
  )
}
