import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useTranslation } from '../../i18n/useTranslation';
import './BottomNav.css';

interface NavDef {
  to: string;
  icon: string;
  labelKey: string;
  end?: boolean;
}

const navItems: NavDef[] = [
  { to: '/', icon: '🏠', labelKey: 'nav.catalog', end: true },
  { to: '/referral', icon: '🎁', labelKey: 'nav.referral' },
  { to: '/news', icon: '📋', labelKey: 'nav.news' },
  { to: '/certificates', icon: '🎓', labelKey: 'nav.certificates' },
  { to: '/about', icon: '🍨', labelKey: 'nav.about' },
  { to: '/reviews', icon: '⭐', labelKey: 'nav.reviews' },
  { to: '/contacts', icon: '🗺️', labelKey: 'nav.contacts' },
  { to: '/cart', icon: '🛒', labelKey: 'nav.cart' },
  { to: '/account', icon: '👤', labelKey: 'nav.account' },
];

export function BottomNav() {
  const { t } = useTranslation();
  const { count } = useCart();

  return (
    <nav className="bottomnav" aria-label="Primary">
      <div className="bottomnav-inner">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `bottomnav-item ${isActive ? 'is-active' : ''}`}
            aria-label={t(item.labelKey)}
          >
            <span className="bottomnav-icon" aria-hidden>
              {item.icon}
              {item.to === '/cart' && count > 0 && (
                <span className="bottomnav-badge">{count}</span>
              )}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
