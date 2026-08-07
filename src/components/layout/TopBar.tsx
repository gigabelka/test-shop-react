import { useState } from 'react';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';
import { navLinks } from '../../data/home';
import './TopBar.css';

const CART_COUNT = 1;

export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <a className="topbar__logo" href="#/" aria-label="SnowdropShop — на главную">
          <Logo />
        </a>

        <nav className="topbar__nav" aria-label="Основная навигация">
          <ul className="topbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="topbar__actions">
          <button type="button" className="topbar__icon" aria-label="Поиск">
            <Icon name="search" size={22} />
          </button>
          <button type="button" className="topbar__icon" aria-label="Личный кабинет">
            <Icon name="user" size={22} />
          </button>
          <button type="button" className="topbar__icon topbar__icon--cart" aria-label="Корзина">
            <Icon name="cart" size={22} />
            <span className="topbar__badge">{CART_COUNT}</span>
          </button>
          <button
            type="button"
            className="topbar__icon topbar__burger"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="topbar__drawer" aria-label="Мобильная навигация">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
