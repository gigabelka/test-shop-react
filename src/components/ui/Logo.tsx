import './Logo.css';

/** Вордмарк SnowdropShop. */
export function Logo({ className, tone = 'blue' }: { className?: string; tone?: 'blue' | 'white' }) {
  return (
    <span className={`logo logo--${tone} ${className ?? ''}`}>
      <span className="logo__text">SnowdropShop</span>
    </span>
  );
}
