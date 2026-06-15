// pages/LargeLocal.tsx
import { ItemList } from '../components/ItemList';

export default function LargeLocal() {
  return (
    <ItemList config={{ itemCount: 500, showCounter: true, lazyImages: true }} />
  );
}