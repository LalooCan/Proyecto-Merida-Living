// Mock data for the Mérida Living redesign — bilingual (ES / EN).

// ───────────────────────── Spanish data (default / ES) ────────────────────────
const PROPERTIES_ES = [
  {
    id: "P-01",
    code: "2130",
    name: "Garcia Gineres Fixer Upper",
    neighborhood: "García Ginerés",
    type: "Proyecto de restauración",
    badge: "Exclusiva",
    isNew: true,
    priceUSD: 142500,
    priceMXN: 2500000,
    beds: 1, baths: 1, m2: 224, lot: 305,
    pool: false, parking: 2,
    summary: "Casa para restaurar en García Ginerés con pasta original, patio, estudio y una base sólida para intervenir con carácter.",
    tone: "olive",
  },
  {
    id: "P-02",
    code: "2129",
    name: "Casa Hacienda Dream Home",
    neighborhood: "Santiago / García Ginerés",
    type: "Hacienda residencial",
    badge: "Exclusiva",
    priceUSD: 625000,
    priceMXN: 11500000,
    beds: 4, baths: 4, m2: 285, lot: 606,
    pool: true, parking: 1,
    summary: "Residencia estilo hacienda entre Santiago y García Ginerés, con jardines, arcos, piscina y habitaciones independientes.",
    tone: "terracotta",
  },
  {
    id: "P-03",
    code: "2128",
    name: "Casa Lienzo Rosa",
    neighborhood: "Itzaes / García Ginerés",
    type: "Colonial con potencial",
    badge: "Restauración",
    priceUSD: 156000,
    priceMXN: 2750000,
    beds: 2, baths: 1, m2: 115, lot: 364,
    pool: false, parking: 0,
    summary: "Casa sobre Calle 49 con patio generoso, estructura con carácter y espacio para desarrollar jardines o terrazas.",
    tone: "ochre",
  },
  {
    id: "P-04",
    code: "2125",
    name: "Casa Acrelio",
    neighborhood: "Centro Histórico",
    type: "Restauración histórica",
    badge: "AAA location",
    priceUSD: 419000,
    priceMXN: 7200000,
    beds: 2, baths: 1, m2: 180, lot: 442,
    pool: false, parking: 1,
    summary: "Oportunidad de restauración en Centro con pisos de pasta, proporciones amplias, patio profundo y espacio para cochera.",
    tone: "olive",
  },
  {
    id: "P-05",
    code: "2124",
    name: "Casa Montecristo",
    neighborhood: "Montecristo",
    type: "Residencia norte",
    badge: "Northside",
    priceUSD: 559000,
    priceMXN: 10000000,
    beds: 4, baths: 4.5, m2: 495, lot: 713,
    pool: true, parking: 2,
    summary: "Residencia al norte con fachada ajardinada, áreas sociales amplias, terraza cubierta, piscina y suite principal.",
    tone: "terracotta",
  },
  {
    id: "P-06",
    code: "2121",
    name: "Casa Historic",
    neighborhood: "San Cristóbal",
    type: "Colonial parcialmente renovada",
    badge: "Histórica",
    priceUSD: 209000,
    priceMXN: 3800000,
    beds: 2, baths: 2.5, m2: 189, lot: 229,
    pool: false, parking: 0,
    summary: "Casa colonial con techos altos, vigas originales, avance de renovación y vistas hacia San Cristóbal desde azotea.",
    tone: "ochre",
  },
];

