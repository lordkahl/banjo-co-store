import React from 'react';
import { useApp } from '../store.js';

const footerLinkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  opacity: 0.85,
  transition: 'opacity .15s',
};

export function Footer() {
  const { go } = useApp();
  return (
    <footer style={{
      background: 'var(--ink)', color: 'var(--cream)',
      paddingTop: 60, paddingBottom: 30, marginTop: 80,
    }}>
      <div className="wrap footer-grid" style={{
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

      <div className="wrap footer-meta" style={{
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

      <style>{`
        @media (max-width: 820px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-meta { flex-direction: column; gap: 8px; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
