// property.jsx — components for the featured property detail page.

const PROPERTY_IMAGE_MAP = {
  "P-01": [
    "assets/official/casas/2026-05-05_10-28-16_House_1.jpg",
    "assets/official/casas/2026-05-05_10-28-16_House_2.jpg",
    "assets/official/casas/2026-05-05_10-28-16_House_3.jpg",
    "assets/official/casas/2026-05-05_10-28-16_House_4.jpg",
    "assets/official/casas/2026-05-05_10-28-16_House_5.jpg",
  ],
  "P-02": [
    "assets/official/casas/2026-04-27_17-07-05_House_1.jpg",
    "assets/official/casas/2026-01-12_10-20-17_House_0.jpg",
    "assets/official/casas/2025-09-05_14-11-53_House_file1merida.jpg",
    "assets/official/casas/2026-02-20_09-44-49_House_0.jpg",
    "assets/official/casas/2026-02-27_16-23-45_House_principal.jpeg",
  ],
  "P-03": [
    "assets/official/casas/2026-05-14_12-20-10_House_20260502_143558.jpg",
    "assets/official/casas/2026-05-05_10-28-46_House_11.jpg",
    "assets/official/casas/2026-05-05_10-28-46_House_12.jpg",
    "assets/official/casas/2026-05-05_10-28-46_House_13.jpg",
    "assets/official/casas/2026-05-05_10-28-46_House_14.jpg",
  ],
  "P-04": [
    "assets/official/casas/2026-04-16_17-02-33_House__DSC1273.jpg",
    "assets/official/casas/2026-05-05_10-28-46_House_15.jpg",
    "assets/official/casas/2026-05-05_10-28-46_House_16.jpg",
    "assets/official/casas/2026-05-05_10-28-46_House_17.jpg",
    "assets/official/casas/2026-05-05_10-28-46_House_18.jpg",
  ],
  "P-05": [
    "assets/official/casas/2026-04-08_11-19-52_House_0.jpg",
    "assets/official/casas/2025-02-19_16-12-14_House_0.jpg",
    "assets/official/casas/2025-05-28_17-36-06_House_0.JPG",
    "assets/official/casas/2026-02-03_16-11-30_House_IMG_5954.jpeg",
    "assets/official/ambient/FotoAleatoria_21.jpg",
  ],
  "P-06": [
    "assets/official/casas/2026-03-11_12-55-51_House_13.jpg",
    "assets/official/casas/2026-03-09_12-55-13_House_meridahomerenovation1.png",
    "assets/official/casas/2026-05-05_10-28-16_House_6.jpg",
    "assets/official/casas/2026-05-05_10-28-16_House_7.jpg",
    "assets/official/casas/2026-05-05_10-28-16_House_8.jpg",
  ],
};

const PROPERTY_DETAIL_DEFAULTS = {
  year: null,
  restored: null,
  street: null,
  facade: null,
  depth: null,
};

function getSelectedProperty() {
  const params = new URLSearchParams(window.location.search);
  const requested = (params.get("id") || params.get("code") || "").trim().toLowerCase();
  const listings = (window.MLD_BY_LANG && window.MLD_BY_LANG.es && window.MLD_BY_LANG.es.PROPERTIES) || [];
  const fallback = listings[0] || {};
  const listing = listings.find((p) => {
    const fullCode = `mld-${p.code}`.toLowerCase();
    return p.id.toLowerCase() === requested || p.code.toLowerCase() === requested || fullCode === requested;
  }) || fallback;
  const gallery = PROPERTY_IMAGE_MAP[listing.id] || PROPERTY_IMAGE_MAP["P-01"];

  return {
    ...PROPERTY_DETAIL_DEFAULTS,
    ...listing,
    code: listing.code ? `MLD-${listing.code}` : "MLD",
    rawCode: listing.code,
    badge: listing.badge || null,
    gallery,
    cover: gallery[0],
  };
}

const PROPERTY = getSelectedProperty();

const AGENT = {
  name: "Carlos Betancourt",
  role: "Broker certificado",
  years: 10,
  langs: "ES · EN",
  phone: "+52 999 200 5794",
  email: "cbm893@hotmail.com",
};

// Web-component wrapper so JSX passes attributes through cleanly.
function ImgSlot({ id, placeholder, src, shape, radius, fit, style, className }) {
  return React.createElement('img', {
    id,
    src,
    alt: placeholder || "",
    className,
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: fit || "cover",
      borderRadius: shape === "circle" ? "50%" : radius,
      ...style
    }
  });
}

