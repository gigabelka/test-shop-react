/**
 * Маскот SnowdropShop — заглушка в стилистике макета.
 * Когда появится финальная растровая иллюстрация, достаточно заменить тело
 * этих двух компонентов на <img src={`${import.meta.env.BASE_URL}...`} />.
 */

const SKIN = '#F6CDA6';
const SKIN_DARK = '#E2AE83';
const HAIR = '#6B4327';
const HAIR_DARK = '#553320';
const COAT = '#FDFEFF';
const COAT_SHADE = '#DCE7F6';
const LINE = '#2B3F63';

function Head() {
  return (
    <g>
      {/* волосы, задний план */}
      <path
        d="M72 84c-6-38 18-62 50-62s54 22 50 60c-4-14-14-24-30-26-18-2-40 4-52 16-8 8-14 12-18 12z"
        fill={HAIR}
      />
      {/* уши */}
      <ellipse cx="74" cy="86" rx="8" ry="11" fill={SKIN} />
      <ellipse cx="170" cy="86" rx="8" ry="11" fill={SKIN} />
      {/* лицо */}
      <path
        d="M78 76c0-26 20-42 44-42s44 16 44 42v14c0 30-20 50-44 50S78 120 78 90z"
        fill={SKIN}
      />
      {/* борода */}
      <path
        d="M78 82c-2 34 4 56 44 58 40-2 46-24 44-58-4 14-10 22-18 26-2 16-12 24-26 24s-24-8-26-24c-8-4-14-12-18-26z"
        fill={HAIR}
      />
      <path d="M96 108c8 6 16 9 26 9s18-3 26-9c-2 14-12 22-26 22s-24-8-26-22z" fill={HAIR_DARK} />
      {/* рот */}
      <path d="M104 106h36c-2 12-8 18-18 18s-16-6-18-18z" fill={LINE} />
      <path d="M106 106h32c-1 4-3 6-16 6s-15-2-16-6z" fill="#FFFFFF" />
      {/* усы */}
      <path
        d="M122 96c8-8 20-8 26-2-6 8-16 12-26 10-10 2-20-2-26-10 6-6 18-6 26 2z"
        fill={HAIR_DARK}
      />
      {/* нос */}
      <path d="M122 66c6 4 10 10 10 15 0 4-4 7-10 7s-10-3-10-7c0-5 4-11 10-15z" fill={SKIN_DARK} />
      {/* глаза */}
      <ellipse cx="103" cy="62" rx="9" ry="8" fill="#FFFFFF" />
      <ellipse cx="141" cy="62" rx="9" ry="8" fill="#FFFFFF" />
      <circle cx="105" cy="62" r="4.6" fill={LINE} />
      <circle cx="143" cy="62" r="4.6" fill={LINE} />
      {/* брови */}
      <path
        d="M92 47c8-5 18-5 24 1-8-1-16 0-22 4zM152 47c-8-5-18-5-24 1 8-1 16 0 22 4z"
        fill={HAIR_DARK}
      />
      <path d="M90 46c8-6 20-6 27 1l-3 4c-6-5-15-5-22-1zM154 46c-8-6-20-6-27 1l3 4c6-5 15-5 22-1z" fill={HAIR_DARK} />
      {/* чёлка */}
      <path
        d="M74 78c-4-32 20-52 48-52 20 0 34 8 42 20-14-8-34-8-50 0-12 6-20 16-24 26-4 10-10 12-16 6z"
        fill={HAIR_DARK}
      />
    </g>
  );
}

/** Маскот с жестом «ОК» — правая часть героя. */
export function MascotHero({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 244 330"
      fill="none"
      role="img"
      aria-label="Маскот SnowdropShop показывает жест «отлично»"
    >
      {/* халат */}
      <path
        d="M52 330l8-96c3-26 22-44 46-50l16 18 16-18c24 6 43 24 46 50l8 96z"
        fill={COAT}
        stroke={COAT_SHADE}
        strokeWidth="3"
      />
      <path d="M104 184l18 18 18-18-8-10-10 8-10-8z" fill={COAT_SHADE} opacity=".8" />
      <path d="M96 186c-10 16-14 40-12 72M148 186c10 16 14 40 12 72" stroke={COAT_SHADE} strokeWidth="3" strokeLinecap="round" />
      {/* шея */}
      <path d="M104 148h36v34l-18 12-18-12z" fill={SKIN_DARK} />
      <Head />
      {/* рука с жестом «ОК» */}
      <path
        d="M74 214c-14-4-22-16-22-30l4-24 22 4-2 20 12 12z"
        fill={COAT}
        stroke={COAT_SHADE}
        strokeWidth="3"
      />
      <g>
        <path d="M40 178c0-16 10-26 24-26h10v34c0 10-8 16-18 16s-16-8-16-16z" fill={SKIN} />
        <path
          d="M52 152c0-10 2-20 4-26M64 150c0-12 2-22 5-28M76 152c1-11 3-19 6-24"
          stroke={SKIN}
          strokeWidth="11"
          strokeLinecap="round"
        />
        <circle cx="46" cy="166" r="13" fill="none" stroke={SKIN} strokeWidth="9" />
        <circle cx="46" cy="166" r="9" fill="none" stroke={SKIN_DARK} strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/** Маскот со сложенными ладонями — блок «Почему SnowdropShop». */
export function MascotZen({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 244 330"
      fill="none"
      role="img"
      aria-label="Маскот SnowdropShop со сложенными ладонями"
    >
      <path
        d="M52 330l8-96c3-26 22-44 46-50l16 18 16-18c24 6 43 24 46 50l8 96z"
        fill={COAT}
        stroke={COAT_SHADE}
        strokeWidth="3"
      />
      <path d="M104 184l18 18 18-18-8-10-10 8-10-8z" fill={COAT_SHADE} opacity=".8" />
      <path d="M104 148h36v34l-18 12-18-12z" fill={SKIN_DARK} />
      <Head />
      {/* рукава сходятся к центру */}
      <path
        d="M74 288L108 246M170 288L136 246"
        stroke={COAT_SHADE}
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M74 288L108 246M170 288L136 246"
        stroke={COAT}
        strokeWidth="28"
        strokeLinecap="round"
      />
      {/* сложенные ладони */}
      <path d="M122 208c-12 5-19 20-19 34 0 12 8 22 19 22z" fill={SKIN_DARK} />
      <path d="M122 208c12 5 19 20 19 34 0 12-8 22-19 22z" fill={SKIN} />
      <path d="M122 214v48" stroke="#D89B6E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
