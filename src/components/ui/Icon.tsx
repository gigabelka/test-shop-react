import type { IconName } from '../../types';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/** Лепесток конопляного листа, повторённый под разными углами. */
const leafPetal = 'M12 13C10.9 10.6 10.9 6.6 12 4c1.1 2.6 1.1 6.6 0 9z';

const shapes: Record<IconName, React.ReactNode> = {
  leaf: (
    <>
      <path d="M12 21v-6.5" />
      {[-62, -34, 0, 34, 62].map((angle) => (
        <path key={angle} d={leafPetal} transform={`rotate(${angle} 12 13)`} />
      ))}
      <path d="M12 13c-1.6-.6-3.6-.4-5 .6 1.4 1 3.4 1.2 5 .5z" />
      <path d="M12 13c1.6-.6 3.6-.4 5 .6-1.4 1-3.4 1.2-5 .5z" />
    </>
  ),
  cup: (
    <>
      <path d="M4 10h12v4.5a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 4 14.5V10z" />
      <path d="M16 11.5h1.8a2.2 2.2 0 0 1 0 4.4H16" />
      <path d="M3 21h14" />
      <path d="M8 7c0-1 1-1.4 1-2.4S8 3 8 3M12 7c0-1 1-1.4 1-2.4S12 3 12 3" />
    </>
  ),
  'shield-check': (
    <>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 7.9-7 9.5-4.1-1.6-7-5.2-7-9.5V6l7-3z" />
      <path d="M9 12.2l2.1 2.1 4-4.2" />
    </>
  ),
  'badge-check': (
    <>
      <path d="M12 3.2l2.1 1.6 2.6-.3 1 2.4 2.3 1.2-.6 2.6.6 2.6-2.3 1.2-1 2.4-2.6-.3L12 20.2l-2.1-1.6-2.6.3-1-2.4-2.3-1.2.6-2.6-.6-2.6L6.3 6.9l1-2.4 2.6.3L12 3.2z" />
      <path d="M9 12l2.1 2.1 4-4.2" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6.5h11v9h-11z" />
      <path d="M13.5 10h3.6l3.4 3.2v2.3h-7z" />
      <circle cx="7" cy="17.5" r="1.9" />
      <circle cx="16.5" cy="17.5" r="1.9" />
      <path d="M9 17.5h5.6M2.5 15.5H5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <path d="M12 14v2.5" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3h5" />
      <path d="M10.5 3v6L5.8 17.2A2 2 0 0 0 7.5 20.2h9a2 2 0 0 0 1.7-3L13.5 9V3" />
      <path d="M8.2 14.2h7.6" />
      <path d="M4.5 5.5l4 4M8.5 5.5l-4 4" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2.5v19M3.8 7.2l16.4 9.6M20.2 7.2L3.8 16.8" />
      <path d="M9.4 4.6L12 6.3l2.6-1.7M9.4 19.4L12 17.7l2.6 1.7" />
      <path d="M4.2 11.2l-.4-3 2.9-.9M19.8 12.8l.4 3-2.9.9" />
      <path d="M6.7 16.7l-2.9-.9.4-3M17.3 7.3l2.9.9-.4 3" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M4.5 12h14" />
      <path d="M13.5 6.8L18.8 12l-5.3 5.2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M15.8 15.8L20.5 20.5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.8" />
      <path d="M4.8 20c.7-3.6 3.7-5.8 7.2-5.8s6.5 2.2 7.2 5.8" />
    </>
  ),
  cart: (
    <>
      <path d="M2.5 4h2.4l2.3 10.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.5L20 7.5H6" />
      <circle cx="9.5" cy="19.5" r="1.6" />
      <circle cx="17" cy="19.5" r="1.6" />
    </>
  ),
  star: <path d="M12 3.5l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.9l6-.9L12 3.5z" />,
  heart: (
    <path d="M12 20s-7.3-4.4-7.3-9.3A4.2 4.2 0 0 1 12 8.2a4.2 4.2 0 0 1 7.3 2.5C19.3 15.6 12 20 12 20z" />
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
};

const filled: IconName[] = ['star', 'heart'];

export function Icon({ name, size = 24, className, strokeWidth = 1.6 }: IconProps) {
  const isFilled = filled.includes(name);

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  );
}
