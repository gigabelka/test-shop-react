import { useState } from 'react';
import logo from '../../assets/logo.png';
import { NAV_LINKS } from '../../data/home';
import { Icon } from '../ui/Icon';
import './TopBar.css';

export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container topbar__container">
        <a className="topbar__logo" href="#/" aria-label="SnowdropShop — на главную">
          <img src={logo} alt="SnowdropShop" width={180} height={70} />
        </a>

        <nav className="topbar__nav" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="topbar__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="topbar__actions">
          <button className="topbar__icon-btn" type="button" aria-label="Поиск">
            <Icon name="search" size={22} />
          </button>
          <button className="topbar__icon-btn" type="button" aria-label="Личный кабинет">
            <Icon name="user" size={22} />
          </button>
          <button
            className="topbar__icon-btn topbar__cart"
            type="button"
            aria-label="Корзина, 2 товара"
          >
            <Icon name="cart" size={22} />
            <span className="topbar__badge">2</span>
          </button>
          <button
            className="topbar__icon-btn topbar__burger"
            type="button"
            aria-label="Меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="topbar__burger-line" />
            <span className="topbar__burger-line" />
            <span className="topbar__burger-line" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="topbar__mobile-nav container" aria-label="Мобильная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="topbar__mobile-link"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
