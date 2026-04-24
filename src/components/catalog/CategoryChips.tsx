import { categories } from '../../data/categories';
import { useTranslation } from '../../i18n/useTranslation';
import type { CategoryId } from '../../types';
import './CategoryChips.css';

type Value = CategoryId | 'all';

interface Props {
  value: Value;
  onChange: (v: Value) => void;
}

export function CategoryChips({ value, onChange }: Props) {
  const { t, tl } = useTranslation();

  return (
    <div className="chips" role="tablist" aria-label="Categories">
      <button
        type="button"
        role="tab"
        aria-selected={value === 'all'}
        className={`chip ${value === 'all' ? 'is-active' : ''}`}
        onClick={() => onChange('all')}
      >
        {t('catalog.all')}
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          role="tab"
          aria-selected={value === c.id}
          className={`chip ${value === c.id ? 'is-active' : ''}`}
          onClick={() => onChange(c.id)}
        >
          <span className="chip-icon" aria-hidden>
            {c.icon}
          </span>
          {tl(c.label)}
        </button>
      ))}
    </div>
  );
}
