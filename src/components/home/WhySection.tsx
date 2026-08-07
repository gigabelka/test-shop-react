import { Icon } from '../ui/Icon';
import { MascotZen } from '../illustrations/Mascot';
import { Snowfall } from '../illustrations/Decor';
import { whyCards } from '../../data/home';
import './WhySection.css';

export function WhySection() {
  return (
    <section className="why section">
      <div className="container why__inner">
        <div className="why__panel">
          <Snowfall count={6} />
          <MascotZen className="why__mascot" />
        </div>

        <div className="why__content">
          <h2 className="why__title">Почему SnowdropShop?</h2>
          <ul className="why__grid">
            {whyCards.map((card) => (
              <li key={card.title} className="why__card">
                <span className="why__icon">
                  <Icon name={card.icon} size={26} />
                </span>
                <div>
                  <h3 className="why__card-title">{card.title}</h3>
                  <p className="why__card-text">{card.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
