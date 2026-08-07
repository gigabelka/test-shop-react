import { useState } from 'react';
import type { FormEvent } from 'react';
import gift from '../../assets/gift-10.png';
import snowflake from '../../assets/snowflake.png';
import './NewsletterSection.css';

export function NewsletterSection() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__banner">
          <img
            src={snowflake}
            alt=""
            aria-hidden="true"
            className="newsletter__snow newsletter__snow--left"
          />
          <img
            src={snowflake}
            alt=""
            aria-hidden="true"
            className="newsletter__snow newsletter__snow--right"
          />

          <div className="newsletter__content">
            <h2 className="newsletter__title">Подпишись и&nbsp;получи 10% скидку</h2>
            <p className="newsletter__subtitle">Будь в&nbsp;курсе новинок и&nbsp;акций</p>
            {subscribed ? (
              <p className="newsletter__success">Спасибо! Промокод уже летит на твою почту.</p>
            ) : (
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <label className="visually-hidden" htmlFor="newsletter-email">
                  Электронная почта
                </label>
                <input
                  id="newsletter-email"
                  className="newsletter__input"
                  type="email"
                  name="email"
                  placeholder="Твой e-mail"
                  required
                />
                <button className="newsletter__button" type="submit">
                  Подписаться
                </button>
              </form>
            )}
          </div>

          <img src={gift} alt="Подарок со скидкой 10%" className="newsletter__gift" />
        </div>
      </div>
    </section>
  );
}
