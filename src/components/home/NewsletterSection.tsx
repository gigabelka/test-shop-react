import { useState } from 'react';
import { GiftBox, Snowfall } from '../illustrations/Decor';
import './NewsletterSection.css';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__banner">
          <Snowfall count={7} />

          <div className="newsletter__content">
            <h2 className="newsletter__title">Подпишись и получи 10% скидку</h2>
            <p className="newsletter__subtitle">Будь в курсе новинок и акций</p>

            <form className="newsletter__form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="newsletter-email">
                Твой e-mail
              </label>
              <input
                id="newsletter-email"
                className="newsletter__input"
                type="email"
                required
                placeholder="Твой e-mail"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSent(false);
                }}
              />
              <button type="submit" className="btn btn--white newsletter__submit">
                Подписаться
              </button>
            </form>

            {sent && (
              <p className="newsletter__done" role="status">
                Спасибо! Промокод отправлен на почту.
              </p>
            )}
          </div>

          <div className="newsletter__gift">
            <GiftBox className="newsletter__gift-art" />
            <span className="newsletter__discount">10%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
