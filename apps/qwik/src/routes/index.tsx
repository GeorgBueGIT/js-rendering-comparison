import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <main>
      <h1>Rendering Benchmark</h1>
      <nav>
        <Link href="/v/small-static">Small Static</Link>
        <Link href="/v/large-static">Large Static</Link>
        <Link href="/v/large-local">Large Local</Link>
        <Link href="/v/large-global">Large Global</Link>
      </nav>
    </main>
  );
});