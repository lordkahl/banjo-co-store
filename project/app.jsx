// app.jsx — Banjo & Co wireframe explorer

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#5a6b2c",
  "density": "loose",
  "mascot": true,
  "marqueeSpeed": 22,
  "pageFilter": "all"
}/*EDITMODE-END*/;

const PAGES = [
  { id: 'home',     title: '01 · Homepage',
    subtitle: 'First-page hero with mascot intro · A: editorial reveal / B: split stage' },
  { id: 'shop',     title: '02 · Shop',
    subtitle: 'Catalog of plush, stickers, comics, media · A: grid / B: stacked editorial' },
  { id: 'product',  title: '03 · Product Detail',
    subtitle: 'Banjo Plush No.001 · A: classic detail / B: magazine spread' },
  { id: 'about',    title: '04 · About / Brand Story',
    subtitle: 'A: timeline story / B: manifesto wall' },
  { id: 'checkout', title: '05 · Cart & Checkout',
    subtitle: 'FIAT + crypto · A: single-page split / B: stepped, crypto-first' },
];

// ─── Intro animation: Banjo character → wordmark ──────────────────
function Intro({ onDone }) {
  const [stage, setStage] = React.useState(0); // 0 hop in, 1 settle, 2 morph to logo, 3 fade out
  React.useEffect(() => {
    const tA = setTimeout(() => setStage(1), 700);
    const tB = setTimeout(() => setStage(2), 1500);
    const tC = setTimeout(() => setStage(3), 2400);
    const tD = setTimeout(() => onDone && onDone(), 3000);
    return () => { [tA, tB, tC, tD].forEach(clearTimeout); };
  }, []);
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'var(--wk-accent)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: stage >= 3 ? 0 : 1,
      pointerEvents: stage >= 3 ? 'none' : 'auto',
      transition: 'opacity .55s ease-out',
      overflow: 'hidden',
    }}>
      {/* Marquee strips top/bottom for atmosphere */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0,
        opacity: stage >= 1 ? 1 : 0, transition: 'opacity .4s' }}>
        <Marquee items={['BANJO & CO', '✦ A FROG WITH A BANJO', 'EST. 2026']}/>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        opacity: stage >= 1 ? 1 : 0, transition: 'opacity .4s' }}>
        <Marquee items={['LOADING…', 'PLUSH 001 · COMING SOON']}/>
      </div>

      {/* Character */}
      <div style={{
        position: 'absolute',
        transition: 'transform .7s cubic-bezier(.34,1.56,.64,1), opacity .5s',
        transform: stage === 0
          ? 'translateY(40vh) rotate(8deg) scale(.8)'
          : stage === 1
            ? 'translateY(0) rotate(-2deg) scale(1)'
            : 'translateY(-30vh) rotate(0) scale(.4)',
        opacity: stage >= 2 ? 0 : 1,
      }}>
        <FrogMascot size={240} holdingBanjo />
      </div>

      {/* Wordmark */}
      <div className="wk-display" style={{
        position: 'absolute',
        color: '#fff',
        fontSize: 96,
        letterSpacing: '0.02em',
        transition: 'opacity .55s, transform .55s',
        opacity: stage >= 2 ? 1 : 0,
        transform: stage >= 2 ? 'scale(1)' : 'scale(.85)',
      }}>
        BANJO<span style={{ color: 'var(--wk-bg)' }}>&amp;</span>CO
      </div>

      {/* Caption */}
      <div className="wk-mono" style={{
        position: 'absolute', bottom: 36, color: 'rgba(255,255,255,0.7)',
        fontSize: 10, letterSpacing: '0.2em',
        opacity: stage === 0 ? 0 : 1, transition: 'opacity .4s',
      }}>
        ✦ A FROG WITH A BANJO ✦
      </div>
    </div>
  );
}

// ─── Direction wrapper: Desktop + Mobile pair inside an artboard ──
function Direction({ Desktop, Mobile, mascot, label }) {
  return (
    <div style={{ padding: 18 }}>
      <Pair>
        <DesktopFrame label={label + ' · desktop'}>
          <Desktop mascot={mascot} />
        </DesktopFrame>
        <MobileFrame label={label + ' · mobile'}>
          <Mobile mascot={mascot} />
        </MobileFrame>
      </Pair>
    </div>
  );
}

