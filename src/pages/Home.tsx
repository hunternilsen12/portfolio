import { useEffect } from 'react'
import { TopNav } from '../components/TopNav'
import { Hero } from '../components/Hero'
import { CuratedWork } from '../components/CuratedWork'
import { Footer } from '../components/Footer'
import { restoreHomeScroll, saveHomeScroll } from '../lib/scrollMemory'
import { announceRoute } from '../components/common/RouteAnnouncer'

export function Home() {
  useEffect(() => {
    restoreHomeScroll()
    announceRoute('Returned to portfolio home')
    return () => { saveHomeScroll() }
  }, [])

  return (
    <div className="layout-shell">
      <TopNav />
      <main id="main">
        <Hero />
        <CuratedWork />
      </main>
      <Footer />
    </div>
  )
}
