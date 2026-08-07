import { Icon } from '../ui/Icon';
import { ProductArt } from '../illustrations/ProductArt';
import { productCategories } from '../../data/home';
import './ProductsSection.css';

export function ProductsSection() {
  return (
    <section className="products section" id="catalog">
      <div className="container">
        <header className="section-head">
          <h2 className="section-title">
            <Icon name="snowflake" size={26} className="section-title__flake" />
            Наши продукты
            <Icon name="snowflake" size={26} className="section-title__flake" />
          </h2>
          <p className="section-subtitle">Премиальный CBD для твоего комфорта</p>
        </header>

        <ul className="products__grid">
          {productCategories.map((product) => (
            <li key={product.id} className="products__card">
              <div className="products__text">
                <h3 className="products__title">{product.title}</h3>
                <p className="products__desc">{product.description}</p>
              </div>
              <div className="products__art">
                <ProductArt id={product.art} />
              </div>
              <a className="btn btn--primary products__btn" href="#/">
                Смотреть
              </a>
            </li>
          ))}
        </ul>

        <div className="products__more">
          <a className="btn btn--ghost btn--lg" href="#/">
            <span className="products__more-desktop">Перейти в каталог</span>
            <span className="products__more-mobile">Смотреть все</span>
            <Icon name="arrow-right" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
