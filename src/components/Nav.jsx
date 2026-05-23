import React from 'react';
import { useApp } from '../store.js';

const NAV_ITEMS = [
  { id: 'home',    label: 'Home' },
  { id: 'shop',    label: 'Shop' },
  { id: 'roadmap', label: 'Roadmap' },
];

export function Logo({ size = 18 }) {
  return (
    <div className="f-display" style={{
      fontSize: size, letterSpacing: '0.02em',
      display: 'inline-flex', alignItems: 'center', gap: 6,
    }}>
      <span style={{ color: 'var(--olive)' }}>BANJO</span>
      <span style={{ color: 'var(--accent)' }}>&amp;</span>
      <span>CO</span>
    </div>
  );
}

export function Nav() {
  const { route, go, cart, openCart } = useApp();
  const [menuOpen, setMenu] = React.useState(false);
  const total = cart.reduce((n, x) => n + x.qty, 0);

  React.useEffect(() => { setMenu(false); }, [route]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 60,
      background: 'rgba(235,229,211,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1.5px solid var(--ink)',
    }}>
      <div className="wrap" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64, gap: 16,
      }}>
        <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 34, height: 34, borderRadius: '50%',
            background: '#000', border: '1.5px solid var(--ink)',
            overflow: 'hidden', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 0 2px var(--cream), 0 0 0 3.5px var(--ink)',
          }}>
            <img src="/assets/pfp.png" alt="Banjo" style={{
              width: '100%', height: '100%', objectFit: 'cover',
            }} />
          </span>
          <Logo />
        </a>

        <nav className="nav-links" style={{
          display: 'flex', gap: 28,
          font: '600 12px/1 var(--f-sans)',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          {NAV_ITEMS.map((it) => (
            <a key={it.id} onClick={() => go(it.id)}
              style={{
                cursor: 'pointer',
                color: route === it.id ? 'var(--accent)' : 'var(--ink)',
                paddingBottom: 4,
                borderBottom: route === it.id ? '2px solid var(--accent)' : '2px solid transparent',
                transition: 'color .15s, border-color .15s',
              }}>{it.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={openCart} className="pill pill-dot"
            style={{ cursor: 'pointer', background: 'var(--cream)' }}>
            Cart · {total}
          </button>
          <button className="menu-btn" onClick={() => setMenu(!menuOpen)}
            style={{
              display: 'none',
              width: 36, height: 36, border: '1.5px solid var(--ink)',
              background: 'var(--cream)', borderRadius: 6,
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}>
            <span style={{ fontSize: 14, fontFamily: 'var(--f-mono)' }}>{menuOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{
          borderTop: '1.5px solid var(--ink)',
          background: 'var(--cream)',
          padding: '12px 16px 18px',
          display: 'flex', flexDirection: 'column', gap: 4,
          animation: 'pageIn .25s var(--e-out)',
        }}>
          {NAV_ITEMS.map((it) => (
            <a key={it.id} onClick={() => go(it.id)}
              className="f-display"
              style={{
                fontSize: 24, padding: '10px 0',
                color: route === it.id ? 'var(--accent)' : 'var(--ink)',
                cursor: 'pointer', borderBottom: '1px dashed var(--ink)',
              }}>{it.label} <span style={{ float: 'right', fontSize: 14, color: 'var(--mute)' }}>→</span></a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .nav-links { display: none !important; }
          .menu-btn  { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
