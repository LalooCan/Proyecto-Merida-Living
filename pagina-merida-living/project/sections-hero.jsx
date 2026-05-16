// Top bar + Hero + advanced search

function TopBar() {
  return (
    <header className="topbar" data-screen-label="Top Bar">
      <div className="container topbar-inner">
        <BrandLockup size={40} sub="Beyond Real Estate" />
        <nav className="nav">
          <a className="active" href="#">Propiedades</a>
          <a href="#">Listings Exclusivos</a>
          <a href="#">Centro</a>
          <a href="#">Playa</a>
          <a href="#">Rentas</a>
          <a href="#">Blog</a>
        </nav>
        <div style={{display:'flex', alignItems:'center', gap:18}}>
          <div className="lang">
            <span className="on">ES</span>
            <span>·</span>
            <span>EN</span>
          </div>
          <button className="btn-pill">Agenda una visita
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <style>{`
        .hero { position: relative; padding: 56px 0 0; }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: end;
        }
        @media (max-width: 980px) { .hero-grid { grid-template-columns: 1fr; gap: 32px; } }

        .hero-eyebrow {
          display: flex; align-items: center; gap: 14px;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 28px;
        }
        .hero-eyebrow .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
        }
        .hero-h1 {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(46px, 6.6vw, 96px);
          line-height: 1.0;
          letter-spacing: -0.015em;
          color: var(--ink);
          margin: 0;
          text-wrap: balance;
        }
        .hero-h1 em {
          font-family: var(--serif-italic);
          font-style: italic;
          color: var(--accent);
          font-weight: 500;
          letter-spacing: -0.005em;
        }
        .hero-h1 .amp {
          font-family: var(--serif-italic);
          font-style: italic;
          color: var(--purple);
          font-weight: 500;
        }
        .hero-lede {
          margin: 28px 0 0;
          max-width: 460px;
          font-size: 17px;
          line-height: 1.55;
          color: var(--ink-2);
        }
        .hero-meta {
          display: flex; gap: 32px;
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
        }
        .hero-meta > div .k {
          font-family: var(--display);
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink);
          line-height: 1;
        }
        .hero-meta > div .k em {
          font-family: var(--serif-italic);
          font-style: italic;
          color: var(--accent);
          font-weight: 500;
        }
        .hero-meta > div .l {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-top: 8px;
        }

        /* Right column — large arched image with overlapping card */
        .hero-vis {
          position: relative;
          height: 620px;
        }
        @media (max-width: 980px) { .hero-vis { height: 480px; } }
        .hero-arch {
          position: absolute; inset: 0;
          border-radius: 280px 280px 22px 22px;
          overflow: hidden;
          border: 1px solid var(--line);
          box-shadow: var(--shadow-2);
        }
        .hero-arch::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: inherit;
          border: 1px solid rgba(255,255,255,0.5);
          pointer-events: none;
        }
        .hero-arch .ph { width:100%; height:100%; }
        .hero-tag {
          position: absolute;
          top: 28px; left: 50%; transform: translateX(-50%);
          background: rgba(255,255,255,.95);
          backdrop-filter: blur(8px);
          padding: 9px 16px;
          border-radius: 999px;
          font-family: var(--sans);
          font-size: 11.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          color: var(--ink);
          border: 1px solid var(--line);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .hero-tag .dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--red); display: inline-block;
          box-shadow: 0 0 0 4px rgba(211,66,69,0.2);
        }
        .hero-card {
          position: absolute;
          left: -48px;
          bottom: 32px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 20px 22px;
          box-shadow: var(--shadow-2);
          width: 260px;
        }
        @media (max-width: 980px) { .hero-card { left: 16px; } }
        .hero-card .hc-eyebrow {
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--ink-3);
        }
        .hero-card .hc-name {
          font-family: var(--display); font-size: 22px; line-height: 1.1;
          margin: 6px 0 10px; color: var(--ink);
        }
        .hero-card .hc-row {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 13px; color: var(--ink-2);
          padding-top: 12px; margin-top: 12px; border-top: 1px solid var(--line);
        }
        .hero-card .hc-price {
          font-family: var(--display); font-size: 22px; color: var(--ink); font-weight: 600;
          letter-spacing: -0.005em;
        }
        .hero-card .hc-cta {
          color: var(--accent); font-weight: 500; font-size: 13px;
        }

        /* Search bar */
        .search-wrap {
          margin: 72px 0 0;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 8px;
          box-shadow: var(--shadow-1);
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr auto;
          gap: 4px;
        }
        @media (max-width: 980px) {
          .search-wrap { grid-template-columns: 1fr 1fr; }
        }
        .search-cell {
          padding: 14px 18px;
          border-radius: 16px;
          transition: background .15s;
          cursor: pointer;
        }
        .search-cell:hover { background: var(--bg); }
        .search-cell .sc-label {
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--ink-3); margin-bottom: 4px;
        }
        .search-cell .sc-value {
          font-size: 15px; color: var(--ink); font-weight: 500;
          display: flex; align-items: center; gap: 8px;
        }
        .search-cell + .search-cell { border-left: 1px solid var(--line); }
        @media (max-width: 980px) { .search-cell + .search-cell { border-left: 0; } }
        .search-go {
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 16px;
          padding: 0 30px;
          font-size: 14px;
          font-weight: 500;
          display: flex; align-items: center; gap: 10px;
          transition: background .15s;
          letter-spacing: 0.02em;
        }
        .search-go:hover { background: var(--accent-deep); }

        .quicks {
          display: flex; gap: 10px; flex-wrap: wrap;
          margin: 18px 0 0;
        }
        .quick {
          font-family: var(--sans); font-size: 12.5px;
          padding: 8px 16px;
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--ink-2);
          background: white;
          transition: all .15s;
          font-weight: 500;
        }
        .quick:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }
      `}</style>

      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot"></span>
              Mérida · Yucatán · Desde 2011
            </div>
            <h1 className="hero-h1">
              Más que bienes raíces.<br/>
              Un <em>estilo de vida</em><br/>
              en <em>Yucatán</em>.
            </h1>
            <p className="hero-lede">
              Brokerage bilingüe en Mérida desde 2011. Acompañamos a compradores y vendedores en cada paso: due diligence, fideicomiso, notaría y entrega. Sin atajos.
            </p>
            <div className="hero-meta">
              <div>
                <div className="k">187</div>
                <div className="l">Operaciones · 2024</div>
              </div>
              <div>
                <div className="k">14 <span style={{color:'var(--ink-3)', fontSize:'18px', fontWeight:400}}>años</span></div>
                <div className="l">Experiencia local</div>
              </div>
              <div>
                <div className="k" style={{fontSize:'22px', fontWeight:500}}>ES · EN · FR</div>
                <div className="l">Atención multilingüe</div>
              </div>
            </div>
          </div>

          <div className="hero-vis">
            <div className="hero-arch">
              <image-slot id="slot-home-hero" placeholder="Foto hero · Casa colonial" style={{width:'100%', height:'100%', display:'block'}}></image-slot>
            </div>
            <div className="hero-tag"><span className="dot"></span>Recorrido virtual disponible</div>
            <div className="hero-card">
              <div className="hc-eyebrow">Listing exclusivo</div>
              <div className="hc-name">Casa Tres Patios</div>
              <div style={{fontSize:13, color:'var(--ink-3)'}}>Centro Histórico · 4 rec · 412 m²</div>
              <div className="hc-row">
                <span className="hc-price">USD 685k</span>
                <span className="hc-cta">Ver ficha →</span>
              </div>
            </div>
          </div>
        </div>

        <div className="search-wrap">
          <div className="search-cell">
            <div className="sc-label">Quiero</div>
            <div className="sc-value">Comprar
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <div className="search-cell">
            <div className="sc-label">Tipo</div>
            <div className="sc-value">Casa colonial
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <div className="search-cell">
            <div className="sc-label">Zona</div>
            <div className="sc-value">Centro Histórico
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <div className="search-cell">
            <div className="sc-label">Presupuesto</div>
            <div className="sc-value">USD 300k – 800k
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <button className="search-go">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Buscar
          </button>
        </div>

        <div className="quicks">
          <button className="quick">Con alberca</button>
          <button className="quick">Restauradas</button>
          <button className="quick">Listas para rentar</button>
          <button className="quick">Bajo USD 250k</button>
          <button className="quick">Haciendas</button>
          <button className="quick">Pre-venta</button>
        </div>
      </div>
    </section>
  );
}

window.TopBar = TopBar;
window.Hero = Hero;
