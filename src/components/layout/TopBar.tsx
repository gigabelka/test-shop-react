import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/useTranslation';
import './TopBar.css';

export function TopBar() {
  const { t, lang, setLang } = useTranslation();

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link to="/" className="topbar-brand">
          <span className="topbar-brand-icon">🍦</span>
          <span className="topbar-brand-text neon-text">{t('brand.name')}</span>
        </Link>

        <div className="lang-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={`lang-pill ${lang === 'ru' ? 'is-active' : ''}`}
            onClick={() => setLang('ru')}
            aria-pressed={lang === 'ru'}
          >
            RU
          </button>
          <button
            type="button"
            className={`lang-pill ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
