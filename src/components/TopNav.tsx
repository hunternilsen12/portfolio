import { useState } from 'react'

export function TopNav() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <nav className="top-nav" role="navigation" aria-label="Main navigation">
        <a href="#/" className="top-nav-brand" aria-label="Hunter Nilsen — home">
          <span className="top-nav-wordmark">Hunter Nilsen</span>
        </a>

        <ul className="top-nav-links" role="list">
          <li>
            <a href="https://linkedin.com/in/hunternilsen" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:hunternilsen12@gmail.com">
              Email
            </a>
          </li>
        </ul>

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
        <a href="https://linkedin.com/in/hunternilsen" target="_blank" rel="noopener noreferrer" onClick={() => setDrawerOpen(false)}>LinkedIn</a>
        <a href="mailto:hunternilsen12@gmail.com" onClick={() => setDrawerOpen(false)}>Email</a>
      </div>
    </>
  )
}
