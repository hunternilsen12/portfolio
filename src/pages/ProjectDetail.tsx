import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { PROJECT_DATA } from '../data/projects'
import { ValueDetail } from './ValueDetail'
import { applyProjectSeo, resetSeo } from '../lib/seo'
import { announceRoute } from '../components/common/RouteAnnouncer'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const index = PROJECT_DATA.findIndex((p) => p.slug === slug)
  const project = index >= 0 ? PROJECT_DATA[index] : null

  useEffect(() => {
    if (!project) return
    window.scrollTo(0, 0)
    applyProjectSeo(project)
    announceRoute('Viewing project: ' + project.title)
    return () => resetSeo()
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const prev = index > 0 ? PROJECT_DATA[index - 1] : null
  const next = index < PROJECT_DATA.length - 1 ? PROJECT_DATA[index + 1] : null

  return <ValueDetail project={project} prev={prev} next={next} />
}
