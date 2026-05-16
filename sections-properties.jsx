// Property highlight + grid + neighborhoods

function fmtUSD(n) {
  if (n >= 1000000) return "USD " + (n/1000000).toFixed(2).replace(/\.?0+$/,'') + "M";
  return "USD " + (n/1000).toFixed(0) + "k";
}
function fmtMXN(n) {
  return "MXN " + (n/1000000).toFixed(2) + "M";
}

const OFFICIAL_PROPERTY_IMAGES = {
  "P-01": "assets/official/casas/2026-05-05_10-28-16_House_1.jpg",
  "P-02": "assets/official/casas/2026-05-14_12-20-10_House_20260502_143558.jpg",
  "P-03": "assets/official/casas/2026-04-27_17-07-05_House_1.jpg",
  "P-04": "assets/official/casas/2026-02-27_16-23-45_House_principal.jpeg",
  "P-05": "assets/official/casas/2026-04-16_17-02-33_House__DSC1273.jpg",
  "P-06": "assets/official/casas/2026-03-09_12-55-13_House_meridahomerenovation1.png",
};

function SectionHead({ eyebrow, title, kicker, right }) {
  return (
    <div className="section-head">
      <style>{`
        .section-head {
          display: flex; align-items: end; justify-content: space-between;
          gap: 32px; margin-bottom: 48px;
        }
        .section-head .eyebrow { margin-bottom: 16px; display:flex; align-items:center; gap:12px; }
        .section-head .eyebrow .num {
          font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em;
          color: var(--accent);
        }
        .section-head h2 {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(36px, 4.4vw, 64px);
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0;
          max-width: 780px;
          text-wrap: balance;
        }
        .section-head h2 em { color: var(--accent); font-style: italic; }
        .section-head .kicker {
          font-size: 15px; color: var(--ink-2); max-width: 380px;
          line-height: 1.55;
        }
        @media (max-width: 820px) { .section-head { flex-direction: column; align-items: flex-start; } }
      `}</style>
      <div>
        <div className="eyebrow">
          <span className="num">{eyebrow.num}</span>
          <span className="eyebrow" style={{color:'var(--ink-3)'}}>{eyebrow.text}</span>
        </div>
        {typeof title === 'string' ? <h2 dangerouslySetInnerHTML={{__html: title}} /> : <h2>{title}</h2>}
      </div>
      {kicker && <div className="kicker">{kicker}</div>}
      {right}
    </div>
  );
}

