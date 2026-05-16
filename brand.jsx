// BrandMark — the actual hexagonal multi-facet logo from Merida Living.
// Flat-top hexagon, 6 triangles meeting at center.

function BrandMark({ size = 36, title = "Mérida Living" }) {
  const s = size;
  return (
    <span className="brand-mark" style={{display:'inline-block', width: s, height: s, lineHeight: 0}}>
      <img
        src="assets/official/brand/favico.png"
        alt={title}
        style={{ width: s, height: s, objectFit: 'contain' }}
      />
    </span>
  );
}

function BrandLockup({ size = 36, sub = "Beyond Real Estate" }) {
  return (
    <div className="brand">
      <BrandMark size={size} />
      <div>
        <div className="brand-name">Mérida Living</div>
        <div className="brand-sub">{sub}</div>
      </div>
    </div>
  );
}

window.BrandMark = BrandMark;
window.BrandLockup = BrandLockup;
