// wireframe-kit.jsx
// Shared bits for the Banjo & Co wireframes: frames, placeholders, mascot,
// marquee, sketchy primitives. Black & white with one tweakable accent.

const WK_BP = {
  bg: 'var(--wk-bg)',
  ink: 'var(--wk-ink)',
  accent: 'var(--wk-accent)',
  mute: 'var(--wk-mute)',
  paper: 'var(--wk-paper)',
};

// ─── Inject base wireframe CSS once ────────────────────────────────
(function injectWKStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('wk-styles')) return;
  const s = document.createElement('style');
  s.id = 'wk-styles';
  s.textContent = `
    :root {
      --wk-bg: #f3efe4;
      --wk-paper: #ebe5d3;
      --wk-ink: #1a1916;
      --wk-mute: #8a8676;
      --wk-accent: #5a6b2c;
      --wk-density: 1;
      --wk-marquee: 22s;
    }
    .wk { font-family: 'Kalam', 'Patrick Hand', 'Comic Sans MS', cursive; color: var(--wk-ink); }
    .wk-sans { font-family: 'IBM Plex Sans', 'Helvetica Neue', sans-serif; }
    .wk-mono { font-family: 'JetBrains Mono', 'Menlo', monospace; }
    .wk-display { font-family: 'Archivo Black', 'Impact', sans-serif; letter-spacing: -0.01em; }

    /* Sketchy stroke */
    .wk-box {
      border: 1.5px solid var(--wk-ink);
      border-radius: 3px;
      background: transparent;
      position: relative;
    }
    .wk-box-wobble {
      border-radius: 8px 5px 9px 6px / 5px 8px 6px 9px;
    }
    .wk-box-fill { background: var(--wk-paper); }
    .wk-box-ink  { background: var(--wk-ink); color: var(--wk-bg); }
    .wk-box-accent { background: var(--wk-accent); color: #fff; border-color: var(--wk-ink); }

    .wk-line {
      height: 1.5px; background: var(--wk-ink); border-radius: 999px;
    }
    .wk-line-dashed {
      border-top: 1.5px dashed var(--wk-ink); height: 0;
    }

    /* Placeholder image — diagonal hatch */
    .wk-img {
      background-color: var(--wk-paper);
      background-image: repeating-linear-gradient(
        135deg,
        transparent 0,
        transparent 7px,
        rgba(26,25,22,0.18) 7px,
        rgba(26,25,22,0.18) 8px
      );
      border: 1.5px solid var(--wk-ink);
      position: relative;
      display: flex; align-items: center; justify-content: center;
      color: var(--wk-ink);
      font-family: 'JetBrains Mono', 'Menlo', monospace;
      font-size: 9px; letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .wk-img > span {
      background: var(--wk-bg); padding: 2px 6px; border: 1px solid var(--wk-ink);
      border-radius: 2px;
    }

    /* Marquee */
    @keyframes wk-march {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .wk-marquee {
      overflow: hidden; white-space: nowrap;
      background: var(--wk-accent); color: #fff;
      border-top: 1.5px solid var(--wk-ink);
      border-bottom: 1.5px solid var(--wk-ink);
    }
    .wk-marquee-track {
      display: inline-flex; gap: 22px;
      animation: wk-march var(--wk-marquee) linear infinite;
      padding: 5px 0;
      font-family: 'Archivo Black', 'Impact', sans-serif;
      letter-spacing: 0.04em;
      font-size: 11px;
    }
    .wk-marquee-track span::before { content: '✦  '; }

    /* Hover reveal */
    .wk-hover { position: relative; cursor: pointer; }
    .wk-hover .wk-hover-rev {
      position: absolute; inset: 0;
      background: var(--wk-accent); color: #fff;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity .18s;
      font-family: 'Archivo Black', sans-serif; text-transform: uppercase;
      font-size: 11px; letter-spacing: 0.06em;
    }
    .wk-hover:hover .wk-hover-rev { opacity: 1; }

    /* Sketchy underline */
    .wk-uline {
      background-image: linear-gradient(var(--wk-accent), var(--wk-accent));
      background-size: 100% 35%;
      background-repeat: no-repeat;
      background-position: 0 88%;
    }

    /* Page selector pill in tweaks header */
    .wk-pill { font-family: 'JetBrains Mono', monospace; font-size: 9px;
      letter-spacing: 0.08em; text-transform: uppercase;
      border: 1.5px solid var(--wk-ink); border-radius: 999px;
      padding: 3px 9px; background: var(--wk-bg);
    }
  `;
  document.head.appendChild(s);

  // Google fonts
  if (!document.getElementById('wk-fonts')) {
    const link = document.createElement('link');
    link.id = 'wk-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600&family=Kalam:wght@400;700&family=Patrick+Hand&display=swap';
    document.head.appendChild(link);
  }
})();

