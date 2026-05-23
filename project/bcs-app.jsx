// bcs-app.jsx — main app: routing, cart, toast, intro, tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#b8512f",
  "marqueeSpeed": 28,
  "density": "comfortable",
  "page": "home"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState('home');
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);
  // Play intro on every fresh load (no persistence)
  const [introOpen, setIntroOpen] = React.useState(true);

  // Drive tweaks → CSS vars
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--marquee-speed', t.marqueeSpeed + 's');
  }, [t.accent, t.marqueeSpeed]);

  // Scroll to top on route change
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [route]);

  // ── Cart helpers ─────────────────────────────────────────────
  const addToCart = React.useCallback((item) => {
    setCart((prev) => {
      const key = item.id + '|' + (item.variant || '');
      const idx = prev.findIndex((x) => (x.id + '|' + (x.variant || '')) === key);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { ...item, key, qty: 1 }];
    });
    pushToast({ title: `Banjo added ♪`, sub: item.variant || item.short, image: 'assets/pfp.png' });
  }, []);

  const removeFromCart = React.useCallback((id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const setCartQty = React.useCallback((id, qty) => {
    setCart((prev) => qty <= 0
      ? prev.filter((x) => x.id !== id)
      : prev.map((x) => x.id === id ? { ...x, qty } : x));
  }, []);

  const clearCart = React.useCallback(() => setCart([]), []);

  // ── Toast helpers ────────────────────────────────────────────
  function pushToast(t) {
    const id = Date.now() + Math.random();
    setToasts((p) => [...p, { id, ...t }]);
    setTimeout(() => setToasts((p) => p.filter((x) => x.id !== id)), 3000);
  }

  // ── Route ────────────────────────────────────────────────────
  const go = React.useCallback((to) => {
    setRoute(to);
    setTweak('page', to);
  }, [setTweak]);

  React.useEffect(() => {
    if (t.page && t.page !== route) setRoute(t.page);
  }, []); // initial only

  const ctx = {
    route, go,
    cart, addToCart, removeFromCart, setCartQty, clearCart,
    cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false),
    toasts, toast: pushToast,
  };

  const closeIntro = () => {
    setIntroOpen(false);
  };

  return (
    <AppCtx.Provider value={ctx}>
      {introOpen && <Intro onDone={closeIntro} />}

      <Nav />

      <main key={route}>
        {route === 'home'     && <HomePage />}
        {route === 'shop'     && <ShopPage />}
        {route === 'product'  && <ProductPage />}
        {route === 'roadmap'  && <RoadmapPage />}
        {route === 'checkout' && <CheckoutPage />}
      </main>

      <Footer />

      <CartDrawer />
      <ToastLayer />

      {/* Floating mascot replay */}
      <button className="mascot-pin" onClick={() => setIntroOpen(true)}
        title="Replay Banjo intro" aria-label="Replay intro"
        style={{ background: '#000' }}>
        <img src="assets/pfp.png" alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </button>

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Navigation" />
        <TweakSelect label="Jump to page" value={route}
          options={[
            { value: 'home',     label: '01 · Home' },
            { value: 'shop',     label: '02 · Shop' },
            { value: 'product',  label: '03 · Product' },
            { value: 'roadmap',  label: '04 · Roadmap' },
            { value: 'checkout', label: '05 · Checkout' },
          ]}
          onChange={(v) => go(v)} />
        <TweakButton label="▶ Replay intro animation" onClick={() => setIntroOpen(true)} />
        <TweakButton label={cartOpen ? '× Close cart drawer' : '⊕ Open cart drawer'}
          onClick={() => cartOpen ? setCartOpen(false) : setCartOpen(true)} secondary />

        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent}
          options={['#b8512f', '#d4a548', '#8a3a1f', '#5a6b2c', '#3f4d1d', '#7a4ab8']}
          onChange={(v) => setTweak('accent', v)} />

        <TweakSection label="Motion" />
        <TweakSlider label="Marquee speed (s)" value={t.marqueeSpeed}
          min={8} max={60} step={2} unit="s"
          onChange={(v) => setTweak('marqueeSpeed', v)} />

        <TweakSection label="Demo" />
        <TweakButton label="🐸 Add Banjo to cart"
          onClick={() => addToCart({ ...PRODUCTS[0], variant: 'Uno Banjo · Drop A' })} />
        <TweakButton label="✕ Clear cart" onClick={clearCart} secondary />
      </TweaksPanel>
    </AppCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
