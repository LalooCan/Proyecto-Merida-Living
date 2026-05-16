// Why us + Services + Testimonials + Team + Stats

function WhyUs() {
  const { SERVICES, STATS } = window.MLD;
  return (
    <section style={{padding:'120px 0 40px'}} data-screen-label="Por qué nosotros">
      <style>{`
        .why-split {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 980px) { .why-split { grid-template-columns: 1fr; gap: 40px; } }
        .why-h {
          font-family: var(--display);
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 300; line-height: 1.0;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0;
          text-wrap: balance;
        }
        .why-h em { font-style: italic; color: var(--accent); }
        .why-lede {
          font-size: 17px; line-height: 1.6; color: var(--ink-2);
          margin: 32px 0; max-width: 460px;
        }
        .stat-block {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border-top: 1px solid var(--line);
        }
        .stat-cell {
          padding: 28px 0;
          border-bottom: 1px solid var(--line);
        }
        .stat-cell:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 24px; }
        .stat-cell:nth-child(even) { padding-left: 24px; }
        .stat-cell .sk {
          font-family: var(--display);
          font-size: 56px; line-height: 1;
          letter-spacing: -0.025em;
          color: var(--ink);
        }
        .stat-cell .sl {
          font-size: 13px; color: var(--ink-3);
          margin-top: 10px; max-width: 200px;
          line-height: 1.4;
        }

        .svc-list {
          display: grid; gap: 0;
          border-top: 1px solid var(--line);
        }
        .svc {
          display: grid;
          grid-template-columns: 64px 1fr auto;
          align-items: start;
          gap: 28px;
          padding: 28px 4px;
          border-bottom: 1px solid var(--line);
          transition: background .15s, padding .15s;
        }
        .svc:hover { background: var(--bg-elev); padding-left: 16px; padding-right: 16px; }
        .svc .sn {
          font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em;
          color: var(--accent); padding-top: 8px;
        }
        .svc .st {
          font-family: var(--display); font-size: 28px;
          letter-spacing: -0.01em; color: var(--ink);
          line-height: 1.1;
        }
        .svc .sd {
          color: var(--ink-2); font-size: 14.5px; line-height: 1.55;
          margin-top: 8px; max-width: 480px;
        }
        .svc .sarrow {
          color: var(--ink-3);
          padding-top: 14px; font-size: 18px;
          transition: color .15s, transform .15s;
        }
        .svc:hover .sarrow { color: var(--accent); transform: translateX(4px); }
      `}</style>
      <div className="container">
        <div className="why-split">
          <div>
            <div className="eyebrow" style={{display:'flex', alignItems:'center', gap:12, marginBottom:18}}>
              <span style={{fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.18em', color:'var(--accent)'}}>03 — Práctica</span>
              <span className="eyebrow">Por qué Mérida Living</span>
            </div>
            <h2 className="why-h">Atendemos<br/>como <em>notario</em>,<br/>recibimos como<br/><em>anfitrión</em>.</h2>
            <p className="why-lede">
              Catorce años en Yucatán. Un equipo de seis brokers, dos arquitectos y un abogado fiduciario en planta. Ningún cierre es un trámite — cada operación se diseña a la medida del comprador.
            </p>
            <div className="stat-block">
              {STATS.map(s => (
                <div className="stat-cell" key={s.label}>
                  <div className="sk">{s.k}</div>
                  <div className="sl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.18em', color:'var(--ink-3)', marginBottom: 32}}>
              SERVICIOS · CUATRO FRENTES
            </div>
            <div className="svc-list">
              {SERVICES.map(s => (
                <div className="svc" key={s.n}>
                  <div className="sn">{s.n}</div>
                  <div>
                    <div className="st">{s.title}</div>
                    <div className="sd">{s.body}</div>
                  </div>
                  <div className="sarrow">→</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { TESTIMONIALS } = window.MLD;
  return (
    <section style={{padding:'120px 0 40px'}} data-screen-label="Testimonios">
      <style>{`
        .tst-wrap {
          background: var(--ink);
          color: var(--bg);
          border-radius: 28px;
          padding: 80px 64px;
          position: relative;
          overflow: hidden;
        }
        [data-dark="true"] .tst-wrap { background: var(--surface); }
        @media (max-width: 720px) { .tst-wrap { padding: 48px 28px; } }
        .tst-quote-mark {
          position: absolute;
          top: 20px; right: 64px;
          font-family: var(--display);
          font-size: 240px;
          line-height: 1;
          color: var(--accent);
          opacity: 0.6;
        }
        .tst-h {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 28px;
          position: relative;
        }
        .tst-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 56px;
          position: relative;
        }
        @media (max-width: 980px) { .tst-grid { grid-template-columns: 1fr; gap: 40px; } }
        .tst-card .tq {
          font-family: var(--display);
          font-size: 22px;
          line-height: 1.4;
          font-weight: 400;
          letter-spacing: -0.005em;
          margin: 0 0 24px;
          color: var(--bg);
        }
        .tst-card .tline {
          width: 36px; height: 1px; background: var(--orange);
          margin-bottom: 16px;
        }
        .tst-card .ta {
          font-size: 14px; font-weight: 500; color: var(--bg);
        }
        .tst-card .td {
          font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.14em;
          text-transform: uppercase; color: #B0A89A;
          margin-top: 4px;
        }
      `}</style>
      <div className="container">
        <div className="tst-wrap">
          <div className="tst-quote-mark">”</div>
          <div className="tst-h">04 — Lo que dicen quienes ya compraron con nosotros</div>
          <div className="tst-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="tst-card" key={i}>
                <p className="tq">{t.quote}</p>
                <div className="tline"></div>
                <div className="ta">{t.author}</div>
                <div className="td">{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const { TEAM } = window.MLD;
  const { lang, copy } = useMLLang();
  const englishRoles = {
    "Andrea Pacheco": "Principal broker",
    "Rodrigo Cervera": "Historic homes",
    "Marisol Uc": "Haciendas and land",
    "Tom Whitfield": "International clients",
  };
  return (
    <section style={{padding:'120px 0 40px'}} data-screen-label="Equipo">
      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        @media (max-width: 900px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .team-grid { grid-template-columns: 1fr; } }
        .tm {
          display: flex; flex-direction: column; gap: 16px;
        }
        .tm-photo {
          aspect-ratio: 3/4;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--line);
          background:
            linear-gradient(135deg, rgba(63,187,176,.14), transparent 48%),
            linear-gradient(315deg, rgba(91,75,149,.12), transparent 52%),
            #f4f7f7;
          display: grid;
          place-items: center;
        }
        .tm-avatar {
          width: 112px;
          height: 112px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: white;
          border: 1px solid var(--line);
          color: var(--accent);
          font-family: var(--display);
          font-size: 38px;
          font-weight: 500;
          box-shadow: var(--shadow-1);
        }
        .tm:nth-child(2) .tm-avatar { color: var(--purple); }
        .tm:nth-child(3) .tm-avatar { color: var(--orange); }
        .tm:nth-child(4) .tm-avatar { color: var(--green); }
        .tm-name {
          font-family: var(--display); font-size: 24px;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0;
        }
        .tm-role {
          font-size: 13.5px; color: var(--ink-2);
        }
        .tm-meta {
          font-family: var(--mono); font-size: 10.5px;
          letter-spacing: 0.14em; color: var(--ink-3);
          padding-top: 12px; border-top: 1px solid var(--line);
          display: flex; justify-content: space-between;
        }
      `}</style>
      <div className="container">
        <SectionHead
          eyebrow={{num: copy.teamNum, text: copy.teamText}}
          title={copy.teamTitle}
          kicker={copy.teamKicker}
        />
        <div className="team-grid">
          {TEAM.map((t, i) => (
            <div className="tm" key={t.name}>
              <div className="tm-photo">
                <div className="tm-avatar">{t.name.split(' ').map(part => part[0]).join('').slice(0, 2)}</div>
              </div>
              <div>
                <h3 className="tm-name">{t.name}</h3>
                <div className="tm-role">{lang === 'en' ? englishRoles[t.name] : t.role}</div>
              </div>
              <div className="tm-meta">
                <span>{t.years} {copy.yearsInMid}</span>
                <span>{t.langs}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section style={{padding:'120px 0 40px'}} data-screen-label="Diario">
      <style>{`
        .jr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        @media (max-width: 900px) { .jr-grid { grid-template-columns: 1fr; } }
        .jr {
          display: flex; flex-direction: column; gap: 14px;
        }
        .jr-img {
          aspect-ratio: 4/3;
          border-radius: var(--r-lg);
          overflow: hidden;
          border: 1px solid var(--line);
        }
        .jr-img .ph { width:100%; height:100%; }
        .jr-meta {
          font-family: var(--mono); font-size: 10.5px;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--ink-3);
          display: flex; gap: 16px; align-items: center;
        }
        .jr-meta .cat { color: var(--accent); }
        .jr-title {
          font-family: var(--display); font-size: 26px;
          letter-spacing: -0.01em;
          color: var(--ink); margin: 0; line-height: 1.15;
        }
        .jr-blurb { font-size: 14.5px; color: var(--ink-2); line-height: 1.55; }
      `}</style>
      <div className="container">
        <SectionHead
          eyebrow={{num: "06 — Diario", text: "Lo que aprendemos vendiendo Mérida"}}
          title='Notas del <em>mercado</em>.'
          kicker="Reportes de plusvalía por colonia, guías de fideicomiso y reseñas de los barrios que estamos caminando esta temporada."
        />
        <div className="jr-grid">
          {[
            { cat: "Mercado", date: "Mayo 2026", title: "Cuánto subió el m² en el Centro este trimestre", blurb: "Comparamos 142 cierres reales contra precio de listing. La brecha se está cerrando." },
            { cat: "Guía",     date: "Abril 2026", title: "Fideicomiso vs. SRL: cuál te conviene en 2026", blurb: "Un comparativo claro para compradores extranjeros, con costos reales de notario." },
            { cat: "Barrio",   date: "Marzo 2026", title: "García Ginerés: por qué los franceses lo eligen", blurb: "Casas de los 50, sombra de laurel y dos kilómetros del Centro a pie." },
          ].map((j,i)=>(
            <article className="jr" key={i}>
              <div className="jr-img"><image-slot id={`slot-journal-${i}`} placeholder={`Diario · ${j.cat}`} src={`assets/official/ambient/FotoAleatoria_${i + 1}.jpg`} style={{width:'100%', height:'100%', display:'block'}}></image-slot></div>
              <div className="jr-meta">
                <span className="cat">{j.cat}</span>
                <span>{j.date}</span>
                <span>· 6 min de lectura</span>
              </div>
              <h3 className="jr-title">{j.title}</h3>
              <p className="jr-blurb">{j.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WhyUs = WhyUs;
window.Testimonials = Testimonials;
window.Team = Team;
window.Journal = Journal;
