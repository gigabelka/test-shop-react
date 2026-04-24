import { PageHeader } from '../components/layout/PageHeader';
import { useUser } from '../context/UserContext';
import { useTranslation } from '../i18n/useTranslation';
import { products } from '../data/products';
import './AccountPage.css';

export function AccountPage() {
  const { t, tl, lang } = useTranslation();
  const { user, tierProgress } = useUser();

  const tierLabel = t(`acc.tier.${tierProgress.current}`);
  const nextLabel = tierProgress.next ? t(`acc.tier.${tierProgress.next}`) : null;

  const fmtDate = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  return (
    <>
      <PageHeader icon="👤" title={t('acc.title')} subtitle={t('acc.subtitle')} />

      <section className="acc-profile">
        <div className="acc-avatar" aria-hidden>
          {user.name.charAt(0)}
        </div>
        <div className="acc-profile-info">
          <h2 className="acc-name">{user.name}</h2>
          <div className="acc-contact">{user.email}</div>
          <div className="acc-contact">{user.phone}</div>
        </div>
        <div className={`acc-tier-badge acc-tier-${tierProgress.current}`}>{tierLabel}</div>
      </section>

      <section className="acc-cards">
        <div className="acc-stat">
          <div className="acc-stat-num">{user.points}</div>
          <div className="acc-stat-label">{t('acc.points')}</div>
        </div>
        <div className="acc-stat">
          <div className="acc-stat-num">{user.orders.length}</div>
          <div className="acc-stat-label">{t('acc.orders')}</div>
        </div>
        <div className="acc-stat">
          <div className="acc-stat-num">{tierProgress.spent} ₽</div>
          <div className="acc-stat-label">{tierLabel}</div>
        </div>
      </section>

      {nextLabel && (
        <section className="acc-progress">
          <div className="acc-progress-head">
            <span>
              {tierLabel} → <strong>{nextLabel}</strong>
            </span>
            <span>
              {tierProgress.toNext} ₽ {t('acc.tierProgress')}
            </span>
          </div>
          <div className="acc-progress-bar">
            <div className="acc-progress-fill" style={{ width: `${tierProgress.pct}%` }} />
          </div>
        </section>
      )}

      <section className="acc-orders">
        <h3 className="acc-orders-title">{t('acc.orders')}</h3>
        <div className="acc-orders-list">
          {user.orders.map((o) => (
            <article key={o.id} className="acc-order">
              <div className="acc-order-head">
                <div>
                  <div className="acc-order-id">{t('acc.order')} #{o.id}</div>
                  <div className="acc-order-date">{fmtDate(o.date)}</div>
                </div>
                <div className="acc-order-total">
                  {o.total} ₽
                </div>
              </div>
              <ul className="acc-order-items">
                {o.items.map((it) => {
                  const p = products.find((pr) => pr.id === it.productId);
                  return (
                    <li key={it.productId}>
                      {p ? tl(p.title) : it.productId} × {it.qty}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
