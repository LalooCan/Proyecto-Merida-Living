// BrandMark — the actual hexagonal multi-facet logo from Merida Living.
// Flat-top hexagon, 6 triangles meeting at center.

function BrandMark({ size = 36, title = "Mérida Living" }) {
  const s = size;
  return (
    <span className="brand-mark" style={{display:'inline-block', width: s, height: s, lineHeight: 0}}>
      <svg viewBox="0 0 100 100" width={s} height={s} aria-label={title}>
        {/* top — orange */}
        <polygon points="50,50 27,10.2 73,10.2"  fill="#E8A33D"/>
        {/* upper-right — red */}
        <polygon points="50,50 73,10.2 96,50"    fill="#D34245"/>
        {/* lower-right — teal */}
        <polygon points="50,50 96,50 73,89.8"    fill="#3FBBB0"/>
        {/* bottom — green/teal */}
        <polygon points="50,50 73,89.8 27,89.8"  fill="#3DA77F"/>
        {/* lower-left — light purple */}
        <polygon points="50,50 27,89.8 4,50"     fill="#7E72A8"/>
        {/* upper-left — dark purple */}
        <polygon points="50,50 4,50 27,10.2"     fill="#5B4B95"/>
        {/* subtle inner highlight */}
        <polygon points="50,50 27,10.2 73,10.2 96,50 73,89.8 27,89.8 4,50" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6"/>
      </svg>
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
