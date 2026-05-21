// Why us + Services + Testimonials + Team + Stats

function WhyUs() {
  const { copy, data } = useMLData();
  const { SERVICES, STATS } = data;
  return (
    <section style={{padding:'120px 0 40px'}} data-screen-label="Por qué nosotros">
      <div className="container">
        <div className="why-split">
          <div>
            <div className="eyebrow" style={{display:'flex', alignItems:'center', gap:12, marginBottom:18}}>
              <span style={{fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.18em', color:'var(--accent)'}}>{copy.whyNum}</span>
              <span className="eyebrow">{copy.whyText}</span>
            </div>
            <h2 className="why-h">{copy.whyTitle}</h2>
            <p className="why-lede">
              {copy.whyLede}
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
              {copy.servicesHeader}
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
  const { copy, data } = useMLData();
  const { TESTIMONIALS } = data;
  return (
    <section style={{padding:'120px 0 40px'}} data-screen-label="Testimonios">
      <div className="container">
        <div className="tst-wrap">
          <div className="tst-quote-mark">”</div>
          <div className="tst-h">{copy.tstHeader}</div>
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
  const { lang } = useMLData();
  const agents = [
    {
      name: "Carlos Betancourt",
      role: lang === "es" ? "Broker certificado" : "Certified broker",
      email: "cbm893@hotmail.com",
      phone: "9992005794",
      languages: ["ES", "EN"],
      image: "assets/official/agents/CB03.jpg",
      accent: "teal",
      focus: "object-position: 50% 20%;",
      bio: "Ten years ago, as a native Meridian, I started helping people fulfill their dreams of buying a home. Today I am proud of an impeccable career as a certified broker in Mexico, built on personalized service, ethical relationships and careful follow up.",
    },
    {
      name: "Shirley Hisgen",
      role: lang === "es" ? "Compradores y vendedores" : "Buyers & sellers",
      email: "shirley.meridaliving@gmail.com",
      phone: "9997388818 MX | 5056994405 US",
      languages: ["EN", "ES"],
      image: "assets/official/agents/2019-05-03_14-32-32_agents_Shirley_pic.jpg",
      accent: "purple",
      focus: "object-position: 50% 22%;",
      bio: "I have worked in real estate for over 15 years, motivated by architecture and people. I work with buyers and sellers, focusing on clear communication, careful detail and smooth transaction experiences.",
    },
    {
      name: "Cristina Sosa",
      role: lang === "es" ? "Buyer care" : "Buyer care",
      email: "cristysosar94@hotmail.com",
      phone: "9992470757",
      languages: ["ES", "EN"],
      image: "assets/official/agents/2019-07-15_13-31-46_agents_image001.jpg",
      accent: "green",
      focus: "object-position: 50% 18%;",
      bio: "I truly enjoy getting to know people when helping them find a home. I believe finding a new home is an important decision, and I am happy to be part of that process with care and energy.",
    },
    {
      name: "Lucia Pantoja",
      role: lang === "es" ? "Listing y compra" : "Listing & buying",
      email: "meridaliving@hotmail.com",
      phone: "9993388526",
      languages: ["ES", "EN"],
      image: "assets/official/agents/2020-04-04_13-08-53_agent_RSCN0215.JPG",
      accent: "orange",
      focus: "object-position: 50% 20%;",
      bio: "Lucia Pantoja is a highly experienced real estate agent in Merida. She provides strong customer care and follow-up service for both listing and buying clients.",
    },
    {
      name: "Annie Murillo",
      role: lang === "es" ? "Relocation local" : "Local relocation",
      email: "animurillom@hotmail.com",
      phone: "9992783427",
      languages: ["ES", "EN"],
      image: "assets/official/agents/2022-12-10_13-33-22_agents_Annie.jpg",
      accent: "red",
      focus: "object-position: 50% 16%;",
      bio: "Born in Merida, Annie loves discovering places and meeting people. She brings warmth, curiosity and serious attention to learning what each client needs to find the right home.",
    },
    {
      name: "Arturo Magana",
      role: lang === "es" ? "Clientes internacionales" : "International clients",
      email: "arturomeridaliving@gmail.com",
      phone: "+52 1 999 502 2929",
      languages: ["ES", "EN", "FR"],
      image: "assets/official/agents/2023-07-10_12-14-32_agent_IMG_4310.jpg",
      accent: "teal",
      focus: "object-position: 52% 18%;",
      bio: "Arturo has lived in Merida for 10 years and is deeply connected to the community. He combines excellent customer service with integrity, honesty and a genuine passion for helping people create stories at home.",
    },
    {
      name: "Josey Vogels",
      role: lang === "es" ? "Inversion y lifestyle" : "Investment & lifestyle",
      email: "justaskjosey@me.com",
      phone: "CA +1 905 353 6884 · MX 999 773 2472",
      languages: ["EN", "ES"],
      image: "assets/official/agents/2023-12-02_06-55-19_agent_IMG_6789.jpeg",
      accent: "purple",
      focus: "object-position: 50% 14%;",
      bio: "Josey helps buyers think clearly about investment properties, forever homes and vacation homes in Yucatan. Her work centers on resourcefulness, fit and a steady guided process.",
    },
  ];
  const lead = agents[0];
  const roster = agents.slice(1);
  return (
    <section id="agents" className="agents" data-screen-label="Our Agents">
      <div className="container">
        <div className="agents-head">
          <div>
            <div className="agents-eyebrow">{lang === "es" ? "Equipo local" : "Local team"}</div>
            <h2 className="agents-title">
              {lang === "es" ? <>Agentes reales,<br/>criterio <em>local</em>.</> : <>Real agents,<br/><em>local</em> judgment.</>}
            </h2>
          </div>
          <p className="agents-lede">
            {lang === "es"
              ? "Una sección renovada para presentar al equipo con retratos reales, contacto directo y una lectura más humana de quienes acompañan cada operación."
              : "A renewed section for presenting the team with real portraits, direct contact and a more human read of the people guiding each transaction."}
          </p>
        </div>

        <div className="agents-feature">
          <div className="agent-portrait">
            <img src={lead.image} alt={lead.name} style={{objectPosition: "50% 20%"}} />
            <div className="agent-badge">{lang === "es" ? "Broker certificado" : "Certified broker"}</div>
          </div>
          <div className="agent-feature-copy">
            <div className="agent-kicker">{lang === "es" ? "Punto de contacto principal" : "Primary point of contact"}</div>
            <h3 className="agent-feature-name">{lead.name}</h3>
            <div className="agent-role">{lead.role}</div>
            <div className="agent-languages" aria-label={lang === "es" ? "Idiomas" : "Languages"}>
              {lead.languages.map((language) => <span key={language}>{language}</span>)}
            </div>
            <p className="agent-feature-bio">{lead.bio}</p>
            <div className="agent-contact-row">
              <a href={`mailto:${lead.email}`}>{lead.email}</a>
              <a href={`tel:${lead.phone.replace(/\D/g, '')}`}>{lead.phone}</a>
              <a href={(window.ML_LINKS && window.ML_LINKS.whatsappVisit) || "#"} target="_blank" rel="noreferrer">
                {lang === "es" ? "Contactar equipo" : "Contact the team"}
              </a>
            </div>
          </div>
        </div>

        <div className="agents-roster">
          {roster.map((agent) => (
            <article className="agent-mini" key={agent.name}>
              <div className="agent-mini-photo">
                <img src={agent.image} alt={agent.name} style={{objectPosition: agent.focus.replace("object-position:", "").replace(";", "")}} />
              </div>
              <div>
                <h3 className="agent-mini-name">{agent.name}</h3>
                <div className="agent-mini-role">{agent.role}</div>
                <div className="agent-mini-languages" aria-label={lang === "es" ? "Idiomas" : "Languages"}>
                  {agent.languages.map((language) => <span key={language}>{language}</span>)}
                </div>
                <p className="agent-mini-bio">{agent.bio}</p>
                <div className="agent-mini-contact">
                  <a href={`mailto:${agent.email}`}>{agent.email}</a>
                  <a href={`tel:${agent.phone.replace(/\D/g, '')}`}>{agent.phone}</a>
                </div>
                <a className="agent-link" href={`mailto:${agent.email}`}>
                  {lang === "es" ? "Contactar" : "Contact"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  const { copy } = useMLLang();
  return (
    <section id="journal" style={{padding:'120px 0 40px'}} data-screen-label="Diario">
      <div className="container">
        <SectionHead
          eyebrow={{num: copy.jrNum, text: copy.jrText}}
          title={copy.jrTitle}
          kicker={copy.jrKicker}
        />
        <div className="jr-grid">
          {copy.journal.map((j,i)=>(
            <article className="jr" key={i}>
              <div className="jr-img"><image-slot id={`slot-journal-${i}`} placeholder={`${j.cat} · ${j.date}`} src={`assets/official/ambient/FotoAleatoria_${i + 1}.jpg`} style={{width:'100%', height:'100%', display:'block'}}></image-slot></div>
              <div className="jr-meta">
                <span className="cat">{j.cat}</span>
                <span>{j.date}</span>
                <span>· 6 {copy.jrMinRead}</span>
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
