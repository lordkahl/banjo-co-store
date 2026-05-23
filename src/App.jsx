import React from 'react';
import { AppCtx } from './store.js';
import { Intro } from './components/Intro.jsx';
import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { CartDrawer } from './components/CartDrawer.jsx';
import { ToastLayer } from './components/ToastLayer.jsx';
import { HomePage } from './pages/Home.jsx';
import { ShopPage } from './pages/Shop.jsx';
import { ProductPage } from './pages/Product.jsx';
import { RoadmapPage } from './pages/Roadmap.jsx';
import { CheckoutPage } from './pages/Checkout.jsx';

export default function App() {
  const [route, setRoute] = React.useState('home');
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);
  const [introOpen, setIntroOpen] = React.useState(true);

  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [route]);

  const pushToast = React.useCallback((t) => {
    const id = Date.now() + Math.random();
    setToasts((p) => [...p, { id, ...t }]);
    setTimeout(() => setToasts((p) => p.filter((x) => x.id !== id)), 3000);
  }, []);

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
    pushToast({ title: 'Banjo added ♪', sub: item.variant || item.short, image: '/assets/pfp.png' });
  }, [pushToast]);

  const removeFromCart = React.useCallback((id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const setCartQty = React.useCallback((id, qty) => {
    setCart((prev) => qty <= 0
      ? prev.filter((x) => x.id !== id)
      : prev.map((x) => x.id === id ? { ...x, qty } : x));
  }, []);

  const clearCart = React.useCallback(() => setCart([]), []);

  const go = React.useCallback((to) => setRoute(to), []);

  const ctx = {
    route, go,
    cart, addToCart, removeFromCart, setCartQty, clearCart,
    cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false),
    toasts, toast: pushToast,
  };

  return (
    <AppCtx.Provider value={ctx}>
      {introOpen && <Intro onDone={() => setIntroOpen(false)} />}

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
    </AppCtx.Provider>
  );
}
