// Brand components for Merida Living.

function BrandMark({ size = 36, title = "Merida Living" }) {
  return (
    <span className="brand-mark" style={{ display: "inline-block", width: size, height: size, lineHeight: 0 }}>
      <img
        src="assets/official/brand/favico.png"
        alt={title}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    </span>
  );
}

function BrandLockup() {
  return (
    <div className="brand">
      <img
        className="brand-logo-full"
        src="assets/official/brand/logo.png"
        alt="Merida Living - beyond real estate"
      />
    </div>
  );
}

// ── ErrorBoundary ── cargado en ambas páginas (index + property)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div style={{
        padding: '20px 28px', margin: '4px 0',
        background: '#FFF8F8', border: '1px solid #FCA5A5',
        borderRadius: 8, fontFamily: 'var(--mono)', fontSize: 12, color: '#991B1B',
      }}>
        <b>Error en {this.props.label || 'sección'}</b>
        <div style={{ marginTop: 5, opacity: 0.75 }}>{this.state.error?.message}</div>
        <button
          onClick={() => this.setState({ hasError: false, error: null })}
          style={{ marginTop: 10, padding: '4px 12px', background: '#DC2626', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 11, fontFamily: 'inherit' }}
        >Reintentar</button>
      </div>
    );
  }
}

window.BrandMark = BrandMark;
window.BrandLockup = BrandLockup;
window.ErrorBoundary = ErrorBoundary;
