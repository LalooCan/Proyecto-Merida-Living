// Top bar + Hero + advanced search

function scrollToMLHash(hash, behavior = 'smooth') {
  if (!hash) return false;
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  const el = document.getElementById(id);
  if (!el) return false;
  const topbar = document.querySelector('.topbar');
  const topbarH = topbar ? topbar.getBoundingClientRect().height : 0;
  const cs = window.getComputedStyle(el);
  const paddingTop = parseFloat(cs.paddingTop) || 0;
  const gap = id === 'catalog' ? 2 : 18;
  const y = el.getBoundingClientRect().top + window.scrollY + paddingTop - topbarH - gap;
  window.scrollTo({ top: Math.max(0, y), behavior });
  return true;
}

function handleMLAnchorClick(e, href) {
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin || !url.hash) return;
  e.preventDefault();
  window.history.pushState(null, '', url.hash);
  scrollToMLHash(url.hash);
}

function TopBar() {
  const { lang, setLang, copy } = useMLLang();
  const links = window.ML_LINKS || {};
  const nav = {
    properties: links.properties || "index.html#catalog",
    exclusive: links.exclusive || "index.html#properties",
    centro: links.centro || "index.html#neighborhoods",
    beach: links.agents || links.beach || "index.html#agents",
    rentals: links.rentals || "index.html#contact",
    blog: links.blog || "index.html#journal",
  };
  return (
    <>
    <header className="topbar" data-screen-label="Top Bar">
      <div className="container topbar-inner">
        <BrandLockup size={40} sub="Beyond Real Estate" />
        <nav className="nav">
          <a className="active" href={nav.properties} onClick={(e) => handleMLAnchorClick(e, nav.properties)}>{copy.navProperties}</a>
          <a href={nav.exclusive} onClick={(e) => handleMLAnchorClick(e, nav.exclusive)}>{copy.navExclusive}</a>
          <a href={nav.centro} onClick={(e) => handleMLAnchorClick(e, nav.centro)}>{copy.navCentro}</a>
          <a href={nav.beach} onClick={(e) => handleMLAnchorClick(e, nav.beach)}>{copy.navBeach}</a>
          <a href={nav.rentals} onClick={(e) => handleMLAnchorClick(e, nav.rentals)}>{copy.navRentals}</a>
          <a href={nav.blog} onClick={(e) => handleMLAnchorClick(e, nav.blog)}>{copy.navBlog}</a>
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
    <div className="topbar-spacer" aria-hidden="true"></div>
    </>
  );
}

