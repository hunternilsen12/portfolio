import { useCallback, useEffect } from 'react'
import { TopNav } from '../components/TopNav'
import { Hero } from '../components/Hero'
import { Companies } from '../components/Companies'
import { CuratedWork } from '../components/CuratedWork'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { restoreHomeScroll, saveHomeScroll } from '../lib/scrollMemory'
import { announceRoute } from '../components/common/RouteAnnouncer'

const SECTION_IDS = ['projects', 'experience']

export function Home() {
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    restoreHomeScroll()
    announceRoute('Returned to portfolio home')
    return () => { saveHomeScroll() }
  }, [])

  const handleNavClick = useCallback((id: string) => {
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="layout-shell">
      <TopNav activeSection={activeSection} onNavClick={handleNavClick} />
      <main id="main">
        <Hero />
        <Companies />
        <CuratedWork />
        <section id="experience">
          <Experience />
        </section>
      </main>
      <Footer />
    </div>
  )
}