// ───────────────────────────── English data (EN) ─────────────────────────────
// Proper nouns (property/neighborhood names) intentionally stay in Spanish.
const PROPERTIES_EN = [
  {
    id: "P-01",
    code: "2130",
    name: "Garcia Gineres Fixer Upper",
    neighborhood: "García Ginerés",
    type: "Restoration project",
    badge: "Exclusive",
    isNew: true,
    priceUSD: 142500,
    priceMXN: 2500000,
    beds: 1, baths: 1, m2: 224, lot: 305,
    pool: false, parking: 2,
    summary: "A Garcia Gineres fixer upper with original pasta tile, patio, studio space and a strong base for a character renovation.",
    tone: "olive",
  },
  {
    id: "P-02",
    code: "2129",
    name: "Casa Hacienda Dream Home",
    neighborhood: "Santiago / García Ginerés",
    type: "Hacienda residence",
    badge: "Exclusive",
    priceUSD: 625000,
    priceMXN: 11500000,
    beds: 4, baths: 4, m2: 285, lot: 606,
    pool: true, parking: 1,
    summary: "A hacienda-style home between Santiago and Garcia Gineres, with gardens, arches, pool and independent guest rooms.",
    tone: "terracotta",
  },
  {
    id: "P-03",
    code: "2128",
    name: "Casa Lienzo Rosa",
    neighborhood: "Itzaes / García Ginerés",
    type: "Colonial with potential",
    badge: "Restoration",
    priceUSD: 156000,
    priceMXN: 2750000,
    beds: 2, baths: 1, m2: 115, lot: 364,
    pool: false, parking: 0,
    summary: "A Calle 49 home with a generous patio, architectural character and room for gardens, terraces or a creative intervention.",
    tone: "ochre",
  },
  {
    id: "P-04",
    code: "2125",
    name: "Casa Acrelio",
    neighborhood: "Centro Histórico",
    type: "Historic restoration",
    badge: "AAA location",
    priceUSD: 419000,
    priceMXN: 7200000,
    beds: 2, baths: 1, m2: 180, lot: 442,
    pool: false, parking: 1,
    summary: "A Centro restoration opportunity with pasta tile floors, generous proportions, a deep patio and room for a garage.",
    tone: "olive",
  },
  {
    id: "P-05",
    code: "2124",
    name: "Casa Montecristo",
    neighborhood: "Montecristo",
    type: "Northside residence",
    badge: "Northside",
    priceUSD: 559000,
    priceMXN: 10000000,
    beds: 4, baths: 4.5, m2: 495, lot: 713,
    pool: true, parking: 2,
    summary: "A northside residence with a landscaped facade, generous living areas, covered terrace, pool and primary suite.",
    tone: "terracotta",
  },
  {
    id: "P-06",
    code: "2121",
    name: "Casa Historic",
    neighborhood: "San Cristóbal",
    type: "Partially renovated colonial",
    badge: "Historic",
    priceUSD: 209000,
    priceMXN: 3800000,
    beds: 2, baths: 2.5, m2: 189, lot: 229,
    pool: false, parking: 0,
    summary: "A colonial home with high ceilings, original beams, meaningful renovation progress and rooftop views toward San Cristobal.",
    tone: "ochre",
  },
];

const NEIGHBORHOODS_ES = [
  { name: "Centro Histórico", count: 84, blurb: "Casonas con patio, a pie de catedral." },
  { name: "Santiago",          count: 41, blurb: "Mercado, bares de mezcal, vida de barrio." },
  { name: "García Ginerés",    count: 28, blurb: "Casas de los 50, sombra de laurel." },
  { name: "Itzimná",           count: 33, blurb: "Familiar, ciclovía y parques amplios." },
  { name: "Temozón Norte",     count: 52, blurb: "Privadas nuevas, clubes y golf." },
  { name: "Cholul",            count: 47, blurb: "Pueblo en expansión, plusvalía sostenida." },
];

const NEIGHBORHOODS_EN = [
  { name: "Centro Histórico", count: 84, blurb: "Large patio homes, a walk from the cathedral." },
  { name: "Santiago",          count: 41, blurb: "Market, mezcal bars, neighborhood life." },
  { name: "García Ginerés",    count: 28, blurb: "1950s homes under laurel-tree shade." },
  { name: "Itzimná",           count: 33, blurb: "Family-friendly, bike lanes and large parks." },
  { name: "Temozón Norte",     count: 52, blurb: "New gated communities, country clubs and golf." },
  { name: "Cholul",            count: 47, blurb: "Growing town with strong appreciation." },
];

const SERVICES_ES = [
  { n: "01", title: "Compra asistida",     body: "Acompañamos cada paso: due diligence, notaría, fideicomiso y obra menor de entrega." },
  { n: "02", title: "Venta con curaduría", body: "Fotografía, video y storytelling editorial. Listing privado antes del mercado abierto." },
  { n: "03", title: "Renta vacacional",    body: "Operación llave en mano para Airbnb, Booking y huéspedes directos." },
  { n: "04", title: "Restauración",        body: "Red de arquitectos restauradores, artesanos y maestros pintores con obra en Mérida." },
];

const SERVICES_EN = [
  { n: "01", title: "Assisted purchase", body: "We guide every step: due diligence, notary, bank trust and minor delivery work." },
  { n: "02", title: "Curated sale",      body: "Editorial photography, video and storytelling. Private listing before going to open market." },
  { n: "03", title: "Vacation rental",   body: "Turnkey operation for Airbnb, Booking and direct guests." },
  { n: "04", title: "Restoration",       body: "Network of restoration architects, artisans and master painters with built work in Mérida." },
];

