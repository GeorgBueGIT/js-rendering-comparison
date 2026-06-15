// pages/SmallStatic.tsx
import { ItemList } from '../components/ItemList';

export default function SmallStatic() {
  return (
    <ItemList config={{ itemCount: 10, showCounter: false, lazyImages: false }} />
  );
}