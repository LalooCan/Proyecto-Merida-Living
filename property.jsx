// property.jsx — components for the Casa Tres Patios detail page.

const PROPERTY = {
  id: "P-01",
  name: "Casa Tres Patios",
  code: "MLD-2111",
  neighborhood: "Centro Histórico",
  street: "Calle 64 entre 47 y 49",
  type: "Casa colonial restaurada",
  year: 1894,
  restored: 2023,
  badge: "Listing exclusivo",
  priceUSD: 685000,
  priceMXN: 12550000,
  beds: 4, baths: 3.5,
  m2: 412, lot: 520,
  parking: 2, pool: true,
  facade: 8.2, depth: 63.4,
};

const AGENT = {
  name: "Andrea Pacheco",
  role: "Broker · Casas históricas",
  years: 14,
  langs: "ES · EN · FR",
  phone: "+52 999 100 2020",
  email: "andrea@meridaliving.mx",
};

// Web-component wrapper so JSX passes attributes through cleanly.
function ImgSlot({ id, placeholder, src, shape, radius, fit, style, className }) {
  return React.createElement('image-slot', {
    id, placeholder, src, shape, radius, fit, style, class: className
  });
}

// ── 1. Breadcrumb + tools ───────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav data-screen-label="Breadcrumb">
      <style>{`
        .bc-wrap {
          padding: 20px 0; border-bottom: 1px solid var(--line);
          background: white;
        }
        .bc-inner {
          display: flex; justify-content: space-between; align-items: center;
          gap: 24px; flex-wrap: wrap;
        }
        .crumbs { font-size: 13px; color: var(--ink-3); display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
        .crumbs a { color: var(--ink-3); transition: color .15s; }
        .crumbs a:hover { color: var(--accent); }
        .crumbs .here { color: var(--ink); font-weight: 500; }
        .crumbs .sep { color: var(--line-2); margin: 0 2px; }
        .tools { display: flex; gap: 10px; }
        .tool {
          height: 36px; padding: 0 14px;
          border-radius: 999px; border: 1px solid var(--line);
          background: white; color: var(--ink-2);
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12.5px; font-weight: 500;
          transition: all .15s;
        }
        .tool:hover { border-color: var(--accent); color: var(--accent); }
        .tool.icon-only { width: 36px; padding: 0; justify-content: center; }
      `}</style>
      <div className="bc-wrap">
        <div className="container bc-inner">
          <div className="crumbs">
            <a href="index.html">Inicio</a>
            <span className="sep">›</span>
            <a href="index.html">Propiedades</a>
            <span className="sep">›</span>
            <a href="#">Centro Histórico</a>
            <span className="sep">›</span>
            <span className="here">{PROPERTY.name}</span>
          </div>
          <div className="tools">
            <button className="tool">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 12s-4.5-2.7-4.5-6A2.5 2.5 0 0 1 7 4a2.5 2.5 0 0 1 4.5 2c0 3.3-4.5 6-4.5 6z" stroke="currentColor" strokeWidth="1.3"/></svg>
              Guardar
            </button>
            <button className="tool">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="3.5" cy="7" r="1.5" stroke="currentColor"/><circle cx="10.5" cy="3.5" r="1.5" stroke="currentColor"/><circle cx="10.5" cy="10.5" r="1.5" stroke="currentColor"/><path d="M4.8 6.3l4.4-1.8M4.8 7.7l4.4 1.8" stroke="currentColor"/></svg>
              Compartir
            </button>
            <button className="tool icon-only" aria-label="Imprimir">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M4 4V2h6v2M4 10H2V6h10v4h-2M4 8h6v5H4z" stroke="currentColor" strokeWidth="1.2"/></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ── 2. Hero gallery mosaic ───────────────────────────────────────────
