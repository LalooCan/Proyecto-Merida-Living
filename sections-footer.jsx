// CTA final + Footer + WhatsApp floating

function FinalCTA() {
  const { copy } = useMLLang();
  const links = window.ML_LINKS || {};
  return (
    <section id="contact" style={{padding:'120px 0'}} data-screen-label="CTA final">
      <div className="container">
        <div className="cta-wrap">
          <div>
            <div className="cta-eye">{copy.ctaEye}</div>
            <h2 className="cta-h">{copy.ctaTitle}</h2>
            <p className="cta-lede">{copy.ctaLede}</p>
          </div>
          <form className="cta-card" onSubmit={(e) => { e.preventDefault(); window.open(links.whatsappVisit || links.whatsapp || "#", "_blank", "noopener,noreferrer"); }}>
            <label>{copy.labelName}</label>
            <input className="cta-input" name="name" placeholder={copy.placeName} autoComplete="name" />
            <label>{copy.labelContact}</label>
            <input className="cta-input" name="contact" placeholder={copy.placeContact} autoComplete="email" />
            <label>{copy.labelLooking}</label>
            <div className="cta-row">
              <span className="cta-chip is-on">{copy.chipBuy}</span>
              <span className="cta-chip">{copy.chipSell}</span>
              <span className="cta-chip">{copy.chipRent}</span>
              <span className="cta-chip">{copy.chipAdvice}</span>
            </div>
            <label>{copy.labelBudget}</label>
            <div className="cta-row">
              <span className="cta-chip">&lt; 200k</span>
              <span className="cta-chip is-on">200k – 500k</span>
              <span className="cta-chip">500k – 1M</span>
              <span className="cta-chip">1M +</span>
            </div>
            <button className="cta-submit" type="submit">{copy.ctaSubmit}</button>
            <div className="cta-fine">{copy.ctaFine}</div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { copy } = useMLLang();
  const links = window.ML_LINKS || {};
  const exploreLinks = [links.properties, links.properties, links.centro, links.properties, links.properties];
  const serviceLinks = [links.whatsappVisit, links.whatsappVisit, links.rentals, links.whatsappVisit, links.whatsappVisit];
  const contactLinks = [links.email, links.whatsapp, links.whatsappVisit, links.blog, links.email];
  return (
    <footer data-screen-label="Footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <BrandLockup size={44} sub="Beyond Real Estate" />
            <p className="foot-tag">{copy.footAddress}</p>
            <div className="foot-soc" style={{marginTop:24}}>
              <a href={links.instagram || "#"} target="_blank" rel="noreferrer" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="1.5" width="11" height="11" rx="3" stroke="currentColor"/><circle cx="7" cy="7" r="2.5" stroke="currentColor"/><circle cx="10" cy="4" r="0.6" fill="currentColor"/></svg></a>
              <a href={links.whatsapp || "#"} target="_blank" rel="noreferrer" aria-label="WhatsApp"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12l1-3a5 5 0 1 1 2 2l-3 1z" stroke="currentColor" strokeLinejoin="round"/></svg></a>
              <a href={links.youtube || "#"} target="_blank" rel="noreferrer" aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3" width="11" height="8" rx="2" stroke="currentColor"/><path d="M6 5.5l3 1.5-3 1.5z" fill="currentColor"/></svg></a>
            </div>
          </div>
          <div>
            <div className="foot-h">{copy.footExplore}</div>
            <div className="foot-list">
              {copy.footExploreLinks.map((l, i) => <a key={l} href={exploreLinks[i] || "index.html"}>{l}</a>)}
            </div>
          </div>
          <div>
            <div className="foot-h">{copy.footServices}</div>
            <div className="foot-list">
              {copy.footServicesLinks.map((l, i) => <a key={l} href={serviceLinks[i] || links.whatsappVisit || "#"}>{l}</a>)}
            </div>
          </div>
          <div>
            <div className="foot-h">{copy.footContact}</div>
            <div className="foot-list">
              {copy.footContactLinks.map((l, i) => <a key={l} href={contactLinks[i] || links.email || "#"}>{l}</a>)}
              <a className="footer-admin-btn" href="admin.html">Panel administradores</a>
            </div>
          </div>
        </div>
        <div className="big-word">Mérida</div>
        <div className="foot-bottom">
          <div>{copy.footCopyright}</div>
          <div className="legal">
            <a href={links.site || "#"}>{copy.footPrivacy}</a>
            <a href={links.site || "#"}>{copy.footTerms}</a>
            <a href={links.site || "#"}>{copy.footLegal}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsFloat() {
  const links = window.ML_LINKS || {};
  return (
    <a className="whats-float" href={links.whatsapp || "#"} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

window.FinalCTA = FinalCTA;
window.Footer = Footer;
window.WhatsFloat = WhatsFloat;
