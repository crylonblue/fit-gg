export default function Footer() {
  return (
    <footer style={{ padding: '40px 24px', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
      <div className="container">
        <span style={{ fontWeight: 800, fontSize: '20px', fontFamily: 'var(--font-heading)' }}>
          <span className="text-neon">fit</span>.gg
        </span>
        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Made with 💪 and code &middot; &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
