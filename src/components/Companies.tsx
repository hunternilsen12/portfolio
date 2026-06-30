export function Companies() {
  return (
    <section className="companies-section">
      <div className="companies-inner">
        <p className="companies-group-label">Currently at</p>
        <div className="companies-list">
          <div className="company-item">
            <img
              src="/logos/domo.png"
              alt="Domo"
              className="company-logo-img"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
            <span className="company-name">Domo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
