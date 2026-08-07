import type { ProductArtId } from '../../types';

/**
 * Продуктовые «фотографии» — заглушки в стилистике макета.
 * Заменяются на реальные PNG правкой только этого файла.
 */

const BLUE = '#1B57D6';
const BLUE_DARK = '#123F9E';
const GLASS = '#8C4A18';
const GLASS_LIGHT = '#B5702F';
const WOOD = '#B27B4A';
const WOOD_DARK = '#8D5C33';
const BUD = '#7A9B45';
const BUD_DARK = '#5E7B32';
const TEA = '#DFA43A';

function Buds({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {[
        [0, 0, 9],
        [-14, 3, 7.5],
        [14, 2, 8],
        [-7, -9, 7],
        [8, -10, 6.5],
      ].map(([cx, cy, r], i) => (
        <g key={`${cx}:${cy}`}>
          <circle cx={cx} cy={cy} r={r} fill={i % 2 ? BUD_DARK : BUD} />
          <circle cx={cx - r / 3} cy={cy - r / 3} r={r / 2.6} fill="#93B45C" />
        </g>
      ))}
    </g>
  );
}

export function FlowersArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" role="img" aria-label="Соцветия CBD в деревянной пиале">
      <ellipse cx="80" cy="122" rx="58" ry="9" fill="#E6EEFA" />
      <path d="M24 82h112c0 24-25 40-56 40S24 106 24 82z" fill={WOOD} />
      <path d="M24 82h112c0 6-2 12-5 17-22 8-80 8-102 0-3-5-5-11-5-17z" fill={WOOD_DARK} />
      <ellipse cx="80" cy="82" rx="56" ry="14" fill="#C68F5C" />
      <Buds x={80} y={72} scale={1.25} />
      <Buds x={44} y={78} scale={0.8} />
      <Buds x={116} y={78} scale={0.8} />
    </svg>
  );
}

export function OilArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" role="img" aria-label="Флакон масла CBD с пипеткой">
      <ellipse cx="80" cy="128" rx="46" ry="8" fill="#E6EEFA" />
      <rect x="62" y="8" width="36" height="20" rx="4" fill="#2B2B2B" />
      <rect x="66" y="26" width="28" height="10" rx="3" fill="#3A3A3A" />
      <path d="M60 36h40a12 12 0 0 1 12 12v66a12 12 0 0 1-12 12H60a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12z" fill={GLASS} />
      <path d="M60 36h12v90H60a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12z" fill={GLASS_LIGHT} opacity=".55" />
      <rect x="50" y="56" width="60" height="46" rx="5" fill={BLUE} />
      <rect x="50" y="56" width="60" height="12" rx="5" fill={BLUE_DARK} />
      <rect x="58" y="72" width="44" height="7" rx="3.5" fill="#FFD34D" />
      <rect x="60" y="84" width="40" height="4" rx="2" fill="#BBD3F7" />
      <rect x="66" y="92" width="28" height="3" rx="1.5" fill="#8FB4EE" />
      <path d="M124 22c4 0 7 3 7 7v52c0 6-4 10-8 14" stroke="#2B2B2B" strokeWidth="7" strokeLinecap="round" />
      <path d="M120 96l6 12-8 4z" fill={TEA} />
    </svg>
  );
}

export function CapsulesArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" role="img" aria-label="Банка капсул CBD">
      <ellipse cx="80" cy="128" rx="50" ry="8" fill="#E6EEFA" />
      <rect x="48" y="10" width="60" height="20" rx="6" fill="#F4F7FC" stroke="#D7E1F0" strokeWidth="2" />
      <path d="M50 30h56a10 10 0 0 1 10 10v76a10 10 0 0 1-10 10H50a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10z" fill={GLASS} />
      <path d="M50 30h12v96H50a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10z" fill={GLASS_LIGHT} opacity=".5" />
      <rect x="40" y="48" width="76" height="56" rx="6" fill={BLUE} />
      <rect x="40" y="48" width="76" height="14" rx="6" fill={BLUE_DARK} />
      <rect x="50" y="68" width="56" height="9" rx="4.5" fill="#FFFFFF" />
      <rect x="56" y="83" width="44" height="5" rx="2.5" fill="#BBD3F7" />
      <rect x="64" y="93" width="28" height="4" rx="2" fill="#8FB4EE" />
      {[
        [126, 104],
        [140, 114],
        [118, 120],
      ].map(([cx, cy], i) => (
        <ellipse key={`${cx}:${cy}`} cx={cx} cy={cy} rx="9" ry="7.5" fill="#8A5A2B" transform={`rotate(${-20 + i * 25} ${cx} ${cy})`} />
      ))}
    </svg>
  );
}

export function TeaArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" role="img" aria-label="Стеклянный чайник с чаем CBD">
      <ellipse cx="80" cy="126" rx="56" ry="8" fill="#E6EEFA" />
      <path d="M112 56c14 4 24 10 24 16 0 4-6 8-14 10" stroke="#CFE0F5" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M40 62h72c6 12 8 24 4 34-6 16-22 24-40 24s-34-8-40-24c-4-10-2-22 4-34z" fill="#EAF3FF" stroke="#CFE0F5" strokeWidth="3" />
      <path d="M38 88c8 6 22 10 42 10s34-4 42-10c0 12-6 24-18 30-14 7-34 7-48 0-12-6-18-18-18-30z" fill={TEA} opacity=".85" />
      <Buds x={62} y={94} scale={0.65} />
      <Buds x={98} y={96} scale={0.6} />
      <rect x="58" y="44" width="36" height="10" rx="4" fill="#DCE9F9" />
      <path d="M62 44c0-8 6-14 14-14s14 6 14 14z" fill="#EAF3FF" stroke="#CFE0F5" strokeWidth="3" />
      <path d="M24 60h20v12a10 10 0 0 1-10 10 10 10 0 0 1-10-10z" fill="#F1F7FF" stroke="#CFE0F5" strokeWidth="2.5" />
      <path d="M26 66h16v6c0 4-4 7-8 7s-8-3-8-7z" fill={TEA} opacity=".8" />
    </svg>
  );
}

/** Фирменный дой-пак с чаем — только в композиции героя. */
export function PouchArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 190" fill="none" role="img" aria-label="Упаковка CBD Flower Tea">
      <path d="M14 22h112c6 0 10 4 10 10v144c0 6-4 10-10 10H14c-6 0-10-4-10-10V32c0-6 4-10 10-10z" fill={BLUE} />
      <path d="M14 22h30v164H14c-6 0-10-4-10-10V32c0-6 4-10 10-10z" fill="#2E6FE8" opacity=".55" />
      <path d="M22 8h96c4 0 6 3 6 7v9H16v-9c0-4 2-7 6-7z" fill={BLUE_DARK} />
      <path
        d="M70 52v56M46 66l48 28M94 66L46 94"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M60 58l10 7 10-7M60 102l10-7 10 7" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none" />
      <rect x="26" y="124" width="88" height="9" rx="4.5" fill="#FFFFFF" />
      <rect x="40" y="142" width="60" height="6" rx="3" fill="#9CC0F5" />
      <rect x="50" y="158" width="40" height="5" rx="2.5" fill="#7FA9EE" />
    </svg>
  );
}

const arts: Record<ProductArtId, (props: { className?: string }) => React.ReactElement> = {
  flowers: FlowersArt,
  oil: OilArt,
  capsules: CapsulesArt,
  tea: TeaArt,
};

export function ProductArt({ id, className }: { id: ProductArtId; className?: string }) {
  const Art = arts[id];
  return <Art className={className} />;
}
