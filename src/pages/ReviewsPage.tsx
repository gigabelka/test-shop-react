import { useMemo, useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { useTranslation } from '../i18n/useTranslation';
import { reviews } from '../data/reviews';
import { products } from '../data/products';
import './ReviewsPage.css';

type Filter = 'all' | 5 | 4 | 3;

export function ReviewsPage() {
  const { t, tl, lang } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');

  const avg = useMemo(() => {
    const sum = reviews.reduce((a, r) => a + r.rating, 0);
    return Math.round((sum / reviews.length) * 10) / 10;
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'all') return reviews;
    return reviews.filter((r) => r.rating === filter);
  }, [filter]);

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('rev.filterAll') },
    { key: 5, label: '5 ★' },
    { key: 4, label: '4 ★' },
    { key: 3, label: '3 ★' },
  ];

  return (
    <>
      <PageHeader icon="⭐" title={t('rev.title')} subtitle={t('rev.subtitle')} />

      <section className="rev-summary">
        <div className="rev-summary-score">{avg}</div>
        <div>
          <div className="rev-summary-stars" aria-label={`${avg} / 5`}>
            {'★★★★★'.slice(0, Math.round(avg))}
            <span className="rev-summary-stars-dim">{'★★★★★'.slice(Math.round(avg))}</span>
          </div>
          <div className="rev-summary-label">
            {reviews.length} {t('rev.count')}
          </div>
        </div>
      </section>

      <div className="rev-filters">
        {filters.map((f) => (
          <button
            key={String(f.key)}
            type="button"
            className={`rev-filter ${filter === f.key ? 'is-active' : ''}`}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rev-empty">{t('rev.empty')}</p>
      ) : (
        <div className="rev-list">
          {filtered.map((r) => {
            const product = r.productId
              ? products.find((p) => p.id === r.productId)
              : undefined;
            return (
              <article key={r.id} className="rev-card">
                <div className="rev-head">
                  <div className="rev-avatar" aria-hidden>
                    {r.author.charAt(0)}
                  </div>
                  <div className="rev-head-info">
                    <div className="rev-author">{r.author}</div>
                    <div className="rev-date">{fmtDate(r.date)}</div>
                  </div>
                  <div className="rev-rating" aria-label={`${r.rating} / 5`}>
                    {'★★★★★'.slice(0, r.rating)}
                    <span className="rev-rating-dim">{'★★★★★'.slice(r.rating)}</span>
                  </div>
                </div>
                {product && (
                  <div className="rev-product">
                    🍦 {t('rev.about')}: <strong>{tl(product.title)}</strong>
                  </div>
                )}
                <p className="rev-text">{tl(r.text)}</p>
              </article>
            );
          })}
        </div>
      )}

      <button type="button" className="rev-leave">
        ✍️ {t('rev.leave')}
      </button>
    </>
  );
}
