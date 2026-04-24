import { PageHeader } from '../components/layout/PageHeader';
import { news } from '../data/news';
import { useTranslation } from '../i18n/useTranslation';
import './NewsPage.css';

export function NewsPage() {
  const { t, tl, lang } = useTranslation();

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <>
      <PageHeader icon="📋" title={t('news.title')} subtitle={t('news.subtitle')} />
      <div className="news-list">
        {news.map((n) => (
          <article key={n.id} className="news-card">
            {n.image && (
              <div className="news-media">
                <img src={n.image} alt={tl(n.title)} loading="lazy" />
              </div>
            )}
            <div className="news-body">
              <div className="news-date">{fmtDate(n.date)}</div>
              <h3 className="news-title">{tl(n.title)}</h3>
              <p className="news-text">{tl(n.body)}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