const TESTIMONIALS_ES = [
  { quote: "Nos enseñaron 14 casas en 3 días y entendieron exactamente lo que buscábamos. La compra cerró en seis semanas, fideicomiso incluido.",
    author: "Marie L.", detail: "Compradora — Montreal a Santiago" },
  { quote: "La fotografía de la casa fue otra cosa. Tuvimos cuatro ofertas en la primera semana y vendimos arriba de lista.",
    author: "Familia Cervera", detail: "Vendedores — Centro Histórico" },
  { quote: "Nos manejaron la remodelación completa estando nosotros en Austin. Reportes semanales con foto y presupuesto al día.",
    author: "David & Renée", detail: "Restauración — Itzimná" },
];

const TESTIMONIALS_EN = [
  { quote: "They showed us 14 houses in 3 days and understood exactly what we were looking for. The purchase closed in six weeks, bank trust included.",
    author: "Marie L.", detail: "Buyer — Montreal to Santiago" },
  { quote: "The home photography was something else. We had four offers in the first week and sold above asking.",
    author: "The Cervera family", detail: "Sellers — Centro Histórico" },
  { quote: "They handled the full remodel while we were in Austin. Weekly reports with photos and the budget up to date.",
    author: "David & Renée", detail: "Restoration — Itzimná" },
];

const TEAM = [
  { name: "Andrea Pacheco",  role_es: "Broker principal",         role_en: "Principal broker",    years: 14, langs: "ES · EN · FR" },
  { name: "Rodrigo Cervera", role_es: "Casas históricas",         role_en: "Historic homes",      years: 11, langs: "ES · EN" },
  { name: "Marisol Uc",      role_es: "Haciendas y terrenos",     role_en: "Haciendas & land",    years: 9,  langs: "ES · EN · MAYA" },
  { name: "Tom Whitfield",   role_es: "Clientes internacionales", role_en: "International clients", years: 8,  langs: "EN · ES" },
];

const STATS_ES = [
  { k: "187",     label: "operaciones cerradas en 2024" },
  { k: "USD 92M", label: "volumen transaccionado" },
  { k: "31",      label: "días promedio en mercado" },
  { k: "4.9",     label: "calificación de clientes" },
];

const STATS_EN = [
  { k: "187",     label: "transactions closed in 2024" },
  { k: "USD 92M", label: "total transaction volume" },
  { k: "31",      label: "average days on market" },
  { k: "4.9",     label: "client rating" },
];

// ── Language-keyed data registry ─────────────────────────────────────────────
const MLD_BY_LANG = {
  es: { PROPERTIES: PROPERTIES_ES, NEIGHBORHOODS: NEIGHBORHOODS_ES, SERVICES: SERVICES_ES, TESTIMONIALS: TESTIMONIALS_ES, TEAM, STATS: STATS_ES },
  en: { PROPERTIES: PROPERTIES_EN, NEIGHBORHOODS: NEIGHBORHOODS_EN, SERVICES: SERVICES_EN, TESTIMONIALS: TESTIMONIALS_EN, TEAM, STATS: STATS_EN },
};

// Backward-compat: window.MLD still exposes ES so any caller that hasn't been
// migrated to getMLD(lang) keeps working.
window.MLD = MLD_BY_LANG.es;
window.MLD_BY_LANG = MLD_BY_LANG;
window.getMLD = (lang) => MLD_BY_LANG[lang] || MLD_BY_LANG.es;

