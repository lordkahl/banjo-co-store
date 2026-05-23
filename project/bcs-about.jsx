// bcs-about.jsx — About: Timeline Story (Option A)

function AboutPage() {
  const { go } = useApp();
  return (
    <div className="page">
      <Marquee tone="olive" items={[
        '✦ ABOUT BANJO', 'EST. 2026', '✦ A SMALL STUDIO', 'PUMPFUN → EVERYWHERE',
      ]} />

      {/* Intro split */}
      <section className="wrap about-intro" style={{
        padding: '60px 24px',
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56,
        alignItems: 'center',
      }}>
        <div>
          <div className="eyebrow eyebrow-bright">✦ The Studio · Est. 2026 · PumpFun</div>
          <h1 className="f-display" style={{ fontSize: 'clamp(48px, 7vw, 110px)', marginTop: 12, lineHeight: 0.95 }}>
            A SMALL<br/>
            STUDIO FOR<br/>
            <span className="uline">FRIENDLY</span><br/>
            CHARACTERS &amp;<br/>
            THE WORLDS<br/>
            THEY LIVE IN.
          </h1>
          <p style={{ maxWidth: 460, marginTop: 24, fontSize: 16, lineHeight: 1.5, color: 'var(--ink-soft)' }}>
            We make plush, paper, sound &amp; software around characters that
            feel like old friends. Banjo is the first. The Frog Who Plays The Banjo.
            He started as a napkin sketch. He's gotten bolder since.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            border: '1.5px solid var(--ink)',
            borderRadius: 6, overflow: 'hidden',
            background: '#f4f0e2',
            aspectRatio: '4/5',
            boxShadow: '8px 8px 0 var(--ink)',
            transform: 'rotate(-2deg)',
          }}>
            <img src="assets/frontview-sm.png" alt="Banjo the frog"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%' }} />
            <div style={{
              position: 'absolute', bottom: 12, left: 12, right: 12,
              background: 'rgba(31,26,19,0.85)', color: 'var(--cream)',
              padding: '10px 14px', borderRadius: 4,
              font: '500 11px/1.3 var(--f-mono)',
              letterSpacing: '0.08em',
            }}>
              <div style={{ opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 9, marginBottom: 3 }}>fig. 01</div>
              banjo, the prototype · spring 2026
            </div>
          </div>

          {/* Sticky note */}
          <div style={{
            position: 'absolute', top: -16, right: -16,
            background: '#fef4a8',
            border: '1.5px solid var(--ink)',
            padding: '10px 14px',
            font: '14px/1.3 "Kalam", cursive',
            transform: 'rotate(5deg)',
            boxShadow: '3px 3px 0 rgba(31,26,19,0.2)',
            maxWidth: 180,
          }}>
            First sketched on<br/>a napkin at Frank's<br/>diner, March 2025 ☕
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{
        background: 'var(--cream-soft)',
        borderTop: '1.5px solid var(--ink)',
        borderBottom: '1.5px solid var(--ink)',
      }}>
        <div className="wrap" style={{ padding: '60px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div className="eyebrow eyebrow-bright">✦ The Roadmap</div>
              <h2 className="f-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 8 }}>
                FROM <span style={{ color: 'var(--accent)' }}>NAPKIN</span><br/>TO NEEDLE-FELT.
              </h2>
            </div>
            <div className="f-mono" style={{ fontSize: 11, color: 'var(--mute)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              ↘ Six chapters, two years
            </div>
          </div>

          <ol className="timeline" style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            position: 'relative',
          }}>
            {/* The bar */}
            <li style={{
              position: 'absolute', top: 32, left: '8%', right: '8%',
              height: 2, background: 'var(--ink)',
              borderRadius: 999,
              zIndex: 0,
            }} aria-hidden />

            {[
              { y: '03 / 2025', t: 'Napkin Sketch',     b: 'Banjo, born at Frank\'s diner.', live: true },
              { y: '11 / 2025', t: 'First Prototype',   b: 'A 6" felt-stitched proof of frog.', live: true },
              { y: '04 / 2026', t: 'Studio Founded',    b: 'VALE becomes a real LLC.', live: true },
              { y: '07 / 2026', t: 'Plush 001 Ships',   b: 'Genesis drop. 1,000 pieces. Worldwide.', live: true, current: true },
              { y: 'Q4 / 2026', t: 'Comic & Stickers',  b: 'Drop B paperwork.', live: false },
              { y: 'Q2 / 2027', t: 'Banjo Sings',       b: 'YouTube channel + first vinyl 7".', live: false },
            ].map((m, i) => (
              <li key={i} style={{
                position: 'relative', zIndex: 1,
                paddingTop: 50, paddingRight: 14,
                display: 'flex', flexDirection: 'column', gap: 6,
              }}>
                {/* Dot */}
                <span style={{
                  position: 'absolute', top: 23, left: 0,
                  width: 22, height: 22, borderRadius: '50%',
                  border: '1.5px solid var(--ink)',
                  background: m.current ? 'var(--accent)' : m.live ? 'var(--olive)' : 'var(--cream)',
                  boxShadow: m.current ? '0 0 0 4px rgba(184,81,47,0.2)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, color: m.live ? '#fff' : 'var(--mute)',
                  fontFamily: 'var(--f-mono)', fontWeight: 600,
                }}>{m.live ? '✓' : i + 1}</span>
                <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>{m.y}</div>
                <div className="f-display" style={{ fontSize: 18, color: m.current ? 'var(--accent)' : 'var(--ink)' }}>{m.t}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.4 }}>{m.b}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Studio / people */}
      <section className="wrap" style={{ padding: '80px 24px' }}>
        <div className="eyebrow eyebrow-bright">✦ Who's making this</div>
        <h2 className="f-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 8 }}>
          TWO HUMANS,<br/>ONE <span style={{ color: 'var(--olive)' }}>FROG</span>, ONE ROOM.
        </h2>

        <div className="studio-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20, marginTop: 32,
        }}>
          {[
            { name: 'M. Reyes', role: 'Character + soft goods',
              note: 'Stitches the prototypes. Argues for "one more sketch."' },
            { name: 'D. Park', role: 'Stories + music',
              note: 'Writes the comic. Has, somewhere, a real banjo.' },
            { name: 'Banjo',  role: 'Mascot, in residence',
              note: 'Plays continuously. Does not get tired. Does not get paid.', frog: true },
          ].map((p) => (
            <div key={p.name} style={{
              background: p.frog ? 'var(--olive-deep)' : 'var(--cream-soft)',
              color: p.frog ? 'var(--cream)' : 'var(--ink)',
              border: '1.5px solid var(--ink)', borderRadius: 6,
              padding: 24, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                border: '1.5px solid var(--ink)', overflow: 'hidden',
                background: p.frog ? '#000' : 'var(--cream-deep)',
              }}>
                {p.frog ? (
                  <img src="assets/pfp.png" alt="Banjo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className="ph" style={{ width: '100%', height: '100%', border: 0, borderRadius: 0 }}>
                    <span className="f-display" style={{ fontSize: 28, opacity: 0.4 }}>{p.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="f-display" style={{ fontSize: 24, marginTop: 14 }}>{p.name}</div>
              <div className="eyebrow" style={{
                marginTop: 4,
                color: p.frog ? 'var(--terracotta-soft)' : 'var(--ink-soft)',
              }}>{p.role}</div>
              <p style={{ marginTop: 12, fontSize: 14, opacity: 0.8 }}>{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lore / quote band */}
      <section style={{
        background: 'var(--ink)', color: 'var(--cream)',
        borderTop: '1.5px solid var(--ink)',
        borderBottom: '1.5px solid var(--ink)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="wrap" style={{
          padding: '80px 24px', textAlign: 'center',
        }}>
          <div className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>✦ The whole point</div>
          <p className="f-display" style={{
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            margin: '20px auto 0', maxWidth: 900, lineHeight: 1.05,
          }}>
            "WE MAKE <span style={{ color: 'var(--accent)' }}>SOFT</span> THINGS<br/>
            FOR A <span className="uline">HARD</span> INTERNET."
          </p>
          <div className="f-mono" style={{
            marginTop: 28, fontSize: 11, opacity: 0.6,
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>— the studio, 2026</div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="wrap" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="eyebrow eyebrow-bright">✦ Say hi</div>
        <h2 className="f-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 8 }}>
          PRESS, COLLABS, HUGS —<br/><a className="uline" style={{ color: 'inherit' }} href="mailto:hi@banjoandco.xyz">hi@banjoandco.xyz</a>
        </h2>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
          <button className="btn btn-accent btn-lg" onClick={() => go('product')}>Pre-order Banjo →</button>
          <button className="btn btn-lg" onClick={() => go('shop')}>See the catalog</button>
        </div>
      </section>

      <Marquee tone="accent" items={[
        '✦ EST. 2026', 'PUMPFUN → EVERYWHERE', '✦ A SMALL STUDIO',
        'PLUSH · PAPER · SOUND',
      ]} />

      <style>{`
        @media (max-width: 880px) {
          .about-intro { grid-template-columns: 1fr !important; gap: 40px !important; }
          .timeline { grid-template-columns: 1fr 1fr !important; gap: 32px 12px !important; }
          .timeline > li[aria-hidden] { display: none; }
          .timeline li { padding-top: 20px !important; }
          .timeline li span:first-child { position: relative !important; top: auto !important; margin-bottom: 6px; }
          .studio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { AboutPage });
