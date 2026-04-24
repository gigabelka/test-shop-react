import './PageHeader.css';

interface Props {
  icon: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ icon, title, subtitle }: Props) {
  return (
    <div className="pageheader">
      <div className="pageheader-icon" aria-hidden>
        {icon}
      </div>
      <h1 className="pageheader-title neon-text">{title}</h1>
      {subtitle && <p className="pageheader-subtitle">{subtitle}</p>}
    </div>
  );
}
