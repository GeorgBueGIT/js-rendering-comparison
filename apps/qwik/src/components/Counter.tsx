import { component$, useSignal } from '@builder.io/qwik';

export const Counter = component$(() => {
  const count = useSignal(0);
  return (
    <div class="counter">
      <button onClick$={() => count.value = Math.max(0, count.value - 1)}>−</button>
      <span>{count.value}</span>
      <button onClick$={() => count.value += 1}>+</button>
    </div>
  );
});