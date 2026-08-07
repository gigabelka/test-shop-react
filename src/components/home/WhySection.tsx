import whyMascot from '../../assets/why-mascot.png';
import { REASONS } from '../../data/home';
import { Icon } from '../ui/Icon';
import './WhySection.css';

export function WhySection() {
  return (
    <section className="why">
      <div className="container">
        <div className="why__card">
          <img
            src={whyMascot}
            alt="Маскот SnowdropShop"
            className="why__mascot"
            width={393}
            height={354}
          />
          <div className="why__content">
            <h2 className="section-title why__title">Почему SnowdropShop?</h2>
            <ul className="why__reasons">
              {REASONS.map((reason) => (
                <li key={reason.title} className="why__reason">
                  <Icon name={reason.icon} size={30} className="why__reason-icon" />
                  <div>
                    <h3 className="why__reason-title">{reason.title}</h3>
                    <p className="why__reason-text">{reason.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
