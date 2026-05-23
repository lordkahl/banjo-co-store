// pages.jsx — Banjo & Co wireframe directions (5 pages × 2 directions)

// ═══════════════════════════════════════════════════════════════════
//  HOME
// ═══════════════════════════════════════════════════════════════════

function HomeA_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <div className="wk-sans" style={{ display: 'flex', justifyContent: 'space-between',
        padding: '10px 16px', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        <div>banjo &amp;<br/>co. store</div>
        <div className="wk-display" style={{ fontSize: 18, letterSpacing: '0.04em' }}>BANJO</div>
        <div style={{ textAlign: 'right' }}>2026<br/>@banjoco</div>
      </div>
      {/* Accent hero */}
      <div style={{ flex: 1, background: 'var(--wk-accent)', position: 'relative',
        margin: '0 16px', borderRadius: 4, overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        {mascot && (
          <div style={{ marginBottom: -20 }}>
            <FrogMascot size={220} holdingBanjo />
          </div>
        )}
        <div className="wk-display" style={{ position: 'absolute', top: 18, left: 18,
          fontSize: 10, color: '#fff', letterSpacing: '0.1em' }}>01 / HERO</div>
      </div>
      <Marquee />
      {/* Bottom row */}
      <div style={{ display: 'flex', padding: '14px 16px', gap: 18, alignItems: 'flex-start' }}>
        <div className="wk-mono" style={{ width: 90, fontSize: 9, color: 'var(--wk-mute)' }}>
          <div>01 about</div>
          <div style={{ marginTop: 3 }}>02 shop</div>
        </div>
        <div style={{ flex: 1 }}>
          <div className="wk-display" style={{ fontSize: 18, lineHeight: 1.05, color: 'var(--wk-accent)' }}>
            A FROG WITH A BANJO,<br/>
            <span style={{ color: 'var(--wk-ink)' }}>A LITTLE LABEL FOR</span><br/>
            <span style={{ color: 'var(--wk-ink)' }}>BIG-HEARTED THINGS.</span>
          </div>
        </div>
        <div className="wk-sans" style={{ width: 130, fontSize: 8, lineHeight: 1.3, color: 'var(--wk-mute)' }}>
          / Plush No.001 ships<br/>
          this summer. Stickers,<br/>
          comics &amp; songs to follow.
        </div>
      </div>
    </div>
  );
}

function HomeA_Mobile({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ display: 'flex', justifyContent: 'space-between',
        padding: '14px 8px 6px', fontSize: 7 }}>
        <span>≡</span>
        <span className="wk-display" style={{ fontSize: 11 }}>BANJO</span>
        <span>⌃</span>
      </div>
      <div style={{ flex: 1, background: 'var(--wk-accent)', margin: '0 8px',
        borderRadius: 4, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        overflow: 'hidden' }}>
        {mascot && <FrogMascot size={110} holdingBanjo style={{ marginBottom: -10 }} />}
      </div>
      <Marquee />
      <div style={{ padding: '10px 10px 12px' }}>
        <div className="wk-display" style={{ fontSize: 12, lineHeight: 1.05, color: 'var(--wk-accent)' }}>
          A FROG WITH<br/>A BANJO.
        </div>
        <div className="wk-line" style={{ marginTop: 8, width: '60%' }} />
        <div className="wk-line" style={{ marginTop: 4, width: '80%' }} />
      </div>
    </div>
  );
}

function HomeB_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Marquee items={['NEW · PLUSH No.001', 'PRE-ORDER OPEN', 'FIAT + CRYPTO', 'WORLDWIDE']}/>
      <div style={{ flex: 1, display: 'flex' }}>
        {/* Left — mascot stage */}
        <div style={{ flex: '0 0 45%', borderRight: '1.5px solid var(--wk-ink)',
          background: 'var(--wk-paper)', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {mascot && <FrogMascot size={180} holdingBanjo />}
          <div className="wk-mono" style={{ position: 'absolute', bottom: 8, left: 8,
            fontSize: 8, color: 'var(--wk-mute)' }}>▶ animated intro · 3s</div>
          <div className="wk-mono" style={{ position: 'absolute', top: 8, right: 8,
            fontSize: 8, color: 'var(--wk-mute)' }}>cycle ↻</div>
        </div>
        {/* Right — type wall */}
        <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="wk-sans" style={{ fontSize: 8, textTransform: 'uppercase',
            letterSpacing: '0.18em', color: 'var(--wk-mute)' }}>
            ✦ chapter one · the plush
          </div>
          <div>
            <div className="wk-display" style={{ fontSize: 32, lineHeight: 0.95 }}>
              MEET<br/>
              <span style={{ color: 'var(--wk-accent)' }}>BANJO</span>—<br/>
              SOFT, GREEN,<br/>
              FULL OF SONGS.
            </div>
            <div className="wk-sans" style={{ fontSize: 9, marginTop: 10, maxWidth: 240, lineHeight: 1.4 }}>
              An 11" plush hand-stitched in limited runs. For kids,
              collectors, and the slightly online.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Btn accent>Pre-order · $49</Btn>
            <Btn>Pay with ETH</Btn>
            <span className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>→ ships jul</span>
          </div>
        </div>
      </div>
      <Marquee items={['STICKERS', 'COMICS', 'SPOTIFY', 'YOUTUBE', 'COMING SOON']}/>
    </div>
  );
}

