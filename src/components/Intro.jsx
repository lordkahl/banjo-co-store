import React from 'react';

export function Intro({ onDone }) {
  const [stage, setStage] = React.useState(0);

  React.useEffect(() => {
    const t = [];
    t.push(setTimeout(() => setStage(1), 60));
    t.push(setTimeout(() => setStage(2), 5200));
    t.push(setTimeout(() => onDone && onDone(), 5900));
    return () => t.forEach(clearTimeout);
  }, [onDone]);

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
      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); onDone && onDone(); }}
        aria-label="Close intro"
        style={{
          position: 'absolute', top: 16, right: 16,
          width: 44, height: 44,
          borderRadius: 999,
          border: '1.5px solid var(--ink)',
          background: 'var(--cream)',
          fontFamily: 'var(--f-mono)', fontSize: 18,
          cursor: 'pointer',
          boxShadow: '3px 3px 0 var(--ink)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2,
        }}>×</button>

      <div className="intro-stage" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 'clamp(12px, 3vw, 48px)',
        padding: '0 16px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.98)',
        transition: 'opacity .7s ease-out, transform .9s var(--e-out)',
        maxWidth: '100%',
      }}>
        <img src="/assets/banjo-frog.gif" alt="Banjo the Frog"
          className="intro-gif"
          style={{
            height: 'min(56vh, 480px)',
            maxWidth: '88vw',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 12px 30px rgba(31,26,19,0.14))',
            flexShrink: 1,
          }} />
        <img src="/assets/banjo-wordmark.png" alt="Banjo The Frog"
          className="intro-wordmark"
          style={{
            maxWidth: 'min(44vw, 560px)',
            maxHeight: '40vh',
            width: 'auto', height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 8px 22px rgba(31,26,19,0.12))',
          }} />
      </div>

      <div className="f-mono" style={{
        position: 'absolute', bottom: 24, left: 0, right: 0,
        textAlign: 'center',
        fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
        color: 'var(--ink)', opacity: 0.5,
        padding: '0 16px',
      }}>
        ✦ click anywhere to skip ✦
      </div>

      <style>{`
        @media (max-width: 720px) {
          .intro-stage {
            flex-direction: column;
            gap: 16px !important;
          }
          .intro-gif {
            height: auto !important;
            max-height: 42vh !important;
            max-width: 78vw !important;
          }
          .intro-wordmark {
            max-width: 78vw !important;
            max-height: 18vh !important;
          }
        }
      `}</style>
    </div>
  );
}
