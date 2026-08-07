import { Icon } from '../ui/Icon';

/** Подарочная коробка для баннера подписки. */
export function GiftBox({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 180" fill="none" role="img" aria-label="Подарок — скидка 10%">
      <ellipse cx="100" cy="168" rx="66" ry="9" fill="#0F3E9E" opacity=".45" />
      <rect x="26" y="70" width="148" height="96" rx="10" fill="#2F6FE6" />
      <rect x="26" y="70" width="148" height="96" rx="10" fill="url(#giftShade)" />
      <rect x="18" y="52" width="164" height="26" rx="8" fill="#4A88F0" />
      <rect x="86" y="52" width="28" height="114" fill="#EAF2FF" />
      <path d="M100 52c-16 0-30-6-34-16-3-8 3-16 12-16 12 0 20 12 22 32 2-20 10-32 22-32 9 0 15 8 12 16-4 10-18 16-34 16z" fill="#EAF2FF" />
      <circle cx="100" cy="48" r="7" fill="#D6E6FF" />
      <defs>
        <linearGradient id="giftShade" x1="26" y1="70" x2="174" y2="166" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity=".16" />
          <stop offset="1" stopColor="#000000" stopOpacity=".12" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const AVATARS = [
  { skin: '#F3C7A2', hair: '#4A3323' },
  { skin: '#E7B489', hair: '#26313F' },
  { skin: '#F6D3B2', hair: '#7A4A2A' },
  { skin: '#DFA97C', hair: '#2E2E2E' },
];

/** Стопка аватарок «более 5000 довольных клиентов». */
export function AvatarStack({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {AVATARS.map((a) => (
        <svg key={a.hair} viewBox="0 0 40 40" className="avatar-stack__item">
          <circle cx="20" cy="20" r="20" fill={a.skin} />
          <path d="M20 4c8 0 13 5 13 12v3c-2-4-7-6-13-6s-11 2-13 6v-3C7 9 12 4 20 4z" fill={a.hair} />
          <circle cx="15" cy="20" r="1.8" fill="#33405A" />
          <circle cx="25" cy="20" r="1.8" fill="#33405A" />
          <path d="M15 26c3 2.5 7 2.5 10 0" stroke="#33405A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M6 40c2-6 7-9 14-9s12 3 14 9z" fill="#2F6FE6" />
        </svg>
      ))}
    </div>
  );
}

interface Flake {
  top: string;
  left: string;
  size: number;
  opacity: number;
}

const FLAKES: Flake[] = [
  { top: '8%', left: '4%', size: 26, opacity: 0.35 },
  { top: '18%', left: '52%', size: 18, opacity: 0.4 },
  { top: '6%', left: '72%', size: 34, opacity: 0.3 },
  { top: '46%', left: '88%', size: 22, opacity: 0.28 },
  { top: '68%', left: '46%', size: 16, opacity: 0.32 },
  { top: '78%', left: '8%', size: 24, opacity: 0.26 },
  { top: '36%', left: '30%', size: 14, opacity: 0.3 },
  { top: '86%', left: '68%', size: 20, opacity: 0.24 },
];

/** Декоративные снежинки поверх фона секции. */
export function Snowfall({ className, count = FLAKES.length }: { className?: string; count?: number }) {
  return (
    <div className={`snowfall ${className ?? ''}`} aria-hidden="true">
      {FLAKES.slice(0, count).map((f) => (
        <span
          key={`${f.top}-${f.left}`}
          className="snowfall__flake"
          style={{ top: f.top, left: f.left, opacity: f.opacity }}
        >
          <Icon name="snowflake" size={f.size} strokeWidth={1.3} />
        </span>
      ))}
    </div>
  );
}
