// bcs-intro.jsx — first-load animation:
// Stage 0: GIF + wordmark banner fade in together
// Stage 1: hold for a few seconds → fade out → done

function Intro({ onDone, force = false }) {
  const [stage, setStage] = React.useState(0);
  // 0 = pre-mount, 1 = visible, 2 = fading out

  React.useEffect(() => {
    const t = [];
    t.push(setTimeout(() => setStage(1), 60));     // fade in
    t.push(setTimeout(() => setStage(2), 5200));   // fade out
    t.push(setTimeout(() => onDone && onDone(), 5900));
    return () => t.forEach(clearTimeout);
  }, []);

  const visible = stage === 1;

  return (
    <div
      onClick={() => onDone && onDone()}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'var(--cream)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
      }}>
      {/* Banner: GIF + wordmark together */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 'clamp(16px, 3vw, 48px)',
        padding: '0 24px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.98)',
        transition: 'opacity .7s ease-out, transform .9s var(--e-out)',
        maxWidth: '100%',
      }}>
        <img src="assets/banjo-frog.gif" alt="Banjo the Frog"
          style={{
            height: 'min(64vh, 480px)',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 12px 30px rgba(31,26,19,0.14))',
            flexShrink: 0,
          }} />
        <img src="assets/banjo-wordmark.png" alt="Banjo The Frog"
          style={{
            maxWidth: 'min(48vw, 560px)',
            maxHeight: '50vh',
            width: 'auto', height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 8px 22px rgba(31,26,19,0.12))',
          }} />
      </div>

      {/* Skip hint */}
      <div className="f-mono" style={{
        position: 'absolute', bottom: 28, left: 0, right: 0,
        textAlign: 'center',
        fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
        color: 'var(--ink)', opacity: 0.5,
      }}>
        ✦ click anywhere to skip ✦
      </div>
    </div>
  );
}

Object.assign(window, { Intro });
