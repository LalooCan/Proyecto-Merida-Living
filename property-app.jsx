// property-app.jsx — remaining property sections + page root.

const FEATURES = [
  { cat: "Arquitectura",  items: ["Pasta hidráulica original", "Bóveda catalana", "Mampostería 1m espesor", "Marquetería de cedro", "Fachada catalogada INAH"] },
  { cat: "Confort",       items: ["A/C inverter en cada recámara", "Domótica de iluminación", "Cisterna 15,000 L", "Bomba de presión constante", "Calentador solar"] },
  { cat: "Exteriores",    items: ["Alberca tibia 4.5 × 9 m", "Palapa de huano", "Ramón adulto 40 años", "Riego automatizado", "Iluminación nocturna"] },
  { cat: "Servicios",     items: ["Cochera techada 2 autos", "Bodega 28 m²", "Lavandería independiente", "Estudio + baño", "Acceso de servicio"] },
];

const OFFICIAL_SIMILAR_IMAGES = {
  "P-02": "assets/official/casas/2026-05-14_12-20-10_House_20260502_143558.jpg",
  "P-03": "assets/official/casas/2026-04-27_17-07-05_House_1.jpg",
  "P-04": "assets/official/casas/2026-02-27_16-23-45_House_principal.jpeg",
  "P-05": "assets/official/casas/2026-04-16_17-02-33_House__DSC1273.jpg",
  "P-06": "assets/official/casas/2026-03-09_12-55-13_House_meridahomerenovation1.png",
};

