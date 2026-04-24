import { useTranslation } from '../../i18n/useTranslation';
import type { SortKey } from '../../types';
import './SortChips.css';

interface Props {
  value: SortKey;
  onChange: (v: SortKey) => void;
}

const options: { key: SortKey; labelKey: string; icon: string }[] = [
  { key: 'default', labelKey: 'sort.default', icon: '✦' },
  { key: 'price-asc', labelKey: 'sort.priceAsc', icon: '💰' },
  { key: 'price-desc', labelKey: 'sort.priceDesc', icon: '💸' },
  { key: 'title-az', labelKey: 'sort.az', icon: '🔤' },
  { key: 'premium-first', labelKey: 'sort.premium', icon: '💎' },
];

export function SortChips({ value, onChange }: Props) {
  const { t } = useTranslation();
  return (
    <div className="sortchips">
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          className={`sortchip ${value === o.key ? 'is-active' : ''}`}
          onClick={() => onChange(o.key)}
          aria-pressed={value === o.key}
          title={t(o.labelKey)}
        >
          <span className="sortchip-icon" aria-hidden>
            {o.icon}
          </span>
          <span className="sortchip-label">{t(o.labelKey)}</span>
        </button>
      ))}
    </div>
  );
}
