import { component$ } from '@builder.io/qwik';
import { ItemCard } from './ItemCard';
import items from '../items.json';
import type { Item } from '../types';

type Config = {
  itemCount: number;
  showCounter: boolean;
  lazyImages: boolean;
};

export const ItemList = component$<{ config: Config }>(({ config }) => {
  const visible = (items as Item[]).slice(0, config.itemCount);
  return (
    <ul>
      {visible.map((item, i) => (
        <ItemCard
          key={item.id}
          item={item}
          showCounter={config.showCounter}
          lazy={config.lazyImages && i >= 6}
        />
      ))}
    </ul>
  );
});