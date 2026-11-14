import type { CSSProperties } from 'react';
import poster from '../assets/maintenance.jpg';
import './MaintenancePage.css';

const TELEGRAM_URL = 'https://t.me/SNOWDROPSHOP_1';
const VK_URL = 'https://vk.ru/snowdropshop_1';

export function MaintenancePage() {
  return (
    <main className="maintenance" style={{ '--poster': `url(${poster})` } as CSSProperties}>
      <div className="maintenance__poster">
        <img
          className="maintenance__image"
          src={poster}
          alt="SnowdropSHOP — ведутся технические работы. Скоро вернёмся!"
          width={720}
          height={1280}
          draggable={false}
        />
        <h1 className="visually-hidden">Ведутся технические работы</h1>
        <p className="visually-hidden">
          Мы обновляем сайт, чтобы он стал ещё удобнее, быстрее и полезнее для вас. Скоро вернёмся!
        </p>
        <a
          className="maintenance__link maintenance__link--telegram"
          href={TELEGRAM_URL}
          aria-label="Telegram: t.me/SNOWDROPSHOP_1"
        />
        <a
          className="maintenance__link maintenance__link--vk"
          href={VK_URL}
          aria-label="ВКонтакте: vk.ru/snowdropshop_1"
        />
      </div>
    </main>
  );
}
