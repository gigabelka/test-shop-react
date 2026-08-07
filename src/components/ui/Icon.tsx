import type { ReactNode } from 'react';

export type IconName =
  | 'leaf'
  | 'cannabis'
  | 'cup'
  | 'truck'
  | 'lock'
  | 'shield'
  | 'medal'
  | 'flask'
  | 'heart'
  | 'star'
  | 'search'
  | 'user'
  | 'cart'
  | 'arrow'
  | 'snow'
  | 'check';

const FILLED_PATHS: Record<'star' | 'cannabis', ReactNode> = {
  star: (
    <path d="M12 2.8l2.8 5.7 6.3.9-4.6 4.4 1.1 6.2L12 17.2 6.4 20l1.1-6.2L2.9 9.4l6.3-.9L12 2.8Z" />
  ),
  cannabis: (
    <>
      <path d="M12 2.4c1 2.7 1.1 5.8 0 8.9-1.1-3.1-1-6.2 0-8.9Z" />
      <path d="M6.6 4.2c1.8 2.1 3 4.7 4.1 7.6-2.5-1.6-3.8-4.3-4.1-7.6Z" />
      <path d="M17.4 4.2c-1.8 2.1-3 4.7-4.1 7.6 2.5-1.6 3.8-4.3 4.1-7.6Z" />
      <path d="M3.5 8.4c2.3 1.6 4.1 3.9 5.7 6.6-2.9-1-5-3.3-5.7-6.6Z" />
      <path d="M20.5 8.4c-2.3 1.6-4.1 3.9-5.7 6.6 2.9-1 5-3.3 5.7-6.6Z" />
      <path d="M3.1 13.4c2.5.9 4.7 2.4 6.6 4.7-3-.3-5.4-2-6.6-4.7Z" />
      <path d="M20.9 13.4c-2.5.9-4.7 2.4-6.6 4.7 3-.3 5.4-2 6.6-4.7Z" />
      <path d="M11.4 13.6h1.2l-.35 7.9h-.5l-.35-7.9Z" />
    </>
  ),
};

const STROKE_PATHS: Record<Exclude<IconName, keyof typeof FILLED_PATHS>, ReactNode> = {
  leaf: (
    <>
      <path d="M5.5 18.5C5.5 9.5 11 4.5 19.5 4.5c0 8.5-5 14-14 14Z" />
      <path d="M5.5 18.5c2.5-4.5 6-8.5 11-11" />
    </>
  ),
  cup: (
    <>
      <path d="M4.5 8.5h11v5a4.5 4.5 0 0 1-4.5 4.5H9a4.5 4.5 0 0 1-4.5-4.5v-5Z" />
      <path d="M15.5 10h1.8a2.7 2.7 0 0 1 0 5.4h-1.8" />
      <path d="M4 21h12.5" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6.5H13v9.5H2.5v-9.5Z" />
      <path d="M13 10h3.8l3.2 3.2V16H13" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
    </>
  ),
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <path d="M12 14.5v2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 18.5 6v5c0 4.3-2.8 7.2-6.5 9-3.7-1.8-6.5-4.7-6.5-9V6L12 3.5Z" />
      <path d="m9.2 11.6 2 2 3.8-3.8" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="9" r="4.2" />
      <path d="M12 7.2l.9 1.7 1.9.3-1.4 1.4.3 1.9-1.7-.9-1.7.9.3-1.9-1.4-1.4 1.9-.3.9-1.7Z" />
      <path d="M9.3 12.6 7.5 20l4.5-2.4L16.5 20l-1.8-7.4" />
    </>
  ),
  flask: (
    <>
      <path d="M9.8 3.5h4.4" />
      <path d="M10.8 3.5v4.6l-4.8 8.6A2.6 2.6 0 0 0 8.3 20.5h7.4a2.6 2.6 0 0 0 2.3-3.8l-4.8-8.6V3.5" />
      <path d="M8.2 14h7.6" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.2-4.6-8.7-9.3C2.4 7.7 4.3 5 7.2 5c1.9 0 3.6 1 4.8 2.7C13.2 6 14.9 5 16.8 5c2.9 0 4.8 2.7 3.9 5.7C19.2 15.4 12 20 12 20Z" />
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15.2 15.2 5 5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4.5h2l2.3 11h9.9l2.3-8H7" />
      <circle cx="9.5" cy="19.5" r="1.4" />
      <circle cx="16.5" cy="19.5" r="1.4" />
    </>
  ),
  arrow: <path d="M4 12h14.5M13 6.5l5.5 5.5-5.5 5.5" />,
  snow: (
    <>
      <path d="M12 3.5v17M4.6 7.8l14.8 8.4M4.6 16.2l14.8-8.4" />
      <path d="M12 3.5 10 5.5m2-2 2 2M12 20.5l-2-2m2 2 2-2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  title?: string;
}

export function Icon({ name, size = 24, className, title }: IconProps) {
  const filledPath = (FILLED_PATHS as Partial<Record<IconName, ReactNode>>)[name];
  const filled = filledPath !== undefined;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {filled ? filledPath : STROKE_PATHS[name as keyof typeof STROKE_PATHS]}
    </svg>
  );
}
