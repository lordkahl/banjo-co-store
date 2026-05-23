import React from 'react';
import { useApp } from '../store.js';

const qtyBtn = {
  width: 24, height: 24, border: 0, background: 'transparent',
  cursor: 'pointer', fontFamily: 'var(--f-mono)', fontSize: 14,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
};

export function CartDrawer() {
  const { cart, cartOpen, closeCart, go, setCartQty } = useApp();
  const subtotal = cart.reduce((n, x) => n + x.qty * x.price, 0);

  return (
    <>
      <div onClick={closeCart} style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(31,26,19,0.4)',
        backdropFilter: 'blur(2px)',
        opacity: cartOpen ? 1 : 0,
        pointerEvents: cartOpen ? 'auto' : 'none',
        transition: 'opacity .25s',
      }} />

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
                <img src="/assets/pfp.png" alt="Banjo"
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
                    <img src="/assets/frontview-sm.png" alt=""
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
