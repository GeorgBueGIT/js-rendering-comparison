// components/ItemList.tsx
import allItems from '../items.json';
import { ItemCard } from './ItemCard';
import type { Item } from '../types';

type Config = {
  itemCount: number;
  showCounter: boolean;
  lazyImages: boolean;
};

export function ItemList({ config }: { config: Config }) {
  const items = (allItems as Item[]).slice(0, config.itemCount);
  return (
    <ul>
      {items.map((item, i) => (
        <ItemCard
          key={item.id}
          item={item}
          showCounter={config.showCounter}
          lazy={config.lazyImages && i >= 6}
        />
      ))}
    </ul>
  );
}