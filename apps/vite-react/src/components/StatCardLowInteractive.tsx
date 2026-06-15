import { StatCardBase } from './StatCardBase';
import type { Stat } from '../dashboardData';
import { CounterControl } from './CounterControl';

export function StatCardLowInteractive({ stat }: { stat: Stat }) {
  return (
    <StatCardBase stat={stat}>
      <CounterControl />
    </StatCardBase>
  );
}