import React from 'react';
import { useApp, PRODUCTS } from '../store.js';
import { Marquee } from '../components/Marquee.jsx';

export function ShopPage() {
  const { go } = useApp();
  const [filter, setFilter] = React.useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'live', label: 'Live · 1' },
    { id: 'soon', label: 'Coming Soon · 3' },
    { id: 'plush', label: 'Plush' },
    { id: 'paper', label: 'Paper' },
    { id: 'sound', label: 'Sound' },
  ];

  const visible = PRODUCTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'live') return !p.soon;
    if (filter === 'soon') return p.soon;
    if (filter === 'plush') return p.id.includes('plush');
    if (filter === 'paper') return p.id.includes('sticker') || p.id.includes('comic');
    if (filter === 'sound') return p.id.includes('vinyl');
    return true;
  });

  return (
    <div className="page">
      <Marquee tone="ink" items={[
        '✦ THE CATALOG', 'GENESIS DROP · 2026', 'PLUSH · PAPER · SOUND',
        '✦ FOUR THINGS, ONE FROG',
      ]} />

      <section className="wrap" style={{ padding: '60px 24px 32px' }}>
        <div className="eyebrow eyebrow-bright">✦ VALE · The Catalog</div>
        <h1 className="f-display" style={{ fontSize: 'clamp(56px, 8vw, 120px)', marginTop: 12, lineHeight: 0.95 }}>
          FOUR THINGS,<br/>
          ONE <span style={{ color: 'var(--accent)' }}>FROG</span>.
        </h1>
        <p style={{ maxWidth: 580, fontSize: 16, color: 'var(--ink-soft)', marginTop: 16 }}>
          We make small, slow drops. Banjo arrives July — the rest follow.
          Subscribe to The Padlog to know the moment any of them go live.
        </p>
      </section>

      <div style={{
        position: 'sticky', top: 64, zIndex: 30,
        background: 'rgba(235,229,211,0.94)',
        backdropFilter: 'blur(8px)',
        borderTop: '1.5px solid var(--ink)',
        borderBottom: '1.5px solid var(--ink)',
      }}>
        <div className="wrap" style={{
          display: 'flex', justifyContent: 'space-between',
          padding: '12px 24px', gap: 16,
          overflowX: 'auto', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'nowrap' }}>
            {filters.map((f) => (
              <button key={f.id} onClick={() => setFilter(f.id)}
                className={'btn btn-sm ' + (filter === f.id ? 'btn-ink' : '')}
                style={{ borderRadius: 999 }}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="f-mono" style={{ fontSize: 11, color: 'var(--mute)', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Sort · newest ↓
          </div>
        </div>
      </div>

      <section>
        {visible.map((p, i) => <ShopRow key={p.id} product={p} index={i} />)}
      </section>

      <Marquee tone="accent" items={[
        '✦ MORE COMING SOON', '✦ DROP B · LATE 2026', '✦ FOLLOW THE PADLOG',
      ]} />

      <section className="wrap" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="eyebrow eyebrow-bright">✦ End of catalog</div>
        <h2 className="f-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 8 }}>
          WANT TO KNOW WHEN<br/>BANJO SINGS?
        </h2>
        <button onClick={() => go('roadmap')} className="btn btn-accent btn-lg" style={{ marginTop: 24 }}>
          See the roadmap →
        </button>
      </section>
    </div>
  );
}

function ShopRow({ product, index }) {
  const { go } = useApp();
  const flip = index % 2 === 1;
  const p = product;

  return (
    <article style={{
      borderTop: '1.5px solid var(--ink)',
      background: flip ? 'var(--cream-soft)' : 'var(--cream)',
    }}>
      <div className="wrap shop-row" style={{
        display: 'grid', gridTemplateColumns: flip ? '1fr 1.1fr' : '1.1fr 1fr',
        minHeight: 'min(540px, 60vh)',
      }}>
        <div className="reveal" data-reveal={p.soon ? 'notify me →' : 'meet banjo →'}
          onClick={() => !p.soon && go('product')}
          style={{
            order: flip ? 2 : 1,
            background: p.id === 'banjo-plush-001' ? 'var(--olive-deep)' : 'var(--cream-deep)',
            borderLeft: flip ? '1.5px solid var(--ink)' : 'none',
            borderRight: flip ? 'none' : '1.5px solid var(--ink)',
            position: 'relative', overflow: 'hidden',
            minHeight: 320,
          }}>
          {p.id === 'banjo-plush-001' ? (
            <img src="/assets/frontview-sm.png" alt={p.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%', background: '#f4f0e2' }} />
          ) : (
            <div className="ph" style={{ width: '100%', height: '100%', border: 0, borderRadius: 0 }}>
              <div className="ph-label">{p.short.toLowerCase()} · shot 01 / 04</div>
            </div>
          )}
          <div style={{
            position: 'absolute', top: 16, left: 16,
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <span className="pill" style={{
              background: p.soon ? 'rgba(235,229,211,0.95)' : 'var(--accent)',
              color: p.soon ? 'var(--ink)' : '#fff',
            }}>{p.chip}</span>
          </div>
          <div className="f-mono" style={{
            position: 'absolute', bottom: 16, left: 16,
            fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: p.id === 'banjo-plush-001' ? 'var(--cream)' : 'var(--ink-soft)',
            opacity: 0.8,
          }}>shot 01 / 04 ↻</div>
        </div>

        <div style={{
          order: flip ? 1 : 2,
          padding: 'clamp(28px, 4vw, 56px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
              <div className="f-display" style={{ fontSize: 32, color: 'var(--mute)' }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="eyebrow">/ {p.drop}</div>
            </div>
            <h2 className="f-display" style={{
              fontSize: 'clamp(40px, 6vw, 84px)',
              marginTop: 12,
              color: p.soon ? 'var(--ink)' : 'var(--accent)',
            }}>{p.name}</h2>
            <p style={{
              maxWidth: 460, marginTop: 16,
              fontSize: 16, lineHeight: 1.5, color: 'var(--ink-soft)',
            }}>{p.blurb}</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <div className="eyebrow">Price</div>
              <div className="f-display" style={{ fontSize: 42, marginTop: 4 }}>
                {p.soon ? 'TBA' : `$${p.price}`}
              </div>
              {!p.soon && (
                <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  + shipping · quoted by admin
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {p.soon ? (
                <button className="btn btn-lg">Notify me ↘</button>
              ) : (
                <>
                  <button className="btn btn-accent btn-lg" onClick={() => go('checkout')}>
                    Pre-order →
                  </button>
                  <button className="btn btn-lg" onClick={() => go('product')}>
                    View details
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .shop-row { grid-template-columns: 1fr !important; min-height: auto !important; }
          .shop-row > div { order: unset !important; border: 0 !important; }
          .shop-row > div:first-child { border-bottom: 1.5px solid var(--ink) !important; aspect-ratio: 4/3; min-height: 280px !important; }
        }
      `}</style>
    </article>
  );
}
