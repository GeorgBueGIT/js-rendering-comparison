// src/components/dashboard/DismissButton.tsx
import { useState } from 'react';

export function DismissButton() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <button className="action-btn dismiss-btn" onClick={() => setDismissed(true)}>
      ×
    </button>
  );
}