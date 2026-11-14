import type { CSSProperties, MouseEvent } from 'react';
import poster from '../assets/maintenance.jpg';
import './MaintenancePage.css';

const TELEGRAM_URL = 'https://t.me/SNOWDROPSHOP_1';
const TELEGRAM_APP_URL = 'tg://resolve?domain=SNOWDROPSHOP_1';
const VK_URL = 'https://vk.ru/snowdropshop_1';

/** Telegram's in-app browser (Android WebView) injects these globals and silently drops target=_blank. */
function isTelegramWebView(): boolean {
  const w = window as Window & { TelegramWebviewProxy?: unknown; TelegramWebview?: unknown };
  return (
    Boolean(w.TelegramWebviewProxy ?? w.TelegramWebview) || /Telegram/i.test(navigator.userAgent)
  );
}

/** Inside Telegram's WebView, navigate in the same window; elsewhere keep the default new-tab link. */
function openFromWebView(url: string) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isTelegramWebView()) return;
    e.preventDefault();
    window.location.href = url;
  };
}

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
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram: t.me/SNOWDROPSHOP_1"
          onClick={openFromWebView(TELEGRAM_APP_URL)}
        />
        <a
          className="maintenance__link maintenance__link--vk"
          href={VK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ВКонтакте: vk.ru/snowdropshop_1"
          onClick={openFromWebView(VK_URL)}
        />
      </div>
    </main>
  );
}
