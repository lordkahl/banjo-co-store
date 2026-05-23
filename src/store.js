import React from 'react';

export const AppCtx = React.createContext(null);
export const useApp = () => React.useContext(AppCtx);

export const PRODUCTS = [
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

export const BANJO_WALLET = 'Hxm4tPvJi8tk2A3uRkQcj7GyQsKbx5EhHiiYuCcNZ32X';