// ── UI copy ──────────────────────────────────────────────────────────────────
const ML_COPY = {
  es: {
    // Nav + top bar
    navProperties: "Propiedades",
    navExclusive: "Listings Exclusivos",
    navCentro: "Centro",
    navBeach: "Playa",
    navRentals: "Rentas",
    navBlog: "Blog",
    visit: "Agenda una visita",

    // Hero
    heroEyebrow: "Mérida · Yucatán · Desde 2011",
    heroTitle: <>Más que bienes raíces.<br/>Un <em>estilo de vida</em><br/>en <em>Yucatán</em>.</>,
    heroLede: "Brokerage bilingüe en Mérida desde 2011. Acompañamos a compradores y vendedores en cada paso: due diligence, fideicomiso, notaría y entrega. Sin atajos.",
    operations: "Operaciones · 2024",
    years: "años",
    experience: "Experiencia local",
    multilingual: "Atención multilingüe",
    tour: "Recorrido virtual disponible",
    listing: "Listing exclusivo",
    viewListing: "Ver ficha →",

    // Search bar
    want: "Quiero",
    buy: "Comprar",
    type: "Tipo",
    colonial: "Casa colonial",
    zone: "Zona",
    centro: "Centro Histórico",
    budget: "Presupuesto",
    search: "Buscar",
    quicks: ["Con alberca", "Restauradas", "Listas para rentar", "Bajo USD 250k", "Haciendas", "Pre-venta"],

    // Property card units
    unitBeds: "rec",
    unitBaths: "baños",
    unitM2Built: "m² const.",
    unitM2Lot: "m² terreno",
    unitParking: "autos",
    unitPool: "Alberca",
    save: "Guardar",

    // Featured section
    featuredNum: "01 — Selección",
    featuredText: "Lo que está a punto de irse",
    featuredTitle: 'Propiedades <em>curadas</em><br/>esta semana.',
    featuredKicker: "Selección semanal del equipo de brokers. Cuatro casas y una hacienda — revisadas en persona, con documentos al día.",

    // Catalog
    filterAll: "Todas",
    filterColonial: "Coloniales",
    filterModern: "Modernas",
    filterHacienda: "Haciendas",
    filterApt: "Departamentos",
    filterLand: "Terrenos",
    sortLabel: "Ordenar:",
    sortRecent: "Recientes ↓",
    viewAllProps: "Ver las 412 propiedades →",

    // Neighborhoods
    nbNum: "02 — Mapa",
    nbText: "Cómo se vive cada zona",
    nbTitle: 'Barrios que <em>conocemos</em> casa por casa.',
    nbKicker: "No vendemos zonas que no caminamos. Cada barrio tiene su propio broker líder y reportes de mercado mensuales.",
    nbExplore: "Explorar barrio →",
    nbProps: "props",

    // Why us
    whyNum: "03 — Práctica",
    whyText: "Por qué Mérida Living",
    whyTitle: <>Atendemos<br/>como <em>notario</em>,<br/>recibimos como<br/><em>anfitrión</em>.</>,
    whyLede: "Catorce años en Yucatán. Un equipo de seis brokers, dos arquitectos y un abogado fiduciario en planta. Ningún cierre es un trámite — cada operación se diseña a la medida del comprador.",
    servicesHeader: "SERVICIOS · CUATRO FRENTES",

    // Testimonials
    tstHeader: "04 — Lo que dicen quienes ya compraron con nosotros",

    // Team
    teamNum: "05 — Quiénes somos",
    teamText: "Brokers en planta",
    teamTitle: 'Un equipo <em>pequeño</em>,<br/>una libreta <em>grande</em>.',
    teamKicker: "Seis brokers, una arquitecta restauradora y un abogado fiduciario. No subcontratamos atención: la persona que te contesta es la que cierra contigo.",
    yearsInMid: "años en MID",

    // Journal
    jrNum: "06 — Diario",
    jrText: "Lo que aprendemos vendiendo Mérida",
    jrTitle: 'Notas del <em>mercado</em>.',
    jrKicker: "Reportes de plusvalía por colonia, guías de fideicomiso y reseñas de los barrios que estamos caminando esta temporada.",
    jrMinRead: "min de lectura",
    journal: [
      { cat: "Mercado", date: "Mayo 2026",  title: "Cuánto subió el m² en el Centro este trimestre", blurb: "Comparamos 142 cierres reales contra precio de listing. La brecha se está cerrando." },
      { cat: "Guía",    date: "Abril 2026", title: "Fideicomiso vs. SRL: cuál te conviene en 2026",   blurb: "Un comparativo claro para compradores extranjeros, con costos reales de notario." },
      { cat: "Barrio",  date: "Marzo 2026", title: "García Ginerés: por qué los franceses lo eligen", blurb: "Casas de los 50, sombra de laurel y dos kilómetros del Centro a pie." },
    ],

    // Final CTA
    ctaEye: "07 — Empecemos por escuchar",
    ctaTitle: <>Cuéntanos qué<br/>casa <em>buscas</em>.<br/>Te llamamos en<br/><em>24 horas</em>.</>,
    ctaLede: "Sin formulario interminable. Cinco campos, una llamada de 20 minutos y una primera selección de casas en tu correo el mismo día.",
    labelName: "Nombre",
    labelContact: "Email o WhatsApp",
    labelLooking: "Estoy buscando",
    labelBudget: "Presupuesto aproximado",
    placeName: "Tu nombre completo",
    placeContact: "hola@correo.com  · +52",
    chipBuy: "Comprar",
    chipSell: "Vender",
    chipRent: "Rentar",
    chipAdvice: "Asesoría",
    ctaSubmit: "Quiero que me llamen →",
    ctaFine: "Respondemos en horario CDMX (GMT-6). No compartimos tus datos con terceros.",

    // Footer
    footAddress: "Calle 47 #482 entre 54 y 56, Centro, Mérida, Yucatán. Atendemos de lunes a sábado, 9 a 19 h.",
    footExplore: "Explora",
    footServices: "Servicios",
    footContact: "Contacto",
    footExploreLinks: ["Propiedades", "Haciendas", "Barrios", "Pre-ventas", "Terrenos"],
    footServicesLinks: ["Compra asistida", "Venta curada", "Renta vacacional", "Restauración", "Fideicomiso"],
    footContactLinks: ["hola@meridaliving.mx", "+52 999 000 0000", "Agenda una visita", "Boletín mensual", "Carreras"],
    footCopyright: "© 2026 Mérida Living · AMPI registro 4178",
    footPrivacy: "Privacidad",
    footTerms: "Términos",
    footLegal: "Aviso legal",

    // Property detail page
    bcHome: "Inicio",
    bcProperties: "Propiedades",
    share: "Compartir",
    galleryTour: "Recorrido virtual",
    galleryViewAll: "Ver galería completa",
    ovCode: "CÓDIGO",
    ovSpecBeds: "Recámaras",
    ovSpecBaths: "Baños",
    ovSpecBuilt: "m² constr.",
    ovSpecLot: "m² terreno",
    ovSpecCars: "Autos",
    ovListPrice: "Precio de lista",
    ovExchangeNote: "sujeto a tipo de cambio",
    ovBookVisit: "Agendar visita guiada",
    ovRequestPDF: "Solicitar ficha técnica (PDF)",
    ovMetaDays: "Días en mercado",
    ovMetaViews: "Listings vistos hoy",
    ovMetaVisits: "Visitas agendadas",
    ovMetaUpdate: "Última actualización",
    ovMetaDaysVal: "12 días",
    ovMetaViewsVal: "47",
    ovMetaVisitsVal: "3 esta semana",
    ovMetaUpdateVal: "Hace 2 días",
    agentRole: "Broker certificado",
    agentYears: "años",
    detailByConfirm: "Por confirmar",
    detailLocationRequest: "Ubicación disponible bajo solicitud",
    dsEye: "01 — La casa",
    dsTitleSuffix: <>: una propiedad con <em>carácter</em>.</>,
    dsPara2: "La ficha reúne los datos principales de la propiedad, su ubicación general, medidas publicadas y una galería inicial de referencia. Cada visita debe confirmarse con el equipo de Mérida Living para validar disponibilidad, documentación y condiciones actuales.",
    dsPara3: "Por ubicación y escala, esta propiedad puede leerse desde su contexto de barrio: programa, estado de conservación, potencial de intervención y relación entre terreno, construcción y precio publicado.",
    dsPara4: "La información técnica debe confirmarse durante due diligence. El precio está publicado en MXN y su equivalente en USD puede variar según el tipo de cambio vigente.",
    dsFactsTitle: "Ficha técnica",
    dsMldCode: "Código MLD",
    dsYear: "Año de construcción",
    dsCondition: "Estado",
    dsConditionVal: "Para restaurar",
    dsFacade: "Frente",
    dsDepth: "Fondo",
    dsBuiltArea: "Construcción",
    dsLotLabel: "Terreno",
    dsBedsLabel: "Recámaras",
    dsBathsLabel: "Baños",
    dsParkingLabel: "Estacionamientos",
    dsPoolLabel: "Alberca",
    dsPoolYes: "Sí",
    dsPoolNo: "No construida",
    dsRegime: "Régimen",
    dsRegimeVal: "Propiedad individual",
    dsDelivery: "Entrega",
    dsDeliveryVal: "Ad corpus",
    dsInclusions: "Inclusions",
    dsInclusionsVal: "No aplica",
    feEye: "02 — Lo que incluye",
    feTitle: <>Cada detalle pensado, cada acabado <em>elegido</em>.</>,
    feRequestPDF: "Solicitar inventario completo (PDF)",
    feCategories: [
      { cat: "Arquitectura",  items: ["Pasta hidráulica original", "Muros de mampostería", "Losas de vigueta y bovedilla", "Acabados para renovar", "Carácter de barrio consolidado"] },
      { cat: "Programa",      items: ["Recámara principal", "Baño completo", "Sala y comedor", "Cocina independiente", "Oficina o estudio"] },
      { cat: "Exteriores",    items: ["Patio posterior", "Pozo en patio", "Espacio para terraza", "Ventilación cruzada potencial", "Dos espacios de estacionamiento"] },
      { cat: "Sistemas",      items: ["Tinaco en azotea", "Instalación 110 V", "Fosa séptica", "Sin gas instalado", "Entrega ad corpus"] },
    ],
    fmFloorplan: "Plano arquitectónico",
    fmGroundFloor: "Planta baja",
    fmUpperFloor: "Planta alta",
    fmRooftop: "Azotea",
    fmScaleLabel: "Escala",
    fmBuiltLabel: "Const.",
    fmNorthLabel: "Norte",
    fmLocation: "Ubicación",
    fmOpenMaps: "Abrir en Google Maps →",
    fmApproxLocation: "Ubicación aproximada bajo solicitud",
    cfEye: "03 — Pregunta lo que quieras",
    cfTitle: <>¿Lista para conocer la casa <em>en persona</em>?</>,
    cfLede: "Carlos está disponible para revisar contigo el potencial de restauración, presupuesto de obra y próximos pasos de due diligence.",
    cfFieldName: "Nombre",
    cfFieldLastName: "Apellido",
    cfFieldEmail: "Email",
    cfFieldWhatsApp: "WhatsApp",
    cfFieldMsg: "Mensaje",
    cfSubmit: "Enviar mensaje",
    cfFine: "Respondemos en horario CDMX, lunes a sábado 9–19h. No compartimos tus datos con terceros.",
    spEye: "04 — Quizás también te guste",
    spTitle: <>Otras casas con <em>carácter</em>.</>,
    spViewAll: "Ver catálogo completo →",
    spViewListing: "Ver ficha →",
  },

  en: {
    // Nav + top bar
    navProperties: "Properties",
    navExclusive: "Exclusive Listings",
    navCentro: "Centro",
    navBeach: "Beach",
    navRentals: "Rentals",
    navBlog: "Blog",
    visit: "Schedule a visit",

    // Hero
    heroEyebrow: "Mérida · Yucatán · Since 2011",
    heroTitle: <>More than real estate.<br/>A <em>way of life</em><br/>in <em>Yucatán</em>.</>,
    heroLede: "A bilingual brokerage in Mérida since 2011. We guide buyers and sellers through due diligence, bank trusts, notary work and delivery. No shortcuts.",
    operations: "Transactions · 2024",
    years: "years",
    experience: "Local experience",
    multilingual: "Multilingual service",
    tour: "Virtual tour available",
    listing: "Exclusive listing",
    viewListing: "View listing →",

    // Search bar
    want: "I want to",
    buy: "Buy",
    type: "Type",
    colonial: "Colonial home",
    zone: "Area",
    centro: "Centro Histórico",
    budget: "Budget",
    search: "Search",
    quicks: ["With pool", "Restored", "Rental-ready", "Under USD 250k", "Haciendas", "Pre-sale"],

    // Property card units
    unitBeds: "bd",
    unitBaths: "ba",
    unitM2Built: "m² built",
    unitM2Lot: "m² lot",
    unitParking: "parking",
    unitPool: "Pool",
    save: "Save",

    // Featured section
    featuredNum: "01 — Selection",
    featuredText: "About to be off-market",
    featuredTitle: '<em>Curated</em> properties<br/>this week.',
    featuredKicker: "Weekly selection from our brokerage team. Four houses and a hacienda — visited in person, with all documents in order.",

    // Catalog
    filterAll: "All",
    filterColonial: "Colonial",
    filterModern: "Modern",
    filterHacienda: "Haciendas",
    filterApt: "Apartments",
    filterLand: "Land",
    sortLabel: "Sort by:",
    sortRecent: "Recent ↓",
    viewAllProps: "See all 412 properties →",

    // Neighborhoods
    nbNum: "02 — Map",
    nbText: "How each area lives",
    nbTitle: 'Neighborhoods we <em>know</em> house by house.',
    nbKicker: "We don't sell areas we haven't walked. Every neighborhood has a lead broker and monthly market reports.",
    nbExplore: "Explore neighborhood →",
    nbProps: "props",

    // Why us
    whyNum: "03 — Practice",
    whyText: "Why Mérida Living",
    whyTitle: <>We serve<br/>like a <em>notary</em>,<br/>we receive like<br/>a <em>host</em>.</>,
    whyLede: "Fourteen years in Yucatán. A team of six brokers, two architects and a trust attorney on staff. No closing is just paperwork — every deal is designed around the buyer.",
    servicesHeader: "SERVICES · FOUR FRONTS",

    // Testimonials
    tstHeader: "04 — What our buyers say about working with us",

    // Team
    teamNum: "05 — Who we are",
    teamText: "In-house brokers",
    teamTitle: 'A <em>small</em> team,<br/>a <em>deep</em> local rolodex.',
    teamKicker: "Six brokers, a restoration architect and a trust attorney in-house. We don't outsource attention: the person who answers you is the one who closes with you.",
    yearsInMid: "years in MID",

    // Journal
    jrNum: "06 — Journal",
    jrText: "What we learn selling Mérida",
    jrTitle: 'Notes from the <em>market</em>.',
    jrKicker: "Appreciation reports by neighborhood, bank-trust guides and reviews of the streets we're walking this season.",
    jrMinRead: "min read",
    journal: [
      { cat: "Market", date: "May 2026",   title: "How much the m² rose in Centro this quarter", blurb: "We compared 142 real closings against listing price. The gap is closing." },
      { cat: "Guide",  date: "April 2026", title: "Bank trust vs. SRL: which one suits you in 2026", blurb: "A clear comparison for foreign buyers, with real notary costs." },
      { cat: "Area",   date: "March 2026", title: "García Ginerés: why the French choose it",     blurb: "1950s houses, laurel shade and two kilometers to Centro on foot." },
    ],

    // Final CTA
    ctaEye: "07 — Let's start by listening",
    ctaTitle: <>Tell us what<br/>home you're <em>looking</em> for.<br/>We call you back in<br/><em>24 hours</em>.</>,
    ctaLede: "No endless form. Five fields, a 20-minute call and a first selection of homes in your inbox the same day.",
    labelName: "Name",
    labelContact: "Email or WhatsApp",
    labelLooking: "I'm looking to",
    labelBudget: "Approximate budget",
    placeName: "Your full name",
    placeContact: "hello@email.com  · +52",
    chipBuy: "Buy",
    chipSell: "Sell",
    chipRent: "Rent",
    chipAdvice: "Advice",
    ctaSubmit: "Have us call you →",
    ctaFine: "We respond on CDMX hours (GMT-6). We don't share your data with third parties.",

    // Footer
    footAddress: "Calle 47 #482 between 54 and 56, Centro, Mérida, Yucatán. Open Monday to Saturday, 9 am to 7 pm.",
    footExplore: "Explore",
    footServices: "Services",
    footContact: "Contact",
    footExploreLinks: ["Properties", "Haciendas", "Neighborhoods", "Pre-sales", "Land"],
    footServicesLinks: ["Assisted purchase", "Curated sale", "Vacation rental", "Restoration", "Bank trust"],
    footContactLinks: ["hello@meridaliving.mx", "+52 999 000 0000", "Schedule a visit", "Monthly newsletter", "Careers"],
    footCopyright: "© 2026 Mérida Living · AMPI registry 4178",
    footPrivacy: "Privacy",
    footTerms: "Terms",
    footLegal: "Legal notice",

    // Property detail page
    bcHome: "Home",
    bcProperties: "Properties",
    share: "Share",
    galleryTour: "Virtual tour",
    galleryViewAll: "View full gallery",
    ovCode: "CODE",
    ovSpecBeds: "Bedrooms",
    ovSpecBaths: "Bathrooms",
    ovSpecBuilt: "m² built",
    ovSpecLot: "m² lot",
    ovSpecCars: "Parking",
    ovListPrice: "Listing price",
    ovExchangeNote: "subject to exchange rate",
    ovBookVisit: "Schedule a guided visit",
    ovRequestPDF: "Request property sheet (PDF)",
    ovMetaDays: "Days on market",
    ovMetaViews: "Listings viewed today",
    ovMetaVisits: "Scheduled visits",
    ovMetaUpdate: "Last updated",
    ovMetaDaysVal: "12 days",
    ovMetaViewsVal: "47",
    ovMetaVisitsVal: "3 this week",
    ovMetaUpdateVal: "2 days ago",
    agentRole: "Certified broker",
    agentYears: "years",
    detailByConfirm: "To be confirmed",
    detailLocationRequest: "Location available on request",
    dsEye: "01 — The property",
    dsTitleSuffix: <>: a property with <em>character</em>.</>,
    dsPara2: "This listing brings together the main data for the property: general location, published measurements and an initial photo gallery. Each visit must be confirmed with the Mérida Living team to validate availability, documentation and current conditions.",
    dsPara3: "Given its location and scale, this property can be read within its neighborhood context: layout, condition, restoration potential and the relationship between lot, built area and published price.",
    dsPara4: "Technical information must be confirmed during due diligence. The price is published in MXN and its USD equivalent may vary depending on the current exchange rate.",
    dsFactsTitle: "Property details",
    dsMldCode: "MLD Code",
    dsYear: "Year built",
    dsCondition: "Condition",
    dsConditionVal: "To restore",
    dsFacade: "Frontage",
    dsDepth: "Depth",
    dsBuiltArea: "Built area",
    dsLotLabel: "Lot",
    dsBedsLabel: "Bedrooms",
    dsBathsLabel: "Bathrooms",
    dsParkingLabel: "Parking spaces",
    dsPoolLabel: "Pool",
    dsPoolYes: "Yes",
    dsPoolNo: "Not built",
    dsRegime: "Ownership",
    dsRegimeVal: "Individual property",
    dsDelivery: "Delivery",
    dsDeliveryVal: "As-is",
    dsInclusions: "Inclusions",
    dsInclusionsVal: "None",
    feEye: "02 — What's included",
    feTitle: <>Every detail considered, every finish <em>chosen</em>.</>,
    feRequestPDF: "Request full inventory (PDF)",
    feCategories: [
      { cat: "Architecture",  items: ["Original hydraulic tile", "Masonry walls", "Concrete beam-and-block slabs", "Finishes ready to renovate", "Established neighborhood character"] },
      { cat: "Layout",        items: ["Primary bedroom", "Full bathroom", "Living and dining room", "Independent kitchen", "Office or study"] },
      { cat: "Outdoors",      items: ["Rear patio", "Patio well", "Space for a terrace", "Potential cross ventilation", "Two parking spaces"] },
      { cat: "Systems",       items: ["Rooftop water tank", "110 V electrical", "Septic tank", "No gas installed", "As-is delivery"] },
    ],
    fmFloorplan: "Floor plan",
    fmGroundFloor: "Ground floor",
    fmUpperFloor: "Upper floor",
    fmRooftop: "Rooftop",
    fmScaleLabel: "Scale",
    fmBuiltLabel: "Built",
    fmNorthLabel: "North",
    fmLocation: "Location",
    fmOpenMaps: "Open in Google Maps →",
    fmApproxLocation: "Approximate location, available on request",
    cfEye: "03 — Ask us anything",
    cfTitle: <>Ready to see the home <em>in person</em>?</>,
    cfLede: "Carlos is available to walk you through the restoration potential, construction budget and next due-diligence steps.",
    cfFieldName: "First name",
    cfFieldLastName: "Last name",
    cfFieldEmail: "Email",
    cfFieldWhatsApp: "WhatsApp",
    cfFieldMsg: "Message",
    cfSubmit: "Send message",
    cfFine: "We respond on CDMX hours, Monday to Saturday 9 am–7 pm. We don't share your data with third parties.",
    spEye: "04 — You may also like",
    spTitle: <>More homes with <em>character</em>.</>,
    spViewAll: "See full catalog →",
    spViewListing: "View listing →",
  },
};

