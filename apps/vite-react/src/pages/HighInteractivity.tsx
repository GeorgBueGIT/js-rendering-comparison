import { generateStats } from '../dashboardData';
import { StatCardInteractive } from '../components/StatCardInteractive';

const stats = generateStats(50);

export default function HighInteractivity() {
  return (
    <div className="dashboard">
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatCardInteractive stat={stat} />
          </li>
        ))}
      </ul>
    </div>
  );
}