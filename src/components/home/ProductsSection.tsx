import type { CSSProperties } from 'react';
import snowflake from '../../assets/snowflake.png';
import { PRODUCTS } from '../../data/home';
import { Icon } from '../ui/Icon';
import './ProductsSection.css';

const snowflakeStyle = { '--snowflake-url': `url(${snowflake})` } as CSSProperties;

export function ProductsSection() {
  return (
    <section className="products" id="products">
      <div className="container">
        <header className="products__header">
          <h2 className="section-title products__title">
            <span className="products__snowflake" style={snowflakeStyle} aria-hidden="true" />
            Наши продукты
            <span className="products__snowflake" style={snowflakeStyle} aria-hidden="true" />
          </h2>
          <p className="products__subtitle">Премиальный CBD для твоего комфорта</p>
        </header>

        <ul className="products__grid">
          {PRODUCTS.map((product) => (
            <li key={product.title} className="products__card">
              <h3 className="products__card-title">{product.title}</h3>
              <p className="products__card-description">{product.description}</p>
              <img src={product.image} alt={product.title} className="products__card-image" />
              <a href={product.href} className="products__card-button">
                Смотреть
              </a>
            </li>
          ))}
        </ul>

        <div className="products__more">
          <a href="#/catalog" className="products__more-button">
            <span className="products__more-label products__more-label--desktop">
              Перейти в каталог
            </span>
            <span className="products__more-label products__more-label--mobile">Смотреть все</span>
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
