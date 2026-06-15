// src/components/StatCardBase.tsx
import type { Stat } from '../dashboardData';

type Props = {
  stat: Stat;
  children?: React.ReactNode;
};

export function StatCardBase({ stat, children }: Props) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-icon">{stat.icon}</span>
        <h3>{stat.title}</h3>
      </div>

      <div className="stat-value">
        <span className="stat-number">{stat.value}</span>
        <span className={`stat-trend ${stat.trend.startsWith('↑') ? 'up' : 'down'}`}>
          {stat.trend}
        </span>
      </div>

      <div className="stat-meta">
        <span>{stat.category}</span>
        <span className="separator">·</span>
        <span>{stat.date}</span>
      </div>

      <p className="stat-description">{stat.description}</p>

      {children && <div className="stat-actions">{children}</div>}
    </div>
  );
}