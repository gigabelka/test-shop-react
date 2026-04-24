import { useCart } from '../../context/CartContext';
import { useTranslation } from '../../i18n/useTranslation';
import { getCategory } from '../../data/categories';
import type { Product } from '../../types';
import './ProductCard.css';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { t, tl } = useTranslation();
  const { add, has } = useCart();
  const cat = getCategory(product.category);
  const inCart = has(product.id);

  return (
    <article className="product">
      <div className="product-media">
        <img src={product.image} alt={tl(product.title)} loading="lazy" />
        {cat && (
          <span className="product-badge">
            {cat.icon} {tl(cat.label)}
          </span>
        )}
        {product.premium && <span className="product-premium">💎</span>}
      </div>
      <div className="product-body">
        <h3 className="product-title">{tl(product.title)}</h3>
        <p className="product-desc">{tl(product.description)}</p>
        <div className="product-foot">
          <div className="product-price">
            {product.price} <span className="product-cur">{t('common.currency')}</span>
          </div>
          <button
            type="button"
            className={`product-add ${inCart ? 'is-added' : ''}`}
            onClick={() => add(product.id)}
          >
            {inCart ? t('catalog.added') : t('catalog.add')}
          </button>
        </div>
      </div>
    </article>
  );
}
