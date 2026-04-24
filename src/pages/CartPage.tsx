import { PageHeader } from '../components/layout/PageHeader';
import { useCart } from '../context/CartContext';
import { useTranslation } from '../i18n/useTranslation';
import { products } from '../data/products';
import './CartPage.css';

export function CartPage() {
  const { t, tl } = useTranslation();
  const { items, setQty, remove, total, clear } = useCart();

  if (items.length === 0) {
    return (
      <>
        <PageHeader icon="🛒" title={t('cart.title')} />
        <div className="cart-empty">{t('cart.empty')}</div>
      </>
    );
  }

  return (
    <>
      <PageHeader icon="🛒" title={t('cart.title')} />
      <div className="cart-list">
        {items.map((ci) => {
          const p = products.find((pr) => pr.id === ci.productId);
          if (!p) return null;
          return (
            <article key={ci.productId} className="cart-item">
              <img className="cart-img" src={p.image} alt={tl(p.title)} loading="lazy" />
              <div className="cart-info">
                <h3 className="cart-name">{tl(p.title)}</h3>
                <div className="cart-price">{p.price} ₽</div>
              </div>
              <div className="cart-qty">
                <button
                  type="button"
                  className="cart-qty-btn"
                  onClick={() => setQty(ci.productId, ci.qty - 1)}
                  aria-label="-"
                >
                  −
                </button>
                <span className="cart-qty-val">{ci.qty}</span>
                <button
                  type="button"
                  className="cart-qty-btn"
                  onClick={() => setQty(ci.productId, ci.qty + 1)}
                  aria-label="+"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="cart-remove"
                onClick={() => remove(ci.productId)}
                aria-label={t('cart.remove')}
              >
                ✕
              </button>
            </article>
          );
        })}
      </div>

      <div className="cart-summary">
        <button type="button" className="cart-clear" onClick={clear}>
          {t('cart.clear')}
        </button>
        <div className="cart-total">
          <span className="cart-total-label">{t('cart.total')}:</span>
          <span className="cart-total-val">{total} ₽</span>
        </div>
        <button type="button" className="cart-checkout">
          {t('cart.checkout')}
        </button>
      </div>
    </>
  );
}
