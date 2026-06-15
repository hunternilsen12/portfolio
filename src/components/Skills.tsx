import { useInView } from '../hooks/useInView'

const SKILL_CATEGORIES = [
  {
    title: 'AI',
    pills: ['Claude API', 'LLMs', 'Agentic Workflows', 'Prompt Engineering', 'AI Agents', 'MCP'],
  },
  {
    title: 'Code',
    pills: ['TypeScript', 'Python', 'SQL', 'React', 'Vite'],
  },
  {
    title: 'Platforms',
    pills: ['Domo', 'Salesforce', 'Apollo.io', 'Clay', 'Snowflake'],
  },
]

export function Skills() {
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className={'section-header fade-up' + (inView ? ' in-view' : '')}>Skills & Tools</h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className={'skill-category fade-up delay-' + (i + 1) + (inView ? ' in-view' : '')}
            >
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-pills">
                {cat.pills.map((pill) => (
                  <span key={pill} className="skill-pill">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
