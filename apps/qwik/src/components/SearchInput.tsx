import { component$, useSignal, useComputed$ } from '@builder.io/qwik';
import { ItemCard } from './ItemCard';
import allItems from '../items.json';
import type { Item } from '../types';

export const SearchInput = component$<{ lazyImages: boolean }>(({ lazyImages }) => {
  const query = useSignal('');

  const filtered = useComputed$(() =>
    (allItems as Item[]).filter(item =>
      item.title.toLowerCase().includes(query.value.toLowerCase())
    )
  );

  return (
    <>
      <input
        type="search"
        placeholder="Suche..."
        value={query.value}
        onInput$={(e) => query.value = (e.target as HTMLInputElement).value}
      />
      <p>{filtered.value.length} Items</p>
      <ul>
        {filtered.value.map((item, i) => (
          <ItemCard
            key={item.id}
            item={item}
            showCounter={false}
            lazy={lazyImages && i >= 6}
          />
        ))}
      </ul>
    </>
  );
});