function HomeB_Mobile({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Marquee items={['NEW · PLUSH 001', 'PRE-ORDER']}/>
      <div style={{ flex: '0 0 38%', background: 'var(--wk-paper)',
        borderBottom: '1.5px solid var(--wk-ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {mascot && <FrogMascot size={90} holdingBanjo />}
      </div>
      <div style={{ flex: 1, padding: 10 }}>
        <div className="wk-display" style={{ fontSize: 18, lineHeight: 0.95 }}>
          MEET <span style={{ color: 'var(--wk-accent)' }}>BANJO</span>—
        </div>
        <TextBlock lines={3} widths={[100, 88, 65]} style={{ marginTop: 8 }} />
        <div style={{ display: 'flex', gap: 4, marginTop: 10, flexWrap: 'wrap' }}>
          <Btn accent>Pre-order</Btn>
          <Btn>ETH</Btn>
        </div>
      </div>
      <Marquee items={['STICKERS', 'COMICS', 'SPOTIFY']}/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  SHOP
// ═══════════════════════════════════════════════════════════════════

function ShopA_Desktop({ mascot }) {
  const products = [
    { n: '001', name: 'Banjo Plush', price: '$49', soon: false },
    { n: '002', name: 'Sticker Pack', price: '$8', soon: true },
    { n: '003', name: 'Comic Book Vol.1', price: '$15', soon: true },
    { n: '004', name: 'Vinyl 7"', price: '$22', soon: true },
    { n: '005', name: 'Enamel Pin', price: '$12', soon: true },
    { n: '006', name: 'Tote Bag', price: '$28', soon: true },
  ];
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ display: 'flex', justifyContent: 'space-between',
        padding: '10px 16px', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em',
        borderBottom: '1.5px solid var(--wk-ink)' }}>
        <span>banjo &amp; co</span>
        <span style={{ display: 'flex', gap: 14 }}>
          <span>shop</span><span>about</span><span>media</span><span>cart (0)</span>
        </span>
      </div>
      {/* Filter row */}
      <div className="wk-mono" style={{ display: 'flex', justifyContent: 'space-between',
        padding: '8px 16px', fontSize: 8, color: 'var(--wk-mute)',
        borderBottom: '1px dashed var(--wk-ink)' }}>
        <span>ALL · PLUSH · PAPER · SOUND · WEAR</span>
        <span>sort: newest ↓</span>
      </div>
      {/* Grid */}
      <div style={{ flex: 1, padding: 14, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        gridTemplateRows: '1fr 1fr', gap: 12 }}>
        {products.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div className="wk-hover" style={{ flex: 1, minHeight: 0 }}>
              <Img label={p.n === '001' ? 'banjo plush' : 'product '+p.n}
                style={{ width: '100%', height: '100%' }} />
              <div className="wk-hover-rev">quick add →</div>
              {p.soon && (
                <div style={{ position: 'absolute', top: 4, left: 4,
                  background: 'var(--wk-ink)', color: 'var(--wk-bg)',
                  fontSize: 7, padding: '2px 5px', fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '0.1em' }}>SOON</div>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9 }}>
              <span className="wk-sans" style={{ fontWeight: 600 }}>{p.n} · {p.name}</span>
              <span className="wk-mono">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopA_Mobile() {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ display: 'flex', justifyContent: 'space-between',
        padding: '14px 8px 6px', fontSize: 7, borderBottom: '1.5px solid var(--wk-ink)' }}>
        <span>≡</span><span style={{ fontWeight: 700 }}>SHOP</span><span>⊙ 0</span>
      </div>
      <div className="wk-mono" style={{ fontSize: 7, padding: '5px 8px',
        color: 'var(--wk-mute)', borderBottom: '1px dashed var(--wk-ink)' }}>
        all · plush · paper · sound
      </div>
      <div style={{ flex: 1, padding: 8, display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 8, gridAutoRows: 'minmax(0,1fr)' }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Img label={i === 0 ? 'plush' : '00' + (i + 1)} style={{ flex: 1, minHeight: 0 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 7 }}>
              <span className="wk-sans">00{i+1}</span>
              <span className="wk-mono">${[49,8,15,22][i]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopB_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ display: 'flex', justifyContent: 'space-between',
        padding: '8px 16px', fontSize: 9, textTransform: 'uppercase' }}>
        <span>← back</span><span>the catalog · 2026</span><span>cart</span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Stacked rows */}
        {[
          { n: '01', name: 'PLUSH', sub: 'Banjo · 11"', price: '$49', live: true },
          { n: '02', name: 'STICKERS', sub: 'Pack of 12', price: '$8', live: false },
          { n: '03', name: 'COMIC', sub: 'Vol.1 · 48pp', price: '$15', live: false },
        ].map((r, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'stretch',
            borderTop: '1.5px solid var(--wk-ink)',
            flexDirection: i % 2 ? 'row-reverse' : 'row' }}>
            <div style={{ flex: '0 0 38%' }} className="wk-hover">
              <Img label={r.name.toLowerCase()} style={{ width: '100%', height: '100%' }} />
              <div className="wk-hover-rev">{r.live ? 'shop →' : 'notify me →'}</div>
            </div>
            <div style={{ flex: 1, padding: '10px 16px', display: 'flex',
              alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div className="wk-mono" style={{ fontSize: 9, color: 'var(--wk-mute)' }}>chapter {r.n}</div>
                <div className="wk-display" style={{ fontSize: 28, lineHeight: 1,
                  color: r.live ? 'var(--wk-accent)' : 'var(--wk-ink)' }}>{r.name}</div>
                <div className="wk-sans" style={{ fontSize: 9, marginTop: 3, color: 'var(--wk-mute)' }}>{r.sub}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="wk-display" style={{ fontSize: 16 }}>{r.price}</div>
                <div style={{ marginTop: 5 }}>
                  {r.live
                    ? <Btn accent>buy</Btn>
                    : <Btn>notify</Btn>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopB_Mobile() {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ display: 'flex', justifyContent: 'space-between',
        padding: '14px 8px 6px', fontSize: 7 }}>
        <span>←</span><span>CATALOG</span><span>⊙</span>
      </div>
      {[
        { n: '01', name: 'PLUSH', live: true },
        { n: '02', name: 'STICKERS', live: false },
        { n: '03', name: 'COMIC', live: false },
      ].map((r, i) => (
        <div key={i} style={{ flex: 1, display: 'flex',
          borderTop: '1.5px solid var(--wk-ink)' }}>
          <Img style={{ flex: '0 0 40%' }} label={r.name.toLowerCase()} />
          <div style={{ flex: 1, padding: 8, display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between' }}>
            <div>
              <div className="wk-mono" style={{ fontSize: 6, color: 'var(--wk-mute)' }}>ch. {r.n}</div>
              <div className="wk-display" style={{ fontSize: 14, lineHeight: 1,
                color: r.live ? 'var(--wk-accent)' : 'var(--wk-ink)' }}>{r.name}</div>
            </div>
            <Btn accent={r.live} style={{ alignSelf: 'flex-start' }}>{r.live ? 'buy' : 'soon'}</Btn>
          </div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  PRODUCT
// ═══════════════════════════════════════════════════════════════════

function ProductA_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-mono" style={{ padding: '8px 16px', fontSize: 8, color: 'var(--wk-mute)',
        borderBottom: '1.5px solid var(--wk-ink)' }}>
        home / shop / <span style={{ color: 'var(--wk-ink)' }}>banjo plush no.001</span>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        {/* Gallery */}
        <div style={{ flex: '0 0 55%', borderRight: '1.5px solid var(--wk-ink)',
          padding: 14, display: 'flex', gap: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Img key={i} label={'v'+(i+1)} style={{ width: 36, height: 36 }} />
            ))}
          </div>
          <div style={{ flex: 1, position: 'relative' }}>
            <Img label="banjo plush · main shot"
              style={{ width: '100%', height: '100%', background: 'var(--wk-accent)',
                color: '#fff', borderColor: 'var(--wk-ink)',
                backgroundImage: 'repeating-linear-gradient(135deg,transparent 0,transparent 7px,rgba(255,255,255,0.18) 7px,rgba(255,255,255,0.18) 8px)' }} />
            {mascot && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <FrogMascot size={180} holdingBanjo />
              </div>
            )}
          </div>
        </div>
        {/* Info */}
        <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>NO.001 · DROP A</div>
          <div className="wk-display" style={{ fontSize: 24, lineHeight: 1 }}>BANJO,<br/>THE PLUSH.</div>
          <div className="wk-display" style={{ fontSize: 18, color: 'var(--wk-accent)' }}>$49.00</div>
          <TextBlock lines={4} widths={[100, 95, 88, 60]} />
          {/* Variant + qty */}
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span className="wk-mono" style={{ fontSize: 8 }}>SIZE</span>
            <Btn>11"</Btn><Btn dark>16"</Btn>
            <span className="wk-mono" style={{ fontSize: 8, marginLeft: 8 }}>QTY</span>
            <Btn>– 1 +</Btn>
          </div>
          {/* Pay row — FIAT + crypto */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
            <Btn accent style={{ padding: '6px 14px' }}>ADD TO CART</Btn>
            <Btn dark>◎ pay w/ crypto</Btn>
          </div>
          <div className="wk-mono" style={{ fontSize: 7, color: 'var(--wk-mute)' }}>
            visa · mc · apple pay · eth · usdc · sol
          </div>
          {/* Accordion */}
          <div style={{ marginTop: 4, borderTop: '1px dashed var(--wk-ink)' }}>
            {['details ▾', 'shipping ▸', 'care ▸'].map((t, i) => (
              <div key={i} className="wk-sans" style={{ padding: '5px 0',
                borderBottom: '1px dashed var(--wk-ink)', fontSize: 9 }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductA_Mobile({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ display: 'flex', justifyContent: 'space-between',
        padding: '14px 8px 4px', fontSize: 7 }}>
        <span>←</span><span>BANJO 001</span><span>⊙</span>
      </div>
      <div style={{ position: 'relative', height: 150, margin: '0 8px',
        background: 'var(--wk-accent)', borderRadius: 3,
        backgroundImage: 'repeating-linear-gradient(135deg,transparent 0,transparent 7px,rgba(255,255,255,0.18) 7px,rgba(255,255,255,0.18) 8px)' }}>
        {mascot && <div style={{ position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center' }}><FrogMascot size={100} holdingBanjo /></div>}
      </div>
      <div style={{ display: 'flex', gap: 3, padding: '4px 8px' }}>
        {Array.from({ length: 4 }).map((_, i) =>
          <Img key={i} label={'v'+(i+1)} style={{ width: 28, height: 28 }} />)}
      </div>
      <div style={{ padding: '4px 10px', flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div className="wk-display" style={{ fontSize: 14 }}>BANJO PLUSH</div>
        <div className="wk-display" style={{ fontSize: 11, color: 'var(--wk-accent)' }}>$49</div>
        <TextBlock lines={2} widths={[100, 70]} />
      </div>
      <div style={{ padding: 8, borderTop: '1.5px solid var(--wk-ink)',
        display: 'flex', gap: 4 }}>
        <Btn accent style={{ flex: 1 }}>add to cart</Btn>
        <Btn dark>◎</Btn>
      </div>
    </div>
  );
}

function ProductB_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Full-bleed magazine hero */}
      <div style={{ height: '50%', position: 'relative',
        background: 'var(--wk-accent)',
        backgroundImage: 'repeating-linear-gradient(135deg,transparent 0,transparent 9px,rgba(255,255,255,0.14) 9px,rgba(255,255,255,0.14) 10px)' }}>
        <div className="wk-display" style={{ position: 'absolute', top: 14, left: 16,
          color: '#fff', fontSize: 11, letterSpacing: '0.1em' }}>NO.001 · DROP A · 2026</div>
        <div className="wk-display" style={{ position: 'absolute', bottom: 12, left: 16,
          color: '#fff', fontSize: 38, lineHeight: 0.9 }}>
          BANJO,<br/>THE PLUSH.
        </div>
        {mascot && <div style={{ position: 'absolute', right: 30, bottom: -10 }}>
          <FrogMascot size={200} holdingBanjo /></div>}
        {/* Sticky buy rail */}
        <div style={{ position: 'absolute', top: 14, right: 14,
          background: 'var(--wk-bg)', border: '1.5px solid var(--wk-ink)',
          padding: 8, width: 140, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div className="wk-display" style={{ fontSize: 16 }}>$49</div>
          <Btn accent>add to cart</Btn>
          <Btn dark>◎ pay w/ eth</Btn>
          <div className="wk-mono" style={{ fontSize: 7, color: 'var(--wk-mute)' }}>fiat + crypto</div>
        </div>
      </div>
      {/* Lore */}
      <div style={{ flex: 1, padding: 16, display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
        <div>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>THE STORY</div>
          <TextBlock lines={5} widths={[100, 95, 90, 88, 70]} style={{ marginTop: 6 }} />
        </div>
        <div>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>SPECS</div>
          <div className="wk-sans" style={{ fontSize: 9, marginTop: 6, lineHeight: 1.6 }}>
            11" tall<br/>cotton + recycled poly<br/>removable banjo<br/>hand-numbered
          </div>
        </div>
        <div>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>SHIPS</div>
          <TextBlock lines={3} widths={[100, 80, 50]} style={{ marginTop: 6 }} />
        </div>
      </div>
    </div>
  );
}

function ProductB_Mobile({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '55%', position: 'relative', background: 'var(--wk-accent)',
        backgroundImage: 'repeating-linear-gradient(135deg,transparent 0,transparent 8px,rgba(255,255,255,0.14) 8px,rgba(255,255,255,0.14) 9px)' }}>
        {mascot && <div style={{ position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center' }}><FrogMascot size={110} holdingBanjo /></div>}
        <div className="wk-display" style={{ position: 'absolute', bottom: 8, left: 10,
          color: '#fff', fontSize: 18, lineHeight: 0.9 }}>BANJO,<br/>THE PLUSH.</div>
      </div>
      <div style={{ padding: 10, flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="wk-mono" style={{ fontSize: 7, color: 'var(--wk-mute)' }}>NO.001</div>
          <div className="wk-display" style={{ fontSize: 14, color: 'var(--wk-accent)' }}>$49</div>
        </div>
        <TextBlock lines={3} widths={[100, 90, 60]} />
        <div style={{ display: 'flex', gap: 4, marginTop: 'auto' }}>
          <Btn accent style={{ flex: 1 }}>add to cart</Btn>
          <Btn dark>◎ eth</Btn>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  ABOUT
// ═══════════════════════════════════════════════════════════════════

function AboutA_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ padding: '10px 16px', fontSize: 9, display: 'flex',
        justifyContent: 'space-between', textTransform: 'uppercase' }}>
        <span>about banjo</span><span>est. 2026</span>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <div style={{ flex: 1, padding: 16 }}>
          <div className="wk-display" style={{ fontSize: 22, lineHeight: 1 }}>
            A SMALL STUDIO<br/>
            FOR <span className="wk-uline">FRIENDLY</span><br/>
            CHARACTERS<br/>
            &amp; THE WORLDS<br/>
            THEY LIVE IN.
          </div>
          <TextBlock lines={4} widths={[100, 90, 95, 60]} style={{ marginTop: 14, maxWidth: 280 }} />
        </div>
        <div style={{ flex: '0 0 38%', borderLeft: '1.5px solid var(--wk-ink)',
          background: 'var(--wk-paper)', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {mascot && <FrogMascot size={150} holdingBanjo />}
          <Note style={{ position: 'absolute', top: 10, right: 10 }}>
            Banjo first sketched on a napkin, March 2025.
          </Note>
        </div>
      </div>
      {/* Timeline */}
      <div style={{ display: 'flex', borderTop: '1.5px solid var(--wk-ink)' }}>
        {[
          { y: '2025', t: 'Banjo, sketched.' },
          { y: '2026', t: 'Plush 001 ships.' },
          { y: '2026', t: 'Comic Vol.1' },
          { y: '2027', t: 'Banjo on Spotify.' },
        ].map((m, i) => (
          <div key={i} style={{ flex: 1, padding: '8px 10px',
            borderLeft: i ? '1px dashed var(--wk-ink)' : 'none' }}>
            <div className="wk-display" style={{ fontSize: 14,
              color: i === 1 ? 'var(--wk-accent)' : 'var(--wk-ink)' }}>{m.y}</div>
            <div className="wk-sans" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>{m.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutA_Mobile({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ padding: '14px 8px 4px', fontSize: 7,
        textAlign: 'center' }}>ABOUT</div>
      <div style={{ padding: 10 }}>
        <div className="wk-display" style={{ fontSize: 13, lineHeight: 0.95 }}>
          A SMALL<br/>STUDIO<br/>FOR <span className="wk-uline">FRIENDLY</span><br/>CHARACTERS.
        </div>
      </div>
      <div style={{ flex: 1, background: 'var(--wk-paper)',
        borderTop: '1.5px solid var(--wk-ink)', borderBottom: '1.5px solid var(--wk-ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {mascot && <FrogMascot size={90} holdingBanjo />}
      </div>
      <div style={{ padding: '8px 10px' }}>
        <TextBlock lines={3} widths={[100, 80, 60]} />
      </div>
    </div>
  );
}

function AboutB_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Huge manifesto */}
      <div style={{ padding: '18px 18px 8px' }}>
        <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>
          ✦ MANIFESTO · 01
        </div>
        <div className="wk-display" style={{ fontSize: 26, lineHeight: 0.95, marginTop: 6 }}>
          “WE MAKE <span style={{ color: 'var(--wk-accent)' }}>SOFT</span> THINGS<br/>
          FOR A <span className="wk-uline">HARD</span> INTERNET.”
        </div>
      </div>
      <div className="wk-line-dashed" style={{ margin: '0 18px' }} />
      {/* Three columns */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
        padding: 16, gap: 16 }}>
        {[
          { t: 'THE CHARACTER', sub: 'Banjo, the frog who plays banjo.' },
          { t: 'THE STUDIO',    sub: 'Two humans, one frog, one room.' },
          { t: 'THE PLAN',      sub: 'Plush, paper, sound, and more.' },
        ].map((c, i) => (
          <div key={i}>
            <div className="wk-display" style={{ fontSize: 11, color: 'var(--wk-accent)' }}>0{i+1}</div>
            <div className="wk-display" style={{ fontSize: 12, marginTop: 2 }}>{c.t}</div>
            <div className="wk-sans" style={{ fontSize: 9, marginTop: 4, color: 'var(--wk-mute)' }}>{c.sub}</div>
            <TextBlock lines={3} widths={[100, 85, 50]} style={{ marginTop: 8 }} />
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1.5px solid var(--wk-ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 16px', background: 'var(--wk-paper)' }}>
        <div className="wk-display" style={{ fontSize: 12 }}>JOIN THE PADLOG ↘</div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <div className="wk-box" style={{ background: '#fff', padding: '4px 8px',
            fontSize: 9, color: 'var(--wk-mute)', minWidth: 140, fontFamily: 'JetBrains Mono, monospace' }}>
            you@inbox
          </div>
          <Btn accent>subscribe</Btn>
        </div>
      </div>
    </div>
  );
}

function AboutB_Mobile() {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 10px 6px' }}>
        <div className="wk-mono" style={{ fontSize: 6, color: 'var(--wk-mute)' }}>MANIFESTO 01</div>
        <div className="wk-display" style={{ fontSize: 14, lineHeight: 0.95, marginTop: 4 }}>
          "WE MAKE<br/><span style={{ color: 'var(--wk-accent)' }}>SOFT</span> THINGS<br/>FOR A HARD<br/>INTERNET."
        </div>
      </div>
      <div style={{ flex: 1, padding: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['THE CHARACTER', 'THE STUDIO', 'THE PLAN'].map((t, i) => (
          <div key={i} style={{ borderTop: '1px dashed var(--wk-ink)', paddingTop: 4 }}>
            <div className="wk-display" style={{ fontSize: 10 }}>{t}</div>
            <TextBlock lines={2} widths={[100, 60]} style={{ marginTop: 3 }} />
          </div>
        ))}
      </div>
      <div style={{ padding: 8, borderTop: '1.5px solid var(--wk-ink)', display: 'flex', gap: 4 }}>
        <div className="wk-box" style={{ flex: 1, padding: '4px 6px', fontSize: 8,
          fontFamily: 'JetBrains Mono, monospace', color: 'var(--wk-mute)' }}>you@inbox</div>
        <Btn accent>↘</Btn>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
//  CHECKOUT
// ═══════════════════════════════════════════════════════════════════

function CheckoutA_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ padding: '10px 16px', fontSize: 9,
        display: 'flex', justifyContent: 'space-between',
        borderBottom: '1.5px solid var(--wk-ink)' }}>
        <span style={{ fontWeight: 700 }}>BANJO &amp; CO · CHECKOUT</span>
        <span>secure · ssl ⚿</span>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        {/* Cart summary */}
        <div style={{ flex: '0 0 42%', borderRight: '1.5px solid var(--wk-ink)',
          padding: 14, background: 'var(--wk-paper)' }}>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>YOUR CART · 1 ITEM</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <div style={{ position: 'relative', width: 80, height: 80 }}>
              <Img label="" style={{ width: '100%', height: '100%',
                background: 'var(--wk-accent)',
                backgroundImage: 'repeating-linear-gradient(135deg,transparent 0,transparent 6px,rgba(255,255,255,0.2) 6px,rgba(255,255,255,0.2) 7px)' }} />
              {mascot && <div style={{ position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'center' }}>
                <FrogMascot size={60} holdingBanjo /></div>}
            </div>
            <div style={{ flex: 1 }}>
              <div className="wk-display" style={{ fontSize: 13 }}>BANJO PLUSH</div>
              <div className="wk-sans" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>No.001 · 11" · Drop A</div>
              <div style={{ display: 'flex', justifyContent: 'space-between',
                marginTop: 8, fontSize: 10, alignItems: 'center' }}>
                <Btn>– 1 +</Btn>
                <span className="wk-mono">$49.00</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 14, borderTop: '1px dashed var(--wk-ink)', paddingTop: 8 }}>
            {[['subtotal','$49.00'],['shipping','$6.00'],['tax','$3.92']].map(([k,v]) => (
              <div key={k} className="wk-mono" style={{ display: 'flex',
                justifyContent: 'space-between', fontSize: 9, padding: '3px 0' }}>
                <span>{k}</span><span>{v}</span>
              </div>
            ))}
            <div className="wk-display" style={{ display: 'flex',
              justifyContent: 'space-between', fontSize: 16, marginTop: 6,
              paddingTop: 6, borderTop: '1.5px solid var(--wk-ink)' }}>
              <span>TOTAL</span><span>$58.92</span>
            </div>
            <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)', marginTop: 3 }}>
              ≈ 0.0184 ETH · 58.92 USDC
            </div>
          </div>
        </div>
        {/* Payment */}
        <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>PAY WITH</div>
          {/* tabs */}
          <div style={{ display: 'flex', border: '1.5px solid var(--wk-ink)' }}>
            <div className="wk-display" style={{ flex: 1, padding: '6px 10px',
              background: 'var(--wk-ink)', color: 'var(--wk-bg)', fontSize: 11, textAlign: 'center' }}>FIAT</div>
            <div className="wk-display" style={{ flex: 1, padding: '6px 10px',
              fontSize: 11, textAlign: 'center', color: 'var(--wk-mute)' }}>◎ CRYPTO</div>
          </div>
          <div className="wk-mono" style={{ fontSize: 7, color: 'var(--wk-mute)' }}>card · apple pay · google pay</div>
          <div className="wk-box wk-box-fill" style={{ padding: '6px 8px', fontSize: 9,
            fontFamily: 'JetBrains Mono, monospace' }}>email@inbox.com</div>
          <div className="wk-box wk-box-fill" style={{ padding: '6px 8px', fontSize: 9,
            fontFamily: 'JetBrains Mono, monospace' }}>card · 4242 4242 ····</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <div className="wk-box wk-box-fill" style={{ flex: 1, padding: '6px 8px', fontSize: 9,
              fontFamily: 'JetBrains Mono, monospace' }}>mm / yy</div>
            <div className="wk-box wk-box-fill" style={{ flex: 1, padding: '6px 8px', fontSize: 9,
              fontFamily: 'JetBrains Mono, monospace' }}>cvc</div>
            <div className="wk-box wk-box-fill" style={{ flex: 1, padding: '6px 8px', fontSize: 9,
              fontFamily: 'JetBrains Mono, monospace' }}>zip</div>
          </div>
          {/* address */}
          <div className="wk-box wk-box-fill" style={{ padding: '6px 8px', fontSize: 9,
            fontFamily: 'JetBrains Mono, monospace', color: 'var(--wk-mute)' }}>shipping address ▾</div>
          <Btn accent style={{ padding: '10px 16px', fontSize: 11, alignSelf: 'stretch',
            justifyContent: 'center', marginTop: 'auto' }}>
            PLACE ORDER · $58.92
          </Btn>
          <Note style={{ alignSelf: 'flex-start', transform: 'rotate(1deg)' }}>
            Tab switches the panel to wallet-connect (MetaMask, WC, Coinbase).
          </Note>
        </div>
      </div>
    </div>
  );
}

function CheckoutA_Mobile() {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="wk-sans" style={{ padding: '14px 8px 6px', fontSize: 7,
        textAlign: 'center', borderBottom: '1.5px solid var(--wk-ink)' }}>CHECKOUT</div>
      <div style={{ padding: 8 }}>
        <div className="wk-mono" style={{ fontSize: 7, color: 'var(--wk-mute)' }}>YOUR CART</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, marginTop: 3 }}>
          <span className="wk-sans">banjo plush ×1</span><span className="wk-mono">$49</span>
        </div>
        <div className="wk-display" style={{ display: 'flex', justifyContent: 'space-between',
          fontSize: 13, marginTop: 6, paddingTop: 4,
          borderTop: '1.5px solid var(--wk-ink)' }}>
          <span>TOTAL</span><span>$58.92</span>
        </div>
      </div>
      <div style={{ padding: 8, flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div style={{ display: 'flex', border: '1.5px solid var(--wk-ink)' }}>
          <div className="wk-display" style={{ flex: 1, padding: '4px', background: 'var(--wk-ink)',
            color: 'var(--wk-bg)', fontSize: 9, textAlign: 'center' }}>FIAT</div>
          <div className="wk-display" style={{ flex: 1, padding: '4px',
            fontSize: 9, textAlign: 'center', color: 'var(--wk-mute)' }}>◎ CRYPTO</div>
        </div>
        <div className="wk-box wk-box-fill" style={{ padding: '4px 6px', fontSize: 7,
          fontFamily: 'JetBrains Mono, monospace' }}>email</div>
        <div className="wk-box wk-box-fill" style={{ padding: '4px 6px', fontSize: 7,
          fontFamily: 'JetBrains Mono, monospace' }}>card 4242 ····</div>
        <div className="wk-box wk-box-fill" style={{ padding: '4px 6px', fontSize: 7,
          fontFamily: 'JetBrains Mono, monospace' }}>address ▾</div>
      </div>
      <div style={{ padding: 8 }}>
        <Btn accent style={{ width: '100%', padding: '6px', justifyContent: 'center' }}>place order</Btn>
      </div>
    </div>
  );
}

function CheckoutB_Desktop({ mascot }) {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Stepper */}
      <div style={{ display: 'flex', padding: '10px 16px', alignItems: 'center', gap: 10,
        borderBottom: '1.5px solid var(--wk-ink)' }}>
        {['CART','PAY','CONFIRM'].map((s, i) => (
          <React.Fragment key={s}>
            <div className="wk-display" style={{ display: 'flex', alignItems: 'center', gap: 5,
              color: i === 1 ? 'var(--wk-accent)' : i === 0 ? 'var(--wk-ink)' : 'var(--wk-mute)',
              fontSize: 12 }}>
              <span className="wk-box" style={{ width: 16, height: 16,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 8, background: i <= 1 ? 'var(--wk-accent)' : 'var(--wk-bg)',
                color: i <= 1 ? '#fff' : 'var(--wk-ink)' }}>{i+1}</span>
              {s}
            </div>
            {i < 2 && <div className="wk-line" style={{ flex: 1 }} />}
          </React.Fragment>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        {/* Crypto-first */}
        <div style={{ flex: 1, padding: 16 }}>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>◎ PAY WITH CRYPTO · RECOMMENDED</div>
          <div className="wk-display" style={{ fontSize: 18, marginTop: 4 }}>CONNECT YOUR WALLET</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
            {['METAMASK','COINBASE','WALLETCONNECT','PHANTOM'].map(w => (
              <div key={w} className="wk-box wk-box-fill" style={{ padding: '8px 10px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10 }}>
                <span className="wk-sans" style={{ fontWeight: 600 }}>{w}</span>
                <span className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>→</span>
              </div>
            ))}
          </div>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)', marginTop: 10 }}>
            CHAIN · ethereum · base · solana · polygon
          </div>
          <div className="wk-line-dashed" style={{ margin: '14px 0' }} />
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>OR PAY WITH FIAT</div>
          <div style={{ marginTop: 6, display: 'flex', gap: 4 }}>
            <Btn>card</Btn><Btn>apple pay</Btn><Btn>google pay</Btn>
          </div>
        </div>
        {/* Summary */}
        <div style={{ flex: '0 0 38%', borderLeft: '1.5px solid var(--wk-ink)',
          background: 'var(--wk-paper)', padding: 14 }}>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>ORDER · #BC-0001</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 56, height: 56 }}>
              <Img label="" style={{ width: '100%', height: '100%', background: 'var(--wk-accent)' }} />
              {mascot && <div style={{ position: 'absolute', inset: 0, display: 'flex',
                alignItems: 'center', justifyContent: 'center' }}>
                <FrogMascot size={42} holdingBanjo /></div>}
            </div>
            <div style={{ flex: 1 }}>
              <div className="wk-display" style={{ fontSize: 11 }}>BANJO PLUSH ×1</div>
              <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)' }}>11" · Drop A</div>
            </div>
            <div className="wk-mono" style={{ fontSize: 9 }}>$49</div>
          </div>
          <div className="wk-line-dashed" style={{ margin: '10px 0' }} />
          <div className="wk-display" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18 }}>
            <span>TOTAL</span><span>$58.92</span>
          </div>
          <div className="wk-mono" style={{ fontSize: 8, color: 'var(--wk-mute)', marginTop: 2 }}>
            ≈ 0.0184 ETH
          </div>
          <Note style={{ marginTop: 14 }}>
            Crypto-first sequence with FIAT fallback below. Targets crypto-native parents.
          </Note>
        </div>
      </div>
    </div>
  );
}

function CheckoutB_Mobile() {
  return (
    <div className="wk" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 8px 6px', display: 'flex', gap: 4, alignItems: 'center',
        borderBottom: '1.5px solid var(--wk-ink)' }}>
        {[1,2,3].map(n =>
          <div key={n} className="wk-box" style={{ flex: 1, padding: '2px', fontSize: 7,
            textAlign: 'center', fontFamily: 'JetBrains Mono, monospace',
            background: n === 2 ? 'var(--wk-accent)' : 'var(--wk-bg)',
            color: n === 2 ? '#fff' : 'var(--wk-ink)' }}>0{n}</div>)}
      </div>
      <div style={{ padding: 8, flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div className="wk-mono" style={{ fontSize: 7, color: 'var(--wk-mute)' }}>◎ CRYPTO</div>
        {['METAMASK','COINBASE','WC'].map(w =>
          <div key={w} className="wk-box wk-box-fill" style={{ padding: '5px 6px',
            display: 'flex', justifyContent: 'space-between', fontSize: 8 }}>
            <span className="wk-sans" style={{ fontWeight: 600 }}>{w}</span>
            <span className="wk-mono">→</span>
          </div>)}
        <div className="wk-line-dashed" style={{ margin: '4px 0' }} />
        <div className="wk-mono" style={{ fontSize: 7, color: 'var(--wk-mute)' }}>FIAT</div>
        <div style={{ display: 'flex', gap: 3 }}>
          <Btn style={{ flex: 1, justifyContent: 'center' }}>card</Btn>
          <Btn style={{ flex: 1, justifyContent: 'center' }}> pay</Btn>
        </div>
      </div>
      <div style={{ padding: 8, borderTop: '1.5px solid var(--wk-ink)' }}>
        <div className="wk-display" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
          <span>TOTAL</span><span>$58.92</span>
        </div>
      </div>
    </div>
  );
}

// ─── Export everything ────────────────────────────────────────────
Object.assign(window, {
  HomeA_Desktop, HomeA_Mobile, HomeB_Desktop, HomeB_Mobile,
  ShopA_Desktop, ShopA_Mobile, ShopB_Desktop, ShopB_Mobile,
  ProductA_Desktop, ProductA_Mobile, ProductB_Desktop, ProductB_Mobile,
  AboutA_Desktop, AboutA_Mobile, AboutB_Desktop, AboutB_Mobile,
  CheckoutA_Desktop, CheckoutA_Mobile, CheckoutB_Desktop, CheckoutB_Mobile,
});
