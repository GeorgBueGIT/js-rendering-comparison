import { component$ } from '@builder.io/qwik';
import { Counter } from './Counter';
import type { Item } from '../types';

type Props = {
  item: Item;
  showCounter: boolean;
  lazy: boolean;
};

export const ItemCard = component$<Props>(({ item, showCounter, lazy }) => {
  return (
    <li class="card">
      <img
        src={item.imageUrl}
        alt={item.title}
        width={400}
        height={300}
        loading={lazy ? 'lazy' : 'eager'}
      />
      <h2>{item.title}</h2>
      <p class="desc">{item.description}</p>
      <span class="price">{item.price}</span>
      {showCounter && <Counter />}
    </li>
  );
});