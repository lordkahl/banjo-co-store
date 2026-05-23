import React from 'react';
import { useApp, PRODUCTS } from '../store.js';
import { Marquee } from '../components/Marquee.jsx';

export function HomePage() {
  const { go } = useApp();

  return (
    <div className="page">
      <Marquee tone="accent" items={[
        'NEW · PLUSH 001', 'GENESIS DROP OPEN', 'PAYS IN FIAT + ETH + SOL', 'SHIPS WORLDWIDE',
        '✦ A SMALL STUDIO ✦',
      ]} />

      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        minHeight: 'min(720px, calc(100vh - 64px - 44px))',
        borderBottom: '1.5px solid var(--ink)',
      }} className="split-stage">

        <div style={{
          position: 'relative',
          borderRight: '1.5px solid var(--ink)',
          background: '#f4f0e2',
          backgroundImage: 'url("/assets/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}>
          <img src="/assets/banjo-turnaround.png" alt="Banjo plush · four views"
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '88%', height: '78%',
              maxWidth: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              filter: 'drop-shadow(0 14px 28px rgba(31,26,19,0.18))',
              pointerEvents: 'none',
            }} />
          <div style={{
            position: 'absolute', top: 18, left: 18,
            color: 'var(--ink)',
            font: '500 10px/1 var(--f-mono)', letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <span>◉ banjo, no.001</span>
            <span style={{ opacity: 0.55 }}>genesis drop · 2026</span>
          </div>
          <div style={{
            position: 'absolute', bottom: 18, left: 18,
            color: 'var(--ink)',
            font: '500 10px/1 var(--f-mono)', letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>↘ scroll for more</div>
          <div style={{
            position: 'absolute', top: 18, right: 18,
            color: 'var(--ink)',
            font: '500 10px/1 var(--f-mono)', letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end',
          }}>
            <span>front · back · ¾l · ¾r</span>
            <span style={{ opacity: 0.55 }}>↻ four views</span>
          </div>

          <div style={{
            position: 'absolute', bottom: 18, right: 18,
            background: 'var(--accent)', color: '#fff',
            border: '1.5px solid var(--ink)',
            borderRadius: 999, padding: '8px 16px',
            font: '600 12px/1 var(--f-mono)', letterSpacing: '0.16em',
            textTransform: 'uppercase',
            transform: 'rotate(-3deg)',
            boxShadow: '3px 3px 0 var(--ink)',
          }}>● Live</div>
        </div>

        <div style={{
          padding: 'clamp(24px, 4vw, 56px)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', gap: 24,
          background: 'var(--cream)',
        }}>
          <div className="eyebrow">✦ Chapter One · The Plush</div>

          <div>
            <h1 className="f-display" style={{ fontSize: 'clamp(48px, 6.5vw, 92px)' }}>
              MEET<br />
              <span style={{ color: 'rgb(22, 149, 0)' }}>BANJO</span>—<br />
              SOFT, GREEN,<br />
              <span className="uline" style={{ color: 'rgb(41, 33, 33)', lineHeight: '0.95' }}>FULL OF SONGS.</span>
            </h1>
            <p style={{
              maxWidth: 420, marginTop: 18,
              fontSize: 16, lineHeight: 1.5,
              color: 'var(--ink-soft)',
            }}>
              An 11-inch plush frog, hand-stitched in limited runs, holding
              a tiny banjo he refuses to let go of. For kids, collectors,
              and the slightly online.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
              <button className="btn btn-accent btn-lg" onClick={() => go('checkout')} style={{ backgroundColor: 'rgb(22, 149, 0)' }}>RESERVE · $0</button>
              <button className="btn btn-lg" onClick={() => go('product')}>
                ◎ View details
              </button>
            </div>

            <div className="f-mono" style={{
              marginTop: 16, fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--mute)',
              display: 'flex', flexWrap: 'wrap', gap: 14,
            }}>
              <span>↘ ships jul 2026</span>
              <span>·</span>
              <span>fiat + eth + sol</span>
              <span>·</span>
              <span>LIMITED TO 500</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee tone="ink" items={[
        '✦ STICKERS', '✦ COMIC BOOK', '✦ VINYL 7"', '✦ SPOTIFY', '✦ YOUTUBE',
        '✦ COMING DOWN THE LINE',
      ]} />

      <section className="wrap" style={{ padding: '80px 24px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div className="eyebrow eyebrow-bright">02 / The Roadmap</div>
            <h2 className="f-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 8 }}>
              WHAT'S COMING<br />
              <span style={{ color: 'var(--olive)' }}>DOWN THE LINE.</span>
            </h2>
          </div>
          <button className="btn btn-ghost" onClick={() => go('shop')}>
            See the whole catalog →
          </button>
        </div>

        <div className="roadmap-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
        }}>
          {PRODUCTS.map((p, i) => (
            <article key={p.id} className="reveal roadmap-card" data-reveal={p.soon ? 'notify me →' : 'meet banjo →'}
              onClick={() => p.soon ? null : go('product')}
              style={{
                background: 'var(--cream-soft)',
                border: '1.5px solid var(--ink)',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                aspectRatio: '4/5',
                justifyContent: 'flex-start',
                borderRadius: 6,
                padding: 0, margin: 0, minWidth: 0,
              }}>
              <div className="ph" style={{ flex: 1, borderRadius: 0, borderLeft: 0, borderRight: 0, borderTop: 0, background: '#f4f0e2', backgroundImage: 'none', position: 'relative', overflow: 'hidden' }}>
                {i === 0 && (
                  <img src="/assets/banjo-packaging.png" alt="Banjo plush · packaged"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', padding: '10px' }} />
                )}
                {i !== 0 && <div className="ph-label">{p.short.toLowerCase()} · shot 01</div>}
                <div style={{
                  position: 'absolute', top: 10, left: 10,
                  display: 'flex', gap: 6,
                }}>
                  <span className="pill" style={{
                    background: p.soon ? 'var(--cream)' : 'var(--accent)',
                    color: p.soon ? 'var(--ink)' : '#fff',
                    fontSize: 9,
                  }}>{p.chip}</span>
                </div>
              </div>
              <div style={{ padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, minWidth: 0 }}>
                <div style={{ minWidth: 0 }}>
                  <div className="f-mono" style={{ fontSize: 9, color: 'var(--mute)', letterSpacing: '0.12em' }}>No.{p.n}</div>
                  <div className="f-display roadmap-card-title" style={{ fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.short}</div>
                </div>
                <div className="f-display" style={{ fontSize: 16, color: p.soon ? 'var(--mute)' : 'var(--accent)' }}>
                  {p.price != null ? `$${p.price}` : 'TBA'}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{
        margin: '40px auto 0', background: 'var(--cream-soft)',
        borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="wrap lore-grid" style={{
          padding: '80px 24px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
          alignItems: 'center',
        }}>
          <div>
            <div className="eyebrow eyebrow-bright">03 / The Lore</div>
            <p className="f-display" style={{
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              lineHeight: 1.05, marginTop: 16,
            }}>
              "BANJO STARTED AS A COMMUNITY TAKEOVER<br />
              ON A RANDOM DAY IN<br />
              2024.<br />
              HE HASN'T LEFT THE<br />
              SPACE SINCE — AND NEITHER<br />
              HAS HIS <span style={{ color: '#169500' }}>BANJO</span>."
            </p>
            <div className="f-mono" style={{ marginTop: 24, fontSize: 11, color: 'var(--mute)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>— @LORDKAHL ON X</div>
            <button className="btn btn-ink" style={{ marginTop: 24 }} onClick={() => go('roadmap')}>
              See the roadmap →
            </button>
          </div>
          <div style={{
            border: '1.5px solid var(--ink)',
            borderRadius: 6, overflow: 'hidden',
            background: '#f4f0e2',
            aspectRatio: '4/3',
            boxShadow: '6px 6px 0 var(--ink)',
            transform: 'rotate(1.5deg)',
          }}>
            <img src="/assets/banjo-frog.gif" alt="Banjo the Frog · loop"
              style={{ objectPosition: 'center center', height: '100%', padding: '0px', margin: '0px', borderWidth: '0px', borderStyle: 'solid', borderRadius: '0px', width: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: '80px 24px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
          <div>
            <div className="eyebrow eyebrow-bright">✦ Plug Into The Pond</div>
            <h2 className="f-display" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: 8 }}>
              FOLLOW BANJO,<br />
              <span style={{ color: 'var(--accent)' }}>TRADE</span> BANJO,<br />
              LISTEN TO BANJO.
            </h2>
          </div>
          <div className="f-mono" style={{ fontSize: 11, color: 'var(--mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            ↘ three places to find us
          </div>
        </div>

        <div className="plug-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr 1.6fr',
          gap: 16,
          alignItems: 'stretch',
        }}>
          <div className="card" style={{
            background: 'var(--cream-soft)',
            padding: 28,
            display: 'flex', flexDirection: 'column',
            minHeight: 380, gap: '20px', borderWidth: '2.00008px',
          }}>
            <div>
              <div className="eyebrow eyebrow-bright">01 · Socials</div>
              <h3 className="f-display" style={{ fontSize: 32, marginTop: 8, lineHeight: 0.95 }}>
                HOP<br />ALONG.
              </h3>
              <p style={{ fontSize: 13, marginTop: 10, color: 'var(--ink-soft)' }}>
                Banjo posts daily. Memes, prototypes, the occasional cover song.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { id: 'x', label: 'X / Twitter', handle: '@banjothefrog', url: 'https://x.com/banjothefrog', live: true, glyph: '𝕏' },
                { id: 'tg', label: 'Telegram', handle: 't.me/BanjoPortal', url: 'https://t.me/BanjoPortal', live: true, glyph: '✈' },
              ].map((s) => (
                <li key={s.id}>
                  <a href={s.url} target={s.live ? '_blank' : undefined} rel="noopener"
                    className="social-link"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 14px',
                      background: 'var(--cream)',
                      border: '1.5px solid var(--ink)', borderRadius: 6,
                      cursor: s.live ? 'pointer' : 'default',
                      opacity: s.live ? 1 : 0.55,
                      transition: 'transform .15s var(--e-out), box-shadow .15s var(--e-out), background .15s',
                    }}
                    onMouseEnter={(e) => { if (s.live) { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)'; e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; } }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.color = 'var(--ink)'; }}>
                    <span style={{
                      width: 32, height: 32, borderRadius: 6,
                      background: 'var(--ink)', color: 'var(--cream)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--f-display)', fontSize: 16,
                      flex: '0 0 auto',
                    }}>{s.glyph}</span>
                    <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span className="f-display" style={{ fontSize: 14 }}>{s.label}</span>
                      <span className="f-mono" style={{ fontSize: 10, opacity: 0.7, letterSpacing: '0.08em' }}>{s.handle}</span>
                    </span>
                    <span style={{ fontFamily: 'var(--f-mono)', fontSize: 14, opacity: 0.5 }}>→</span>
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="f-mono" style={{
                fontSize: 10, color: 'var(--ink-soft)',
                textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', gap: 6, letterSpacing: '8.5px',
              }}>
                <span style={{ color: '#1DB954' }}>♪</span> Banjo on Spotify
              </div>
              <iframe
                title="Banjo on Spotify"
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/artist/5HsnIaWk9y52YHH6eucrgo?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{
                  borderRadius: 12,
                  border: '1.5px solid var(--ink)',
                  display: 'block',
                  background: 'var(--ink)', borderWidth: '0px',
                }} />
            </div>
          </div>

          <div style={{
            background: 'var(--ink)', color: 'var(--cream)',
            border: '1.5px solid var(--ink)', borderRadius: 6,
            padding: 28,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            minHeight: 380,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -30, right: -30,
              fontFamily: 'var(--f-display)', fontSize: 180,
              opacity: 0.06, color: 'var(--cream)',
              lineHeight: 0.9, pointerEvents: 'none',
            }}>✦</div>

            <div style={{ position: 'relative' }}>
              <div className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>02 · The Padlog</div>
              <h3 className="f-display" style={{ fontSize: 36, marginTop: 8, lineHeight: 0.95 }}>
                SONGS,<br />
                SCRAPS &amp;<br />
                FIRST LOOKS.
              </h3>
              <p style={{ fontSize: 13, marginTop: 12, opacity: 0.75, maxWidth: 280 }}>
                Stay updated on the next BANJO & CO Drop.<br />
                (Is it a free mint NFT next?)
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); }} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <input type="email" placeholder="frog@yourpad.xyz" required
                style={{
                  background: 'rgba(235,229,211,0.06)',
                  color: 'var(--cream)',
                  border: '1.5px solid rgba(235,229,211,0.4)',
                  padding: '14px 16px',
                  font: '500 14px/1 var(--f-mono)',
                  borderRadius: 6, outline: 'none',
                  width: '100%',
                }} />
              <button className="btn btn-accent" style={{ width: '100%', backgroundColor: 'rgb(22, 149, 0)' }}>
                Subscribe ↘
              </button>
              <div className="f-mono" style={{ fontSize: 9, opacity: 0.5, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 2 }}>
                ✦ ~1,200 readers · unsubscribe anytime
              </div>
            </form>
          </div>

          <div style={{
            background: 'var(--cream-soft)',
            border: '1.5px solid var(--ink)', borderRadius: 6,
            display: 'flex', flexDirection: 'column',
            minHeight: 380,
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '16px 20px',
              borderBottom: '1.5px solid var(--ink)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 12, flexWrap: 'wrap',
            }}>
              <div style={{ minWidth: 0 }}>
                <div className="eyebrow eyebrow-bright">03 · The Token</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
                  <span className="f-display" style={{ fontSize: 22 }}>$BANJO</span>
                  <span className="pill" style={{
                    background: 'var(--olive)', color: 'var(--cream)',
                    borderColor: 'var(--ink)', fontSize: 9, backgroundColor: 'rgb(22, 149, 0)',
                  }}>● Live on Solana</span>
                </div>
                <div className="f-mono" style={{ fontSize: 9, color: 'var(--mute)', marginTop: 6, letterSpacing: '0.08em', wordBreak: 'break-all' }}>
                  HaqY…pump
                </div>
              </div>
              <a
                href="https://dexscreener.com/solana/HaqYjRixokh8FsHxK6pi8XLwsS2JkDTXWPpLySppump"
                target="_blank" rel="noopener"
                className="btn btn-sm btn-ink">
                Open ↗
              </a>
            </div>

            <div style={{ position: 'relative', flex: 1, minHeight: 320, background: '#0d0d0d' }}>
              <div className="f-mono" style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#7a7a7a', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
                textAlign: 'center', padding: 16,
              }}>
                ↻ loading dexscreener…
              </div>
              <iframe
                src="https://dexscreener.com/solana/HaqYjRixokh8FsHxK6pi8XLwsS2JkDTXWPpLySppump?embed=1&theme=dark&trades=0&info=0"
                title="$BANJO / SOL chart"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  border: 0,
                  display: 'block',
                  background: '#0d0d0d',
                }}
                allow="clipboard-write" />
            </div>

            <div className="f-mono" style={{
              padding: '10px 20px',
              borderTop: '1.5px solid var(--ink)',
              fontSize: 10, color: 'var(--mute)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap',
            }}>
              <span>via dexscreener</span>
              <span>not financial advice · 🐸</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee tone="olive" items={[
        '✦ BANJO & CO', '✦ BANJO & CO', '✦ BANJO & CO', '✦ BANJO & CO',
      ]} />

      <style>{`
        @media (max-width: 1100px) {
          .plug-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .plug-grid > div:nth-child(3) {
            grid-column: 1 / -1;
            min-height: 420px !important;
          }
        }
        @media (max-width: 880px) {
          .split-stage { grid-template-columns: 1fr !important; min-height: auto !important; }
          .split-stage > div:first-child { aspect-ratio: 5/4; min-height: 320px; border-right: 0 !important; border-bottom: 1.5px solid var(--ink); }
          .roadmap-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .plug-grid { grid-template-columns: 1fr !important; }
          .plug-grid > div { min-height: auto !important; }
          .plug-grid > div:nth-child(3) { min-height: 380px !important; }
          .lore-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 520px) {
          .roadmap-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .roadmap-card { aspect-ratio: 5/4 !important; }
        }
      `}</style>
    </div>
  );
}