function HeroGallery() {
  return (
    <section data-screen-label="Galería principal">
      <style>{`
        .hg-wrap { padding: 28px 0; }
        .hg-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 10px;
          height: 580px;
        }
        .hg-grid > * { border-radius: 14px; overflow: hidden; }
        .hg-big { grid-row: span 2; }
        .hg-more {
          position: relative;
        }
        .hg-more-overlay {
          position: absolute; inset: 0;
          background: rgba(20,30,40,0.55);
          color: white;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 6px;
          font-family: var(--display);
          font-size: 18px; font-weight: 500;
          pointer-events: none;
          backdrop-filter: blur(2px);
        }
        .hg-more-overlay .n { font-size: 32px; font-weight: 400; letter-spacing: -0.01em; }
        .hg-more-overlay .l { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; font-family: var(--sans); opacity: 0.9; }
        .hg-floating {
          position: absolute; top: 20px; left: 20px;
          display: flex; gap: 8px;
        }
        .hg-tag {
          background: rgba(255,255,255,0.95);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .hg-tag.live .dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--red);
          box-shadow: 0 0 0 4px rgba(211,66,69,0.25);
        }
        .hg-tag.code {
          background: var(--ink); color: white;
          font-family: var(--mono);
          letter-spacing: 0.16em;
        }
        @media (max-width: 900px) {
          .hg-grid { grid-template-columns: 1fr 1fr; height: 480px; }
          .hg-big { grid-column: span 2; grid-row: span 1; }
        }
      `}</style>
      <div className="container-wide hg-wrap">
        <div className="hg-grid" style={{position:'relative'}}>
          <div className="hg-big" style={{position:'relative'}}>
            <ImgSlot
              id="slot-prop-P-01-hero"
              placeholder="Patio principal · foto hero"
              src="assets/official/casas/2026-05-05_10-28-16_House_1.jpg"
              style={{width:'100%', height:'100%', display:'block'}}
            />
            <div className="hg-floating">
              <span className="hg-tag code">MLD-2111</span>
              <span className="hg-tag live"><span className="dot"></span>Recorrido virtual</span>
            </div>
          </div>
          <ImgSlot id="slot-prop-P-01-g2" placeholder="Recámara principal" src="assets/official/casas/2026-05-05_10-28-16_House_2.jpg" style={{width:'100%', height:'100%', display:'block'}}/>
          <ImgSlot id="slot-prop-P-01-g3" placeholder="Cocina" src="assets/official/casas/2026-05-05_10-28-16_House_3.jpg" style={{width:'100%', height:'100%', display:'block'}}/>
          <ImgSlot id="slot-prop-P-01-g4" placeholder="Alberca y palapa" src="assets/official/casas/2026-05-05_10-28-16_House_4.jpg" style={{width:'100%', height:'100%', display:'block'}}/>
          <div className="hg-more">
            <ImgSlot id="slot-prop-P-01-g5" placeholder="Fachada" src="assets/official/casas/2026-05-05_10-28-16_House_5.jpg" style={{width:'100%', height:'100%', display:'block'}}/>
            <div className="hg-more-overlay">
              <div className="n">+19</div>
              <div className="l">Ver galería completa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 3. Overview: title, price, specs, sticky agent rail ───────────────
function Overview() {
  return (
    <section data-screen-label="Resumen de la propiedad">
      <style>{`
        .ov-wrap { padding: 48px 0 24px; }
        .ov-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 1000px) { .ov-grid { grid-template-columns: 1fr; gap: 40px; } }

        .ov-eye {
          display: flex; align-items: center; gap: 14px;
          font-size: 11.5px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
        }
        .ov-eye .dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--accent);
        }
        .ov-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(48px, 5.2vw, 78px);
          line-height: 1;
          letter-spacing: -0.015em;
          color: var(--ink);
          margin: 18px 0 14px;
        }
        .ov-sub {
          font-size: 17px; color: var(--ink-2);
          display: flex; flex-wrap: wrap; gap: 4px 16px;
          align-items: center;
        }
        .ov-sub .pin { color: var(--accent); }

        .ov-specs {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        @media (max-width: 720px) {
          .ov-specs { grid-template-columns: repeat(2, 1fr); }
        }
        .ov-spec {
          padding: 24px 20px 24px 0;
          border-right: 1px solid var(--line);
          display: flex; gap: 14px; align-items: flex-start;
        }
        .ov-spec:last-child { border-right: 0; }
        .ov-spec .ico {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: var(--accent-soft);
          color: var(--accent);
          display: grid; place-items: center;
          flex-shrink: 0;
        }
        .ov-spec .k {
          font-family: var(--display);
          font-size: 24px; font-weight: 500;
          color: var(--ink);
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .ov-spec .l {
          font-size: 12px; color: var(--ink-3);
          margin-top: 6px;
          letter-spacing: 0.04em;
        }

        /* Right rail */
        .ov-rail { position: sticky; top: 100px; }
        .price-card {
          background: white;
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 28px;
          box-shadow: var(--shadow-1);
        }
        .price-card .pc-eye {
          font-family: var(--sans); font-size: 11px;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ink-3); margin-bottom: 8px;
        }
        .price-card .pc-usd {
          font-family: var(--display);
          font-size: 44px; font-weight: 400;
          color: var(--ink); letter-spacing: -0.02em;
          line-height: 1;
        }
        .price-card .pc-mxn {
          font-size: 13.5px; color: var(--ink-2);
          margin-top: 8px;
        }
        .price-card .pc-mxn b { color: var(--ink); font-weight: 600; }
        .price-card .pc-rule {
          height: 1px; background: var(--line); margin: 24px 0;
        }
        .agent-row {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 18px;
        }
        .agent-row .av {
          width: 52px; height: 52px;
          border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
        }
        .agent-row .av image-slot { width: 100%; height: 100%; display: block; }
        .agent-row .nm { font-family: var(--display); font-size: 17px; font-weight: 500; color: var(--ink); }
        .agent-row .rl { font-size: 12.5px; color: var(--ink-3); margin-top: 2px; }

        .cta-stack { display: flex; flex-direction: column; gap: 10px; }
        .cta-stack .btn-pill { width: 100%; justify-content: center; padding: 14px; font-size: 14px; }
        .cta-stack .btn-wa {
          background: #25D366; color: white;
        }
        .cta-stack .btn-wa:hover { background: #1FB055; }

        .meta-strip {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px 18px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px dashed var(--line);
          font-size: 12.5px;
          color: var(--ink-2);
        }
        .meta-strip .ml { color: var(--ink-3); letter-spacing: 0.06em; }
        .meta-strip .mv { color: var(--ink); font-weight: 500; }
      `}</style>
      <div className="container ov-wrap">
        <div className="ov-grid">
          <div>
            <div className="ov-eye">
              <span className="dot"></span>
              {PROPERTY.badge}
              <span style={{color:'var(--ink-3)', letterSpacing: '0.16em'}}>· CÓDIGO {PROPERTY.code}</span>
            </div>
            <h1 className="ov-h">{PROPERTY.name}</h1>
            <div className="ov-sub">
              <span className="pin">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{display:'inline-block', verticalAlign:'-2px', marginRight:6}}><path d="M7 1a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="5" r="1.3" fill="currentColor"/></svg>
                {PROPERTY.neighborhood}
              </span>
              <span style={{color:'var(--line-2)'}}>·</span>
              <span>{PROPERTY.street}</span>
              <span style={{color:'var(--line-2)'}}>·</span>
              <span>{PROPERTY.type}</span>
              <span style={{color:'var(--line-2)'}}>·</span>
              <span><em style={{color:'var(--accent)', fontStyle:'italic', fontFamily:'var(--serif-italic)'}}>circa {PROPERTY.year}</em></span>
            </div>

            <div className="ov-specs">
              <Spec icon={<IconBed/>}      k={PROPERTY.beds}   l="Recámaras"/>
              <Spec icon={<IconBath/>}     k={PROPERTY.baths}  l="Baños"/>
              <Spec icon={<IconArea/>}     k={PROPERTY.m2}     l="m² constr."/>
              <Spec icon={<IconLot/>}      k={PROPERTY.lot}    l="m² terreno"/>
              <Spec icon={<IconCar/>}      k={PROPERTY.parking} l="Autos"/>
            </div>
          </div>

          <aside className="ov-rail">
            <div className="price-card">
              <div className="pc-eye">Precio de lista</div>
              <div className="pc-usd">USD 685,000</div>
              <div className="pc-mxn">≈ <b>MXN 12,550,000</b> · tipo de cambio 18.32</div>
              <div className="pc-rule"></div>

              <div className="agent-row">
                <div className="av">
                  <ImgSlot id="slot-agent-andrea" placeholder="Merida Living" src="assets/official/brand/favico.png" shape="circle"/>
                </div>
                <div>
                  <div className="nm">{AGENT.name}</div>
                  <div className="rl">{AGENT.role}</div>
                </div>
              </div>

              <div className="cta-stack">
                <button className="btn-pill btn-wa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4A11 11 0 0 0 4 19l-1 4 4-1a11 11 0 1 0 13-18zm-8 18a9 9 0 0 1-4.6-1.3l-3.3.9.9-3.2A9 9 0 1 1 12 22zm5.2-6.6c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1a7.4 7.4 0 0 1-3.6-3.1c-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>
                  WhatsApp · {AGENT.phone}
                </button>
                <button className="btn-pill dark">Agendar visita guiada</button>
                <button className="btn-pill ghost">Solicitar ficha técnica (PDF)</button>
              </div>

              <div className="meta-strip">
                <div><div className="ml">Días en mercado</div><div className="mv">12 días</div></div>
                <div><div className="ml">Listings vistos hoy</div><div className="mv">47</div></div>
                <div><div className="ml">Visitas agendadas</div><div className="mv">3 esta semana</div></div>
                <div><div className="ml">Última actualización</div><div className="mv">Hace 2 días</div></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Spec({ icon, k, l }) {
  return (
    <div className="ov-spec">
      <div className="ico">{icon}</div>
      <div>
        <div className="k">{k}</div>
        <div className="l">{l}</div>
      </div>
    </div>
  );
}

// Line icons
function IconBed() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 12V5M16 12V9c0-1-1-2-2-2H6c-1 0-2 1-2 2v3M2 12h14M2 12v2M16 12v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="6" cy="9" r="1" stroke="currentColor" strokeWidth="1.2"/></svg>; }
function IconBath() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 8h12M3 8v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M5 8V5a2 2 0 0 1 4 0M4 15l-1 1.5M14 15l1 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>; }
function IconArea() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="3" width="12" height="12" stroke="currentColor" strokeWidth="1.4" rx="1"/><path d="M3 9h12M9 3v12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2"/></svg>; }
function IconLot() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 15L9 3l6 12H3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>; }
function IconCar() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 12V9l1.5-3.5a1 1 0 0 1 1-.5h7a1 1 0 0 1 1 .5L15 9v3M3 12h12M3 12v2M15 12v2M3 9h12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="6" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>; }

window.PropertyBreadcrumb = Breadcrumb;
window.PropertyHeroGallery = HeroGallery;
window.PropertyOverview = Overview;
window.ImgSlot = ImgSlot;
window.PROPERTY = PROPERTY;
window.AGENT = AGENT;
