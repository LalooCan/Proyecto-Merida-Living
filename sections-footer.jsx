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
    <a href={links.whatsapp || "#"} target="_blank" rel="noreferrer" style={{
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