function SearchMenu({ id, value, options, open, onToggle, onChange }) {
  const selected = options.find(([optionValue]) => optionValue === value) || options[0];
  return (
    <div className="sc-menu-wrap">
      <button className="sc-menu-trigger" type="button" onClick={() => onToggle(open ? null : id)} aria-expanded={open}>
        <span>{selected ? selected[1] : ""}</span>
        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round"/></svg>
      </button>
      {open && (
        <div className="sc-menu" role="listbox">
          {options.map(([optionValue, label]) => (
            <button
              className={optionValue === value ? "on" : ""}
              type="button"
              key={optionValue}
              role="option"
              aria-selected={optionValue === value}
              onClick={() => {
                onChange(optionValue);
                onToggle(null);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Hero() {
  const { copy, lang } = useMLLang();
  const [criteria, setCriteria] = React.useState({
    q: "",
    type: "all",
    zone: "all",
    budget: "all",
  });
  const [openMenu, setOpenMenu] = React.useState(null);
  const updateCriteria = (key, value) => setCriteria((current) => ({ ...current, [key]: value }));
  const runSearch = (nextCriteria = criteria) => {
    window.dispatchEvent(new CustomEvent("ml-property-search", { detail: nextCriteria }));
    scrollToMLHash("#catalog");
  };
  const quickSearch = (quick) => {
    const text = quick.toLowerCase();
    const nextCriteria = {
      q: "",
      type: text.includes("hacienda") ? "hacienda" : "all",
      zone: "all",
      budget: text.includes("250") ? "under250" : "all",
    };
    if (text.includes("alberca") || text.includes("pool")) nextCriteria.q = lang === "es" ? "alberca" : "pool";
    if (text.includes("restaur")) nextCriteria.q = lang === "es" ? "restaurada" : "restored";
    if (text.includes("rentar") || text.includes("rental")) nextCriteria.q = lang === "es" ? "renta" : "rental";
    if (text.includes("pre")) nextCriteria.q = "pre";
    setCriteria(nextCriteria);
    runSearch(nextCriteria);
  };
  const typeOptions = lang === "es"
    ? [["all", "Todos"], ["colonial", "Colonial"], ["modern", "Moderna"], ["hacienda", "Hacienda"], ["apartment", "Departamento"]]
    : [["all", "All"], ["colonial", "Colonial"], ["modern", "Modern"], ["hacienda", "Hacienda"], ["apartment", "Apartment"]];
  const zoneOptions = [
    ["all", lang === "es" ? "Todas las zonas" : "All areas"],
    ["centro", copy.centro],
    ["santa lucia", "Santa Lucia"],
    ["santiago", "Santiago"],
    ["garcia", "Garcia Gineres"],
    ["norte", lang === "es" ? "Norte" : "North"],
    ["playa", lang === "es" ? "Playa" : "Beach"],
  ];
  const budgetOptions = lang === "es"
    ? [["all", "Cualquier presupuesto"], ["under250", "Menos de USD 250k"], ["250500", "USD 250k - 500k"], ["500800", "USD 500k - 800k"], ["over800", "Mas de USD 800k"]]
    : [["all", "Any budget"], ["under250", "Under USD 250k"], ["250500", "USD 250k - 500k"], ["500800", "USD 500k - 800k"], ["over800", "Over USD 800k"]];
  React.useEffect(() => {
    if (!openMenu) return undefined;
    const close = (event) => {
      if (event.key === "Escape") setOpenMenu(null);
      if (event.type === "pointerdown" && !event.target.closest(".sc-menu-wrap")) setOpenMenu(null);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("pointerdown", close);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("pointerdown", close);
    };
  }, [openMenu]);
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
              <image-slot id="slot-home-hero" placeholder="Foto hero · Casa Hacienda Dream Home" src="assets/official/casas/2129/2026-04-27_17-07-38_House_1.jpg" style={{width:'100%', height:'100%', display:'block'}}></image-slot>
            </div>
            <div className="hero-tag"><span className="dot"></span>{copy.tour}</div>
            <div className="hero-card">
              <div className="hc-eyebrow">{copy.listing}</div>
              <div className="hc-name">Casa Hacienda Dream Home</div>
              <div style={{fontSize:13, color:'var(--ink-3)'}}>Santiago / García Ginerés · MLD-2129 · 606 m²</div>
              <div className="hc-row">
                <span className="hc-price">USD 625k</span>
                <span className="hc-cta">{copy.viewListing}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="search-wrap">
          <div className="search-cell">
            <div className="sc-label">{copy.want}</div>
            <input
              className="sc-input"
              value={criteria.q}
              onChange={(e) => updateCriteria("q", e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") runSearch(); }}
              placeholder={lang === "es" ? "Nombre, codigo, zona..." : "Name, code, area..."}
            />
          </div>
          <div className="search-cell">
            <div className="sc-label">{copy.type}</div>
            <SearchMenu id="type" value={criteria.type} options={typeOptions} open={openMenu === "type"} onToggle={setOpenMenu} onChange={(value) => updateCriteria("type", value)} />
          </div>
          <div className="search-cell">
            <div className="sc-label">{copy.zone}</div>
            <SearchMenu id="zone" value={criteria.zone} options={zoneOptions} open={openMenu === "zone"} onToggle={setOpenMenu} onChange={(value) => updateCriteria("zone", value)} />
          </div>
          <div className="search-cell">
            <div className="sc-label">{copy.budget}</div>
            <SearchMenu id="budget" value={criteria.budget} options={budgetOptions} open={openMenu === "budget"} onToggle={setOpenMenu} onChange={(value) => updateCriteria("budget", value)} />
          </div>
          <button className="search-go" type="button" onClick={() => runSearch()}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            {copy.search}
          </button>
        </div>

        <div className="quicks">
          {copy.quicks.map((quick) => <button className="quick" type="button" key={quick} onClick={() => quickSearch(quick)}>{quick}</button>)}
        </div>
      </div>
    </section>
  );
}

window.TopBar = TopBar;
window.Hero = Hero;
window.scrollToMLHash = scrollToMLHash;
