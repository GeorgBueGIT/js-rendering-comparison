// pages/LargeStatic.tsx
import { ItemList } from '../components/ItemList';

export default function LargeStatic() {
  return (
    <ItemList config={{ itemCount: 500, showCounter: false, lazyImages: true }} />
  );
}