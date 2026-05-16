// Mock data for the Mérida Living redesign — original copy.

const PROPERTIES = [
  {
    id: "P-01",
    name: "Casa Tres Patios",
    neighborhood: "Centro Histórico",
    type: "Colonial restaurada",
    badge: "Exclusiva",
    priceUSD: 685000,
    priceMXN: 12550000,
    beds: 4, baths: 3.5, m2: 412, lot: 520,
    pool: true, parking: 2,
    summary: "Tres patios escalonados con bóveda catalana, pasta hidráulica original y alberca tibia al fondo.",
    tone: "olive",
  },
  {
    id: "P-02",
    name: "Quinta Cansahcab",
    neighborhood: "Cansahcab",
    type: "Hacienda",
    badge: "Hacienda",
    priceUSD: 1240000,
    priceMXN: 22720000,
    beds: 6, baths: 5, m2: 980, lot: 18400,
    pool: true, parking: 6,
    summary: "Casa principal de 1872, capilla, casa de máquinas y 1.8 ha de huerto de cítricos.",
    tone: "terracotta",
  },
  {
    id: "P-03",
    name: "Casa Santiago 87",
    neighborhood: "Santiago",
    type: "Casa moderna",
    badge: "Nueva",
    priceUSD: 395000,
    priceMXN: 7240000,
    beds: 3, baths: 2.5, m2: 240, lot: 280,
    pool: true, parking: 2,
    summary: "Obra nueva detrás de fachada de 1910. Chukum, tzalam y patio con ceiba joven.",
    tone: "ochre",
  },
  {
    id: "P-04",
    name: "Departamento Paseo 60",
    neighborhood: "García Ginerés",
    type: "Departamento",
    badge: "Pre-venta",
    priceUSD: 248000,
    priceMXN: 4540000,
    beds: 2, baths: 2, m2: 118, lot: 0,
    pool: true, parking: 1,
    summary: "Planta alta con vista al Paseo. Roof compartido con alberca y huerto comunitario.",
    tone: "olive",
  },
  {
    id: "P-05",
    name: "Casa Itzimná Sur",
    neighborhood: "Itzimná",
    type: "Familiar",
    badge: "",
    priceUSD: 420000,
    priceMXN: 7700000,
    beds: 4, baths: 3, m2: 305, lot: 410,
    pool: true, parking: 2,
    summary: "Jardín con flamboyán adulto, cocina abierta a terraza y palapa con asador.",
    tone: "terracotta",
  },
  {
    id: "P-06",
    name: "Lote La Ceiba",
    neighborhood: "Conkal",
    type: "Terreno",
    badge: "Inversión",
    priceUSD: 78000,
    priceMXN: 1430000,
    beds: 0, baths: 0, m2: 0, lot: 1200,
    pool: false, parking: 0,
    summary: "1,200 m² con servicios al pie, a 9 minutos de Altabrisa. Ideal para casa de retiro.",
    tone: "ochre",
  },
];

const NEIGHBORHOODS = [
  { name: "Centro Histórico", count: 84, blurb: "Casonas con patio, a pie de catedral." },
  { name: "Santiago",          count: 41, blurb: "Mercado, bares de mezcal, vida de barrio." },
  { name: "García Ginerés",    count: 28, blurb: "Casas de los 50, sombra de laurel." },
  { name: "Itzimná",           count: 33, blurb: "Familiar, ciclovía y parques amplios." },
  { name: "Temozón Norte",     count: 52, blurb: "Privadas nuevas, clubes y golf." },
  { name: "Cholul",            count: 47, blurb: "Pueblo en expansión, plusvalía sostenida." },
];

const SERVICES = [
  {
    n: "01",
    title: "Compra asistida",
    body: "Acompañamos cada paso: due diligence, notaría, fideicomiso y obra menor de entrega.",
  },
  {
    n: "02",
    title: "Venta con curaduría",
    body: "Fotografía, video y storytelling editorial. Listing privado antes del mercado abierto.",
  },
  {
    n: "03",
    title: "Renta vacacional",
    body: "Operación llave en mano para Airbnb, Booking y huéspedes directos.",
  },
  {
    n: "04",
    title: "Restauración",
    body: "Red de arquitectos restauradores, artesanos y maestros pintores con obra en Mérida.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Nos enseñaron 14 casas en 3 días y entendieron exactamente lo que buscábamos. La compra cerró en seis semanas, fideicomiso incluido.",
    author: "Marie L.",
    detail: "Compradora — Montreal a Santiago",
  },
  {
    quote: "La fotografía de la casa fue otra cosa. Tuvimos cuatro ofertas en la primera semana y vendimos arriba de lista.",
    author: "Familia Cervera",
    detail: "Vendedores — Centro Histórico",
  },
  {
    quote: "Nos manejaron la remodelación completa estando nosotros en Austin. Reportes semanales con foto y presupuesto al día.",
    author: "David & Renée",
    detail: "Restauración — Itzimná",
  },
];

const TEAM = [
  { name: "Andrea Pacheco",    role: "Broker principal",        years: 14, langs: "ES · EN · FR" },
  { name: "Rodrigo Cervera",   role: "Casas históricas",        years: 11, langs: "ES · EN" },
  { name: "Marisol Uc",        role: "Haciendas y terrenos",    years: 9,  langs: "ES · EN · MAYA" },
  { name: "Tom Whitfield",     role: "Clientes internacionales", years: 8,  langs: "EN · ES" },
];

const STATS = [
  { k: "187", label: "operaciones cerradas en 2024" },
  { k: "USD 92M", label: "volumen transaccionado" },
  { k: "31",  label: "días promedio en mercado" },
  { k: "4.9", label: "calificación de clientes" },
];

window.MLD = { PROPERTIES, NEIGHBORHOODS, SERVICES, TESTIMONIALS, TEAM, STATS };