function PropertyCard({ p, big }) {
  return (
    <article className={"pcard " + (big ? "pcard--big" : "")} data-screen-label={`Property · ${p.name}`}>
      <style>{`
        .pcard { display: flex; flex-direction: column; }
        .pcard .pmedia {
          aspect-ratio: 4/3;
          border-radius: var(--r-lg);
          overflow: hidden;
          position: relative;
          border: 1px solid var(--line);
        }
        .pcard--big .pmedia { aspect-ratio: 16/10; }
        .pcard .pmedia .ph { width:100%; height:100%; }
        .pcard .ribbon {
          position: absolute; top: 16px; left: 16px;
          background: var(--ink);
          color: var(--bg);
          font-family: var(--mono);
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          padding: 7px 12px; border-radius: 999px;
        }
        .pcard .heart {
          position: absolute; top: 16px; right: 16px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,.9);
          border: 1px solid var(--line);
          display: grid; place-items: center;
        }
        .pcard .pbody {
          padding: 22px 4px 4px;
          display: flex; flex-direction: column; gap: 12px;
        }
        .pcard .ploc {
          font-family: var(--mono);
          font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--ink-3);
          display: flex; align-items: center; gap: 10px;
        }
        .pcard .pname {
          font-family: var(--display);
          font-size: 26px; line-height: 1.05;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0;
        }
        .pcard--big .pname { font-size: 38px; }
        .pcard .psum {
          color: var(--ink-2); font-size: 14.5px; line-height: 1.55;
          margin: 0;
          max-width: 480px;
        }
        .pcard .pspecs {
          display: flex; flex-wrap: wrap; gap: 6px 18px;
          padding-top: 14px;
          border-top: 1px solid var(--line);
          color: var(--ink-2); font-size: 13px;
        }
        .pcard .pspecs b { color: var(--ink); font-weight: 600; }
        .pcard .pfoot {
          display: flex; align-items: end; justify-content: space-between;
          margin-top: 6px;
        }
        .pcard .pprice {
          font-family: var(--display);
          font-size: 28px; font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink); line-height: 1;
        }
        .pcard--big .pprice { font-size: 40px; }
        .pcard .pprice-sub {
          font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.14em;
          color: var(--ink-3); text-transform: uppercase; margin-top: 6px;
        }
        .pcard .plink {
          font-size: 13px; color: var(--accent); font-weight: 500;
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 0;
        }
      `}</style>
      <div className="pmedia">
        <image-slot id={`slot-${p.id}-cover`} placeholder={`Foto · ${p.name}`} src={OFFICIAL_PROPERTY_IMAGES[p.id]} style={{width:'100%', height:'100%', display:'block'}}></image-slot>
        {p.badge && <span className="ribbon">{p.badge}</span>}
        <button className="heart" aria-label="Guardar">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 12s-4.5-2.7-4.5-6A2.5 2.5 0 0 1 7 4a2.5 2.5 0 0 1 4.5 2c0 3.3-4.5 6-4.5 6z" stroke="currentColor" strokeWidth="1.3"/></svg>
        </button>
      </div>
      <div className="pbody">
        <div className="ploc">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1a3 3 0 0 0-3 3c0 2.2 3 5 3 5s3-2.8 3-5a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="1"/><circle cx="5" cy="4" r="1" fill="currentColor"/></svg>
          {p.neighborhood} · {p.type}
        </div>
        <h3 className="pname">{p.name}</h3>
        {big && <p className="psum">{p.summary}</p>}
        <div className="pspecs">
          {p.beds > 0 && <span><b>{p.beds}</b> rec</span>}
          {p.baths > 0 && <span><b>{p.baths}</b> baños</span>}
          {p.m2 > 0 && <span><b>{p.m2}</b> m² const.</span>}
          {p.lot > 0 && <span><b>{p.lot.toLocaleString()}</b> m² terreno</span>}
          {p.parking > 0 && <span><b>{p.parking}</b> autos</span>}
          {p.pool && <span>Alberca</span>}
        </div>
        <div className="pfoot">
          <div>
            <div className="pprice">{fmtUSD(p.priceUSD)}</div>
            <div className="pprice-sub">{fmtMXN(p.priceMXN)} · MX</div>
          </div>
          <a className="plink" href="property.html">Ver ficha →</a>
        </div>
      </div>
    </article>
  );
}

