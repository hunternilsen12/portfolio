const COMPANIES = [
  { name: 'Domo' },
  { name: 'ESPN' },
  { name: 'Feld Entertainment' },
  { name: 'Ocean Partners' },
]

export function Companies() {
  return (
    <section className="companies-section">
      <div className="companies-inner">
        <p className="companies-label">Companies I've worked with</p>
        <div className="companies-list">
          {COMPANIES.map((c) => (
            <div key={c.name} className="company-item">
              <span className="company-name">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
