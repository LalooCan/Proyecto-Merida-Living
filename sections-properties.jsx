// Property highlight + grid + neighborhoods

const IMAGE_MAP = (window.ML_LISTINGS && window.ML_LISTINGS.IMAGE_MAP) || {};

function QuickGallery({ p, onClose }) {
  const gallery = IMAGE_MAP[p.id] || [];
  const [active, setActive] = React.useState(0);
  const move = (step) => setActive(cur => (cur + step + gallery.length) % gallery.length);
  const thumbsRef = React.useRef(null);
  const drag = React.useRef({ on: false, startX: 0, scrollLeft: 0 });
  const onThumbDown = (e) => {
    const el = thumbsRef.current; if (!el) return;
    drag.current = { on: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = 'grabbing';
  };
  const onThumbMove = (e) => {
    if (!drag.current.on) return;
    const el = thumbsRef.current; if (!el) return;
    e.preventDefault();
    el.scrollLeft = drag.current.scrollLeft - (e.pageX - el.offsetLeft - drag.current.startX);
  };
  const onThumbUp = () => { drag.current.on = false; if (thumbsRef.current) thumbsRef.current.style.cursor = ''; };

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [gallery.length]);

  if (!gallery.length) return null;
  return (
    <div className="gallery-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
      <div className="gallery-backdrop" onClick={onClose}></div>
      <div className="gallery-shell">
        <div className="gallery-top">
          <div className="gallery-header-inline">
            <span className="gallery-kicker">MLD-{p.code}</span>
            <span className="gallery-title">{p.name}</span>
          </div>
          <div className="gallery-count">{active + 1} / {gallery.length}</div>
          <button className="gallery-close" type="button" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="gallery-stage">
          <button className="gallery-arrow prev" type="button" onClick={() => move(-1)} aria-label="Previous">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <img src={gallery[active]} alt={`${p.name} ${active + 1}`} />
          <button className="gallery-arrow next" type="button" onClick={() => move(1)} aria-label="Next">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="gallery-thumbs" ref={thumbsRef}
          onMouseDown={onThumbDown} onMouseMove={onThumbMove}
          onMouseUp={onThumbUp} onMouseLeave={onThumbUp}>
          {gallery.map((src, i) => (
            <button className={i === active ? "on" : ""} type="button" key={src} onClick={() => setActive(i)} aria-label={`Image ${i + 1}`}>
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function fmtUSD(n) {
  if (n >= 1000000) return "USD " + (n/1000000).toFixed(2).replace(/\.?0+$/,'') + "M";
  return "USD " + (n/1000).toFixed(0) + "k";
}
function fmtMXN(n) {
  return "MXN " + (n/1000000).toFixed(2) + "M";
}

const PROPERTY_COVER_IMAGES = (window.ML_LISTINGS && window.ML_LISTINGS.COVER_IMAGES) || {};

function SectionHead({ eyebrow, title, kicker, right }) {
  return (
    <div className="section-head">
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
  const { copy } = useMLLang();
  const [galleryOpen, setGalleryOpen] = React.useState(false);
  const gallery = IMAGE_MAP[p.id] || [];
  const newLabel = copy.navProperties === "Properties" ? "New" : "Nueva";
  const detailUrl = `property.html?id=${encodeURIComponent(p.id)}`;
  const isInteractiveTarget = (target) => {
    return Boolean(target && target.closest && target.closest("a, button, input, textarea, select, [role='dialog']"));
  };
  const openDetail = () => {
    window.location.href = detailUrl;
  };
  const openDetailWithKeyboard = (e) => {
    if (isInteractiveTarget(e.target)) return;
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    openDetail();
  };
  return (
    <article
      className={"pcard " + (big ? "pcard--big" : "")}
      data-screen-label={`Property · ${p.name}`}
      role="link"
      tabIndex="0"
      onClick={(e) => { if (!isInteractiveTarget(e.target)) openDetail(); }}
      onKeyDown={openDetailWithKeyboard}
      aria-label={`${copy.viewListing}: ${p.name}`}
    >
      <div className="pmedia">
        <img src={PROPERTY_COVER_IMAGES[p.id] || ""} alt={p.name} loading={big ? "eager" : "lazy"} />
        {p.badge && <span className="ribbon">{p.badge}</span>}
        {p.isNew && <span className="ribbon is-new">{newLabel}</span>}
        {p.code && <span className="code">MLD-{p.code}</span>}
        <button className="heart" type="button" aria-label={copy.save} onClick={(e) => e.stopPropagation()}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 12s-4.5-2.7-4.5-6A2.5 2.5 0 0 1 7 4a2.5 2.5 0 0 1 4.5 2c0 3.3-4.5 6-4.5 6z" stroke="currentColor" strokeWidth="1.3"/></svg>
        </button>
        {gallery.length > 0 && (
          <button className="pcard-photos" type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setGalleryOpen(true); }}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.2"/><path d="M5 3l.8-1.5h2.4L9 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
            {gallery.length} {copy.navProperties === "Properties" ? "photos" : "fotos"}
          </button>
        )}
      </div>
      {galleryOpen && <QuickGallery p={p} onClose={() => setGalleryOpen(false)} />}
      <div className="pbody">
        <div className="ploc">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1a3 3 0 0 0-3 3c0 2.2 3 5 3 5s3-2.8 3-5a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="1"/><circle cx="5" cy="4" r="1" fill="currentColor"/></svg>
          {p.neighborhood} · {p.type}
        </div>
        <h3 className="pname">{p.name}</h3>
        {big && <p className="psum">{p.summary}</p>}
        <div className="pspecs">
          {p.beds > 0 && <span><b>{p.beds}</b> {copy.unitBeds}</span>}
          {p.baths > 0 && <span><b>{p.baths}</b> {copy.unitBaths}</span>}
          {p.m2 > 0 && <span><b>{p.m2}</b> {copy.unitM2Built}</span>}
          {p.lot > 0 && <span><b>{p.lot.toLocaleString()}</b> {copy.unitM2Lot}</span>}
          {p.parking > 0 && <span><b>{p.parking}</b> {copy.unitParking}</span>}
          {p.pool && <span>{copy.unitPool}</span>}
        </div>
        <div className="pfoot">
          <div>
            <div className="pprice">{fmtUSD(p.priceUSD)}</div>
            <div className="pprice-sub">{fmtMXN(p.priceMXN)} · MX</div>
          </div>
          <a className="plink" href={detailUrl} onClick={(e) => e.stopPropagation()}>{copy.viewListing}</a>
        </div>
      </div>
    </article>
  );
}

function FeaturedSection() {
  const { copy, data } = useMLData();
  const { PROPERTIES } = data;
  const featured = [PROPERTIES[1], PROPERTIES[0], PROPERTIES[2], PROPERTIES[4]].filter(Boolean);
  return (
    <section id="properties" className="featured" style={{padding:'120px 0 40px'}} data-screen-label="Propiedades destacadas">
      <div className="container">
        <SectionHead
          eyebrow={{num: copy.featuredNum, text: copy.featuredText}}
          title={copy.featuredTitle}
          kicker={copy.featuredKicker}
        />
        <div className="featured-grid">
          {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function normalizeSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function propertyMatchesType(p, type) {
  if (!type || type === "all") return true;
  const text = normalizeSearch([p.type, p.badge, p.name, p.summary].join(" "));
  if (type === "colonial") return text.includes("colonial") || text.includes("hacienda") || text.includes("restaur");
  if (type === "modern") return text.includes("modern") || text.includes("contempor") || text.includes("nueva") || text.includes("new");
  if (type === "hacienda") return text.includes("hacienda") || text.includes("quinta");
  if (type === "apartment") return text.includes("departamento") || text.includes("condo") || text.includes("apartment");
  return true;
}

function propertyMatchesZone(p, zone) {
  if (!zone || zone === "all") return true;
  const text = normalizeSearch([p.neighborhood, p.type, p.name, p.summary].join(" "));
  if (zone === "centro") return text.includes("centro") || text.includes("santa lucia") || text.includes("santiago") || text.includes("garcia") || text.includes("chembech") || text.includes("san cristobal");
  if (zone === "norte") return text.includes("norte") || text.includes("north") || text.includes("montecristo") || text.includes("campestre");
  if (zone === "playa") return text.includes("playa") || text.includes("beach") || text.includes("progreso") || text.includes("chelem") || text.includes("chicxulub");
  return text.includes(normalizeSearch(zone));
}

function propertyMatchesBudget(p, budget) {
  const price = Number(p.priceUSD) || 0;
  if (!budget || budget === "all" || !price) return true;
  if (budget === "under250") return price < 250000;
  if (budget === "250500") return price >= 250000 && price <= 500000;
  if (budget === "500800") return price > 500000 && price <= 800000;
  if (budget === "over800") return price > 800000;
  return true;
}

function filterProperties(properties, criteria) {
  const active = criteria || {};
  const q = normalizeSearch(active.q);
  return properties.filter((p) => {
    const haystack = normalizeSearch([
      p.id, p.code, p.name, p.neighborhood, p.type, p.badge, p.summary,
      p.pool ? "pool alberca" : "",
      p.parking ? "parking estacionamiento" : "",
    ].join(" "));
    return (!q || haystack.includes(q))
      && propertyMatchesType(p, active.type)
      && propertyMatchesZone(p, active.zone)
      && propertyMatchesBudget(p, active.budget);
  });
}

function CatalogStrip() {
  const { copy, data } = useMLData();
  const { PROPERTIES } = data;
  const [showAll, setShowAll] = React.useState(false);
  const [criteria, setCriteria] = React.useState({ q: "", type: "all", zone: "all", budget: "all" });
  const hasCriteria = Boolean(criteria.q || criteria.type !== "all" || criteria.zone !== "all" || criteria.budget !== "all");
  const filteredProperties = filterProperties(PROPERTIES, criteria);
  const visibleProperties = hasCriteria || showAll ? filteredProperties : filteredProperties.slice(0, 6);
  const setCatalogType = (type) => {
    setShowAll(true);
    setCriteria((current) => ({ ...current, type }));
  };
  React.useEffect(() => {
    const onSearch = (event) => {
      setCriteria({ q: "", type: "all", zone: "all", budget: "all", ...(event.detail || {}) });
      setShowAll(true);
    };
    window.addEventListener("ml-property-search", onSearch);
    return () => window.removeEventListener("ml-property-search", onSearch);
  }, []);
  const countType = (type) => filterProperties(PROPERTIES, { q: "", type, zone: "all", budget: "all" }).length;
  return (
    <section id="catalog" className="catalog-section" data-screen-label="Catálogo">
      <div className="container">
        <div className="catalog-bar">
          <div className="catalog-filters">
            <button className={"cf " + (criteria.type === "all" ? "is-active" : "")} type="button" onClick={() => setCatalogType("all")}>{copy.filterAll} <span className="ct">({PROPERTIES.length})</span></button>
            <button className={"cf " + (criteria.type === "colonial" ? "is-active" : "")} type="button" onClick={() => setCatalogType("colonial")}>{copy.filterColonial} <span className="ct">({countType("colonial")})</span></button>
            <button className={"cf " + (criteria.type === "modern" ? "is-active" : "")} type="button" onClick={() => setCatalogType("modern")}>{copy.filterModern} <span className="ct">({countType("modern")})</span></button>
            <button className={"cf " + (criteria.type === "hacienda" ? "is-active" : "")} type="button" onClick={() => setCatalogType("hacienda")}>{copy.filterHacienda} <span className="ct">({countType("hacienda")})</span></button>
            <button className={"cf " + (criteria.type === "apartment" ? "is-active" : "")} type="button" onClick={() => setCatalogType("apartment")}>{copy.filterApt} <span className="ct">({countType("apartment")})</span></button>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--ink-3)'}}>
            <span>{copy.sortLabel}</span>
            <span style={{color:'var(--ink)', fontWeight:500}}>{copy.sortRecent}</span>
          </div>
        </div>
        {hasCriteria && (
          <div className="catalog-status">
            {filteredProperties.length} {copy.navProperties === "Properties" ? "matching properties" : "propiedades encontradas"}
            <button type="button" onClick={() => { setCriteria({ q: "", type: "all", zone: "all", budget: "all" }); setShowAll(false); }}>
              {copy.navProperties === "Properties" ? "Clear search" : "Limpiar busqueda"}
            </button>
          </div>
        )}
        <div className="catalog-grid">
          {visibleProperties.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
        {!visibleProperties.length && (
          <div className="catalog-empty">{copy.navProperties === "Properties" ? "No properties match that search yet." : "No hay propiedades que coincidan con esa busqueda."}</div>
        )}
        {!hasCriteria && !showAll && filteredProperties.length > visibleProperties.length && (
          <div className="catalog-more">
            <button type="button" onClick={() => setShowAll(true)}>{copy.viewAllProps}</button>
          </div>
        )}
      </div>
    </section>
  );
}

function Neighborhoods() {
  const { copy, data } = useMLData();
  const { NEIGHBORHOODS } = data;
  return (
    <section style={{padding:'120px 0 40px'}} data-screen-label="Barrios">
      <div id="neighborhoods" className="container">
        <SectionHead
          eyebrow={{num: copy.nbNum, text: copy.nbText}}
          title={copy.nbTitle}
          kicker={copy.nbKicker}
        />
        <div className="nb-wrap">
          <div className="nb-grid">
            {NEIGHBORHOODS.map(n => (
              <div className="nb-cell" key={n.name}>
                <div className="nbh">
                  <div className="nbn">{n.name}</div>
                  <div className="nbc">{n.count} {copy.nbProps}</div>
                </div>
                <div className="nbb">{n.blurb}</div>
                <div className="nblink">{copy.nbExplore}</div>
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
