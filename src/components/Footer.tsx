export default function Footer() {
  return (
    <footer style={{ padding: '32px 24px', borderTop: '1px solid #111', textAlign: 'center' }}>
      <p style={{ fontSize: '13px', color: '#333' }}>
        <span style={{ color: '#00FF87' }}>fit</span>.gg &middot; Made with 💪 &middot; &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
