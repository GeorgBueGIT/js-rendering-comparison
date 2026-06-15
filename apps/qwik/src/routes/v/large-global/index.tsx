import { component$ } from '@builder.io/qwik';
import { SearchInput } from '../../../components/SearchInput';

export default component$(() => {
  return <SearchInput lazyImages={true} />;
});