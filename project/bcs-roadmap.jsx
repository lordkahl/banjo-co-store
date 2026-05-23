// bcs-roadmap.jsx — The Pond Roadmap.
// 6 stepping-stone milestones across a frog pond.

function RoadmapPage() {
  const { go } = useApp();
  const [activeId, setActiveId] = React.useState(null);

  // ── Milestones (positions are % within the pond rect)
  const MILESTONES = [
    { id: 1, band: 'short', q: 'Q1 2026', title: 'Token Launch',          desc: 'Genesis $BANJO goes live on chain.', status: 'done',    x: 10, y: 76 },
    { id: 2, band: 'short', q: 'Q2 2026', title: 'Web Launch',            desc: 'banjoandco.xyz opens its doors.',    status: 'current', x: 25, y: 50 },
    { id: 3, band: 'mid',   q: 'Q3 2026', title: 'MVP Product Launch',    desc: 'Banjo Plush 001 ships worldwide.',   status: 'next',    x: 43, y: 72 },
    { id: 4, band: 'mid',   q: 'Q4 2026', title: 'Banjo & Co',            desc: 'The studio fully operational.',      status: 'next',    x: 58, y: 42 },
    { id: 5, band: 'long',  q: 'Q1 2027', title: 'Worldwide Distribution', desc: 'Retail in 12+ countries.',          status: 'planned', x: 76, y: 66 },
    { id: 6, band: 'long',  q: 'Q2 2027', title: 'Partnerships Worldwide', desc: 'Brand collabs and licensing.',      status: 'planned', x: 91, y: 32 },
  ];

  // ── Lily pads (decorative)
  const LILIES = [
    { x: 5,  y: 38, size: 78,  rot: -18, flip: false },
    { x: 16, y: 18, size: 62,  rot: 35,  flip: true  },
    { x: 34, y: 30, size: 92,  rot: 110, flip: false },
    { x: 50, y: 86, size: 70,  rot: -55, flip: true  },
    { x: 66, y: 22, size: 84,  rot: 200, flip: false },
    { x: 82, y: 84, size: 96,  rot: -110,flip: true  },
    { x: 96, y: 56, size: 58,  rot: 70,  flip: false },
    { x: 38, y: 56, size: 50,  rot: -30, flip: true  },
  ];

  // (No decorative frogs — Banjo himself is the only frog on the pond.)

  return (
    <div className="page">
      <Marquee tone="olive" items={[
        '✦ THE ROADMAP', 'WHERE WE\'RE HOPPING NEXT', '✦ 6 STEPPING STONES',
        'PUMPFUN → EVERYWHERE',
      ]} />

      {/* Intro */}
      <section className="wrap" style={{ padding: '60px 24px 32px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <div className="eyebrow eyebrow-bright">✦ The Roadmap · 2026 → 2027</div>
            <h1 className="f-display" style={{ fontSize: 'clamp(48px, 7vw, 110px)', marginTop: 12, lineHeight: 0.92 }}>
              SIX <span style={{ color: 'var(--accent)' }}>STEPPING</span><br/>
              STONES ACROSS<br/>
              ONE <span className="uline">LITTLE</span> POND.
            </h1>
          </div>
          <p style={{ maxWidth: 360, fontSize: 15, lineHeight: 1.5, color: 'var(--ink-soft)' }}>
            Banjo doesn't sprint — he hops. Each stone below is a small,
            possible jump from where we are today to a studio that ships
            soft things everywhere.
          </p>
        </div>

        {/* Legend */}
        <div className="rm-legend" style={{
          marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap',
          font: '500 11px/1 var(--f-mono)', letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}>
          <LegendDot color="var(--olive)"      label="Done" />
          <LegendDot color="var(--accent)"     label="In Progress" />
          <LegendDot color="var(--cream-deep)" label="Up Next" outline />
          <LegendDot color="var(--cream)"      label="Planned" outline />
        </div>
      </section>

      {/* Pond */}
      <section className="wrap" style={{ padding: '0 24px 60px' }}>
        <div className="pond" style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          minHeight: 420,
          background: 'var(--pond-water, #1f3326)',
          border: '1.5px solid var(--ink)',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '10px 10px 0 var(--ink)',
        }}>
          {/* Water ripple texture */}
          <svg aria-hidden width="100%" height="100%" preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
            <defs>
              <pattern id="ripples" x="0" y="0" width="160" height="80" patternUnits="userSpaceOnUse">
                <path d="M0 40 Q 40 18, 80 40 T 160 40" fill="none" stroke="#a8c97a" strokeWidth="1" />
                <path d="M0 64 Q 40 46, 80 64 T 160 64" fill="none" stroke="#a8c97a" strokeWidth="1" opacity="0.5" />
                <path d="M0 16 Q 40 0,  80 16 T 160 16" fill="none" stroke="#a8c97a" strokeWidth="1" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ripples)" />
          </svg>

          {/* Phase band tints */}
          <div aria-hidden style={{ position: 'absolute', inset: 0, display: 'flex', pointerEvents: 'none' }}>
            <div style={{ flex: 1, borderRight: '1px dashed rgba(235,229,211,0.18)' }} />
            <div style={{ flex: 1, borderRight: '1px dashed rgba(235,229,211,0.18)' }} />
            <div style={{ flex: 1 }} />
          </div>

          {/* Phase labels at top */}
          <div aria-hidden style={{
            position: 'absolute', top: 14, left: 0, right: 0,
            display: 'flex', pointerEvents: 'none',
            font: '600 10px/1 var(--f-mono)', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(235,229,211,0.55)',
          }}>
            <div style={{ flex: 1, textAlign: 'center' }}>· Short Term ·</div>
            <div style={{ flex: 1, textAlign: 'center' }}>· Mid Term ·</div>
            <div style={{ flex: 1, textAlign: 'center' }}>· Long Term ·</div>
          </div>

          {/* Connecting dashed path through the stones */}
          <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <path
              d={`M ${MILESTONES[0].x} ${MILESTONES[0].y}
                  C 16 80, 22 56, ${MILESTONES[1].x} ${MILESTONES[1].y}
                  S 38 78, ${MILESTONES[2].x} ${MILESTONES[2].y}
                  S 52 38, ${MILESTONES[3].x} ${MILESTONES[3].y}
                  S 72 70, ${MILESTONES[4].x} ${MILESTONES[4].y}
                  S 87 28, ${MILESTONES[5].x} ${MILESTONES[5].y}`}
              fill="none"
              stroke="var(--cream)"
              strokeWidth="0.3"
              strokeDasharray="0.8 1.2"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>

          {/* Lily pads */}
          {LILIES.map((l, i) => (
            <LilyPad key={'l' + i} {...l} />
          ))}

          {/* Stones */}
          {MILESTONES.map((m, i) => (
            <Stone key={m.id} m={m} index={i + 1}
              active={activeId === m.id}
              onToggle={() => setActiveId(activeId === m.id ? null : m.id)} />
          ))}

          {/* Banjo mascot sitting on the current stone */}
          <BanjoOnStone m={MILESTONES.find((x) => x.status === 'current')} />

          {/* Pond meta tag (top-left) */}
          <div style={{
            position: 'absolute', top: 14, left: 14,
            background: 'rgba(31,26,19,0.7)',
            color: 'var(--cream)',
            padding: '6px 12px',
            border: '1px solid rgba(235,229,211,0.4)',
            borderRadius: 999,
            font: '500 10px/1 var(--f-mono)', letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}>
            ✦ Banjo Pond · live map
          </div>

          {/* Scale legend bottom-right */}
          <div style={{
            position: 'absolute', bottom: 14, right: 14,
            background: 'rgba(31,26,19,0.7)',
            color: 'var(--cream)',
            padding: '6px 12px',
            border: '1px solid rgba(235,229,211,0.4)',
            borderRadius: 4,
            font: '500 10px/1 var(--f-mono)', letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}>
            ↶ 2026 — 2027 ↷
          </div>
        </div>

        {/* Mobile list fallback */}
        <ol className="rm-list" style={{
          listStyle: 'none', padding: 0, margin: '24px 0 0',
          display: 'none', flexDirection: 'column', gap: 12,
        }}>
          {MILESTONES.map((m, i) => (
            <li key={m.id} style={{
              display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: 14,
              alignItems: 'center', padding: 14,
              background: 'var(--cream-soft)',
              border: '1.5px solid var(--ink)', borderRadius: 8,
            }}>
              <span style={{
                width: 36, height: 36, borderRadius: '50%',
                background: stoneFill(m.status),
                border: '1.5px solid var(--ink)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                font: '700 13px/1 var(--f-mono)', color: m.status === 'done' || m.status === 'current' ? '#fff' : 'var(--ink)',
              }}>{i + 1}</span>
              <div>
                <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{m.q} · {bandLabel(m.band)}</div>
                <div className="f-display" style={{ fontSize: 18, marginTop: 2 }}>{m.title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 2 }}>{m.desc}</div>
              </div>
              <span className="pill" style={{ background: stoneFill(m.status), color: m.status === 'done' || m.status === 'current' ? '#fff' : 'var(--ink)' }}>
                {statusLabel(m.status)}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Quote / CTA band */}
      <section style={{
        background: 'var(--ink)', color: 'var(--cream)',
        borderTop: '1.5px solid var(--ink)',
        borderBottom: '1.5px solid var(--ink)',
      }}>
        <div className="wrap" style={{ padding: '70px 24px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>✦ The plan, briefly</div>
          <p className="f-display" style={{
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            margin: '20px auto 0', maxWidth: 900, lineHeight: 1.05,
          }}>
            ONE <span style={{ color: 'var(--accent)' }}>HOP</span> AT A TIME.<br/>
            ACROSS THE <span className="uline">WHOLE</span> POND.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
            <button className="btn btn-accent btn-lg" onClick={() => go('product')}>Catch the genesis drop →</button>
            <button className="btn btn-lg" style={{ background: 'var(--cream)' }} onClick={() => go('shop')}>See the catalog</button>
          </div>
        </div>
      </section>

      <Marquee tone="accent" items={[
        '✦ Q1 2026 · TOKEN', 'Q2 2026 · WEB', '✦ Q3 2026 · MVP',
        'Q4 2026 · BANJO & CO', '✦ Q1 2027 · WORLDWIDE', 'Q2 2027 · PARTNERSHIPS',
      ]} />

      <style>{`
        .pond { --pond-water: #1f3326; }

        /* Hover / tap enlarge for stones */
        .stone-card {
          transform-origin: bottom center;
          transition: transform .22s var(--e-spring), box-shadow .2s var(--e-out);
        }
        .stone-wrap:hover .stone-card,
        .stone-wrap:focus-visible .stone-card,
        .stone-wrap.is-active .stone-card {
          transform: translate(-50%, calc(-100% - 10px)) scale(1.22);
          box-shadow: 7px 7px 0 var(--ink);
        }
        .stone-shadow { transition: transform .2s var(--e-out), opacity .2s; }
        .stone-wrap:hover .stone-shadow,
        .stone-wrap.is-active .stone-shadow {
          transform: translateX(-50%) scale(1.12);
          opacity: 0.85;
        }
        .stone-wrap:focus-visible {
          outline: 2px dashed var(--accent);
          outline-offset: 4px;
          border-radius: 6px;
        }

        /* Gentle bob for lilies */
        @keyframes lilyBob {
          0%, 100% { transform: translate(-50%, -50%) rotate(var(--rot)) scaleX(var(--fx)); }
          50%      { transform: translate(-50%, -52%) rotate(calc(var(--rot) + 2deg)) scaleX(var(--fx)); }
        }
        .lily { animation: lilyBob 6s ease-in-out infinite; }
        .lily:nth-child(2n) { animation-duration: 8s; animation-delay: -2s; }
        .lily:nth-child(3n) { animation-duration: 7s; animation-delay: -4s; }

        /* Frog blink hint */
        @keyframes frogIdle {
          0%, 92%, 100% { transform: translate(-50%, -50%) rotate(var(--rot)); }
          95%           { transform: translate(-50%, -53%) rotate(var(--rot)); }
        }
        .frog { animation: frogIdle 5s ease-in-out infinite; }
        .frog:nth-child(2n) { animation-delay: -1.5s; }
        .frog:nth-child(3n) { animation-delay: -3s; }

        @media (max-width: 880px) {
          .pond { display: none; }
          .rm-list { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────
function bandLabel(b) {
  return b === 'short' ? 'Short term' : b === 'mid' ? 'Mid term' : 'Long term';
}
function statusLabel(s) {
  return s === 'done' ? '✓ Done' : s === 'current' ? '⌁ Now' : s === 'next' ? '· Up next' : '· Planned';
}
function stoneFill(s) {
  return s === 'done'    ? 'var(--olive)'
       : s === 'current' ? 'var(--accent)'
       : s === 'next'    ? 'var(--cream-deep)'
       :                   'var(--cream)';
}

function LegendDot({ color, label, outline }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{
        width: 14, height: 14, borderRadius: '50%',
        background: color, border: '1.5px solid var(--ink)',
        boxShadow: outline ? 'none' : '0 0 0 2px rgba(31,26,19,0.05)',
      }} />
      <span style={{ color: 'var(--ink-soft)' }}>{label}</span>
    </span>
  );
}

// ── Stone (stepping stone milestone) ───────────────────────────
function Stone({ m, index, active, onToggle }) {
  const fill = stoneFill(m.status);
  const textOnFill = m.status === 'done' || m.status === 'current' ? '#fff' : 'var(--ink)';

  return (
    <div
      className={'stone-wrap' + (active ? ' is-active' : '')}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
      style={{
        position: 'absolute',
        left: m.x + '%',
        top: m.y + '%',
        transform: 'translate(-50%, -50%)',
        zIndex: active ? 6 : 3,
        cursor: 'pointer',
        outline: 'none',
      }}>
      {/* Stone base (ellipse "rock") with hard shadow */}
      <div className="stone-shadow" style={{
        position: 'absolute',
        left: '50%', top: 6,
        transform: 'translateX(-50%)',
        width: 132, height: 38,
        background: 'rgba(31,26,19,0.5)',
        borderRadius: '50%',
        filter: 'blur(4px)',
        transition: 'transform .2s var(--e-out)',
      }} aria-hidden />
      <div style={{
        position: 'relative',
        width: 132, height: 42,
        background: '#c9b98e',
        borderRadius: '50%',
        border: '1.5px solid var(--ink)',
        boxShadow: 'inset 0 -6px 0 rgba(31,26,19,0.18), inset 0 4px 0 rgba(255,255,255,0.3)',
      }}>
        {/* tiny moss tuft on the stone */}
        <span aria-hidden style={{
          position: 'absolute', top: 4, left: 14,
          width: 28, height: 8, borderRadius: '50%',
          background: 'var(--olive)',
          opacity: 0.7,
        }} />
        <span aria-hidden style={{
          position: 'absolute', top: 6, right: 12,
          width: 16, height: 5, borderRadius: '50%',
          background: 'var(--olive-deep)',
          opacity: 0.6,
        }} />
        {/* index number */}
        <span style={{
          position: 'absolute',
          bottom: 6, left: '50%', transform: 'translateX(-50%)',
          font: '700 10px/1 var(--f-mono)',
          color: 'rgba(31,26,19,0.45)',
          letterSpacing: '0.1em',
        }}>0{index}</span>
      </div>

      {/* Floating card */}
      <div className="stone-card" style={{
        position: 'absolute',
        left: '50%', top: 0,
        transform: 'translate(-50%, calc(-100% + 6px))',
        width: 180,
        background: fill,
        color: textOnFill,
        border: '1.5px solid var(--ink)',
        borderRadius: 8,
        padding: '10px 12px 12px',
        boxShadow: '4px 4px 0 var(--ink)',
        zIndex: 2,
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 6, marginBottom: 4,
        }}>
          <span style={{
            font: '600 9px/1 var(--f-mono)',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            opacity: 0.85,
          }}>{m.q}</span>
          <span style={{
            font: '600 9px/1 var(--f-mono)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '3px 6px',
            background: m.status === 'done' || m.status === 'current'
              ? 'rgba(255,255,255,0.18)'
              : 'rgba(31,26,19,0.08)',
            borderRadius: 3,
          }}>{statusLabel(m.status)}</span>
        </div>
        <div className="f-display" style={{
          fontSize: 16, lineHeight: 1.0, marginTop: 2,
        }}>{m.title.toUpperCase()}</div>
        <div style={{
          fontSize: 11, lineHeight: 1.35, marginTop: 6,
          opacity: 0.85,
        }}>{m.desc}</div>

        {/* Connector tick down to the stone */}
        <span aria-hidden style={{
          position: 'absolute',
          left: '50%', bottom: -10, transform: 'translateX(-50%)',
          width: 2, height: 10, background: 'var(--ink)',
        }} />
      </div>
    </div>
  );
}

// ── Banjo on the current stone ─────────────────────────────────
function BanjoOnStone({ m }) {
  if (!m) return null;
  return (
    <div style={{
      position: 'absolute',
      left: m.x + '%',
      top: m.y + '%',
      transform: 'translate(-50%, -50%)',
      zIndex: 4,
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute',
        left: 'calc(50% + 40px)',
        top: -8,
        transform: 'translate(-50%, -100%)',
        width: 56, height: 56, borderRadius: '50%',
        background: '#000',
        border: '1.5px solid var(--ink)',
        boxShadow: '3px 3px 0 var(--ink)',
        overflow: 'hidden',
        animation: 'lilyBob 3s ease-in-out infinite',
      }}>
        <img src="assets/pfp.png" alt="Banjo"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {/* "you are here" tag */}
      <div style={{
        position: 'absolute',
        left: 'calc(50% + 80px)',
        top: -78,
        background: '#fef4a8',
        border: '1.5px solid var(--ink)',
        padding: '4px 8px',
        font: '11px/1.2 "Kalam", "JetBrains Mono", monospace',
        transform: 'rotate(6deg)',
        boxShadow: '2px 2px 0 rgba(31,26,19,0.25)',
        whiteSpace: 'nowrap',
      }}>you are here ↘</div>
    </div>
  );
}

// ── Lily Pad (simple shapes only) ──────────────────────────────
function LilyPad({ x, y, size, rot, flip }) {
  // A lily pad = circle with a wedge cut + a small flower.
  const fx = flip ? -1 : 1;
  return (
    <div className="lily" style={{
      position: 'absolute',
      left: x + '%', top: y + '%',
      width: size, height: size,
      transform: `translate(-50%, -50%) rotate(${rot}deg) scaleX(${fx})`,
      '--rot': rot + 'deg',
      '--fx': fx,
      zIndex: 1,
      pointerEvents: 'none',
    }}>
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
          <clipPath id={`pad-${x}-${y}`}>
            <path d="M 50 50 L 100 50 A 50 50 0 1 0 70 92 Z" />
          </clipPath>
        </defs>
        {/* shadow */}
        <ellipse cx="52" cy="56" rx="46" ry="42" fill="rgba(0,0,0,0.25)" />
        {/* pad */}
        <g clipPath={`url(#pad-${x}-${y})`}>
          <circle cx="50" cy="50" r="46" fill="#6a8a36" />
          {/* veins */}
          <g stroke="#3f4d1d" strokeWidth="1.2" fill="none" opacity="0.55">
            <path d="M 50 50 L 95 50" />
            <path d="M 50 50 L 78 22" />
            <path d="M 50 50 L 78 78" />
            <path d="M 50 50 L 90 28" />
            <path d="M 50 50 L 90 72" />
          </g>
          {/* highlight */}
          <ellipse cx="62" cy="38" rx="14" ry="6" fill="rgba(255,255,255,0.18)" />
          {/* rim */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="#1f1a13" strokeWidth="1.6" />
        </g>
        {/* tiny flower bud on some pads */}
        {(size > 80) && (
          <g transform="translate(78,30)">
            <circle r="6" fill="#f6e4cf" stroke="#1f1a13" strokeWidth="1" />
            <circle r="2" fill="#d97a52" />
          </g>
        )}
      </svg>
    </div>
  );
}

// ── Frog (decorative, built from circles) ──────────────────────
function Frog({ x, y, size, rot }) {
  return (
    <div className="frog" style={{
      position: 'absolute',
      left: x + '%', top: y + '%',
      width: size, height: size,
      transform: `translate(-50%, -50%) rotate(${rot}deg)`,
      '--rot': rot + 'deg',
      zIndex: 2,
      pointerEvents: 'none',
    }}>
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        {/* shadow */}
        <ellipse cx="50" cy="78" rx="32" ry="6" fill="rgba(0,0,0,0.35)" />
        {/* body */}
        <ellipse cx="50" cy="60" rx="34" ry="22" fill="#7a9a3a" stroke="#1f1a13" strokeWidth="2" />
        {/* belly highlight */}
        <ellipse cx="50" cy="66" rx="22" ry="10" fill="#a8c264" opacity="0.7" />
        {/* eye bumps */}
        <circle cx="34" cy="40" r="11" fill="#7a9a3a" stroke="#1f1a13" strokeWidth="2" />
        <circle cx="66" cy="40" r="11" fill="#7a9a3a" stroke="#1f1a13" strokeWidth="2" />
        {/* eye whites */}
        <circle cx="34" cy="40" r="6" fill="#f6f1dc" />
        <circle cx="66" cy="40" r="6" fill="#f6f1dc" />
        {/* pupils */}
        <circle cx="34" cy="41" r="3" fill="#1f1a13" />
        <circle cx="66" cy="41" r="3" fill="#1f1a13" />
        {/* mouth */}
        <path d="M 36 62 Q 50 70 64 62" fill="none" stroke="#1f1a13" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

Object.assign(window, { RoadmapPage });
