export default function Footer() {
  return (
    <footer style={{ padding: '32px 24px', borderTop: '1px solid #0a0a0a', textAlign: 'center' }}>
      <p style={{ fontSize: '12px', color: '#222' }}>
        <span style={{ color: '#00FF87' }}>fit</span>.gg &middot; &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
