// src/components/dashboard/FavoriteButton.tsx
import { useState } from 'react';

export function FavoriteButton() {
  const [fav, setFav] = useState(false);
  return (
    <button className="action-btn fav-btn" onClick={() => setFav(!fav)}>
      {fav ? '♥' : '♡'}
    </button>
  );
}