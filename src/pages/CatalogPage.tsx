import { useMemo, useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { CategoryChips } from '../components/catalog/CategoryChips';
import { SortChips } from '../components/catalog/SortChips';
import { ProductGrid } from '../components/catalog/ProductGrid';
import { products } from '../data/products';
import { useTranslation } from '../i18n/useTranslation';
import type { CategoryId, SortKey } from '../types';

type CategoryFilter = CategoryId | 'all';

export function CatalogPage() {
  const { t, tl, lang } = useTranslation();
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [sort, setSort] = useState<SortKey>('default');

  const filtered = useMemo(() => {
    const base = category === 'all' ? products : products.filter((p) => p.category === category);
    const copy = [...base];
    switch (sort) {
      case 'price-asc':
        copy.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        copy.sort((a, b) => b.price - a.price);
        break;
      case 'title-az':
        copy.sort((a, b) => tl(a.title).localeCompare(tl(b.title)));
        break;
      case 'premium-first':
        copy.sort((a, b) => Number(b.premium ?? 0) - Number(a.premium ?? 0));
        break;
    }
    return copy;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sort, lang]);

  return (
    <>
      <PageHeader icon="🍦" title={t('catalog.title')} subtitle={t('catalog.subtitle')} />
      <CategoryChips value={category} onChange={setCategory} />
      <SortChips value={sort} onChange={setSort} />
      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '40px 0' }}>
          {t('catalog.empty')}
        </p>
      ) : (
        <ProductGrid items={filtered} />
      )}
    </>
  );
}