function fmtDetailUSD(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function fmtDetailMXN(n) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
}

function getPropertyUrl() {
  return `${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(PROPERTY.id)}`;
}

function getPropertyWhatsAppUrl() {
  const lang = document.documentElement.lang || "en";
  const phoneUrl = (window.ML_LINKS && window.ML_LINKS.whatsapp) || "https://wa.me/529992168413";
  const text = lang === "es"
    ? `Hola Merida Living, me interesa ${PROPERTY.name} (${PROPERTY.code}). Me gustaria recibir mas informacion.`
    : `Hi Merida Living, I'm interested in ${PROPERTY.name} (${PROPERTY.code}). I'd like to receive more information.`;
  return `${phoneUrl}?text=${encodeURIComponent(text)}`;
}

function saveProperty() {
  localStorage.setItem(`ml-saved-${PROPERTY.code}`, "true");
}

function shareProperty() {
  const payload = { title: PROPERTY.name, text: `${PROPERTY.name} - ${PROPERTY.code}`, url: getPropertyUrl() };
  if (navigator.share) {
    navigator.share(payload).catch(() => {});
    return;
  }
  navigator.clipboard?.writeText(payload.url);
}

// ── 1. Breadcrumb + tools ───────────────────────────────────────────
function Breadcrumb() {
  const { copy } = useMLLang();
  return (
    <nav data-screen-label="Breadcrumb">
      <div className="bc-wrap">
        <div className="container bc-inner">
          <div className="crumbs">
            <a href="index.html">{copy.bcHome}</a>
            <span className="sep">›</span>
            <a href="index.html">{copy.bcProperties}</a>
            <span className="sep">›</span>
            <a href="index.html#neighborhoods">{PROPERTY.neighborhood}</a>
            <span className="sep">›</span>
            <span className="here">{PROPERTY.name}</span>
          </div>
          <div className="tools">
            <button className="tool" type="button" onClick={saveProperty}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 12s-4.5-2.7-4.5-6A2.5 2.5 0 0 1 7 4a2.5 2.5 0 0 1 4.5 2c0 3.3-4.5 6-4.5 6z" stroke="currentColor" strokeWidth="1.3"/></svg>
              {copy.save}
            </button>
            <button className="tool" type="button" onClick={shareProperty}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="3.5" cy="7" r="1.5" stroke="currentColor"/><circle cx="10.5" cy="3.5" r="1.5" stroke="currentColor"/><circle cx="10.5" cy="10.5" r="1.5" stroke="currentColor"/><path d="M4.8 6.3l4.4-1.8M4.8 7.7l4.4 1.8" stroke="currentColor"/></svg>
              {copy.share}
            </button>
            <button className="tool icon-only" type="button" aria-label={copy.share} onClick={() => window.print()}>
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
  const { copy } = useMLLang();
  const gallery = PROPERTY.gallery || [];
  const [hero, g2, g3, g4, g5] = gallery;
  return (
    <section data-screen-label="Galería principal">
      <div className="container-wide hg-wrap">
        <div className="hg-grid" style={{position:'relative'}}>
          <div className="hg-big" style={{position:'relative'}}>
            <ImgSlot
              id={`slot-prop-${PROPERTY.id}-hero`}
              placeholder="Fachada principal · foto hero"
              src={hero}
              style={{width:'100%', height:'100%', display:'block'}}
            />
            <div className="hg-floating">
              <span className="hg-tag code">{PROPERTY.code}</span>
              <span className="hg-tag live"><span className="dot"></span>{copy.galleryTour}</span>
            </div>
          </div>
          <ImgSlot id={`slot-prop-${PROPERTY.id}-g2`} placeholder="Fachada lateral" src={g2 || hero} style={{width:'100%', height:'100%', display:'block'}}/>
          <ImgSlot id={`slot-prop-${PROPERTY.id}-g3`} placeholder="Interiores" src={g3 || hero} style={{width:'100%', height:'100%', display:'block'}}/>
          <ImgSlot id={`slot-prop-${PROPERTY.id}-g4`} placeholder="Patio y obra" src={g4 || hero} style={{width:'100%', height:'100%', display:'block'}}/>
          <div className="hg-more">
            <ImgSlot id={`slot-prop-${PROPERTY.id}-g5`} placeholder="Galería" src={g5 || hero} style={{width:'100%', height:'100%', display:'block'}}/>
            <div className="hg-more-overlay">
              <div className="n">+19</div>
              <div className="l">{copy.galleryViewAll}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 3. Overview: title, price, specs, sticky agent rail ───────────────
function Overview() {
  const { copy } = useMLLang();
  const { data } = useMLData();
  const langProp = data.PROPERTIES.find(p => p.code === PROPERTY.rawCode) || data.PROPERTIES[0];
  return (
    <section data-screen-label="Resumen de la propiedad">
      <div className="container ov-wrap">
        <div className="ov-grid">
          <div>
            <div className="ov-eye">
              <span className="dot"></span>
              {langProp.badge || PROPERTY.badge}
              <span style={{color:'var(--ink-3)', letterSpacing: '0.16em'}}>· {copy.ovCode} {PROPERTY.code}</span>
            </div>
            <h1 className="ov-h">{PROPERTY.name}</h1>
            <div className="ov-sub">
              <span className="pin">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{display:'inline-block', verticalAlign:'-2px', marginRight:6}}><path d="M7 1a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="5" r="1.3" fill="currentColor"/></svg>
                {PROPERTY.neighborhood}
              </span>
              {PROPERTY.street && (
                <>
                  <span style={{color:'var(--line-2)'}}>·</span>
                  <span>{PROPERTY.street}</span>
                </>
              )}
              <span style={{color:'var(--line-2)'}}>·</span>
              <span>{langProp.type || PROPERTY.type}</span>
              {PROPERTY.year && (
                <>
                  <span style={{color:'var(--line-2)'}}>·</span>
                  <span><em style={{color:'var(--accent)', fontStyle:'italic', fontFamily:'var(--serif-italic)'}}>circa {PROPERTY.year}</em></span>
                </>
              )}
            </div>

            <div className="ov-specs">
              <Spec icon={<IconBed/>}      k={PROPERTY.beds}    l={copy.ovSpecBeds}/>
              <Spec icon={<IconBath/>}     k={PROPERTY.baths}   l={copy.ovSpecBaths}/>
              <Spec icon={<IconArea/>}     k={PROPERTY.m2}      l={copy.ovSpecBuilt}/>
              <Spec icon={<IconLot/>}      k={PROPERTY.lot}     l={copy.ovSpecLot}/>
              <Spec icon={<IconCar/>}      k={PROPERTY.parking} l={copy.ovSpecCars}/>
            </div>
          </div>

          <aside className="ov-rail">
            <div className="price-card">
              <div className="pc-eye">{copy.ovListPrice}</div>
              <div className="pc-usd">{fmtDetailUSD(PROPERTY.priceUSD)}</div>
              <div className="pc-mxn">≈ <b>{fmtDetailMXN(PROPERTY.priceMXN)}</b> · {copy.ovExchangeNote}</div>
              <div className="pc-rule"></div>

              <div className="agent-row">
                <div className="av">
                  <ImgSlot id="slot-agent-carlos" placeholder="Carlos Betancourt" src="assets/official/agents/CB03.jpg" shape="circle"/>
                </div>
                <div>
                  <div className="nm">{AGENT.name}</div>
                  <div className="rl">{copy.agentRole}</div>
                </div>
              </div>

              <div className="cta-stack">
                <a className="btn-pill btn-wa" href={getPropertyWhatsAppUrl()} target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4A11 11 0 0 0 4 19l-1 4 4-1a11 11 0 1 0 13-18zm-8 18a9 9 0 0 1-4.6-1.3l-3.3.9.9-3.2A9 9 0 1 1 12 22zm5.2-6.6c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1a7.4 7.4 0 0 1-3.6-3.1c-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>
                  WhatsApp · {AGENT.phone}
                </a>
                <a className="btn-pill dark" href="#contact">{copy.ovBookVisit}</a>
                <a className="btn-pill ghost" href="#features">{copy.ovRequestPDF}</a>
              </div>

              <div className="meta-strip">
                <div><div className="ml">{copy.ovMetaDays}</div><div className="mv">{copy.ovMetaDaysVal}</div></div>
                <div><div className="ml">{copy.ovMetaViews}</div><div className="mv">{copy.ovMetaViewsVal}</div></div>
                <div><div className="ml">{copy.ovMetaVisits}</div><div className="mv">{copy.ovMetaVisitsVal}</div></div>
                <div><div className="ml">{copy.ovMetaUpdate}</div><div className="mv">{copy.ovMetaUpdateVal}</div></div>
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
window.PROPERTY_IMAGE_MAP = PROPERTY_IMAGE_MAP;
