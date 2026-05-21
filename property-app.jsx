// property-app.jsx — remaining property sections + page root.

function Description() {
  const { copy, data } = useMLData();
  const langProp = data.PROPERTIES.find(p => p.code === PROPERTY.rawCode) || data.PROPERTIES[0] || {};
  const facts = { ...PROPERTY, ...langProp };
  return (
    <section data-screen-label="Descripción">
      <div className="container ds-wrap">
        <div className="ds-grid">
          <div>
            <div className="ds-eye">{copy.dsEye}</div>
            <h2 className="ds-h">{PROPERTY.name}{copy.dsTitleSuffix}</h2>
            <div className="ds-body">
              <p>{langProp.summary || PROPERTY.summary}</p>
              <p>{copy.dsPara2}</p>
              <p>{copy.dsPara3}</p>
              <p>{copy.dsPara4}</p>
            </div>
          </div>

          <aside className="ds-facts">
            <h3>{copy.dsFactsTitle}</h3>
            <div className="ds-fact"><span className="l">{copy.dsMldCode}</span>    <span className="v">{PROPERTY.code}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsYear}</span>       <span className="v">{facts.year || copy.detailByConfirm}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsCondition}</span>  <span className="v">{facts.condition || copy.dsConditionVal}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsFacade}</span>     <span className="v">{facts.facade || copy.detailByConfirm}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsDepth}</span>      <span className="v">{facts.depth || copy.detailByConfirm}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsBuiltArea}</span>  <span className="v">{facts.m2} m²</span></div>
            <div className="ds-fact"><span className="l">{copy.dsLotLabel}</span>   <span className="v">{facts.lot} m²</span></div>
            <div className="ds-fact"><span className="l">{copy.dsBedsLabel}</span>  <span className="v">{facts.beds}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsBathsLabel}</span> <span className="v">{facts.baths}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsParkingLabel}</span><span className="v">{facts.parking}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsPoolLabel}</span>  <span className="v">{facts.pool ? copy.dsPoolYes : copy.dsPoolNo}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsRegime}</span>     <span className="v">{facts.ownership || copy.dsRegimeVal}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsDelivery}</span>   <span className="v">{facts.delivery || copy.dsDeliveryVal}</span></div>
            <div className="ds-fact"><span className="l">{copy.dsInclusions}</span> <span className="v">{facts.inclusions || copy.dsInclusionsVal}</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const { copy, lang } = useMLLang();
  const customFeatures = PROPERTY.features && (PROPERTY.features[lang] || PROPERTY.features.en || PROPERTY.features.es);
  const FEATURES = customFeatures && customFeatures.length ? customFeatures : copy.feCategories;
  return (
    <section id="features" data-screen-label="Características">
      <div className="container fe-wrap">
        <div className="fe-head">
          <div>
            <div className="e">{copy.feEye}</div>
            <h2>{copy.feTitle}</h2>
          </div>
          <a href="#contact" className="btn-pill ghost">{copy.feRequestPDF}</a>
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
  const { copy } = useMLLang();
  const mapQuery = getPropertyMapQuery(PROPERTY);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`;
  const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  return (
    <section data-screen-label="Plano y ubicación">
      <div className="container fm-wrap">
        <div className="fm-grid">
          {/* Floorplan card */}
          <div className="fm-card">
            <div className="fm-card-head">
              <h3>{copy.fmFloorplan}</h3>
              <div className="fm-tabs">
                <button className="on" type="button">{copy.fmGroundFloor}</button>
                <button type="button">{copy.fmUpperFloor}</button>
                <button type="button">{copy.fmRooftop}</button>
              </div>
            </div>
            <div className="fp-body">
              <ImgSlot id="slot-prop-P-01-floorplan" placeholder="Plano arquitectónico · planta baja" src="assets/official/menu/Menu_Centro.jpg" fit="contain"/>
            </div>
            <div className="fp-legend">
              <span>{copy.fmScaleLabel} <b>1:100</b></span>
              <span>{copy.fmBuiltLabel} <b>248 m² PB</b></span>
              <span>{copy.fmNorthLabel} <b>↑</b></span>
            </div>
          </div>

          {/* Map card */}
          <div className="fm-card">
            <div className="fm-card-head">
              <h3>{copy.fmLocation}</h3>
              <a href={mapOpenUrl} target="_blank" rel="noreferrer" style={{fontSize:13, color:'var(--accent)', fontWeight:500}}>{copy.fmOpenMaps}</a>
            </div>
            <div className="fm-body">
              <iframe
                className="gmaps-frame"
                title={`${copy.fmLocation} · ${PROPERTY.name}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
              <div className="map-info">
                <div className="e">{copy.fmLocation}</div>
                <div className="a">{PROPERTY.neighborhood}</div>
                <div className="d">{PROPERTY.street || copy.fmApproxLocation} · {PROPERTY.code}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getPropertyMapQuery(property) {
  if (property.street) {
    return property.street;
  }
  const mapLocations = (window.ML_LISTINGS && window.ML_LISTINGS.MAP_LOCATIONS) || {};
  return mapLocations[property.id] || `${property.neighborhood}, Mérida, Yucatán, México`;
}

function ContactForm() {
  const { copy, lang } = useMLLang();
  const contactEmail = "meridaliving@hotmail.com";
  const whatsappUrl = getPropertyWhatsAppUrl();
  return (
    <section id="contact" data-screen-label="Contacto agente">
      <div className="container cf-wrap">
        <div className="cf-grid">
          <div>
            <div className="cf-eye">{copy.cfEye}</div>
            <h2 className="cf-h">{copy.cfTitle}</h2>
            <p className="cf-lede">{copy.cfLede}</p>
            <div className="cf-agent">
              <div className="av">
                <ImgSlot id="slot-agent-carlos" placeholder="Carlos Betancourt" src="assets/official/agents/CB03.jpg" shape="circle"/>
              </div>
              <div>
                <div className="nm">{AGENT.name}</div>
                <div className="rl">{copy.agentRole}</div>
                <div className="ch"><span><b>14</b> {copy.agentYears}</span><span><b>{AGENT.langs}</b></span></div>
              </div>
            </div>
          </div>

          <form className="cf-form" onSubmit={(e) => {
            e.preventDefault();
            const subject = encodeURIComponent(`${PROPERTY.name} - ${PROPERTY.code}`);
            const body = lang === "es"
              ? encodeURIComponent(`Hola Carlos, me interesa ${PROPERTY.name} (${PROPERTY.code}). Me gustaria agendar una visita.`)
              : encodeURIComponent(`Hi Carlos, I'm interested in ${PROPERTY.name} (${PROPERTY.code}). I'd like to schedule a visit.`);
            window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
          }}>
            <div className="cf-row">
              <div className="cf-field"><label>{copy.cfFieldName}</label><input name="firstName" autoComplete="given-name" placeholder={copy.cfFieldName}/></div>
              <div className="cf-field"><label>{copy.cfFieldLastName}</label><input name="lastName" autoComplete="family-name" placeholder={copy.cfFieldLastName}/></div>
            </div>
            <div className="cf-row">
              <div className="cf-field"><label>{copy.cfFieldEmail}</label><input name="email" type="email" autoComplete="email" placeholder={lang === "es" ? "hola@correo.com" : "hello@email.com"}/></div>
              <div className="cf-field"><label>{copy.cfFieldWhatsApp}</label><input name="phone" autoComplete="tel" placeholder="+52 999 …"/></div>
            </div>
            <div className="cf-field" style={{marginBottom:16}}>
              <label>{copy.cfFieldMsg}</label>
              <textarea name="message"
                placeholder={lang === "es" ? `Hola Carlos, me interesa ${PROPERTY.name}. Quisiera saber…` : `Hi Carlos, I'm interested in ${PROPERTY.name}. I'd like to know…`}
                defaultValue={lang === "es" ? `Hola Carlos, me interesa ${PROPERTY.name} (${PROPERTY.code}). ¿Sería posible visitarla este fin de semana?` : `Hi Carlos, I'm interested in ${PROPERTY.name} (${PROPERTY.code}). Would it be possible to visit this weekend?`}
              />
            </div>
            <div className="cf-actions">
              <button className="btn-pill" type="submit">{copy.cfSubmit}</button>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-pill ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4A11 11 0 0 0 4 19l-1 4 4-1a11 11 0 1 0 13-18zm-8 18a9 9 0 0 1-4.6-1.3l-3.3.9.9-3.2A9 9 0 1 1 12 22z"/></svg>
                WhatsApp
              </a>
            </div>
            <div className="cf-fine">{copy.cfFine}</div>
          </form>
        </div>
      </div>
    </section>
  );
}

function SimilarProps() {
  const { copy, data } = useMLData();
  const { PROPERTIES } = data;
  const similar = PROPERTIES.filter(p => p.id !== PROPERTY.id).slice(0, 3);
  const getSimilarImage = (p) => {
    const listings = window.ML_LISTINGS || {};
    const gallery = (listings.IMAGE_MAP && listings.IMAGE_MAP[p.id]) || [];
    return gallery[0] || (listings.COVER_IMAGES && listings.COVER_IMAGES[p.id]) || "";
  };
  return (
    <section style={{padding:'80px 0'}} data-screen-label="Propiedades similares">
      <div className="container">
        <div className="sp-head">
          <div>
            <div className="e">{copy.spEye}</div>
            <h2>{copy.spTitle}</h2>
          </div>
          <a href="index.html" className="btn-pill ghost">{copy.spViewAll}</a>
        </div>
        <div className="sp-grid">
          {similar.map(p => (
            <a className="sp-card" key={p.id} href={`property.html?id=${encodeURIComponent(p.id)}`}>
              <div className="img">
                <ImgSlot id={`slot-${p.id}-cover`} placeholder={`Foto · ${p.name}`} src={getSimilarImage(p)}/>
              </div>
              <div className="lc">
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M7 1a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.2"/></svg>
                {p.neighborhood} · {p.type}
              </div>
              <h3 className="nm">{p.name}</h3>
              <div className="pr">
                <span className="price">USD {(p.priceUSD/1000).toFixed(0)}k</span>
                <span className="link">{copy.spViewListing}</span>
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
  const [lang, setLangState] = useStateP(() => window.getMLStoredLang ? window.getMLStoredLang() : 'en');
  const setLang = (nextLang) => {
    if (nextLang !== 'es' && nextLang !== 'en') return;
    setLangState(nextLang);
    window.setMLStoredValue?.('ml-lang', nextLang);
  };

  useEffectP(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.type = t.type;
  }, [t.accent, t.type]);

  useEffectP(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffectP(() => {
    document.title = `${PROPERTY.name} — Mérida Living`;
  }, []);

  useEffectP(() => {
    if (!window.location.hash) return;
    setTimeout(() => window.scrollToMLHash?.(window.location.hash, 'auto'), 0);
  }, []);

  const accentColor = ACCENT_OPTS_P.find(o => o.value === t.accent)?.color || '#3FBBB0';
  const handleAccent = (hex) => {
    const m = ACCENT_OPTS_P.find(o => o.color === hex);
    if (m) setTweak('accent', m.value);
  };

  return (
    <MLLangContext.Provider value={{ lang, setLang, copy: ML_COPY[lang] || ML_COPY.en }}>
      <ErrorBoundary label="Top Bar"><TopBar /></ErrorBoundary>
      <ErrorBoundary label="Breadcrumb"><PropertyBreadcrumb /></ErrorBoundary>
      <ErrorBoundary label="Galería"><PropertyHeroGallery /></ErrorBoundary>
      <ErrorBoundary label="Resumen"><PropertyOverview /></ErrorBoundary>
      <ErrorBoundary label="Descripción"><Description /></ErrorBoundary>
      <ErrorBoundary label="Características"><FeaturesGrid /></ErrorBoundary>
      <ErrorBoundary label="Plano y mapa"><FloorMap /></ErrorBoundary>
      <ErrorBoundary label="Contacto"><ContactForm /></ErrorBoundary>
      <ErrorBoundary label="Propiedades similares"><SimilarProps /></ErrorBoundary>
      <ErrorBoundary label="Footer"><Footer /></ErrorBoundary>
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
