// =============================================================
// listings.js — Propiedades, fotos y datos de mercado.
//
// ESTE ES EL ÚNICO ARCHIVO QUE DEBES EDITAR PARA:
//   • Agregar una propiedad nueva
//     → añade un objeto en PROPERTIES_ES y otro igual en PROPERTIES_EN
//   • Actualizar precio, recámaras u otro dato
//   • Agregar o quitar fotos de una propiedad (IMAGE_MAP)
//   • Cambiar la foto de portada en las tarjetas (COVER_IMAGES)
//   • Ajustar la ubicación aproximada del mapa (MAP_LOCATIONS)
//
// No necesitas tocar ningún otro archivo para gestionar listings.
// Este archivo es JavaScript plano — sin JSX, sin Babel.
// =============================================================

window.ML_LISTINGS = (function () {

  // ── Propiedades ─────────────────────────────────────────────────────────────
  // Campos requeridos: id, code, name, neighborhood, type,
  //                    priceUSD, priceMXN, beds, baths, m2, lot, pool, parking
  // Campos opcionales: badge, isNew, summary, tone, street, year, facade, depth

  var PROPERTIES_ES = [
    {
      id: "P-01", code: "2130",
      name: "Garcia Gineres Fixer Upper",
      neighborhood: "García Ginerés",
      type: "Proyecto de restauración",
      badge: "Exclusiva", isNew: true,
      priceUSD: 142500, priceMXN: 2500000,
      beds: 1, baths: 1, m2: 224, lot: 305, pool: false, parking: 2,
      summary: "Casa para restaurar en García Ginerés con pasta original, patio, estudio y una base sólida para intervenir con carácter.",
      tone: "olive",
    },
    {
      id: "P-02", code: "2129",
      name: "Casa Hacienda Dream Home",
      neighborhood: "Santiago / García Ginerés",
      type: "Hacienda residencial",
      badge: "Exclusiva",
      priceUSD: 625000, priceMXN: 11500000,
      beds: 4, baths: 4, m2: 285, lot: 606, pool: true, parking: 1,
      summary: "Residencia estilo hacienda entre Santiago y García Ginerés, con jardines, arcos, piscina y habitaciones independientes.",
      tone: "terracotta",
    },
    {
      id: "P-03", code: "2128",
      name: "Casa Lienzo Rosa",
      neighborhood: "Itzaes / García Ginerés",
      type: "Colonial con potencial",
      badge: "Restauración",
      priceUSD: 156000, priceMXN: 2750000,
      beds: 2, baths: 1, m2: 115, lot: 364, pool: false, parking: 0,
      summary: "Casa sobre Calle 49 con patio generoso, estructura con carácter y espacio para desarrollar jardines o terrazas.",
      tone: "ochre",
    },
    {
      id: "P-04", code: "2125",
      name: "Casa Acrelio",
      neighborhood: "Centro Histórico",
      type: "Restauración histórica",
      badge: "AAA location",
      priceUSD: 419000, priceMXN: 7200000,
      beds: 2, baths: 1, m2: 180, lot: 442, pool: false, parking: 1,
      summary: "Oportunidad de restauración en Centro con pisos de pasta, proporciones amplias, patio profundo y espacio para cochera.",
      tone: "olive",
    },
    {
      id: "P-05", code: "2124",
      name: "Casa Montecristo",
      neighborhood: "Montecristo",
      type: "Residencia norte",
      badge: "Northside",
      priceUSD: 559000, priceMXN: 10000000,
      beds: 4, baths: 4.5, m2: 495, lot: 713, pool: true, parking: 2,
      summary: "Residencia al norte con fachada ajardinada, áreas sociales amplias, terraza cubierta, piscina y suite principal.",
      tone: "terracotta",
    },
    {
      id: "P-06", code: "2121",
      name: "Casa Historic",
      neighborhood: "San Cristóbal",
      type: "Colonial parcialmente renovada",
      badge: "Histórica",
      priceUSD: 209000, priceMXN: 3800000,
      beds: 2, baths: 2.5, m2: 189, lot: 229, pool: false, parking: 0,
      summary: "Casa colonial con techos altos, vigas originales, avance de renovación y vistas hacia San Cristóbal desde azotea.",
      tone: "ochre",
    },
  ];

  var PROPERTIES_EN = [
    {
      id: "P-01", code: "2130",
      name: "Garcia Gineres Fixer Upper",
      neighborhood: "García Ginerés",
      type: "Restoration project",
      badge: "Exclusive", isNew: true,
      priceUSD: 142500, priceMXN: 2500000,
      beds: 1, baths: 1, m2: 224, lot: 305, pool: false, parking: 2,
      summary: "A Garcia Gineres fixer upper with original pasta tile, patio, studio space and a strong base for a character renovation.",
      tone: "olive",
    },
    {
      id: "P-02", code: "2129",
      name: "Casa Hacienda Dream Home",
      neighborhood: "Santiago / García Ginerés",
      type: "Hacienda residence",
      badge: "Exclusive",
      priceUSD: 625000, priceMXN: 11500000,
      beds: 4, baths: 4, m2: 285, lot: 606, pool: true, parking: 1,
      summary: "A hacienda-style home between Santiago and Garcia Gineres, with gardens, arches, pool and independent guest rooms.",
      tone: "terracotta",
    },
    {
      id: "P-03", code: "2128",
      name: "Casa Lienzo Rosa",
      neighborhood: "Itzaes / García Ginerés",
      type: "Colonial with potential",
      badge: "Restoration",
      priceUSD: 156000, priceMXN: 2750000,
      beds: 2, baths: 1, m2: 115, lot: 364, pool: false, parking: 0,
      summary: "A Calle 49 home with a generous patio, architectural character and room for gardens, terraces or a creative intervention.",
      tone: "ochre",
    },
    {
      id: "P-04", code: "2125",
      name: "Casa Acrelio",
      neighborhood: "Centro Histórico",
      type: "Historic restoration",
      badge: "AAA location",
      priceUSD: 419000, priceMXN: 7200000,
      beds: 2, baths: 1, m2: 180, lot: 442, pool: false, parking: 1,
      summary: "A Centro restoration opportunity with pasta tile floors, generous proportions, a deep patio and room for a garage.",
      tone: "olive",
    },
    {
      id: "P-05", code: "2124",
      name: "Casa Montecristo",
      neighborhood: "Montecristo",
      type: "Northside residence",
      badge: "Northside",
      priceUSD: 559000, priceMXN: 10000000,
      beds: 4, baths: 4.5, m2: 495, lot: 713, pool: true, parking: 2,
      summary: "A northside residence with a landscaped facade, generous living areas, covered terrace, pool and primary suite.",
      tone: "terracotta",
    },
    {
      id: "P-06", code: "2121",
      name: "Casa Historic",
      neighborhood: "San Cristóbal",
      type: "Partially renovated colonial",
      badge: "Historic",
      priceUSD: 209000, priceMXN: 3800000,
      beds: 2, baths: 2.5, m2: 189, lot: 229, pool: false, parking: 0,
      summary: "A colonial home with high ceilings, original beams, meaningful renovation progress and rooftop views toward San Cristobal.",
      tone: "ochre",
    },
  ];

  // ── Colonias ─────────────────────────────────────────────────────────────────

  var NEIGHBORHOODS_ES = [
    { name: "Centro Histórico", count: 84, blurb: "Casonas con patio, a pie de catedral." },
    { name: "Santiago",         count: 41, blurb: "Mercado, bares de mezcal, vida de barrio." },
    { name: "García Ginerés",   count: 28, blurb: "Casas de los 50, sombra de laurel." },
    { name: "Itzimná",          count: 33, blurb: "Familiar, ciclovía y parques amplios." },
    { name: "Temozón Norte",    count: 52, blurb: "Privadas nuevas, clubes y golf." },
    { name: "Cholul",           count: 47, blurb: "Pueblo en expansión, plusvalía sostenida." },
  ];

  var NEIGHBORHOODS_EN = [
    { name: "Centro Histórico", count: 84, blurb: "Large patio homes, a walk from the cathedral." },
    { name: "Santiago",         count: 41, blurb: "Market, mezcal bars, neighborhood life." },
    { name: "García Ginerés",   count: 28, blurb: "1950s homes under laurel-tree shade." },
    { name: "Itzimná",          count: 33, blurb: "Family-friendly, bike lanes and large parks." },
    { name: "Temozón Norte",    count: 52, blurb: "New gated communities, country clubs and golf." },
    { name: "Cholul",           count: 47, blurb: "Growing town with strong appreciation." },
  ];

  // ── Servicios ────────────────────────────────────────────────────────────────

  var SERVICES_ES = [
    { n: "01", title: "Compra asistida",     body: "Acompañamos cada paso: due diligence, notaría, fideicomiso y obra menor de entrega." },
    { n: "02", title: "Venta con curaduría", body: "Fotografía, video y storytelling editorial. Listing privado antes del mercado abierto." },
    { n: "03", title: "Renta vacacional",    body: "Operación llave en mano para Airbnb, Booking y huéspedes directos." },
    { n: "04", title: "Restauración",        body: "Red de arquitectos restauradores, artesanos y maestros pintores con obra en Mérida." },
  ];

  var SERVICES_EN = [
    { n: "01", title: "Assisted purchase", body: "We guide every step: due diligence, notary, bank trust and minor delivery work." },
    { n: "02", title: "Curated sale",      body: "Editorial photography, video and storytelling. Private listing before going to open market." },
    { n: "03", title: "Vacation rental",   body: "Turnkey operation for Airbnb, Booking and direct guests." },
    { n: "04", title: "Restoration",       body: "Network of restoration architects, artisans and master painters with built work in Mérida." },
  ];

  // ── Testimonios ──────────────────────────────────────────────────────────────

  var TESTIMONIALS_ES = [
    { quote: "Nos enseñaron 14 casas en 3 días y entendieron exactamente lo que buscábamos. La compra cerró en seis semanas, fideicomiso incluido.", author: "Marie L.", detail: "Compradora — Montreal a Santiago" },
    { quote: "La fotografía de la casa fue otra cosa. Tuvimos cuatro ofertas en la primera semana y vendimos arriba de lista.", author: "Familia Cervera", detail: "Vendedores — Centro Histórico" },
    { quote: "Nos manejaron la remodelación completa estando nosotros en Austin. Reportes semanales con foto y presupuesto al día.", author: "David & Renée", detail: "Restauración — Itzimná" },
  ];

  var TESTIMONIALS_EN = [
    { quote: "They showed us 14 houses in 3 days and understood exactly what we were looking for. The purchase closed in six weeks, bank trust included.", author: "Marie L.", detail: "Buyer — Montreal to Santiago" },
    { quote: "The home photography was something else. We had four offers in the first week and sold above asking.", author: "The Cervera family", detail: "Sellers — Centro Histórico" },
    { quote: "They handled the full remodel while we were in Austin. Weekly reports with photos and the budget up to date.", author: "David & Renée", detail: "Restoration — Itzimná" },
  ];

  // ── Equipo ───────────────────────────────────────────────────────────────────

  var TEAM = [
    { name: "Andrea Pacheco",  role_es: "Broker principal",         role_en: "Principal broker",      years: 14, langs: "ES · EN · FR" },
    { name: "Rodrigo Cervera", role_es: "Casas históricas",         role_en: "Historic homes",        years: 11, langs: "ES · EN" },
    { name: "Marisol Uc",      role_es: "Haciendas y terrenos",     role_en: "Haciendas & land",      years: 9,  langs: "ES · EN · MAYA" },
    { name: "Tom Whitfield",   role_es: "Clientes internacionales", role_en: "International clients", years: 8,  langs: "EN · ES" },
  ];

  // ── Estadísticas ─────────────────────────────────────────────────────────────

  var STATS_ES = [
    { k: "187",     label: "operaciones cerradas en 2024" },
    { k: "USD 92M", label: "volumen transaccionado" },
    { k: "31",      label: "días promedio en mercado" },
    { k: "4.9",     label: "calificación de clientes" },
  ];

  var STATS_EN = [
    { k: "187",     label: "transactions closed in 2024" },
    { k: "USD 92M", label: "total transaction volume" },
    { k: "31",      label: "average days on market" },
    { k: "4.9",     label: "client rating" },
  ];

  // ── Fotos de portada (tarjetas de catálogo) ──────────────────────────────────
  // Una foto por propiedad — la que aparece en las tarjetas del catálogo.

  var COVER_IMAGES = {
    "P-01": "assets/official/casas/2130/2026-05-05_10-28-16_House_1.jpg",
    "P-02": "assets/official/casas/2129/2026-04-27_17-07-38_House_1.jpg",
    "P-03": "assets/official/casas/2128/2026-05-14_11-54-18_House_20260502_143558.jpg",
    "P-04": "assets/official/casas/2125/2026-04-16_16-58-31_House__DSC1273.jpg",
    "P-05": "assets/official/casas/2124/2026-04-08_11-21-48_House_1.jpg",
    "P-06": "assets/official/casas/2121/2026-03-11_12-56-28_House_13.jpg",
  };

  // ── Galería completa por propiedad ───────────────────────────────────────────
  // Agrega o quita rutas para actualizar la galería de la ficha de propiedad.
  // Rutas relativas a la raíz del proyecto.

  function imgs(code, files) {
    return files.map(function (f) { return 'assets/official/casas/' + code + '/' + f; });
  }

  var IMAGE_MAP = {
    "P-01": imgs("2130", [
      "2026-05-05_10-28-16_House_1.jpg",  "2026-05-05_10-28-16_House_2.jpg",
      "2026-05-05_10-28-16_House_3.jpg",  "2026-05-05_10-28-16_House_4.jpg",
      "2026-05-05_10-28-16_House_5.jpg",  "2026-05-05_10-28-16_House_6.jpg",
      "2026-05-05_10-28-16_House_7.jpg",  "2026-05-05_10-28-16_House_8.jpg",
      "2026-05-05_10-28-16_House_9.jpg",  "2026-05-05_10-28-16_House_10.jpg",
      "2026-05-05_10-28-46_House_11.jpg", "2026-05-05_10-28-46_House_12.jpg",
      "2026-05-05_10-28-46_House_13.jpg", "2026-05-05_10-28-46_House_14.jpg",
      "2026-05-05_10-28-46_House_15.jpg", "2026-05-05_10-28-46_House_16.jpg",
      "2026-05-05_10-28-46_House_17.jpg", "2026-05-05_10-28-46_House_18.jpg",
    ]),
    "P-02": imgs("2129", [
      "2026-04-27_17-07-38_House_1.jpg",  "2026-04-27_17-07-38_House_2.jpg",
      "2026-04-27_17-07-38_House_3.jpg",  "2026-04-27_17-07-38_House_4.jpg",
      "2026-04-27_17-07-38_House_5.jpg",  "2026-04-27_17-07-38_House_6.jpg",
      "2026-04-27_17-07-38_House_7.jpg",  "2026-04-27_17-07-38_House_8.jpg",
      "2026-04-27_17-07-38_House_9.jpg",  "2026-04-27_17-07-38_House_10.jpg",
      "2026-04-27_17-08-15_House_11.jpg", "2026-04-27_17-08-15_House_12.jpg",
      "2026-04-27_17-08-15_House_13.jpg", "2026-04-27_17-08-15_House_14.jpg",
      "2026-04-27_17-08-15_House_15.jpg", "2026-04-27_17-08-15_House_16.jpg",
      "2026-04-27_17-08-16_House_17.jpg", "2026-04-27_17-08-16_House_18.jpg",
      "2026-04-27_17-08-16_House_19.jpg", "2026-04-27_17-08-16_House_20.jpg",
      "2026-04-27_17-08-42_House_21.jpg", "2026-04-27_17-08-42_House_22.jpg",
      "2026-04-27_17-08-42_House_23.jpg", "2026-04-27_17-08-42_House_24.jpg",
      "2026-04-27_17-08-42_House_25.jpg", "2026-04-27_17-08-42_House_26.jpg",
      "2026-04-27_17-08-42_House_27.jpg", "2026-04-27_17-08-42_House_28.jpg",
      "2026-04-27_17-08-42_House_29.jpg", "2026-04-27_17-08-42_House_30.jpg",
      "2026-04-27_17-09-15_House_31.jpg", "2026-04-27_17-09-15_House_32.jpg",
      "2026-04-27_17-09-15_House_33.jpg", "2026-04-27_17-09-15_House_34.jpg",
      "2026-04-27_17-09-15_House_35.jpg", "2026-04-27_17-09-15_House_36.jpg",
      "2026-04-27_17-09-15_House_37.jpg", "2026-04-27_17-09-15_House_38.jpg",
      "2026-04-27_17-09-15_House_39.jpg", "2026-04-27_17-09-15_House_40.jpg",
      "2026-04-27_17-09-15_House_41.jpg", "2026-04-27_17-09-15_House_42.jpg",
    ]),
    "P-03": imgs("2128", [
      "2026-05-14_11-54-18_House_20260502_143558.jpg",
      "2026-05-14_11-54-19_House_20260502_143618.jpg",
      "2026-05-14_11-54-20_House_20260502_143625.jpg",
      "2026-05-14_11-54-20_House_20260502_143629.jpg",
      "2026-05-14_11-54-21_House_20260502_143704.jpg",
      "2026-05-14_11-54-22_House_20260502_143733.jpg",
      "2026-05-14_11-54-22_House_20260502_143737.jpg",
      "2026-05-14_11-54-23_House_20260502_143747.jpg",
      "2026-05-14_11-54-24_House_20260502_143832.jpg",
      "2026-05-14_11-54-24_House_20260502_143848.jpg",
      "2026-05-14_11-55-48_House_20260502_143907.jpg",
      "2026-05-14_11-55-49_House_20260502_143916.jpg",
      "2026-05-14_11-55-50_House_20260502_143933.jpg",
      "2026-05-14_11-55-50_House_20260502_143946.jpg",
      "2026-05-14_11-55-51_House_20260502_143959.jpg",
      "2026-05-14_11-55-52_House_20260502_144010.jpg",
      "2026-05-14_11-55-53_House_20260502_144014.jpg",
      "2026-05-14_11-55-54_House_20260502_144030.jpg",
      "2026-05-14_11-55-54_House_20260502_144038.jpg",
      "2026-05-14_11-55-55_House_20260502_144058.jpg",
      "2026-05-14_12-02-58_House_20260502_144058.jpg",
      "2026-05-14_12-02-59_House_20260502_144112.jpg",
      "2026-05-14_12-02-59_House_20260502_144124.jpg",
      "2026-05-14_12-03-00_House_20260502_144145.jpg",
      "2026-05-14_12-03-01_House_20260502_144519.jpg",
      "2026-05-14_12-03-02_House_20260502_144530.jpg",
      "2026-05-14_12-03-02_House_20260502_144540.jpg",
      "2026-05-14_12-03-03_House_20260502_144540(1).jpg",
      "2026-05-14_12-03-03_House_20260502_144545.jpg",
      "2026-05-14_12-03-04_House_20260502_144600.jpg",
      "2026-05-14_12-03-05_House_20260502_144605.jpg",
      "2026-05-14_12-03-06_House_20260502_144753.jpg",
      "2026-05-14_12-03-06_House_20260502_144811.jpg",
    ]),
    "P-04": imgs("2125", [
      "2026-04-16_16-58-31_House__DSC1273.jpg",
      "2026-04-16_16-59-15_House__DSC1156-HDR.jpg",
      "2026-04-16_16-59-15_House__DSC1164.jpg",
      "2026-04-16_16-59-15_House__DSC1170.jpg",
      "2026-04-16_16-59-15_House__DSC1173.jpg",
      "2026-04-16_16-59-15_House__DSC1176.jpg",
      "2026-04-16_16-59-15_House__DSC1179.jpg",
      "2026-04-16_16-59-15_House__DSC1186.jpg",
      "2026-04-16_16-59-15_House__DSC1189.jpg",
      "2026-04-16_16-59-15_House__DSC1192.jpg",
      "2026-04-16_16-59-15_House__DSC1196.jpg",
      "2026-04-16_17-00-12_House__DSC1198.jpg",
      "2026-04-16_17-00-12_House__DSC1201.jpg",
      "2026-04-16_17-00-12_House__DSC1207.jpg",
      "2026-04-16_17-00-12_House__DSC1210.jpg",
      "2026-04-16_17-00-12_House__DSC1211.jpg",
      "2026-04-16_17-00-12_House__DSC1212.jpg",
      "2026-04-16_17-00-12_House__DSC1221.jpg",
      "2026-04-16_17-00-12_House__DSC1230.jpg",
      "2026-04-16_17-00-12_House__DSC1236.jpg",
      "2026-04-16_17-00-12_House__DSC1239.jpg",
      "2026-04-16_17-01-49_House__DSC1246.jpg",
      "2026-04-16_17-01-49_House__DSC1249.jpg",
      "2026-04-16_17-01-50_House__DSC1252.jpg",
      "2026-04-16_17-01-50_House__DSC1254.jpg",
      "2026-04-16_17-01-50_House__DSC1258.jpg",
      "2026-04-16_17-01-50_House__DSC1261.jpg",
      "2026-04-16_17-01-50_House__DSC1267.jpg",
      "2026-04-13_11-53-55_House_20260401_110115.jpg",
      "2026-04-16_17-01-50_House__DSC1270.jpg",
    ]),
    "P-05": imgs("2124", [
      "2026-04-08_11-21-48_House_1.jpg",  "2026-04-08_11-21-48_House_2.jpg",
      "2026-04-08_11-21-48_House_3.jpg",  "2026-04-08_11-21-49_House_4.jpg",
      "2026-04-08_11-21-49_House_5.jpg",  "2026-04-08_11-21-49_House_6.jpg",
      "2026-04-08_11-21-49_House_7.jpg",  "2026-04-08_11-21-50_House_8.jpg",
      "2026-04-08_11-21-50_House_9.jpg",  "2026-04-08_11-21-50_House_10.jpg",
      "2026-04-08_11-24-33_House_11.jpg", "2026-04-08_11-24-34_House_12.jpg",
      "2026-04-08_11-24-34_House_13.jpg", "2026-04-08_11-24-34_House_14.jpg",
      "2026-04-08_11-24-34_House_15.jpg", "2026-04-08_11-24-35_House_16.jpg",
      "2026-04-08_11-24-35_House_17.jpg", "2026-04-08_11-24-35_House_18.jpg",
      "2026-04-08_11-45-53_House_19.jpg", "2026-04-08_11-45-53_House_20.jpg",
      "2026-04-08_11-45-53_House_21.jpg", "2026-04-08_11-45-54_House_22.jpg",
      "2026-04-08_11-45-54_House_23.jpg", "2026-04-08_11-45-54_House_25.jpg",
      "2026-04-08_11-45-54_House_26.jpg", "2026-04-08_11-45-55_House_27.5.jpg",
      "2026-04-08_11-45-58_House_27.jpg", "2026-04-08_11-45-58_House_28.jpg",
      "2026-04-08_11-45-58_House_29.jpg", "2026-04-08_11-45-58_House_30.jpg",
      "2026-04-08_11-47-00_House_31.jpg", "2026-04-08_11-47-00_House_32.jpg",
      "2026-04-08_11-47-00_House_33.jpg", "2026-04-08_11-47-01_House_34.jpg",
      "2026-04-08_11-47-01_House_35.jpg", "2026-04-08_11-47-01_House_36.jpg",
      "2026-04-08_11-47-01_House_37.jpg", "2026-04-08_11-47-02_House_38.jpg",
      "2026-04-08_11-47-02_House_39.jpg", "2026-04-08_11-47-02_House_40.jpg",
      "2026-04-08_11-47-50_House_41.jpg", "2026-04-08_11-47-50_House_42.jpg",
      "2026-04-08_11-47-50_House_43.jpg", "2026-04-08_11-47-50_House_44.jpg",
      "2026-04-08_11-47-51_House_45.jpg", "2026-04-08_11-47-51_House_46.jpg",
      "2026-04-08_11-47-53_House_47.jpg", "2026-04-08_11-47-55_House_48.jpg",
      "2026-04-08_11-47-57_House_49.jpg", "2026-04-08_11-47-57_House_50.jpg",
      "2026-04-08_11-49-17_House_51.jpg", "2026-04-08_11-49-17_House_52.jpg",
      "2026-04-08_11-49-17_House_53.jpg",
    ]),
    "P-06": imgs("2121", [
      "2026-03-11_12-56-28_House_13.jpg",
      "2026-03-11_12-56-51_House_1.jpg",   "2026-03-11_12-56-51_House_2.5.jpg",
      "2026-03-11_12-56-51_House_2.jpg",   "2026-03-11_12-56-51_House_3.5.jpg",
      "2026-03-11_12-56-51_House_5.jpg",   "2026-03-11_12-56-51_House_6.jpg",
      "2026-03-11_12-56-51_House_7.jpg",   "2026-03-11_12-56-51_House_9.jpg",
      "2026-03-11_12-56-51_House_11.jpg",  "2026-03-11_12-56-51_House_12.jpg",
      "2026-03-11_12-56-51_House_13.5.jpg",
      "2026-03-11_12-57-16_House_11.jpg",  "2026-03-11_12-57-16_House_12.jpg",
      "2026-03-11_12-57-16_House_13.5.jpg","2026-03-11_12-57-16_House_13.jpg",
      "2026-03-11_12-57-16_House_15.jpg",  "2026-03-11_12-57-16_House_17.jpg",
      "2026-03-11_12-57-16_House_19.jpg",  "2026-03-11_12-57-17_House_20.jpg",
    ]),
  };

  // ── Ubicaciones en mapa ──────────────────────────────────────────────────────
  // Cuando la propiedad tiene `street` definido, se usa ese valor.
  // Si no, se usa la ubicación aproximada definida aquí.

  var MAP_LOCATIONS = {
    "P-01": "García Ginerés, Mérida, Yucatán, México",
    "P-02": "Santiago, Mérida, Yucatán, México",
    "P-03": "Itzaes, García Ginerés, Mérida, Yucatán, México",
    "P-04": "Centro Histórico, Mérida, Yucatán, México",
    "P-05": "Montecristo, Mérida, Yucatán, México",
    "P-06": "San Cristóbal, Mérida, Yucatán, México",
  };

  // ── Estructura exportada ─────────────────────────────────────────────────────
  return {
    BY_LANG: {
      es: { PROPERTIES: PROPERTIES_ES, NEIGHBORHOODS: NEIGHBORHOODS_ES, SERVICES: SERVICES_ES, TESTIMONIALS: TESTIMONIALS_ES, TEAM: TEAM, STATS: STATS_ES },
      en: { PROPERTIES: PROPERTIES_EN, NEIGHBORHOODS: NEIGHBORHOODS_EN, SERVICES: SERVICES_EN, TESTIMONIALS: TESTIMONIALS_EN, TEAM: TEAM, STATS: STATS_EN },
    },
    COVER_IMAGES: COVER_IMAGES,
    IMAGE_MAP: IMAGE_MAP,
    MAP_LOCATIONS: MAP_LOCATIONS,
  };

})();
