// Root app — composes the sections and wires up Tweaks.

const { useEffect } = React;

const ACCENT_OPTS = [
  { value: 'teal',   label: 'Turquesa', color: '#3FBBB0' },
  { value: 'purple', label: 'Morado',   color: '#5B4B95' },
  { value: 'orange', label: 'Naranja',  color: '#E8A33D' },
  { value: 'red',    label: 'Rojo',     color: '#D34245' },
  { value: 'green',  label: 'Verde',    color: '#3DA77F' },
];

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS__);

  useEffect(() => {
    document.documentElement.dataset.accent = t.accent;
    document.documentElement.dataset.type = t.type;
  }, [t.accent, t.type]);

  // TweakColor stores the color string; map back to value name.
  const accentColor = ACCENT_OPTS.find(o => o.value === t.accent)?.color || '#3FBBB0';
  const handleAccent = (hex) => {
    const m = ACCENT_OPTS.find(o => o.color === hex);
    if (m) setTweak('accent', m.value);
  };

  return (
    <>
      <TopBar />
      <Hero />
      <FeaturedSection />
      <Neighborhoods />
      <WhyUs />
      <CatalogStrip />
      <Testimonials />
      <Team />
      <Journal />
      <FinalCTA />
      <Footer />
      <WhatsFloat />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color de acento">
          <TweakColor
            label="Faceta principal"
            value={accentColor}
            options={ACCENT_OPTS.map(o => o.color)}
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
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
