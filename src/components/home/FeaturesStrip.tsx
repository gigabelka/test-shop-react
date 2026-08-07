import { STRIP_FEATURES } from '../../data/home';
import { Icon } from '../ui/Icon';
import './FeaturesStrip.css';

export function FeaturesStrip() {
  return (
    <section className="features-strip" aria-label="Преимущества">
      <div className="container">
        <ul className="features-strip__list">
          {STRIP_FEATURES.map((feature) => (
            <li key={feature.lines.join()} className="features-strip__item">
              <Icon name={feature.icon} size={30} className="features-strip__icon" />
              <span className="features-strip__text">
                {feature.lines[0]}
                <br />
                {feature.lines[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
