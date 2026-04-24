import type { Product } from '../../types';
import { ProductCard } from './ProductCard';
import './ProductGrid.css';

interface Props {
  items: Product[];
}

export function ProductGrid({ items }: Props) {
  return (
    <div className="grid">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
