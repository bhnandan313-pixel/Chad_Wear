import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../products/ProductGrid';

export const Bestsellers = ({ products, onProductClick, onViewAll }) => {
  const bestsellerIds = [
    'chad-era-essential-tee',
    'compass-graphic-tee',
    'raw-street-oversized-tee',
    'signature-hoodie'
  ];

  const bestsellers = bestsellerIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section id="bestsellers" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 sm:mb-12 pb-4 border-b border-[#E5E5E5]">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#999999] uppercase block mb-1">
              ICONIC PIECES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] text-[#111111] uppercase leading-none">
              BESTSELLERS
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="group inline-flex items-center gap-2 font-heading text-xs sm:text-sm uppercase tracking-[0.2em] text-[#111111] hover:text-[#707070] transition-colors"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Products Desktop / 2 Products Mobile - Borderless Grid */}
        <ProductGrid
          products={bestsellers}
          onProductClick={onProductClick}
        />

      </div>
    </section>
  );
};

export default Bestsellers;
