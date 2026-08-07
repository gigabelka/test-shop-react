import { Icon } from '../ui/Icon';
import { trustItems } from '../../data/home';
import './SiteFooter.css';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__trust">
          {trustItems.map((item) => (
            <li key={item.label} className="footer__item">
              <span className="footer__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <span className="footer__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
