import { component$ } from '@builder.io/qwik';
import { ItemList } from '../../../components/ItemList';

export default component$(() => {
  return (
    <ItemList config={{ itemCount: 500, showCounter: true, lazyImages: true }} />
  );
});