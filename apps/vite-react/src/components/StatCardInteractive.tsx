// src/components/StatCardInteractive.tsx
import { StatCardBase } from './StatCardBase';
import { FavoriteButton } from './FavoriteButton';
import { CounterControl } from './CounterControl';
import { ExpandToggle } from './ExpandToggle';
import { DismissButton } from './DismissButton';
import type { Stat } from '../dashboardData';

export function StatCardInteractive({ stat }: { stat: Stat }) {
  return (
    <StatCardBase stat={stat}>
      <FavoriteButton />
      <CounterControl />
      <ExpandToggle />
      <DismissButton />
    </StatCardBase>
  );
}