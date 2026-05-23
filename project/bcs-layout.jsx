// bcs-layout.jsx — shared layout: Nav, Marquee, CartDrawer, Toast, Footer
// Plus the AppContext that exposes route + cart + toast.

const AppCtx = React.createContext(null);
const useApp = () => React.useContext(AppCtx);

// ─── Marquee ───────────────────────────────────────────────────
function Marquee({ items, tone = 'accent' }) {
  const cls = 'marquee ' + (tone === 'olive' ? 'is-olive' : tone === 'ink' ? 'is-ink' : '');
  const row = (
    <span>
      {items.map((t, i) => <span key={i}>{t}</span>)}
    </span>
  );
  return (
    <div className={cls}>
      <div className="marquee-track">
        {row}{row}{row}{row}
      </div>
    </div>
  );
}

// ─── Nav ───────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'shop',     label: 'Shop' },
  { id: 'roadmap',  label: 'Roadmap' },
];

function Logo({ size = 18 }) {
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

function Nav() {
  const { route, go, cart, openCart } = useApp();
  const [menuOpen, setMenu] = React.useState(false);
  const total = cart.reduce((n, x) => n + x.qty, 0);

  // Close mobile menu on route change
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
        {/* Left: brand */}
        <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 34, height: 34, borderRadius: '50%',
            background: '#000', border: '1.5px solid var(--ink)',
            overflow: 'hidden', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 0 2px var(--cream), 0 0 0 3.5px var(--ink)',
          }}>
            <img src="assets/pfp.png" alt="Banjo" style={{
              width: '100%', height: '100%', objectFit: 'cover',
            }} />
          </span>
          <Logo />
        </a>

        {/* Center: links (desktop) */}
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

        {/* Right: cart + menu */}
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

      {/* Mobile menu sheet */}
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

// ─── Footer ───────────────────────────────────────────────────
const footerLinkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  opacity: 0.85,
  transition: 'opacity .15s',
};

function Footer() {
  const { go } = useApp();
  return (
    <footer style={{
      background: 'var(--ink)', color: 'var(--cream)',
      paddingTop: 60, paddingBottom: 30, marginTop: 80,
    }}>
      <div className="wrap" style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32,
      }}>
        <div>
          <div className="f-display" style={{ fontSize: 42, lineHeight: 0.95 }}>
            BANJO<br/>&amp; CO.
          </div>
          <div className="f-mono" style={{
            fontSize: 11, marginTop: 16, opacity: 0.7, maxWidth: 280,
          }}>
            A small studio making soft things for a hard internet.<br/>
            Est. 2026 · PumpFun → everywhere
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>Shop</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            <li><a onClick={() => go('product')} style={{ cursor: 'pointer' }}>Banjo Plush 001</a></li>
            <li style={{ opacity: 0.5 }}>Sticker Pack · soon</li>
            <li style={{ opacity: 0.5 }}>Comic Vol.1 · soon</li>
            <li style={{ opacity: 0.5 }}>Vinyl 7" · soon</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>Studio</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            <li><a onClick={() => go('roadmap')} style={{ cursor: 'pointer' }}>Roadmap</a></li>
            <li>Press kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>Follow</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            <li><a href="https://x.com/BanjotheFrog" target="_blank" rel="noopener" style={footerLinkStyle}>Twitter / X ↗</a></li>
            <li><a href="https://t.me/BanjoPortal" target="_blank" rel="noopener" style={footerLinkStyle}>Telegram ↗</a></li>
            <li><a href="https://open.spotify.com/artist/5HsnIaWk9y52YHH6eucrgo?si=9Hw5wXAwRU60vUUb6C2eaA" target="_blank" rel="noopener" style={footerLinkStyle}>Spotify ↗</a></li>
            <li><a href="https://www.tiktok.com/@banjothefrog" target="_blank" rel="noopener" style={footerLinkStyle}>TikTok ↗</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap" style={{
        marginTop: 60, paddingTop: 20,
        borderTop: '1px dashed rgba(235,229,211,0.3)',
        display: 'flex', justifyContent: 'space-between',
        font: '500 10px/1 var(--f-mono)', letterSpacing: '0.15em',
        textTransform: 'uppercase', opacity: 0.6,
      }}>
        <span>© 2026 VALE LLC</span>
        <span>Pays in FIAT + Crypto · ETH · SOL</span>
        <span>banjoandco.xyz</span>
      </div>
    </footer>
  );
}