const MLLangContext = React.createContext({
  lang: "en",
  setLang: () => {},
  copy: ML_COPY.en,
});

function useMLLang() {
  return React.useContext(MLLangContext);
}

// Convenience: returns the language-localized data arrays plus the copy bundle.
function useMLData() {
  const { lang, copy } = useMLLang();
  return { lang, copy, data: window.getMLD(lang) };
}

window.ML_LINKS = {
  site: "index.html",
  properties: "index.html#properties",
  exclusive: "index.html#properties",
  centro: "index.html#neighborhoods",
  beach: "index.html#properties",
  rentals: "index.html#contact",
  blog: "index.html#journal",
  instagram: "https://www.instagram.com/meridaliving/",
  facebook: "https://es-la.facebook.com/MeridaLiving/",
  youtube: "https://www.youtube.com/channel/UCMepXKltotfZayQ3xLgiQhQ?view_as=subscriber",
  whatsapp: "https://wa.me/529992168413",
  whatsappVisit: "https://wa.me/529992168413?text=Hola%20Merida%20Living%2C%20me%20gustaria%20agendar%20una%20visita.",
  email: "mailto:meridaliving@hotmail.com",
  maps: "https://www.google.com/maps/search/?api=1&query=Calle%2047%20482%20Centro%20Merida%20Yucatan"
};

window.ML_COPY = ML_COPY;
window.MLLangContext = MLLangContext;
window.useMLLang = useMLLang;
window.useMLData = useMLData;
