import React from 'react';
import { useApp } from '../store.js';

export function ToastLayer() {
  const { toasts } = useApp();
  return (
    <div className="toast-wrap">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <img src={t.image || '/assets/pfp.png'} alt="" style={{ background: '#000' }} />
          <div>
            <div className="f-display" style={{ fontSize: 13, color: '#fff', letterSpacing: '0.04em' }}>{t.title}</div>
            {t.sub && <div className="f-mono" style={{ fontSize: 10, opacity: 0.7, marginTop: 2 }}>{t.sub}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