// ─── Cart Drawer ───────────────────────────────────────────────
function CartDrawer() {
  const { cart, cartOpen, closeCart, go, setCartQty, removeFromCart } = useApp();
  const subtotal = cart.reduce((n, x) => n + x.qty * x.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div onClick={closeCart} style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(31,26,19,0.4)',
        backdropFilter: 'blur(2px)',
        opacity: cartOpen ? 1 : 0,
        pointerEvents: cartOpen ? 'auto' : 'none',
        transition: 'opacity .25s',
      }} />

      {/* Drawer */}
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 100,
        width: 'min(440px, 92vw)',
        background: 'var(--cream)',
        borderLeft: '1.5px solid var(--ink)',
        boxShadow: '-12px 0 0 0 rgba(31,26,19,0.05)',
        transform: cartOpen ? 'translateX(0)' : 'translateX(105%)',
        transition: 'transform .4s var(--e-out)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          padding: '20px 22px', borderBottom: '1.5px solid var(--ink)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div className="f-display" style={{ fontSize: 22 }}>YOUR CART</div>
          <button onClick={closeCart} style={{
            width: 32, height: 32, border: '1.5px solid var(--ink)',
            background: 'var(--cream)', borderRadius: 999, cursor: 'pointer',
            fontFamily: 'var(--f-mono)', fontSize: 14,
          }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: 22 }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{
                width: 84, height: 84, borderRadius: '50%',
                background: '#000', border: '1.5px solid var(--ink)',
                margin: '0 auto', overflow: 'hidden',
              }}>
                <img src="assets/pfp.png" alt="Banjo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="f-display" style={{ fontSize: 20, marginTop: 16 }}>QUIET IN HERE.</div>
              <div className="f-mono" style={{ fontSize: 11, color: 'var(--mute)', marginTop: 6 }}>
                Add Banjo to your cart and let's go.
              </div>
              <button onClick={() => { closeCart(); go('product'); }}
                className="btn btn-accent" style={{ marginTop: 20 }}>Meet Banjo →</button>
            </div>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {cart.map((it) => (
                <li key={it.id} style={{
                  display: 'flex', gap: 14, padding: 12,
                  background: 'var(--cream-soft)', border: '1.5px solid var(--ink)',
                  borderRadius: 6,
                }}>
                  <div style={{
                    width: 72, height: 72, flex: '0 0 auto',
                    borderRadius: 4, overflow: 'hidden',
                    border: '1.5px solid var(--ink)',
                    background: '#f4f0e2',
                  }}>
                    <img src="assets/frontview-sm.png" alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div className="f-display" style={{ fontSize: 15 }}>{it.name}</div>
                      <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)', marginTop: 2 }}>{it.variant}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center',
                        border: '1.5px solid var(--ink)', borderRadius: 4, overflow: 'hidden',
                      }}>
                        <button onClick={() => setCartQty(it.id, it.qty - 1)} style={qtyBtn}>–</button>
                        <span style={{ padding: '0 10px', font: '600 12px/1 var(--f-mono)' }}>{it.qty}</span>
                        <button onClick={() => setCartQty(it.id, it.qty + 1)} style={qtyBtn}>+</button>
                      </div>
                      <div className="f-display" style={{ fontSize: 16 }}>${(it.price * it.qty).toFixed(0)}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div style={{
            padding: 22, borderTop: '1.5px solid var(--ink)',
            background: 'var(--cream-soft)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }} className="f-mono">
              <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 12, opacity: 0.6 }} className="f-mono">
              <span>Shipping</span><span>calc at checkout</span>
            </div>
            <button className="btn btn-accent btn-lg" style={{ width: '100%' }}
              onClick={() => { closeCart(); go('checkout'); }}>
              Checkout · ${subtotal.toFixed(0)} →
            </button>
            <div className="f-mono" style={{ fontSize: 10, color: 'var(--mute)', textAlign: 'center', marginTop: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Pays in FIAT · ETH · SOL
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

const qtyBtn = {
  width: 24, height: 24, border: 0, background: 'transparent',
  cursor: 'pointer', fontFamily: 'var(--f-mono)', fontSize: 14,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
};

// ─── Toast layer ───────────────────────────────────────────────
function ToastLayer() {
  const { toasts } = useApp();
  return (
    <div className="toast-wrap">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <img src={t.image || 'assets/pfp.png'} alt="" style={{ background: '#000' }} />
          <div>
            <div className="f-display" style={{ fontSize: 13, color: '#fff', letterSpacing: '0.04em' }}>{t.title}</div>
            {t.sub && <div className="f-mono" style={{ fontSize: 10, opacity: 0.7, marginTop: 2 }}>{t.sub}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Product data (shared) ──────────────────────────────────────
const PRODUCTS = [
  {
    id: 'banjo-plush-001',
    n: '001',
    name: 'BANJO, THE PLUSH',
    short: 'Banjo Plush',
    drop: 'Drop A · Genesis',
    price: 49,
    soon: false,
    blurb: '8" of hand-stitched frog with a tiny, removable, very real banjo.',
    chip: 'Live',
  },
  {
    id: 'sticker-pack',
    n: '002',
    name: 'THE STICKER PACK',
    short: 'Stickers',
    drop: 'Drop B',
    price: null,
    soon: true,
    blurb: 'Twelve waterproof vinyls. Slap them on laptops, lunchboxes, cold wallets.',
    chip: 'Coming Soon',
  },
  {
    id: 'comic-01',
    n: '003',
    name: 'COMIC · VOL.1',
    short: 'Comic Book',
    drop: 'Drop B',
    price: null,
    soon: true,
    blurb: 'Forty-eight pages, full color. The first song Banjo ever played.',
    chip: 'Coming Soon',
  },
  {
    id: 'vinyl-7',
    n: '004',
    name: 'BANJO ON VINYL',
    short: '7" Vinyl',
    drop: 'Drop C',
    price: null,
    soon: true,
    blurb: 'Two tracks, one frog. Pressed on translucent moss-green wax.',
    chip: 'Genesis Mint',
  },
];

// ─── $BANJO payment wallet (50% BURN + 50% LOCK) ─────────────────
const BANJO_WALLET = 'Hxm4tPvJi8tk2A3uRkQcj7GyQsKbx5EhHiiYuCcNZ32X';

Object.assign(window, {
  AppCtx, useApp, Marquee, Nav, Footer, CartDrawer, ToastLayer, Logo,
  PRODUCTS, BANJO_WALLET,
});
