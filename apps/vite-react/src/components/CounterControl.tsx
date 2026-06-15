// src/components/dashboard/CounterControl.tsx
import { useState } from 'react';

export function CounterControl() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-control">
      <button onClick={() => setCount(c => Math.max(0, c - 1))}>−</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}