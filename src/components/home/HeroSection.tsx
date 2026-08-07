import { Icon } from '../ui/Icon';
import { MascotHero } from '../illustrations/Mascot';
import { CapsulesArt, FlowersArt, OilArt, PouchArt, TeaArt } from '../illustrations/ProductArt';
import { AvatarStack, Snowfall } from '../illustrations/Decor';
import { heroFeatures } from '../../data/home';
import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__card">
          <Snowfall />

          <div className="hero__content">
            <span className="hero__badge">
              <Icon name="snowflake" size={16} />
              Premium CBD
            </span>

            <h1 className="hero__title">
              Натуральный CBD
              <span>для твоего баланса</span>
            </h1>

            <p className="hero__lead">
              Отборные соцветия конопли.
              <br />
              Расслабление, гармония и польза в каждой чашке.
            </p>

            <ul className="hero__features">
              {heroFeatures.map((feature) => (
                <li key={feature.label}>
                  <span className="hero__feature-icon">
                    <Icon name={feature.icon} size={20} />
                  </span>
                  <span className="hero__feature-label">{feature.label}</span>
                </li>
              ))}
            </ul>

            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href="#/">
                Перейти в каталог
                <Icon name="arrow-right" size={18} />
              </a>
              <a className="btn btn--ghost btn--lg" href="#/">
                Узнать больше
                <Icon name="arrow-right" size={18} />
              </a>
            </div>

            <div className="hero__proof">
              <AvatarStack className="avatar-stack" />
              <div className="hero__proof-text">
                <p>
                  Более 5000 довольных
                  <br />
                  клиентов по всей стране
                </p>
                <div className="hero__stars" aria-label="Рейтинг 5 из 5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" size={16} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hero__scene">
            <MascotHero className="hero__mascot" />
            <div className="hero__products">
              <PouchArt className="hero__product hero__product--pouch" />
              <OilArt className="hero__product hero__product--oil" />
              <CapsulesArt className="hero__product hero__product--capsules" />
              <TeaArt className="hero__product hero__product--tea" />
              <FlowersArt className="hero__product hero__product--flowers" />
              <span className="hero__stamp">
                100%
                <strong>Natural</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
