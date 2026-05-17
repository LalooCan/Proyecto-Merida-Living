// Property highlight + grid + neighborhoods

function fmtUSD(n) {
  if (n >= 1000000) return "USD " + (n/1000000).toFixed(2).replace(/\.?0+$/,'') + "M";
  return "USD " + (n/1000).toFixed(0) + "k";
}
function fmtMXN(n) {
  return "MXN " + (n/1000000).toFixed(2) + "M";
}

const OFFICIAL_PROPERTY_IMAGES = {
  "P-01": "assets/official/casas/2026-05-05_10-27-49_House_0.jpg",
  "P-02": "assets/official/casas/2026-04-27_17-07-05_House_1.jpg",
  "P-03": "assets/official/casas/2026-05-14_12-20-10_House_20260502_143558.jpg",
  "P-04": "assets/official/casas/2026-04-16_17-02-33_House__DSC1273.jpg",
  "P-05": "assets/official/casas/2026-04-08_11-19-52_House_0.jpg",
  "P-06": "assets/official/casas/2026-03-11_12-55-51_House_13.jpg",
};

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
  const newLabel = copy.navProperties === "Properties" ? "New" : "Nueva";
  return (
    <article className={"pcard " + (big ? "pcard--big" : "")} data-screen-label={`Property · ${p.name}`}>
      <div className="pmedia">
        <img src={OFFICIAL_PROPERTY_IMAGES[p.id]} alt={p.name} loading={big ? "eager" : "lazy"} />
        {p.badge && <span className="ribbon">{p.badge}</span>}
        {p.isNew && <span className="ribbon is-new">{newLabel}</span>}
        {p.code && <span className="code">MLD-{p.code}</span>}
        <button className="heart" type="button" aria-label={copy.save}>
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
          <a className="plink" href={`property.html?id=${encodeURIComponent(p.id)}`}>{copy.viewListing}</a>
        </div>
      </div>
    </article>
  );
}

function FeaturedSection() {
  const { copy, data } = useMLData();
  const { PROPERTIES } = data;
  const hero = PROPERTIES[1]; // Hacienda
  const featured = [hero, PROPERTIES[0], PROPERTIES[2], PROPERTIES[4]];
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

function CatalogStrip() {
  const { copy, data } = useMLData();
  const { PROPERTIES } = data;
  return (
    <section id="catalog" style={{padding:'80px 0 40px'}} data-screen-label="Catálogo">
      <div className="container">
        <div className="catalog-bar">
          <div className="catalog-filters">
            <span className="cf is-active">{copy.filterAll} <span className="ct">({PROPERTIES.length * 47})</span></span>
            <span className="cf">{copy.filterColonial} <span className="ct">(184)</span></span>
            <span className="cf">{copy.filterModern} <span className="ct">(96)</span></span>
            <span className="cf">{copy.filterHacienda} <span className="ct">(22)</span></span>
            <span className="cf">{copy.filterApt} <span className="ct">(38)</span></span>
            <span className="cf">{copy.filterLand} <span className="ct">(72)</span></span>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:14, fontSize:13, color:'var(--ink-3)'}}>
            <span>{copy.sortLabel}</span>
            <span style={{color:'var(--ink)', fontWeight:500}}>{copy.sortRecent}</span>
          </div>
        </div>
        <div className="catalog-grid">
          {PROPERTIES.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
        <div className="catalog-more">
          <button type="button" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>{copy.viewAllProps}</button>
        </div>
      </div>
    </section>
  );
}

function Neighborhoods() {
  const { copy, data } = useMLData();
  const { NEIGHBORHOODS } = data;
  return (
    <section id="neighborhoods" style={{padding:'120px 0 40px'}} data-screen-label="Barrios">
      <div className="container">
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