// ─── Frog mascot (original, simple, NOT a recreation of any branded character) ───
function FrogMascot({ size = 80, holdingBanjo = false, style }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" style={style}>
      {/* Body blob */}
      <path d="M20 65 Q15 45 30 38 Q35 24 50 24 Q65 24 70 38 Q85 45 80 65 Q75 82 50 82 Q25 82 20 65 Z"
        fill="var(--wk-accent)" stroke="var(--wk-ink)" strokeWidth="2" />
      {/* Eye bumps */}
      <ellipse cx="33" cy="28" rx="10" ry="11" fill="var(--wk-accent)" stroke="var(--wk-ink)" strokeWidth="2"/>
      <ellipse cx="67" cy="28" rx="10" ry="11" fill="var(--wk-accent)" stroke="var(--wk-ink)" strokeWidth="2"/>
      <circle cx="33" cy="29" r="4" fill="var(--wk-ink)" />
      <circle cx="67" cy="29" r="4" fill="var(--wk-ink)" />
      <circle cx="34.5" cy="27.5" r="1.2" fill="#fff" />
      <circle cx="68.5" cy="27.5" r="1.2" fill="#fff" />
      {/* Smile */}
      <path d="M38 58 Q50 66 62 58" fill="none" stroke="var(--wk-ink)" strokeWidth="2" strokeLinecap="round"/>
      {/* Cheek dots */}
      <circle cx="30" cy="58" r="2" fill="var(--wk-ink)" opacity="0.35"/>
      <circle cx="70" cy="58" r="2" fill="var(--wk-ink)" opacity="0.35"/>
      {/* Banjo */}
      {holdingBanjo && (
        <g>
          <circle cx="78" cy="70" r="9" fill="var(--wk-bg)" stroke="var(--wk-ink)" strokeWidth="1.8"/>
          <line x1="86" y1="62" x2="98" y2="50" stroke="var(--wk-ink)" strokeWidth="2"/>
          <line x1="78" y1="61" x2="78" y2="79" stroke="var(--wk-ink)" strokeWidth="1"/>
          <line x1="75" y1="61" x2="75" y2="79" stroke="var(--wk-ink)" strokeWidth="1"/>
          <line x1="81" y1="61" x2="81" y2="79" stroke="var(--wk-ink)" strokeWidth="1"/>
        </g>
      )}
    </svg>
  );
}

// ─── Marquee strip ────────────────────────────────────────────────
function Marquee({ items = ['BANJO & CO', 'PLUSH No.001', 'PRE-ORDER OPEN', 'SHIPS WORLDWIDE'], style }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="wk-marquee" style={style}>
      <div className="wk-marquee-track">
        {row.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

// ─── Image placeholder ────────────────────────────────────────────
function Img({ label = 'image', style, className = '' }) {
  return (
    <div className={`wk-img ${className}`} style={style}>
      <span>{label}</span>
    </div>
  );
}

// ─── Sketchy text block (lines of varied widths) ──────────────────
function TextBlock({ lines = 3, widths = [100, 85, 60], style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, ...style }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="wk-line" style={{ width: `${widths[i % widths.length]}%` }} />
      ))}
    </div>
  );
}

// ─── Device frames ────────────────────────────────────────────────
// Each artboard hosts a Desktop+Mobile pair so a single direction can be read
// at a glance across breakpoints.
function DesktopFrame({ width = 720, height = 460, children, label = 'desktop' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ font: '9px/1 "JetBrains Mono", monospace', color: 'var(--wk-mute)',
        textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        ▢ {label} · {width}×{height}
      </div>
      <div style={{
        width, height,
        background: 'var(--wk-bg)',
        border: '1.5px solid var(--wk-ink)',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '4px 4px 0 var(--wk-ink)',
      }}>
        {/* tiny browser chrome */}
        <div style={{ height: 14, borderBottom: '1px solid var(--wk-ink)',
          display: 'flex', alignItems: 'center', gap: 4, padding: '0 6px',
          background: 'var(--wk-paper)' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', border: '1px solid var(--wk-ink)' }} />
          <span style={{ width: 5, height: 5, borderRadius: '50%', border: '1px solid var(--wk-ink)' }} />
          <span style={{ width: 5, height: 5, borderRadius: '50%', border: '1px solid var(--wk-ink)' }} />
          <span style={{ marginLeft: 8, fontSize: 7, fontFamily: 'JetBrains Mono, monospace',
            color: 'var(--wk-mute)' }}>banjoandco.xyz</span>
        </div>
        <div style={{ position: 'absolute', top: 14, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileFrame({ width = 200, height = 420, children, label = 'mobile' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ font: '9px/1 "JetBrains Mono", monospace', color: 'var(--wk-mute)',
        textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        ▢ {label} · {width}×{height}
      </div>
      <div style={{
        width, height,
        background: 'var(--wk-bg)',
        border: '1.5px solid var(--wk-ink)',
        borderRadius: 18,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '4px 4px 0 var(--wk-ink)',
        padding: 6,
      }}>
        <div style={{
          width: '100%', height: '100%',
          border: '1px solid var(--wk-ink)',
          borderRadius: 12,
          overflow: 'hidden',
          position: 'relative',
        }}>
          {/* notch */}
          <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)',
            width: 40, height: 6, background: 'var(--wk-ink)', borderRadius: 999, zIndex: 5 }} />
          {children}
        </div>
      </div>
    </div>
  );
}

// Wraps Desktop + Mobile in a row, for use inside one DCArtboard.
function Pair({ children }) {
  return (
    <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
      {children}
    </div>
  );
}

// ─── Annotation post-it style ─────────────────────────────────────
function Note({ children, style }) {
  return (
    <div className="wk" style={{
      background: '#fef4a8',
      border: '1.5px solid var(--wk-ink)',
      padding: '5px 8px',
      fontSize: 11,
      lineHeight: 1.25,
      transform: 'rotate(-1.5deg)',
      boxShadow: '2px 2px 0 rgba(0,0,0,.15)',
      maxWidth: 180,
      ...style,
    }}>{children}</div>
  );
}

// Tiny button placeholder
function Btn({ children, dark, accent, style }) {
  const cls = dark ? 'wk-box wk-box-ink' : accent ? 'wk-box wk-box-accent' : 'wk-box';
  return (
    <div className={`wk-sans ${cls}`} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '4px 10px', fontSize: 9, fontWeight: 600, letterSpacing: '0.04em',
      textTransform: 'uppercase', borderRadius: 2,
      ...style,
    }}>{children}</div>
  );
}

Object.assign(window, {
  FrogMascot, Marquee, Img, TextBlock, DesktopFrame, MobileFrame, Pair, Note, Btn,
});
