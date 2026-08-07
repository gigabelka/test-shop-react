import { Icon } from '../ui/Icon';
import { advantages } from '../../data/home';
import './AdvantagesSection.css';

export function AdvantagesSection() {
  return (
    <section className="advantages">
      <div className="container">
        <ul className="advantages__grid">
          {advantages.map((item) => (
            <li key={item.title} className="advantages__card">
              <span className="advantages__icon">
                <Icon name={item.icon} size={26} />
              </span>
              <span className="advantages__title">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
