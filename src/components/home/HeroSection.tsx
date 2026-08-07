import heroScene from '../../assets/hero-scene.png';
import heroCup from '../../assets/hero-cup.png';
import { AVATARS, HERO_FEATURES } from '../../data/home';
import { Icon } from '../ui/Icon';
import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__card">
          <div className="hero__content">
            <p className="hero__badge">
              <Icon name="snow" size={16} />
              Premium CBD
            </p>
            <h1 className="hero__title">
              <span className="hero__title-line hero__title-line--dark">Натуральный CBD</span>
              <span className="hero__title-line hero__title-line--blue">для твоего баланса</span>
            </h1>
            <p className="hero__description">
              Отборные соцветия конопли. Расслабление, гармония и&nbsp;польза в&nbsp;каждой чашке.
            </p>

            <ul className="hero__features">
              {HERO_FEATURES.map((feature) => (
                <li key={feature.icon} className="hero__feature">
                  <Icon name={feature.icon} size={26} className="hero__feature-icon" />
                  <span className="hero__feature-text">
                    {feature.lines[0]}
                    <br />
                    {feature.lines[1]}
                  </span>
                </li>
              ))}
            </ul>

            <div className="hero__buttons">
              <a className="hero__button hero__button--primary" href="#/catalog">
                Перейти в каталог
                <Icon name="arrow" size={18} />
              </a>
              <a className="hero__button hero__button--ghost" href="#/about">
                Узнать больше
                <Icon name="arrow" size={18} />
              </a>
            </div>

            <div className="hero__social">
              <div className="hero__avatars">
                {AVATARS.map((avatar, index) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt=""
                    width={34}
                    height={34}
                    className="hero__avatar"
                    style={{ zIndex: index }}
                  />
                ))}
              </div>
              <div className="hero__social-text">
                <p className="hero__social-caption">
                  Более 5000 довольных клиентов по&nbsp;всей стране
                </p>
                <p className="hero__stars" aria-label="Рейтинг 5 из 5">
                  {['s1', 's2', 's3', 's4', 's5'].map((id) => (
                    <Icon key={id} name="star" size={15} />
                  ))}
                </p>
              </div>
            </div>
          </div>

          <img src={heroCup} alt="" className="hero__cup" aria-hidden="true" />
          <img
            src={heroScene}
            alt="Маскот SnowdropShop с чайником, чаем, маслом и капсулами CBD"
            className="hero__scene"
          />
        </div>
      </div>
    </section>
  );
}
