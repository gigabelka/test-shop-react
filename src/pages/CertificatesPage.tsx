import { PageHeader } from '../components/layout/PageHeader';
import { certificates } from '../data/certificates';
import { useTranslation } from '../i18n/useTranslation';
import './CertificatesPage.css';

export function CertificatesPage() {
  const { t, tl } = useTranslation();

  return (
    <>
      <PageHeader icon="🎓" title={t('cert.title')} subtitle={t('cert.subtitle')} />
      <div className="cert-grid">
        {certificates.map((c) => (
          <article key={c.id} className="cert-card">
            <div className="cert-media">
              <img src={c.image} alt={tl(c.title)} loading="lazy" />
            </div>
            <div className="cert-body">
              <h3 className="cert-title">{tl(c.title)}</h3>
              <div className="cert-year">
                {t('cert.year')}: {c.year}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