function Description() {
  return (
    <section data-screen-label="Descripción">
      <style>{`
        .ds-wrap { padding: 80px 0; }
        .ds-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 1000px) { .ds-grid { grid-template-columns: 1fr; gap: 40px; } }

        .ds-eye { color: var(--accent); font-size: 11.5px; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; margin-bottom: 18px; }
        .ds-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(34px, 3.6vw, 52px);
          line-height: 1.05; letter-spacing: -0.015em;
          color: var(--ink);
          margin: 0 0 32px;
          max-width: 540px;
        }
        .ds-body {
          column-count: 1;
          font-size: 16.5px;
          line-height: 1.75;
          color: var(--ink-2);
          max-width: 640px;
        }
        .ds-body p { margin: 0 0 1.2em; }
        .ds-body p:first-child::first-letter {
          font-family: var(--serif-italic);
          font-style: italic;
          font-size: 5.2em;
          line-height: 0.85;
          float: left;
          margin: 0.05em 0.12em 0 0;
          color: var(--accent);
          font-weight: 500;
        }

        .ds-facts {
          background: var(--bg-elev);
          border-radius: 18px;
          padding: 32px;
          position: sticky;
          top: 100px;
        }
        .ds-facts h3 {
          font-family: var(--display);
          font-weight: 400;
          font-size: 20px;
          margin: 0 0 24px;
          color: var(--ink);
        }
        .ds-fact {
          display: flex; justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
          font-size: 13.5px;
        }
        .ds-fact:last-child { border-bottom: 0; }
        .ds-fact .l { color: var(--ink-3); }
        .ds-fact .v { color: var(--ink); font-weight: 500; }
      `}</style>
      <div className="container ds-wrap">
        <div className="ds-grid">
          <div>
            <div className="ds-eye">01 — La casa</div>
            <h2 className="ds-h">Tres patios encadenados. Ciento <em>treinta años</em> de pátina.</h2>
            <div className="ds-body">
              <p>Tres patios marcan el ritmo de esta casa de 1894. El primero da paso al recibidor con piso de pasta hidráulica original y muros de mampostería de un metro de espesor. El segundo, sombreado por un ramón de cuarenta años, conecta cocina y comedor bajo bóveda catalana. El tercero — el más privado — recibe a la alberca tibia, la palapa de huano y la suite principal.</p>
              <p>La restauración corrió a cargo del estudio del arq. Salvador Reyes entre 2021 y 2023. Se conservaron pisos, herrerías, marquetería de cedro y la fachada original; se introdujeron sistemas de A/C inverter, iluminación domótica y una cisterna de 15,000 L con bomba de presión constante.</p>
              <p>El programa actual ofrece cuatro recámaras (dos con vestidor), tres baños y medio, sala formal, family room conectado al patio, cocina abierta con isla y desayunador, y una suite principal con boudoir y baño con tina libre. Hay además un estudio independiente con baño que funciona como cuarto de huéspedes o home office.</p>
              <p>Documentación al día: escrituras inscritas en RPP, predial vigente, certificado de libertad de gravamen, y constancia INAH para fachada. Se aceptan ofertas con financiamiento internacional o fideicomiso bancario.</p>
            </div>
          </div>

          <aside className="ds-facts">
            <h3>Ficha técnica</h3>
            <div className="ds-fact"><span className="l">Código MLD</span>           <span className="v">{PROPERTY.code}</span></div>
            <div className="ds-fact"><span className="l">Año de construcción</span>  <span className="v">{PROPERTY.year}</span></div>
            <div className="ds-fact"><span className="l">Año de restauración</span>  <span className="v">{PROPERTY.restored}</span></div>
            <div className="ds-fact"><span className="l">Frente</span>               <span className="v">{PROPERTY.facade} m</span></div>
            <div className="ds-fact"><span className="l">Fondo</span>                <span className="v">{PROPERTY.depth} m</span></div>
            <div className="ds-fact"><span className="l">Construcción</span>         <span className="v">{PROPERTY.m2} m²</span></div>
            <div className="ds-fact"><span className="l">Terreno</span>              <span className="v">{PROPERTY.lot} m²</span></div>
            <div className="ds-fact"><span className="l">Recámaras</span>            <span className="v">{PROPERTY.beds} (2 con vestidor)</span></div>
            <div className="ds-fact"><span className="l">Baños</span>                <span className="v">{PROPERTY.baths}</span></div>
            <div className="ds-fact"><span className="l">Estacionamientos</span>     <span className="v">{PROPERTY.parking} techados</span></div>
            <div className="ds-fact"><span className="l">Alberca</span>              <span className="v">4.5 × 9 m, tibia</span></div>
            <div className="ds-fact"><span className="l">Régimen</span>              <span className="v">Propiedad individual</span></div>
            <div className="ds-fact"><span className="l">Predial 2026</span>         <span className="v">MXN 38,400 / año</span></div>
            <div className="ds-fact"><span className="l">Mantenimiento</span>        <span className="v">No aplica</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <section data-screen-label="Características">
      <style>{`
        .fe-wrap { padding: 60px 0; background: var(--bg-elev); }
        .fe-head { display: flex; justify-content: space-between; align-items: end; gap: 32px; margin-bottom: 48px; flex-wrap: wrap; }
        .fe-head .e { color: var(--accent); font-size: 11.5px; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; margin-bottom: 12px; }
        .fe-head h2 {
          font-family: var(--display); font-weight: 300;
          font-size: clamp(32px, 3.4vw, 48px);
          letter-spacing: -0.015em; line-height: 1.05;
          color: var(--ink); margin: 0;
        }
        .fe-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: white;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--line);
        }
        @media (max-width: 980px) { .fe-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .fe-grid { grid-template-columns: 1fr; } }
        .fe-col {
          padding: 32px;
          border-right: 1px solid var(--line);
        }
        .fe-col:last-child { border-right: 0; }
        @media (max-width: 980px) {
          .fe-col { border-right: 0; border-bottom: 1px solid var(--line); }
          .fe-col:nth-child(odd) { border-right: 1px solid var(--line); }
          .fe-col:nth-last-child(-n+2) { border-bottom: 0; }
        }
        .fe-cat {
          font-family: var(--display);
          font-size: 18px; font-weight: 500;
          color: var(--ink);
          margin: 0 0 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--line);
          display: flex; align-items: center; justify-content: space-between;
        }
        .fe-cat .num {
          font-family: var(--mono); font-size: 11px;
          color: var(--accent); letter-spacing: 0.16em;
        }
        .fe-items { display: flex; flex-direction: column; gap: 12px; }
        .fe-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: var(--ink-2);
          line-height: 1.45;
        }
        .fe-item .ck {
          width: 16px; height: 16px; flex-shrink: 0;
          margin-top: 2px;
          color: var(--accent);
        }
      `}</style>
      <div className="container fe-wrap">
        <div className="fe-head">
          <div>
            <div className="e">02 — Lo que incluye</div>
            <h2>Cada detalle pensado, cada acabado <em>elegido</em>.</h2>
          </div>
          <a href="#" className="btn-pill ghost">Descargar inventario completo (PDF)</a>
        </div>
        <div className="fe-grid">
          {FEATURES.map((cat, i) => (
            <div className="fe-col" key={cat.cat}>
              <div className="fe-cat">
                <span>{cat.cat}</span>
                <span className="num">0{i+1}</span>
              </div>
              <div className="fe-items">
                {cat.items.map(it => (
                  <div className="fe-item" key={it}>
                    <svg className="ck" viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloorMap() {
  return (
    <section data-screen-label="Plano y ubicación">
      <style>{`
        .fm-wrap { padding: 80px 0; }
        .fm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 900px) { .fm-grid { grid-template-columns: 1fr; } }
        .fm-card {
          background: white;
          border: 1px solid var(--line);
          border-radius: 18px;
          overflow: hidden;
        }
        .fm-card-head {
          padding: 20px 24px;
          display: flex; justify-content: space-between; align-items: center;
          border-bottom: 1px solid var(--line);
        }
        .fm-card-head h3 {
          margin: 0; font-family: var(--display);
          font-size: 18px; font-weight: 500; color: var(--ink);
        }
        .fm-tabs { display: flex; gap: 4px; padding: 3px; background: var(--bg-elev); border-radius: 999px; }
        .fm-tabs button {
          padding: 6px 14px; font-size: 12px; font-weight: 500;
          border: 0; background: transparent; color: var(--ink-2);
          border-radius: 999px;
        }
        .fm-tabs button.on { background: white; color: var(--ink); box-shadow: 0 1px 3px rgba(0,0,0,.08); }
        .fm-body { height: 440px; position: relative; }

        /* Stylized map — light tones, brand pin */
        .map-svg {
          width: 100%; height: 100%;
          background: linear-gradient(180deg, #F2F7F7, #E8EFEF);
        }
        .map-pin {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -100%);
          color: var(--accent);
          filter: drop-shadow(0 6px 12px rgba(63,187,176,0.4));
        }
        .map-pin .ring {
          position: absolute; left: 50%; bottom: -4px;
          width: 80px; height: 22px;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(63,187,176,0.25), transparent);
          transform: translateX(-50%);
        }
        .map-info {
          position: absolute;
          left: 24px; bottom: 24px;
          background: white;
          padding: 14px 18px;
          border-radius: 14px;
          box-shadow: var(--shadow-1);
          font-size: 13px;
          min-width: 240px;
        }
        .map-info .e { font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 4px; }
        .map-info .a { font-family: var(--display); font-size: 16px; font-weight: 500; color: var(--ink); }
        .map-info .d { font-size: 12px; color: var(--ink-2); margin-top: 6px; }
        .map-controls {
          position: absolute;
          right: 18px; top: 18px;
          display: flex; flex-direction: column; gap: 4px;
        }
        .map-controls button {
          width: 32px; height: 32px;
          background: white; border: 1px solid var(--line);
          border-radius: 8px; cursor: pointer;
          font-size: 14px; color: var(--ink-2);
        }

        .fp-body { height: 440px; padding: 24px; }
        .fp-body image-slot { width: 100%; height: 100%; display: block; }
        .fp-legend {
          padding: 16px 24px;
          background: var(--bg-elev);
          border-top: 1px solid var(--line);
          display: flex; gap: 20px; font-size: 12px; color: var(--ink-3);
          letter-spacing: 0.04em;
        }
        .fp-legend span b { color: var(--ink); font-weight: 500; }
      `}</style>
      <div className="container fm-wrap">
        <div className="fm-grid">
          {/* Floorplan card */}
          <div className="fm-card">
            <div className="fm-card-head">
              <h3>Plano arquitectónico</h3>
              <div className="fm-tabs">
                <button className="on">Planta baja</button>
                <button>Planta alta</button>
                <button>Azotea</button>
              </div>
            </div>
            <div className="fp-body">
              <ImgSlot id="slot-prop-P-01-floorplan" placeholder="Plano arquitectónico · planta baja" src="assets/official/menu/Menu_Centro.jpg" fit="contain"/>
            </div>
            <div className="fp-legend">
              <span>Escala <b>1:100</b></span>
              <span>Const. <b>248 m² PB</b></span>
              <span>Norte <b>↑</b></span>
            </div>
          </div>

          {/* Map card */}
          <div className="fm-card">
            <div className="fm-card-head">
              <h3>Ubicación</h3>
              <a href="#" style={{fontSize:13, color:'var(--accent)', fontWeight:500}}>Abrir en Google Maps →</a>
            </div>
            <div className="fm-body">
              <StylizedMap />
              <div className="map-pin">
                <svg width="36" height="46" viewBox="0 0 36 46" fill="none">
                  <path d="M18 2C9.7 2 3 8.7 3 17c0 11 15 27 15 27s15-16 15-27c0-8.3-6.7-15-15-15z" fill="currentColor"/>
                  <circle cx="18" cy="17" r="6" fill="white"/>
                </svg>
                <div className="ring"></div>
              </div>
              <div className="map-info">
                <div className="e">Ubicación</div>
                <div className="a">{PROPERTY.street}</div>
                <div className="d">{PROPERTY.neighborhood} · 3 cuadras de la Plaza Grande</div>
              </div>
              <div className="map-controls">
                <button>+</button>
                <button>−</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StylizedMap() {
  // Simple light street-grid map illustration.
  return (
    <svg className="map-svg" viewBox="0 0 600 440" preserveAspectRatio="xMidYMid slice">
      <rect width="600" height="440" fill="#F2F7F7"/>
      {/* major roads */}
      {[60, 140, 220, 300, 380].map(y => (
        <line key={'h'+y} x1="0" y1={y} x2="600" y2={y} stroke="#D9E2E2" strokeWidth="2"/>
      ))}
      {[80, 180, 280, 380, 480].map(x => (
        <line key={'v'+x} x1={x} y1="0" x2={x} y2="440" stroke="#D9E2E2" strokeWidth="2"/>
      ))}
      {/* minor roads */}
      {Array.from({length: 20}, (_, i) => (
        <line key={'h2'+i} x1="0" y1={(i+1)*22} x2="600" y2={(i+1)*22} stroke="#E5ECEC" strokeWidth="0.6"/>
      ))}
      {Array.from({length: 24}, (_, i) => (
        <line key={'v2'+i} x1={(i+1)*25} y1="0" x2={(i+1)*25} y2="440" stroke="#E5ECEC" strokeWidth="0.6"/>
      ))}
      {/* park blocks */}
      <rect x="220" y="160" width="80" height="60" fill="#DDEADB" rx="2"/>
      <rect x="380" y="280" width="60" height="60" fill="#DDEADB" rx="2"/>
      {/* main plaza */}
      <rect x="250" y="200" width="40" height="40" fill="#C8DBC6" rx="2"/>
      <text x="270" y="225" fontSize="9" fill="#5C7B5A" textAnchor="middle" fontFamily="Inter">Plaza</text>
      {/* labels */}
      <text x="140" y="80" fontSize="10" fill="#8A9090" fontFamily="Inter" letterSpacing="0.5">CALLE 47</text>
      <text x="20" y="220" fontSize="10" fill="#8A9090" fontFamily="Inter" letterSpacing="0.5" transform="rotate(-90 20 220)">CALLE 64</text>
    </svg>
  );
}

function ContactForm() {
  return (
    <section data-screen-label="Contacto agente">
      <style>{`
        .cf-wrap { padding: 80px 0; background: var(--bg-elev); }
        .cf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 900px) { .cf-grid { grid-template-columns: 1fr; gap: 40px; } }
        .cf-eye { color: var(--accent); font-size: 11.5px; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; margin-bottom: 14px; }
        .cf-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(34px, 3.6vw, 52px);
          line-height: 1.05; letter-spacing: -0.015em;
          color: var(--ink);
          margin: 0 0 28px;
        }
        .cf-lede { font-size: 16px; color: var(--ink-2); line-height: 1.6; margin: 0 0 32px; max-width: 460px; }
        .cf-agent {
          display: flex; gap: 18px; align-items: center;
          padding: 20px;
          background: white;
          border-radius: 16px;
          border: 1px solid var(--line);
        }
        .cf-agent .av {
          width: 72px; height: 72px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
        }
        .cf-agent .av image-slot { width: 100%; height: 100%; display: block; }
        .cf-agent .nm { font-family: var(--display); font-size: 18px; font-weight: 500; color: var(--ink); }
        .cf-agent .rl { font-size: 13px; color: var(--ink-3); margin-top: 3px; }
        .cf-agent .ch { display: flex; gap: 12px; margin-top: 10px; font-size: 12.5px; color: var(--ink-2); }
        .cf-agent .ch b { color: var(--ink); font-weight: 500; }

        .cf-form {
          background: white;
          border-radius: 18px;
          padding: 32px;
          border: 1px solid var(--line);
        }
        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        @media (max-width: 540px) { .cf-row { grid-template-columns: 1fr; } }
        .cf-field label {
          display: block; font-size: 11.5px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ink-3); margin-bottom: 6px;
          font-weight: 500;
        }
        .cf-field input, .cf-field textarea {
          width: 100%;
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 12px 14px;
          font-family: inherit; font-size: 14.5px;
          color: var(--ink);
          background: var(--bg-soft);
          outline: none;
          transition: border-color .15s;
        }
        .cf-field input:focus, .cf-field textarea:focus {
          border-color: var(--accent);
          background: white;
        }
        .cf-field textarea { resize: vertical; min-height: 100px; }
        .cf-actions {
          display: flex; gap: 12px; align-items: center;
          margin-top: 8px;
        }
        .cf-actions .btn-pill { flex: 1; justify-content: center; padding: 14px; }
        .cf-fine { font-size: 11.5px; color: var(--ink-3); margin-top: 14px; line-height: 1.5; }
      `}</style>
      <div className="container cf-wrap">
        <div className="cf-grid">
          <div>
            <div className="cf-eye">03 — Pregunta lo que quieras</div>
            <h2 className="cf-h">¿Lista para conocer<br/>la casa <em>en persona</em>?</h2>
            <p className="cf-lede">
              Andrea está disponible para una visita guiada esta misma semana, o para resolver dudas por WhatsApp en menos de una hora.
            </p>
            <div className="cf-agent">
              <div className="av">
                <ImgSlot id="slot-agent-andrea" placeholder="Merida Living" src="assets/official/brand/favico.png" shape="circle"/>
              </div>
              <div>
                <div className="nm">{AGENT.name}</div>
                <div className="rl">{AGENT.role}</div>
                <div className="ch"><span><b>14</b> años</span><span><b>{AGENT.langs}</b></span></div>
              </div>
            </div>
          </div>

          <form className="cf-form" onSubmit={e => e.preventDefault()}>
            <div className="cf-row">
              <div className="cf-field"><label>Nombre</label><input placeholder="Tu nombre"/></div>
              <div className="cf-field"><label>Apellido</label><input placeholder="Tu apellido"/></div>
            </div>
            <div className="cf-row">
              <div className="cf-field"><label>Email</label><input type="email" placeholder="hola@correo.com"/></div>
              <div className="cf-field"><label>WhatsApp</label><input placeholder="+52 999 …"/></div>
            </div>
            <div className="cf-field" style={{marginBottom:16}}>
              <label>Mensaje</label>
              <textarea placeholder={`Hola Andrea, me interesa ${PROPERTY.name}. Quisiera saber…`} defaultValue={`Hola Andrea, me interesa Casa Tres Patios (MLD-2111). ¿Sería posible visitarla este fin de semana?`}/>
            </div>
            <div className="cf-actions">
              <button className="btn-pill">Enviar mensaje</button>
              <a href="#" className="btn-pill ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4A11 11 0 0 0 4 19l-1 4 4-1a11 11 0 1 0 13-18zm-8 18a9 9 0 0 1-4.6-1.3l-3.3.9.9-3.2A9 9 0 1 1 12 22z"/></svg>
                WhatsApp
              </a>
            </div>
            <div className="cf-fine">Respondemos en horario CDMX, lunes a sábado 9–19h. No compartimos tus datos con terceros.</div>
          </form>
        </div>
      </div>
    </section>
  );
}

function SimilarProps() {
  const { PROPERTIES } = window.MLD;
  const similar = PROPERTIES.filter(p => p.id !== "P-01").slice(0, 3);
  return (
    <section style={{padding:'80px 0'}} data-screen-label="Propiedades similares">
      <style>{`
        .sp-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 40px; gap: 24px; flex-wrap: wrap; }
        .sp-head h2 { font-family: var(--display); font-weight: 300; font-size: clamp(32px, 3.4vw, 48px); letter-spacing: -0.015em; margin: 0; color: var(--ink); }
        .sp-head .e { color: var(--accent); font-size: 11.5px; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; margin-bottom: 12px; }
        .sp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        @media (max-width: 900px) { .sp-grid { grid-template-columns: 1fr; } }
        .sp-card {
          display: flex; flex-direction: column; gap: 16px;
        }
        .sp-card .img {
          aspect-ratio: 4/3; border-radius: 14px; overflow: hidden;
          border: 1px solid var(--line);
        }
        .sp-card .img image-slot { width: 100%; height: 100%; display: block; }
        .sp-card .nm { font-family: var(--display); font-size: 22px; font-weight: 500; color: var(--ink); letter-spacing: -0.005em; margin: 0; }
        .sp-card .lc { font-size: 13px; color: var(--ink-3); display: flex; gap: 8px; align-items: center; }
        .sp-card .pr {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 14px; border-top: 1px solid var(--line);
        }
        .sp-card .pr .price { font-family: var(--display); font-size: 20px; font-weight: 500; color: var(--ink); }
        .sp-card .pr .link { font-size: 13px; color: var(--accent); font-weight: 500; }
      `}</style>
      <div className="container">
        <div className="sp-head">
          <div>
            <div className="e">04 — Quizás también te guste</div>
            <h2>Otras casas con <em>carácter</em>.</h2>
          </div>
          <a href="index.html" className="btn-pill ghost">Ver catálogo completo →</a>
        </div>
        <div className="sp-grid">
          {similar.map(p => (
            <a className="sp-card" key={p.id} href="property.html">
              <div className="img">
                <ImgSlot id={`slot-${p.id}-cover`} placeholder={`Foto · ${p.name}`} src={OFFICIAL_SIMILAR_IMAGES[p.id]}/>
              </div>
              <div className="lc">
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M7 1a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2"/></svg>
                {p.neighborhood} · {p.type}
              </div>
              <h3 className="nm">{p.name}</h3>
              <div className="pr">
                <span className="price">USD {(p.priceUSD/1000).toFixed(0)}k</span>
                <span className="link">Ver ficha →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── App root ─────────────────────────────────────────────────────────
const { useEffect: useEffectP, useState: useStateP } = React;

const ACCENT_OPTS_P = [
  { value: 'teal',   color: '#3FBBB0' },
  { value: 'purple', color: '#5B4B95' },
  { value: 'orange', color: '#E8A33D' },
  { value: 'red',    color: '#D34245' },
  { value: 'green',  color: '#3DA77F' },
];

function PropertyApp() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS__);
  const [lang, setLangState] = useStateP(() => localStorage.getItem('ml-lang') || 'en');
  const setLang = (nextLang) => {
    setLangState(nextLang);
    localStorage.setItem('ml-lang', nextLang);
  };

  useEffectP(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.type = t.type;
  }, [t.accent, t.type]);

  useEffectP(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const accentColor = ACCENT_OPTS_P.find(o => o.value === t.accent)?.color || '#3FBBB0';
  const handleAccent = (hex) => {
    const m = ACCENT_OPTS_P.find(o => o.color === hex);
    if (m) setTweak('accent', m.value);
  };

  return (
    <MLLangContext.Provider value={{ lang, setLang, copy: ML_COPY[lang] }}>
      <TopBar />
      <PropertyBreadcrumb />
      <PropertyHeroGallery />
      <PropertyOverview />
      <Description />
      <FeaturesGrid />
      <FloorMap />
      <ContactForm />
      <SimilarProps />
      <Footer />
      <WhatsFloat />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color de acento">
          <TweakColor
            label="Faceta"
            value={accentColor}
            options={ACCENT_OPTS_P.map(o => o.color)}
            onChange={handleAccent}
          />
        </TweakSection>
        <TweakSection label="Tipografía">
          <TweakRadio
            label="Sistema"
            value={t.type}
            options={[
              { value: 'brand',   label: 'Marca' },
              { value: 'classic', label: 'Clásico' },
              { value: 'modern',  label: 'Moderno' },
            ]}
            onChange={v => setTweak('type', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </MLLangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<PropertyApp />);
