import React from 'react';

export function Marquee({ items, tone = 'accent' }) {
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
