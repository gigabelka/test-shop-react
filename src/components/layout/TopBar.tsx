import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/useTranslation';
import { useTheme } from '../../context/ThemeContext';
import './TopBar.css';

export function TopBar() {
  const { t, lang, setLang } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link to="/" className="topbar-brand">
          <span className="topbar-brand-icon">🍦</span>
          <span className="topbar-brand-text neon-text">{t('brand.name')}</span>
        </Link>

        <div className="topbar-controls">
          <div className="lang-switch" role="group" aria-label="Theme">
            <button
              type="button"
              className={`lang-pill ${theme === 'light' ? 'is-active' : ''}`}
              onClick={() => setTheme('light')}
              aria-pressed={theme === 'light'}
              aria-label="Light theme"
            >
              ☀
            </button>
            <button
              type="button"
              className={`lang-pill ${theme === 'dark' ? 'is-active' : ''}`}
              onClick={() => setTheme('dark')}
              aria-pressed={theme === 'dark'}
              aria-label="Dark theme"
            >
              ☾
            </button>
          </div>

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
      </div>
    </header>
  );
}
