// Brand components for Merida Living.

function BrandMark({ size = 36, title = "Merida Living" }) {
  return (
    <span className="brand-mark" style={{ display: "inline-block", width: size, height: size, lineHeight: 0 }}>
      <img
        src="assets/official/brand/favico.png"
        alt={title}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    </span>
  );
}

function BrandLockup() {
  return (
    <div className="brand">
      <img
        className="brand-logo-full"
        src="assets/official/brand/logo.png"
        alt="Merida Living - beyond real estate"
      />
    </div>
  );
}

window.BrandMark = BrandMark;
window.BrandLockup = BrandLockup;
