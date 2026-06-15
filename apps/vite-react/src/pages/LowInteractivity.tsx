// src/pages/LowInteractivity.tsx
import { generateStats } from '../dashboardData';
import { StatCardLowInteractive } from '../components/StatCardLowInteractive';

const stats = generateStats(50);

export default function LowInteractivity() {
  return (
    <div className="dashboard">
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatCardLowInteractive stat={stat} />
          </li>
        ))}
      </ul>
    </div>
  );
}