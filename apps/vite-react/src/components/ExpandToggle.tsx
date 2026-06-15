// src/components/dashboard/ExpandToggle.tsx
import { useState } from 'react';

export function ExpandToggle() {
  const [expanded, setExpanded] = useState(false);
  return (
    <button className="action-btn" onClick={() => setExpanded(!expanded)}>
      {expanded ? 'Hide' : 'Details'}
    </button>
  );
}