// ─── Page section helper ───────────────────────────────────────────
function PageSection({ id, title, subtitle, A, B, mascot }) {
  // Artboard width = desktop 720 + gap 28 + mobile 200 + 2×18 padding = ~984
  const W = 984, H = 510;
  return (
    <DCSection id={id} title={title} subtitle={subtitle}>
      <DCArtboard id={id + '-a'} label="A · option one" width={W} height={H}>
        <Direction Desktop={A[0]} Mobile={A[1]} mascot={mascot} label="A" />
      </DCArtboard>
      <DCArtboard id={id + '-b'} label="B · option two" width={W} height={H}>
        <Direction Desktop={B[0]} Mobile={B[1]} mascot={mascot} label="B" />
      </DCArtboard>
    </DCSection>
  );
}

// ─── Root App ──────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [introOpen, setIntroOpen] = React.useState(true);

  // Push tweaks to CSS variables
  React.useEffect(() => {
    document.documentElement.style.setProperty('--wk-accent', t.accent);
    document.documentElement.style.setProperty('--wk-marquee', t.marqueeSpeed + 's');
  }, [t.accent, t.marqueeSpeed]);

  const visible = (id) => t.pageFilter === 'all' || t.pageFilter === id;

  return (
    <>
      {introOpen && <Intro onDone={() => setIntroOpen(false)} />}

      <DesignCanvas title="Banjo & Co — Wireframes"
        subtitle="5 pages × 2 directions · desktop + mobile · v0.1">

        {visible('home') && (
          <PageSection id="home" title="01 · Homepage"
            subtitle="Mascot-led first impression · A: editorial reveal · B: split stage"
            A={[HomeA_Desktop, HomeA_Mobile]}
            B={[HomeB_Desktop, HomeB_Mobile]}
            mascot={t.mascot} />
        )}

        {visible('shop') && (
          <PageSection id="shop" title="02 · Shop"
            subtitle="Catalog · A: grid catalog · B: stacked editorial rows"
            A={[ShopA_Desktop, ShopA_Mobile]}
            B={[ShopB_Desktop, ShopB_Mobile]}
            mascot={t.mascot} />
        )}

        {visible('product') && (
          <PageSection id="product" title="03 · Product Detail"
            subtitle="Banjo Plush No.001 · A: classic e-comm · B: magazine spread with sticky buy"
            A={[ProductA_Desktop, ProductA_Mobile]}
            B={[ProductB_Desktop, ProductB_Mobile]}
            mascot={t.mascot} />
        )}

        {visible('about') && (
          <PageSection id="about" title="04 · About / Brand Story"
            subtitle="A: timeline story · B: manifesto wall"
            A={[AboutA_Desktop, AboutA_Mobile]}
            B={[AboutB_Desktop, AboutB_Mobile]}
            mascot={t.mascot} />
        )}

        {visible('checkout') && (
          <PageSection id="checkout" title="05 · Cart & Checkout"
            subtitle="FIAT + crypto · A: single-page split (FIAT default) · B: stepped, crypto-first"
            A={[CheckoutA_Desktop, CheckoutA_Mobile]}
            B={[CheckoutB_Desktop, CheckoutB_Mobile]}
            mascot={t.mascot} />
        )}
      </DesignCanvas>

      {/* Floating Banjo replay button */}
      <button
        onClick={() => setIntroOpen(true)}
        title="Replay Banjo intro"
        style={{
          position: 'fixed', left: 16, bottom: 16, zIndex: 100,
          width: 44, height: 44, borderRadius: '50%',
          background: 'var(--wk-accent)',
          border: '1.5px solid var(--wk-ink)',
          boxShadow: '3px 3px 0 var(--wk-ink)',
          cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
        <FrogMascot size={36} holdingBanjo />
      </button>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Page filter" />
        <TweakSelect label="Jump to" value={t.pageFilter}
          options={[
            { value: 'all',      label: 'All 5 pages' },
            { value: 'home',     label: '01 Homepage' },
            { value: 'shop',     label: '02 Shop' },
            { value: 'product',  label: '03 Product' },
            { value: 'about',    label: '04 About' },
            { value: 'checkout', label: '05 Checkout' },
          ]}
          onChange={(v) => setTweak('pageFilter', v)} />

        <TweakSection label="Mascot" />
        <TweakToggle label="Show Banjo" value={t.mascot}
          onChange={(v) => setTweak('mascot', v)} />
        <TweakButton label="▶ Replay intro animation" onClick={() => setIntroOpen(true)} />

        <TweakSection label="Accent color" />
        <TweakColor label="Wireframe accent" value={t.accent}
          options={['#5a6b2c','#8a7a3a','#b8512f','#3a5a4a','#2a2a2a','#7a4ab8']}
          onChange={(v) => setTweak('accent', v)} />

        <TweakSection label="Marquee" />
        <TweakSlider label="Speed (slower → faster)" value={t.marqueeSpeed}
          min={6} max={40} step={1} unit="s"
          onChange={(v) => setTweak('marqueeSpeed', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
