import React from 'react';
import { useApp, PRODUCTS } from '../store.js';
import { Marquee } from '../components/Marquee.jsx';

const qtyBtn2 = {
  width: 36, height: 36, border: 0, background: 'transparent',
  cursor: 'pointer', fontFamily: 'var(--f-mono)', fontSize: 16,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
};

export function ProductPage() {
  const { go } = useApp();
  const product = PRODUCTS[0];
  const [bundle, setBundle] = React.useState('uno');
  const [qty, setQty] = React.useState(1);
  const [shot, setShot] = React.useState(0);
  const [open, setOpen] = React.useState('details');

  const BUNDLES = {
    uno:  { id: 'uno',  label: 'Uno Banjo',  units: 1, price: 49,  was: null, sub: '1 plush' },
    trio: { id: 'trio', label: 'Trio Banjo', units: 3, price: 129, was: 147,  sub: '3 plushes · save $18' },
  };
  const picked = BUNDLES[bundle];

  const shots = [
    { id: 0, label: 'front view', src: '/assets/frontview-sm.png', position: 'center 60%', fit: 'cover' },
    { id: 1, label: 'left side',  src: '/assets/leftview-sm.png',  position: 'center 60%', fit: 'cover' },
    { id: 2, label: 'back view',  src: '/assets/backview-sm.png',  position: 'center 60%', fit: 'cover' },
    { id: 3, label: 'right side', src: '/assets/rightside-sm.png', position: 'center 60%', fit: 'cover' },
    { id: 4, label: 'packaging',  src: '/assets/packaging-sm.png', position: 'center center', fit: 'contain' },
  ];

  return (
    <div className="page">
      <Marquee tone="ink" items={[
        '✦ BANJO PLUSH 001', 'GENESIS DROP', '✦ LIMITED · 200 PIECES',
        '50 WIN A FREE NFT MINT', 'SHIPS JULY 2026', 'FIAT + ETH + SOL',
      ]} />

      <div className="wrap" style={{
        padding: '20px 24px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div className="f-mono" style={{ fontSize: 11, color: 'var(--mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          <a onClick={() => go('home')} style={{ cursor: 'pointer' }}>home</a>
          <span style={{ margin: '0 8px', opacity: 0.4 }}>/</span>
          <a onClick={() => go('shop')} style={{ cursor: 'pointer' }}>shop</a>
          <span style={{ margin: '0 8px', opacity: 0.4 }}>/</span>
          <span style={{ color: 'var(--ink)' }}>banjo plush · no.001</span>
        </div>
        <div className="f-mono" style={{ fontSize: 11, color: 'var(--mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          ← prev · next →
        </div>
      </div>

      <section className="wrap product-grid" style={{
        padding: '0 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1.15fr 1fr',
        gap: 48,
        alignItems: 'start',
      }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <div className="thumbs" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {shots.map((s) => (
              <button key={s.id} onClick={() => setShot(s.id)}
                style={{
                  width: 64, height: 64, padding: 0,
                  border: '1.5px solid var(--ink)',
                  borderRadius: 4, overflow: 'hidden',
                  background: '#f4f0e2',
                  outline: shot === s.id ? '2.5px solid var(--accent)' : 'none',
                  outlineOffset: 2,
                  cursor: 'pointer',
                  position: 'relative',
                }}>
                <img src={s.src} alt={s.label}
                  style={{ width: '100%', height: '100%', objectFit: s.fit || 'cover', objectPosition: s.position, padding: s.fit === 'contain' ? '4px' : 0 }} />
                <span style={{
                  position: 'absolute', bottom: 2, left: 2,
                  background: 'rgba(31,26,19,0.85)', color: 'var(--cream)',
                  font: '500 7px/1 var(--f-mono)',
                  padding: '2px 4px', borderRadius: 2,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>0{s.id + 1}</span>
              </button>
            ))}
          </div>

          <div onClick={() => setShot((shot + 1) % shots.length)}
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              background: '#f4f0e2',
              border: '1.5px solid var(--ink)',
              borderRadius: 6, overflow: 'hidden',
              position: 'relative',
              aspectRatio: '4/5',
              boxShadow: '6px 6px 0 var(--ink)',
              cursor: 'pointer',
            }}>
            {shots.map((s) => (
              <img key={s.id} src={s.src} alt={s.label}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: s.fit || 'cover',
                  objectPosition: s.position,
                  padding: s.fit === 'contain' ? '14px' : 0,
                  opacity: shot === s.id ? 1 : 0,
                  transition: 'opacity .35s var(--e-out)',
                }} />
            ))}
            <div style={{
              position: 'absolute', top: 16, left: 16,
              color: 'var(--ink)',
              display: 'flex', flexDirection: 'column', gap: 6,
              zIndex: 2,
            }}>
              <span className="pill" style={{ background: 'var(--accent)', color: '#fff', borderColor: 'var(--ink)' }}>
                Genesis Drop
              </span>
            </div>
            <div className="f-mono" style={{
              position: 'absolute', bottom: 16, left: 16,
              color: 'var(--ink)', fontSize: 10,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              background: 'rgba(235,229,211,0.85)',
              padding: '4px 8px', borderRadius: 4,
              zIndex: 2,
            }}>{shots[shot].label} · {String(shot + 1).padStart(2, '0')}/05</div>
            <div className="f-mono" style={{
              position: 'absolute', top: 16, right: 16,
              color: 'var(--ink)', fontSize: 10,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              opacity: 0.55,
              zIndex: 2,
            }}>↻ tap to cycle</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <span className="pill pill-dot">Live now</span>
              <span className="pill" style={{ background: 'var(--cream)' }}>No. 001</span>
            </div>
            <div className="eyebrow eyebrow-bright">{product.drop}</div>
            <h1 className="f-display" style={{
              fontSize: 'clamp(40px, 5vw, 64px)', marginTop: 6,
            }}>BANJO,<br />THE PLUSH.</h1>
            <p style={{ marginTop: 12, fontSize: 16, color: 'var(--ink-soft)' }}>
              {product.blurb} Tagged, numbered, and shipped in it's own
              premium encasement. Banjo and his banjo are inseparable.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                <div className="f-display" style={{ fontSize: 56, color: 'var(--accent)', lineHeight: 1 }}>${picked.price}</div>
                {picked.was && (
                  <div className="f-display" style={{
                    fontSize: 24, color: 'var(--mute)', lineHeight: 1,
                    textDecoration: 'line-through', textDecorationThickness: '2px',
                  }}>${picked.was}</div>
                )}
              </div>
              <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)', marginTop: 4, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {picked.sub} · + shipping quoted per country
              </div>
            </div>
            <div className="f-mono" style={{ fontSize: 11, color: 'var(--mute)', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'right', lineHeight: 1.6 }}>
              <span style={{ color: 'var(--accent)' }}>25% off</span> any sale<br/>via $BANJO tokens<br/>
              <span style={{ opacity: 0.65, fontSize: 10 }}>→ all SKUs · no expiry</span>
            </div>
          </div>

          <hr className="hair-dash" />

          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Bundle</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {Object.values(BUNDLES).map((b) => {
                const active = bundle === b.id;
                return (
                  <button key={b.id} onClick={() => setBundle(b.id)}
                    style={{
                      flex: 1, padding: '14px 14px',
                      border: '1.5px solid var(--ink)', borderRadius: 6,
                      background: active ? 'var(--ink)' : 'var(--cream)',
                      color: active ? 'var(--cream)' : 'var(--ink)',
                      cursor: 'pointer', textAlign: 'left',
                      boxShadow: active ? '3px 3px 0 var(--accent)' : 'none',
                      transition: 'background .15s, color .15s, box-shadow .15s',
                      display: 'flex', flexDirection: 'column', gap: 4,
                      position: 'relative',
                    }}>
                    {b.was && (
                      <span className="pill" style={{
                        position: 'absolute', top: -10, right: 10,
                        background: 'var(--accent)', color: '#fff', borderColor: 'var(--ink)',
                        fontSize: 9, padding: '2px 8px', letterSpacing: '0.14em',
                      }}>Save ${b.was - b.price}</span>
                    )}
                    <span className="f-mono" style={{
                      fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
                      opacity: active ? 0.65 : 0.55,
                    }}>0{b.id === 'uno' ? 1 : 2} · {b.units}× Banjo</span>
                    <span className="f-display" style={{ fontSize: 18, lineHeight: 1.05 }}>
                      {b.label}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
                      <span className="f-display" style={{ fontSize: 22, lineHeight: 1 }}>${b.price}</span>
                      {b.was && (
                        <span className="f-mono" style={{
                          fontSize: 11,
                          color: active ? 'rgba(235,229,211,0.6)' : 'var(--mute)',
                          textDecoration: 'line-through',
                        }}>${b.was}</span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="eyebrow">Quantity</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1.5px solid var(--ink)', borderRadius: 6, overflow: 'hidden',
            }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={qtyBtn2}>–</button>
              <span style={{ padding: '0 16px', font: '600 14px/1 var(--f-mono)', minWidth: 30, textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={qtyBtn2}>+</button>
            </div>
          </div>

          <div style={{
            position: 'relative',
            background: 'var(--ink)', color: 'var(--cream)',
            border: '1.5px solid var(--ink)', borderRadius: 6,
            padding: '18px 20px',
            boxShadow: '4px 4px 0 var(--accent)',
            display: 'flex', flexDirection: 'column', gap: 10,
            overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <div className="eyebrow" style={{ color: 'var(--terracotta-soft, #f5c9b2)' }}>
                ✦ Bonus Drop · NFT Mint
              </div>
              <span className="pill" style={{
                background: 'var(--accent)', color: '#fff',
                borderColor: 'var(--accent)', fontSize: 9,
                letterSpacing: '0.16em',
              }}>1 in 4 odds</span>
            </div>
            <div className="f-display" style={{ fontSize: 26, lineHeight: 1, marginTop: 2 }}>
              50 OF 200 WIN A<br />
              <span style={{ color: 'var(--accent)' }}>FREE BANJO NFT.</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.45, color: 'rgba(235,229,211,0.78)', margin: 0 }}>
              Every plush is hand-numbered 001–200. Once the drop sells out, we roll
              <span style={{ color: 'var(--cream)' }}> 50 random numbers</span> on-chain — those
              holders get a free mint towards a Banjo NFT, airdropped to the wallet on file.
            </p>
            <div className="f-mono" style={{
              display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
              fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(235,229,211,0.55)',
              borderTop: '1px dashed rgba(235,229,211,0.25)', paddingTop: 10,
            }}>
              <span>↻ Verifiable random · on-chain</span>
              <span>No extra cost · auto-entered</span>
            </div>
          </div>

          <button className="btn btn-accent btn-lg" style={{ width: '100%' }}
            onClick={() => go('checkout')}>
            Reserve Banjo →
          </button>
          <div className="f-mono" style={{
            fontSize: 10, color: 'var(--mute)', letterSpacing: '0.14em',
            textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.8,
          }}>
            <span style={{ color: 'var(--accent)' }}>✦ $0 due at reservation</span> · pay on shipment<br/>
            <span style={{ opacity: 0.7 }}>or send $BANJO now to lock in 25% off</span>
          </div>

          <div className="f-mono" style={{
            fontSize: 10, color: 'var(--mute)', letterSpacing: '0.14em',
            textTransform: 'uppercase', textAlign: 'center',
          }}>
            ✦ STRIPE · PAYPAL · CRYPTO · $BANJO
          </div>

          <div style={{ borderTop: '1.5px solid var(--ink)' }}>
            {[
              { id: 'details',  t: 'Details',  body: 'Hand-stitched 8" plush. Soft-touch cotton outer with recycled poly fill. Embroidered eyes, removable felt banjo. Tagged with edition number and small studio note. Surface wash only.' },
              { id: 'shipping', t: 'Shipping', body: 'Ships from VALE Studio in flat-pack boxes. Worldwide. Standard 5–8 days, express available at checkout. Drop A units begin shipping July 18, 2026.' },
              { id: 'crypto',   t: 'Paying with crypto', body: 'We accept ETH and SOL via wallet connect (MetaMask, Phantom, Coinbase, WalletConnect). Stablecoins (USDC) supported on both chains. No gas markup — you pay base network fees.' },
              { id: 'returns',  t: 'Returns', body: '14-day no-questions return on unused plush. Crypto orders are refunded as USDC at order-time exchange rate.' },
            ].map((row) => (
              <div key={row.id} style={{ borderBottom: '1.5px solid var(--ink)' }}>
                <button onClick={() => setOpen(open === row.id ? null : row.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '14px 0', background: 'transparent', border: 0,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer',
                  }}>
                  <span className="f-display" style={{ fontSize: 17 }}>{row.t}</span>
                  <span className="f-mono" style={{ fontSize: 14, color: 'var(--mute)' }}>{open === row.id ? '−' : '+'}</span>
                </button>
                {open === row.id && (
                  <div style={{
                    paddingBottom: 16, fontSize: 14, color: 'var(--ink-soft)',
                    animation: 'pageIn .25s var(--e-out)',
                  }}>{row.body}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        background: 'var(--ink)', color: 'var(--cream)',
        borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)',
      }}>
        <div className="wrap specs-row" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32, padding: '48px 24px',
        }}>
          {[
            { k: 'Size',  v: '8" tall',       sub: '~20 cm' },
            { k: 'Make',  v: 'Cotton + poly', sub: 'soft-touch shell' },
            { k: 'Drop',  v: '1 of 200',      sub: 'hand-numbered' },
            { k: 'Ships', v: 'July 2026',     sub: 'worldwide' },
          ].map((s) => (
            <div key={s.k}>
              <div className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>{s.k}</div>
              <div className="f-display" style={{ fontSize: 26, marginTop: 6 }}>{s.v}</div>
              <div className="f-mono" style={{ fontSize: 11, opacity: 0.6, marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ padding: '80px 24px' }}>
        <div className="eyebrow eyebrow-bright">Up next</div>
        <h2 className="f-display" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginTop: 8 }}>
          MORE FROM THE STUDIO,<br />SOON.
        </h2>
        <div className="upnext-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
          marginTop: 32,
        }}>
          {PRODUCTS.slice(1).map((p) => (
            <article key={p.id} style={{
              background: 'var(--cream-soft)',
              border: '1.5px solid var(--ink)', borderRadius: 6,
              overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              aspectRatio: '4/5',
            }}>
              <div className="ph" style={{ flex: 1, border: 0, borderRadius: 0, borderBottom: '1.5px solid var(--ink)' }}>
                <div className="ph-label">{p.short.toLowerCase()} · soon</div>
              </div>
              <div style={{ padding: 14, display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)' }}>No. {p.n}</div>
                  <div className="f-display" style={{ fontSize: 16 }}>{p.short}</div>
                </div>
                <button className="btn btn-sm">Notify ↘</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Marquee tone="accent" items={[
        '✦ ADD TO CART', '✦ PAY WITH CRYPTO', '✦ SHIPS JULY 2026',
        '✦ LIMITED TO 200', '✦ 50 WIN FREE NFT MINT', '✦ HAND-NUMBERED',
      ]} />

      <style>{`
        @media (max-width: 880px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .specs-row { grid-template-columns: 1fr 1fr !important; }
          .upnext-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .thumbs { display: none !important; }
          .upnext-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
