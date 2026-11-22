import React from 'react';
import ProductCard from './ProductCard';

/**
 * Borderless Product Grid
 * Responsive grid:
 * - Desktop: 4 columns
 * - Tablet: 3 or 2 columns
 * - Mobile: 2 columns
 * - Clean generous spacing, no container borders
 */
export const ProductGrid = ({ products, onProductClick, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-x-3 sm:gap-y-4 md:gap-x-4 md:gap-y-6 lg:gap-x-6 lg:gap-y-8 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
