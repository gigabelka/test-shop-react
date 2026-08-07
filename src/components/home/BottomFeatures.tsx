import { BOTTOM_FEATURES } from '../../data/home';
import { Icon } from '../ui/Icon';
import './BottomFeatures.css';

export function BottomFeatures() {
  return (
    <div className="bottom-features">
      <div className="container">
        <ul className="bottom-features__list">
          {BOTTOM_FEATURES.map((feature) => (
            <li key={feature.lines.join()} className="bottom-features__item">
              <Icon name={feature.icon} size={24} className="bottom-features__icon" />
              <span className="bottom-features__text">
                {feature.lines[0]}
                <br />
                {feature.lines[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
