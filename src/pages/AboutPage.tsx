import { PageHeader } from '../components/layout/PageHeader';
import { useTranslation } from '../i18n/useTranslation';
import './AboutPage.css';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader icon="🍨" title={t('about.title')} subtitle={t('about.subtitle')} />

      <div className="about-hero">
        <img src="https://picsum.photos/seed/aboutus/1200/500" alt="" loading="lazy" />
      </div>

      <section className="about-block">
        <h2 className="about-heading">{t('about.story.title')}</h2>
        <p className="about-body">{t('about.story.body')}</p>
      </section>

      <section className="about-block">
        <h2 className="about-heading">{t('about.values.title')}</h2>
        <p className="about-body">{t('about.values.body')}</p>
      </section>

      <section className="about-block">
        <h2 className="about-heading">{t('about.team.title')}</h2>
        <p className="about-body">{t('about.team.body')}</p>
      </section>
    </>
  );
}
