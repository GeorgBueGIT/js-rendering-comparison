// src/components/SearchInput.tsx
import { useState, useMemo } from 'react';
import allItems from '../items.json';
import type { Item } from '../types';

type Props = {
  lazyImages: boolean;
};

export function SearchInput({ lazyImages }: Props) {
  const [query, setQuery] = useState('');

  const filtered = useMemo<Item[]>(
    () => (allItems as Item[]).filter(item =>
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
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{filtered.length} Items</p>
      <ul>
        {filtered.map((item, i) => (
          <li key={item.id} className="card">
            <img
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={300}
              loading={lazyImages && i >= 6 ? 'lazy' : 'eager'}
            />
            <h2>{item.title}</h2>
            <p className="desc">{item.description}</p>
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
}