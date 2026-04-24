import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/useTranslation';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/snowdrop-logo.svg';
import './TopBar.css';

export function TopBar() {
  const { t, lang, setLang } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link to="/" className="topbar-brand" aria-label={t('brand.name')}>
          <img src={logo} alt={t('brand.name')} className="topbar-brand-logo" />
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