function FeaturedSection() {
  const { PROPERTIES } = window.MLD;
  const hero = PROPERTIES[1]; // Hacienda
  const rest = [PROPERTIES[0], PROPERTIES[2], PROPERTIES[4]];
  return (
    <section className="featured" style={{padding:'120px 0 40px'}} data-screen-label="Propiedades destacadas">
      <style>{`
        .featured-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 980px) { .featured-grid { grid-template-columns: 1fr; } }
        .featured-side {
          display: grid; gap: 36px;
        }
      `}</style>
      <div className="container">
        <SectionHead
          eyebrow={{num: "01 — Selección", text: "Lo que está a punto de irse"}}
          title='Propiedades <em>curadas</em><br/>esta semana.'
          kicker="Selección semanal del equipo de brokers. Cuatro casas y una hacienda — revisadas en persona, con documentos al día."
        />
        <div className="featured-grid">
          <PropertyCard p={hero} big />
          <div className="featured-side">
            {rest.map(p => <PropertyCard key={p.id} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function CatalogStrip() {
  const { PROPERTIES } = window.MLD;
  return (
    <section style={{padding:'80px 0 40px'}} data-screen-label="Catálogo">
      <style>{`
        .catalog-bar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          margin-bottom: 48px;
        }
        .catalog-filters { display: flex; gap: 24px; flex-wrap: wrap; }
        .cf {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13.5px; color: var(--ink-2);
          padding: 6px 0;
          border-bottom: 1px dashed transparent;
        }
        .cf.is-active { color: var(--accent); border-bottom-color: var(--accent); }
        .cf .ct { font-family: var(--mono); font-size: 10.5px; color: var(--ink-3); letter-spacing: 0.12em; }
        .cf.is-active .ct { color: var(--accent); }
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px 32px;
        }
        @media (max-width: 980px) { .catalog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .catalog-grid { grid-template-columns: 1fr; } }
        .catalog-more {
          text-align: center; margin-top: 64px;
        }
        .catalog-more button {
          padding: 16px 34px;
          border: 1px solid var(--ink);
          background: transparent;
          color: var(--ink);
          font-size: 14px; font-weight: 500;
          border-radius: 999px;
          transition: all .15s;
        }
        .catalog-more button:hover {
          background: var(--ink); color: var(--bg);
        }
      `}</style>
      <div className="container">
        <div className="catalog-bar">
          <div className="catalog-filters">
            <span className="cf is-active">Todas <span className="ct">({PROPERTIES.length * 47})</span></span>
            <span className="cf">Coloniales <span className="ct">(184)</span></span>
            <span className="cf">Modernas <span className="ct">(96)</span></span>
            <span className="cf">Haciendas <span className="ct">(22)</span></span>
            <span className="cf">Departamentos <span className="ct">(38)</span></span>
            <span className="cf">Terrenos <span className="ct">(72)</span></span>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--ink-3)'}}>
            <span>Ordenar:</span>
            <span style={{color:'var(--ink)', fontWeight:500}}>Recientes ↓</span>
          </div>
        </div>
        <div className="catalog-grid">
          {PROPERTIES.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
        <div className="catalog-more">
          <button>Ver las 412 propiedades →</button>
        </div>
      </div>
    </section>
  );
}

function Neighborhoods() {
  const { NEIGHBORHOODS } = window.MLD;
  return (
    <section style={{padding:'120px 0 40px'}} data-screen-label="Barrios">
      <style>{`
        .nb-wrap { background: var(--bg-elev); border-radius: 28px; padding: 64px 56px; border: 1px solid var(--line); }
        @media (max-width: 720px) { .nb-wrap { padding: 40px 24px; } }
        .nb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        @media (max-width: 900px) { .nb-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .nb-grid { grid-template-columns: 1fr; } }
        .nb-cell {
          padding: 28px 24px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          display: flex; flex-direction: column; gap: 10px;
          transition: background .2s;
          cursor: pointer;
        }
        .nb-cell:hover { background: var(--surface); }
        .nb-cell:nth-child(3n) { border-right: 0; }
        .nb-cell:nth-last-child(-n+3) { border-bottom: 0; }
        @media (max-width: 900px) {
          .nb-cell { border-right: 1px solid var(--line) !important; }
          .nb-cell:nth-child(2n) { border-right: 0 !important; }
        }
        .nb-cell .nbh {
          display:flex; align-items: baseline; justify-content: space-between; gap:12px;
        }
        .nb-cell .nbn {
          font-family: var(--display); font-size: 26px; letter-spacing: -0.01em; color: var(--ink);
        }
        .nb-cell .nbc {
          font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em;
          color: var(--accent);
        }
        .nb-cell .nbb {
          font-size: 14px; color: var(--ink-2); line-height: 1.5;
        }
        .nb-cell .nblink {
          margin-top: 8px;
          font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--ink-3);
        }
      `}</style>
      <div className="container">
        <SectionHead
          eyebrow={{num: "02 — Mapa", text: "Cómo se vive cada zona"}}
          title='Barrios que <em>conocemos</em> casa por casa.'
          kicker="No vendemos zonas que no caminamos. Cada barrio tiene su propio broker líder y reportes de mercado mensuales."
        />
        <div className="nb-wrap">
          <div className="nb-grid">
            {NEIGHBORHOODS.map(n => (
              <div className="nb-cell" key={n.name}>
                <div className="nbh">
                  <div className="nbn">{n.name}</div>
                  <div className="nbc">{n.count} props</div>
                </div>
                <div className="nbb">{n.blurb}</div>
                <div className="nblink">Explorar barrio →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.FeaturedSection = FeaturedSection;
window.CatalogStrip = CatalogStrip;
window.Neighborhoods = Neighborhoods;
window.SectionHead = SectionHead;
