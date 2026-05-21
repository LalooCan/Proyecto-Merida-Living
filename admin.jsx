// Admin panel for Merida Living listing drafts.

const ADMIN_STORAGE_KEY = "ml-admin-listings";
const ADMIN_AUTH_KEY = "ml-admin-auth";
const ADMIN_PASSCODE = "MLD-2026";

function adminReadDrafts() {
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
    return raw ? JSON.parse(raw) : emptyAdminPack();
  } catch (e) {
    return emptyAdminPack();
  }
}

function adminWriteDrafts(pack) {
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(pack));
}

function emptyAdminPack() {
  return {
    BY_LANG: { es: { PROPERTIES: [] }, en: { PROPERTIES: [] } },
    COVER_IMAGES: {},
    IMAGE_MAP: {},
    MAP_LOCATIONS: {},
  };
}

function nextPropertyId() {
  const source = window.ML_LISTINGS || {};
  const props = ((source.BY_LANG && source.BY_LANG.es && source.BY_LANG.es.PROPERTIES) || []);
  const max = props.reduce((n, p) => {
    const m = String(p.id || "").match(/^P-(\d+)$/);
    return m ? Math.max(n, Number(m[1])) : n;
  }, 0);
  return `P-${String(max + 1).padStart(2, "0")}`;
}

function defaultForm() {
  return {
    id: nextPropertyId(),
    code: "",
    name: "",
    neighborhood: "",
    typeEs: "",
    typeEn: "",
    badgeEs: "Nueva",
    badgeEn: "New",
    priceUSD: "",
    priceMXN: "",
    beds: "",
    baths: "",
    m2: "",
    lot: "",
    parking: "",
    pool: false,
    isNew: true,
    tone: "olive",
    street: "",
    mapLocation: "",
    summaryEs: "",
    summaryEn: "",
    featuresEs: featureTextEs(),
    featuresEn: featureTextEn(),
    photos: [],
    coverIndex: 0,
  };
}

function featureTextEs() {
  return [
    "Arquitectura: Pasta original; Muros de mamposteria; Techos altos",
    "Programa: Recamara principal; Sala; Comedor; Cocina",
    "Exteriores: Patio; Terraza; Jardin",
    "Sistemas: Agua potable; Electricidad; Internet disponible",
  ].join("\n");
}

function featureTextEn() {
  return [
    "Architecture: Original tile; Masonry walls; High ceilings",
    "Layout: Primary bedroom; Living room; Dining room; Kitchen",
    "Outdoors: Patio; Terrace; Garden",
    "Systems: City water; Electricity; Internet available",
  ].join("\n");
}

function parseFeatures(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => {
      const parts = line.split(":");
      const cat = (parts.shift() || "").trim();
      const items = parts.join(":").split(";").map((item) => item.trim()).filter(Boolean);
      return cat && items.length ? { cat, items } : null;
    })
    .filter(Boolean);
}

