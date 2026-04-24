import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { PageHeader } from '../components/layout/PageHeader';
import { useUser } from '../context/UserContext';
import { useTranslation } from '../i18n/useTranslation';
import './ReferralPage.css';

export function ReferralPage() {
  const { t } = useTranslation();
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  const refLink = `https://gigabelka.github.io/test-shop-react/#/?ref=${user.referralCode}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(refLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // noop
    }
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'SnowdropSHOP', text: 'Invite', url: refLink });
      } catch {
        // noop
      }
    } else {
      copy();
    }
  };

  return (
    <>
      <PageHeader icon="🎁" title={t('ref.title')} subtitle={t('ref.subtitle')} />

      <section className="ref-card">
        <div className="ref-qr">
          <QRCodeSVG
            value={refLink}
            size={220}
            bgColor="#0b1020"
            fgColor="#39ff14"
            level="M"
            includeMargin
          />
        </div>

        <div className="ref-code-row">
          <div className="ref-code-label">{t('ref.yourCode')}</div>
          <div className="ref-code">{user.referralCode}</div>
        </div>

        <div className="ref-link-row">
          <input className="ref-link-input" value={refLink} readOnly aria-label={t('ref.yourLink')} />
          <button type="button" className="ref-btn" onClick={copy}>
            {copied ? t('ref.copied') : t('ref.copy')}
          </button>
        </div>

        <button type="button" className="ref-share" onClick={share}>
          📤 {t('ref.share')}
        </button>

        <div className="ref-stats">
          <span className="ref-stats-num">{user.referralsCount}</span>{' '}
          <span>{t('ref.invited')}</span>
        </div>
      </section>

      <section className="ref-how">
        <h3 className="ref-how-title">{t('ref.howItWorks')}</h3>
        <ol className="ref-how-list">
          <li>{t('ref.step1')}</li>
          <li>{t('ref.step2')}</li>
          <li>{t('ref.step3')}</li>
        </ol>
      </section>
    </>
  );
}
