export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-copyright">&copy; {year} Hunter Nilsen</p>
      </div>
    </footer>
  )
}