function numberValue(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function buildListing(form) {
  const base = {
    id: form.id.trim(),
    code: form.code.trim(),
    name: form.name.trim(),
    neighborhood: form.neighborhood.trim(),
    priceUSD: numberValue(form.priceUSD),
    priceMXN: numberValue(form.priceMXN),
    beds: numberValue(form.beds),
    baths: numberValue(form.baths),
    m2: numberValue(form.m2),
    lot: numberValue(form.lot),
    pool: !!form.pool,
    parking: numberValue(form.parking),
    isNew: !!form.isNew,
    tone: form.tone,
    street: form.street.trim() || null,
    features: {
      es: parseFeatures(form.featuresEs),
      en: parseFeatures(form.featuresEn),
    },
  };
  return {
    es: { ...base, type: form.typeEs.trim(), badge: form.badgeEs.trim(), summary: form.summaryEs.trim() },
    en: { ...base, type: form.typeEn.trim(), badge: form.badgeEn.trim(), summary: form.summaryEn.trim() },
  };
}

function upsertDraft(form) {
  const pack = adminReadDrafts();
  const built = buildListing(form);
  const gallery = form.photos.map((p) => p.src);
  const cover = gallery[Number(form.coverIndex)] || gallery[0] || "";
  ["es", "en"].forEach((lang) => {
    const list = pack.BY_LANG[lang].PROPERTIES;
    const idx = list.findIndex((p) => p.id === form.id);
    if (idx >= 0) list[idx] = built[lang];
    else list.push(built[lang]);
  });
  pack.IMAGE_MAP[form.id] = gallery;
  pack.COVER_IMAGES[form.id] = cover;
  pack.MAP_LOCATIONS[form.id] = form.mapLocation.trim() || `${form.neighborhood}, Merida, Yucatan, Mexico`;
  adminWriteDrafts(pack);
  return pack;
}

function AdminApp() {
  const [authed, setAuthed] = React.useState(() => localStorage.getItem(ADMIN_AUTH_KEY) === "1");
  const [pass, setPass] = React.useState("");
  const [form, setForm] = React.useState(defaultForm);
  const [drafts, setDrafts] = React.useState(adminReadDrafts);
  const [message, setMessage] = React.useState("");
  const [exportText, setExportText] = React.useState(() => JSON.stringify(adminReadDrafts(), null, 2));

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submitLogin = (e) => {
    e.preventDefault();
    if (pass !== ADMIN_PASSCODE) {
      setMessage("Clave incorrecta.");
      return;
    }
    localStorage.setItem(ADMIN_AUTH_KEY, "1");
    setAuthed(true);
    setMessage("");
  };

  const save = () => {
    if (!form.id || !form.code || !form.name || !form.neighborhood) {
      setMessage("Completa ID, codigo, nombre y colonia antes de guardar.");
      return;
    }
    const pack = upsertDraft(form);
    setDrafts(pack);
    setExportText(JSON.stringify(pack, null, 2));
    setMessage("Borrador guardado. Ya aparece en este navegador.");
  };

  const clearDrafts = () => {
    if (!confirm("Borrar todos los borradores locales del panel?")) return;
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    const empty = emptyAdminPack();
    setDrafts(empty);
    setExportText(JSON.stringify(empty, null, 2));
    setMessage("Borradores locales borrados.");
  };

  const onPhotos = async (files) => {
    const next = [];
    for (const file of Array.from(files || [])) {
      next.push(await fileToDataUrl(file));
    }
    update("photos", form.photos.concat(next));
  };

  if (!authed) {
    return (
      <AdminShell>
        <div className="admin-login">
          <BrandLockup />
          <form onSubmit={submitLogin}>
            <label>Ingreso equipo</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Clave de acceso" type="password" />
            <button type="submit">Entrar</button>
          </form>
          {message && <p>{message}</p>}
          <a href="index.html">Volver al sitio</a>
        </div>
      </AdminShell>
    );
  }

  const preview = buildListing(form).es;
  const cover = form.photos[Number(form.coverIndex)]?.src || form.photos[0]?.src || "";
  const draftCount = drafts.BY_LANG.es.PROPERTIES.length;

  return (
    <AdminShell>
      <header className="admin-top">
        <BrandLockup />
        <div>
          <div className="admin-kicker">Panel interno</div>
          <h1>Propiedades Merida Living</h1>
        </div>
        <a className="admin-link" href="index.html">Ver sitio</a>
      </header>

      <main className="admin-grid">
        <section className="admin-panel">
          <AdminSection title="Datos principales">
            <div className="admin-row">
              <Field label="ID" value={form.id} onChange={(v) => update("id", v)} />
              <Field label="Codigo MLD" value={form.code} onChange={(v) => update("code", v)} />
            </div>
            <Field label="Nombre" value={form.name} onChange={(v) => update("name", v)} />
            <div className="admin-row">
              <Field label="Colonia" value={form.neighborhood} onChange={(v) => update("neighborhood", v)} />
              <Field label="Ubicacion mapa" value={form.mapLocation} onChange={(v) => update("mapLocation", v)} />
            </div>
            <Field label="Calle exacta opcional" value={form.street} onChange={(v) => update("street", v)} />
            <div className="admin-row">
              <Field label="Tipo ES" value={form.typeEs} onChange={(v) => update("typeEs", v)} />
              <Field label="Tipo EN" value={form.typeEn} onChange={(v) => update("typeEn", v)} />
            </div>
            <div className="admin-row">
              <Field label="Badge ES" value={form.badgeEs} onChange={(v) => update("badgeEs", v)} />
              <Field label="Badge EN" value={form.badgeEn} onChange={(v) => update("badgeEn", v)} />
            </div>
          </AdminSection>

          <AdminSection title="Precio y medidas">
            <div className="admin-row four">
              <Field label="USD" value={form.priceUSD} onChange={(v) => update("priceUSD", v)} type="number" />
              <Field label="MXN" value={form.priceMXN} onChange={(v) => update("priceMXN", v)} type="number" />
              <Field label="Recamaras" value={form.beds} onChange={(v) => update("beds", v)} type="number" />
              <Field label="Banos" value={form.baths} onChange={(v) => update("baths", v)} type="number" />
            </div>
            <div className="admin-row four">
              <Field label="Construccion m2" value={form.m2} onChange={(v) => update("m2", v)} type="number" />
              <Field label="Terreno m2" value={form.lot} onChange={(v) => update("lot", v)} type="number" />
              <Field label="Parking" value={form.parking} onChange={(v) => update("parking", v)} type="number" />
              <label className="admin-check"><input type="checkbox" checked={form.pool} onChange={(e) => update("pool", e.target.checked)} /> Alberca</label>
            </div>
          </AdminSection>

          <AdminSection title="Descripcion">
            <TextArea label="Resumen ES" value={form.summaryEs} onChange={(v) => update("summaryEs", v)} />
            <TextArea label="Resumen EN" value={form.summaryEn} onChange={(v) => update("summaryEn", v)} />
          </AdminSection>

          <AdminSection title="Caracteristicas">
            <TextArea label="Caracteristicas ES" value={form.featuresEs} onChange={(v) => update("featuresEs", v)} />
            <TextArea label="Caracteristicas EN" value={form.featuresEn} onChange={(v) => update("featuresEn", v)} />
          </AdminSection>

          <AdminSection title="Fotos">
            <input className="admin-file" type="file" accept="image/*" multiple onChange={(e) => onPhotos(e.target.files)} />
            <div className="admin-photos">
              {form.photos.map((photo, i) => (
                <button key={photo.name + i} className={i === Number(form.coverIndex) ? "on" : ""} type="button" onClick={() => update("coverIndex", i)}>
                  <img src={photo.src} alt="" />
                  <span>{i === Number(form.coverIndex) ? "Cover" : i + 1}</span>
                </button>
              ))}
            </div>
          </AdminSection>

          <div className="admin-actions">
            <button type="button" onClick={save}>Guardar borrador</button>
            <button type="button" className="ghost" onClick={() => setForm(defaultForm())}>Nueva propiedad</button>
            <button type="button" className="danger" onClick={clearDrafts}>Borrar borradores</button>
          </div>
          {message && <div className="admin-message">{message}</div>}
        </section>

        <aside className="admin-side">
          <div className="admin-preview">
            <div className="admin-kicker">Preview tarjeta</div>
            <article className="pcard">
              <div className="pmedia">
                {cover ? <img src={cover} alt={preview.name} /> : <div className="admin-empty">Sin foto</div>}
                {preview.badge && <span className="ribbon">{preview.badge}</span>}
                {preview.code && <span className="code">MLD-{preview.code}</span>}
              </div>
              <div className="pbody">
                <div className="ploc">{preview.neighborhood || "Colonia"} · {preview.type || "Tipo"}</div>
                <h3 className="pname">{preview.name || "Nombre de la propiedad"}</h3>
                <p className="psum">{preview.summary || "Resumen de la propiedad."}</p>
                <div className="pspecs">
                  <span><b>{preview.beds}</b> rec</span>
                  <span><b>{preview.baths}</b> banos</span>
                  <span><b>{preview.m2}</b> m2 const.</span>
                  <span><b>{preview.lot}</b> m2 terreno</span>
                </div>
                <div className="pprice">USD {numberValue(preview.priceUSD).toLocaleString("en-US")}</div>
              </div>
            </article>
          </div>
          <div className="admin-export">
            <div className="admin-kicker">Borradores locales: {draftCount}</div>
            <textarea value={exportText} readOnly />
          </div>
        </aside>
      </main>
    </AdminShell>
  );
}

function AdminShell({ children }) {
  return (
    <>
      <style>{adminCss}</style>
      {children}
    </>
  );
}

function AdminSection({ title, children }) {
  return (
    <section className="admin-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

function TextArea({ label, value, onChange }) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, src: reader.result });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const adminCss = `
body{background:#f6f8f8}.admin-top{display:grid;grid-template-columns:auto 1fr auto;gap:24px;align-items:center;padding:28px 32px;border-bottom:1px solid var(--line);background:white}.admin-top h1{margin:0;font-family:var(--display);font-size:34px;font-weight:400}.admin-kicker{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:6px}.admin-link,.admin-actions button,.admin-login button{border:0;border-radius:999px;background:var(--accent);color:white;padding:12px 18px;font-weight:600}.admin-grid{display:grid;grid-template-columns:minmax(0,1fr)420px;gap:28px;padding:32px}.admin-panel,.admin-side>div,.admin-login{background:white;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow-1)}.admin-panel{padding:24px}.admin-section{padding:0 0 24px;margin:0 0 24px;border-bottom:1px solid var(--line)}.admin-section h2{font-size:18px;font-family:var(--display);font-weight:500;margin:0 0 18px}.admin-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.admin-row.four{grid-template-columns:repeat(4,1fr)}.admin-field{display:block;margin-bottom:14px}.admin-field span{display:block;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3);margin-bottom:6px}.admin-field input,.admin-field textarea,.admin-export textarea{width:100%;border:1px solid var(--line);border-radius:10px;padding:12px 13px;font:inherit;background:var(--bg-soft);outline:none}.admin-field textarea{min-height:110px;resize:vertical}.admin-check{display:flex;align-items:center;gap:8px;padding:31px 0 0}.admin-file{width:100%;padding:14px;border:1px dashed var(--line-2);border-radius:12px;background:var(--bg-soft)}.admin-photos{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px}.admin-photos button{position:relative;border:2px solid transparent;border-radius:10px;overflow:hidden;padding:0;background:#eef2f2;aspect-ratio:1}.admin-photos button.on{border-color:var(--accent)}.admin-photos img{width:100%;height:100%;object-fit:cover}.admin-photos span{position:absolute;left:6px;bottom:6px;background:rgba(0,0,0,.65);color:white;border-radius:999px;padding:3px 8px;font-size:11px}.admin-actions{display:flex;gap:10px;flex-wrap:wrap}.admin-actions .ghost{background:white;color:var(--ink);border:1px solid var(--line-2)}.admin-actions .danger{background:#D34245}.admin-message{margin-top:14px;color:var(--accent);font-weight:600}.admin-side{display:flex;flex-direction:column;gap:20px}.admin-preview,.admin-export{padding:20px;position:sticky;top:20px}.admin-export{position:static}.admin-export textarea{height:300px;font-family:var(--mono);font-size:11px}.admin-empty{height:100%;display:grid;place-items:center;color:var(--ink-3);background:var(--bg-soft)}.admin-login{max-width:420px;margin:18vh auto 40px;padding:28px}.admin-login form{margin:28px 0 16px}.admin-login label{display:block;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3);margin-bottom:8px}.admin-login input{width:100%;border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:12px}.admin-login button{width:100%}@media(max-width:980px){.admin-grid{grid-template-columns:1fr;padding:18px}.admin-row,.admin-row.four{grid-template-columns:1fr}.admin-top{grid-template-columns:1fr}.admin-preview{position:static}}`;

ReactDOM.createRoot(document.getElementById("app")).render(<AdminApp />);
