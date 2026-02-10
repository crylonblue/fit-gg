export default function Footer() {
  return (
    <footer style={{ padding: '40px 24px', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
      <div className="container">
        <span className="text-gradient" style={{ fontWeight: 700, fontSize: '18px', fontFamily: 'var(--font-heading)' }}>fit.gg</span>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginTop: '8px' }}>
          Made with 💪 and code &middot; &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
