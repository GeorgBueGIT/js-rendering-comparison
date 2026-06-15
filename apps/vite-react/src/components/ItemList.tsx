import allItems from '../items.json';
import { ItemCard } from './ItemCard';
import type { Item } from '../types';

type Config = {
  itemCount: number;
};

export function ItemList({ config }: { config: Config }) {
  const items = (allItems as Item[]).slice(0, config.itemCount);
  return (
    <ul>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
}