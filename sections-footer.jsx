// CTA final + Footer + WhatsApp floating

function FinalCTA() {
  return (
    <section style={{padding:'120px 0'}} data-screen-label="CTA final">
      <style>{`
        .cta-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: var(--accent);
          color: #FFF8EE;
          padding: 96px 64px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .cta-wrap { grid-template-columns: 1fr; padding: 56px 28px; }
        }
        .cta-eye {
          font-family: var(--mono); font-size: 11px; letter-spacing: 0.22em;
          text-transform: uppercase; color: #F2D9C0; margin-bottom: 24px;
        }
        .cta-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(40px, 6vw, 88px);
          line-height: 0.98;
          letter-spacing: -0.02em;
          color: #FFF8EE;
          margin: 0;
          text-wrap: balance;
        }
        .cta-h em { font-style: italic; color: #F6E2C7; }
        .cta-lede { color: #F2D9C0; font-size: 17px; line-height: 1.55; margin-top: 24px; max-width: 420px; }

        .cta-card {
          background: #FFF8EE;
          color: var(--ink);
          border-radius: 20px;
          padding: 28px;
        }
        .cta-card label {
          font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--ink-3);
          display: block; margin-top: 18px; margin-bottom: 8px;
        }
        .cta-card label:first-child { margin-top: 0; }
        .cta-input {
          width: 100%;
          border: 0;
          border-bottom: 1px solid var(--line-2);
          padding: 10px 0;
          background: transparent;
          font-size: 15px; color: var(--ink);
          font-family: inherit;
          outline: none;
        }
        .cta-input:focus { border-bottom-color: var(--accent); }
        .cta-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
        .cta-chip {
          padding: 7px 12px; border: 1px solid var(--line-2);
          border-radius: 999px; font-size: 12px; color: var(--ink-2);
          background: transparent;
        }
        .cta-chip.is-on { background: var(--accent); color: white; border-color: var(--accent); }
        .cta-submit {
          margin-top: 22px; width: 100%;
          padding: 16px;
          background: var(--ink); color: var(--bg);
          border: 0; border-radius: 12px;
          font-size: 14.5px; font-weight: 500;
          letter-spacing: 0.01em;
        }
        .cta-fine {
          font-size: 11px; color: var(--ink-3);
          margin-top: 14px; line-height: 1.5;
        }
      `}</style>
      <div className="container">
        <div className="cta-wrap">
          <div>
            <div className="cta-eye">07 — Empecemos por escuchar</div>
            <h2 className="cta-h">
              Cuéntanos qué<br/>
              casa <em>buscas</em>.<br/>
              Te llamamos en<br/>
              <em>24 horas</em>.
            </h2>
            <p className="cta-lede">
              Sin formulario interminable. Cinco campos, una llamada de 20 minutos y una primera selección de casas en tu correo el mismo día.
            </p>
          </div>
          <div className="cta-card">
            <label>Nombre</label>
            <input className="cta-input" placeholder="Tu nombre completo" />
            <label>Email o WhatsApp</label>
            <input className="cta-input" placeholder="hola@correo.com  · +52" />
            <label>Estoy buscando</label>
            <div className="cta-row">
              <span className="cta-chip is-on">Comprar</span>
              <span className="cta-chip">Vender</span>
              <span className="cta-chip">Rentar</span>
              <span className="cta-chip">Asesoría</span>
            </div>
            <label>Presupuesto aproximado</label>
            <div className="cta-row">
              <span className="cta-chip">&lt; 200k</span>
              <span className="cta-chip is-on">200k – 500k</span>
              <span className="cta-chip">500k – 1M</span>
              <span className="cta-chip">1M +</span>
            </div>
            <button className="cta-submit">Quiero que me llamen →</button>
            <div className="cta-fine">Respondemos en horario CDMX (GMT-6). No compartimos tus datos con terceros.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-screen-label="Footer">
      <style>{`
        footer { border-top: 1px solid var(--line); padding: 64px 0 40px; background: var(--bg-elev); }
        .foot-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        @media (max-width: 820px) { .foot-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .foot-grid { grid-template-columns: 1fr; } }
        .foot-brand .brand-name { font-size: 24px; }
        .foot-tag {
          margin-top: 18px; color: var(--ink-2); font-size: 14px;
          max-width: 320px; line-height: 1.55;
        }
        .foot-h {
          font-family: var(--mono); font-size: 10.5px;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ink-3); margin-bottom: 18px;
        }
        .foot-list { display: flex; flex-direction: column; gap: 12px; }
        .foot-list a { font-size: 14px; color: var(--ink-2); transition: color .15s; }
        .foot-list a:hover { color: var(--accent); }
        .foot-bottom {
          padding-top: 32px;
          border-top: 1px solid var(--line);
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
          font-family: var(--mono); font-size: 10.5px;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ink-3);
        }
        .foot-bottom .legal { display: flex; gap: 20px; }
        .foot-soc {
          display: flex; gap: 12px;
        }
        .foot-soc a {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid var(--line);
          display: grid; place-items: center;
          color: var(--ink-2);
        }
        .foot-soc a:hover { border-color: var(--accent); color: var(--accent); }
        .big-word {
          font-family: var(--serif-italic);
          font-size: clamp(80px, 18vw, 240px);
          line-height: 0.85;
          letter-spacing: -0.04em;
          color: var(--ink);
          opacity: 0.08;
          text-align: center;
          margin: 48px 0 0;
          font-style: italic;
          pointer-events: none;
          user-select: none;
        }
      `}</style>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <BrandLockup size={44} sub="Beyond Real Estate" />
            <p className="foot-tag">Calle 47 #482 entre 54 y 56, Centro, Mérida, Yucatán. Atendemos de lunes a sábado, 9 a 19 h.</p>
            <div className="foot-soc" style={{marginTop:24}}>
              <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="1.5" width="11" height="11" rx="3" stroke="currentColor"/><circle cx="7" cy="7" r="2.5" stroke="currentColor"/><circle cx="10" cy="4" r="0.6" fill="currentColor"/></svg></a>
              <a href="#" aria-label="WhatsApp"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12l1-3a5 5 0 1 1 2 2l-3 1z" stroke="currentColor" strokeLinejoin="round"/></svg></a>
              <a href="#" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3" width="11" height="8" rx="2" stroke="currentColor"/><path d="M6 5.5l3 1.5-3 1.5z" fill="currentColor"/></svg></a>
            </div>
          </div>
          <div>
            <div className="foot-h">Explora</div>
            <div className="foot-list">
              <a href="#">Propiedades</a>
              <a href="#">Haciendas</a>
              <a href="#">Barrios</a>
              <a href="#">Pre-ventas</a>
              <a href="#">Terrenos</a>
            </div>
          </div>
          <div>
            <div className="foot-h">Servicios</div>
            <div className="foot-list">
              <a href="#">Compra asistida</a>
              <a href="#">Venta curada</a>
              <a href="#">Renta vacacional</a>
              <a href="#">Restauración</a>
              <a href="#">Fideicomiso</a>
            </div>
          </div>
          <div>
            <div className="foot-h">Contacto</div>
            <div className="foot-list">
              <a href="#">hola@meridaliving.mx</a>
              <a href="#">+52 999 000 0000</a>
              <a href="#">Agenda una visita</a>
              <a href="#">Boletín mensual</a>
              <a href="#">Carreras</a>
            </div>
          </div>
        </div>
        <div className="big-word">Mérida</div>
        <div className="foot-bottom">
          <div>© 2026 Mérida Living · AMPI registro 4178</div>
          <div className="legal">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsFloat() {
  return (
    <a href="#" style={{
      position:'fixed', right: 24, bottom: 24, zIndex: 60,
      width: 56, height: 56, borderRadius: '50%',
      background: '#25D366', color: 'white',
      display:'grid', placeItems:'center',
      boxShadow: '0 10px 30px rgba(37,211,102,.45)',
    }} aria-label="WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M20 4A11 11 0 0 0 4 19l-1 4 4-1a11 11 0 1 0 13-18zm-8 18a9 9 0 0 1-4.6-1.3l-3.3.9.9-3.2A9 9 0 1 1 12 22zm5.2-6.6c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1a7.4 7.4 0 0 1-3.6-3.1c-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>
    </a>
  );
}

window.FinalCTA = FinalCTA;
window.Footer = Footer;
window.WhatsFloat = WhatsFloat;
