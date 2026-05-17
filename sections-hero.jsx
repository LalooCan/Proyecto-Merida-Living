// Top bar + Hero + advanced search

function TopBar() {
  const { lang, setLang, copy } = useMLLang();
  const links = window.ML_LINKS || {};
  return (
    <header className="topbar" data-screen-label="Top Bar">
      <div className="container topbar-inner">
        <BrandLockup size={40} sub="Beyond Real Estate" />
        <nav className="nav">
          <a className="active" href={links.properties || "index.html#properties"}>{copy.navProperties}</a>
          <a href={links.exclusive || "index.html#properties"}>{copy.navExclusive}</a>
          <a href={links.centro || "index.html#neighborhoods"}>{copy.navCentro}</a>
          <a href={links.beach || "index.html#properties"}>{copy.navBeach}</a>
          <a href={links.rentals || "index.html#contact"}>{copy.navRentals}</a>
          <a href={links.blog || "index.html#journal"}>{copy.navBlog}</a>
        </nav>
        <div style={{display:'flex', alignItems:'center', gap:18}}>
          <div className="lang">
            <button className={lang === "es" ? "on" : ""} type="button" onClick={() => setLang("es")}>ES</button>
            <span>·</span>
            <button className={lang === "en" ? "on" : ""} type="button" onClick={() => setLang("en")}>EN</button>
          </div>
          <a className="btn-pill" href={links.whatsappVisit || "#"} target="_blank" rel="noreferrer">{copy.visit}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { copy } = useMLLang();
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot"></span>
              {copy.heroEyebrow}
            </div>
            <h1 className="hero-h1">
              {copy.heroTitle}
            </h1>
            <p className="hero-lede">
              {copy.heroLede}
            </p>
            <div className="hero-meta">
              <div>
                <div className="k">187</div>
                <div className="l">{copy.operations}</div>
              </div>
              <div>
                <div className="k">14 <span style={{color:'var(--ink-3)', fontSize:'18px', fontWeight:400}}>{copy.years}</span></div>
                <div className="l">{copy.experience}</div>
              </div>
              <div>
                <div className="k" style={{fontSize:'22px', fontWeight:500}}>ES · EN · FR</div>
                <div className="l">{copy.multilingual}</div>
              </div>
            </div>
          </div>

          <div className="hero-vis">
            <div className="hero-arch">
              <image-slot id="slot-home-hero" placeholder="Foto hero · Proyecto en Garcia Gineres" src="assets/official/casas/2026-05-05_10-27-49_House_0.jpg" style={{width:'100%', height:'100%', display:'block'}}></image-slot>
            </div>
            <div className="hero-tag"><span className="dot"></span>{copy.tour}</div>
            <div className="hero-card">
              <div className="hc-eyebrow">{copy.listing}</div>
              <div className="hc-name">Garcia Gineres Fixer Upper</div>
              <div style={{fontSize:13, color:'var(--ink-3)'}}>García Ginerés · MLD-2130 · 224 m²</div>
              <div className="hc-row">
                <span className="hc-price">USD 143k</span>
                <span className="hc-cta">{copy.viewListing}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="search-wrap">
          <div className="search-cell">
            <div className="sc-label">{copy.want}</div>
            <div className="sc-value">{copy.buy}
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <div className="search-cell">
            <div className="sc-label">{copy.type}</div>
            <div className="sc-value">{copy.colonial}
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <div className="search-cell">
            <div className="sc-label">{copy.zone}</div>
            <div className="sc-value">{copy.centro}
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <div className="search-cell">
            <div className="sc-label">{copy.budget}</div>
            <div className="sc-value">USD 300k – 800k
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
          </div>
          <button className="search-go" type="button" onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            {copy.search}
          </button>
        </div>

        <div className="quicks">
          {copy.quicks.map((quick) => <button className="quick" type="button" key={quick}>{quick}</button>)}
        </div>
      </div>
    </section>
  );
}

window.TopBar = TopBar;
window.Hero = Hero;
