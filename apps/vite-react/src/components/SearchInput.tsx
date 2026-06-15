// components/SearchInput.tsx
import { useState, useMemo } from 'react';
import items from '../items.json';
import { ItemCard } from './ItemCard';
import type { Item } from '../types';

type SearchInputProps = {
  lazyImages: boolean;
};

export function SearchInput({ lazyImages }: SearchInputProps) {
  const [query, setQuery] = useState<string>('');

  const filtered = useMemo<Item[]>(
    () =>
      (items as Item[]).filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <>
      <input
        type="search"
        placeholder="Suche..."
        value={query}
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{filtered.length} Items</p>
      <ul>
        {filtered.map((item, i) => (
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
}