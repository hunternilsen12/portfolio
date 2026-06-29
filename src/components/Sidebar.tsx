import { useState } from 'react'
import headshot from '../assets/Headshot.jpg'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#/resume', label: 'Resume' },
]

interface SidebarProps {
  activeSection: string
  onNavClick: (targetId: string) => void
}

export function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setDrawerOpen(false)
    if (href.startsWith('#/')) return
    e.preventDefault()
    onNavClick(href.replace('#', ''))
  }

  return (
    <>
      {/* Mobile topbar */}
      <div className="topbar">
        <a href="#/" className="topbar-name">Hunter Nilsen</a>
        <button
          className="topbar-hamburger"
          aria-label={drawerOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(v => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {drawerOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {drawerOpen && (
        <div
          className="sidebar-overlay"
          aria-hidden="true"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={'sidebar' + (drawerOpen ? ' open' : '')} aria-label="Site navigation">
        {/* Profile */}
        <div className="sidebar-profile">
          <img src={headshot} alt="Hunter Nilsen" className="sidebar-avatar" />
          <p className="sidebar-name">Hunter Nilsen</p>
          <p className="sidebar-title">Revenue Operations &amp; AI Engineering<br />at Domo</p>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav" aria-label="Page sections">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.replace('#', '') ? 'active' : undefined}
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="sidebar-social">
            <a href="mailto:hunter.nilsen@domo.com" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/hunternilsen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <a href="hunter-nilsen-resume.pdf" download className="sidebar-download" aria-label="Download resume PDF">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </aside>
    </>
  )
}
