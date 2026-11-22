import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../products/ProductGrid';

export const NewArrivals = ({ products, onProductClick, onViewAll }) => {
  // Filter new arrivals (first 4 items)
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <section id="new-arrivals" className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 sm:mb-12 pb-4 border-b border-[#E5E5E5]">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#999999] uppercase block mb-1">
              JUST DROPPED
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] text-[#111111] uppercase leading-none">
              NEW ARRIVALS
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
          products={newArrivals}
          onProductClick={onProductClick}
        />

      </div>
    </section>
  );
};

export default NewArrivals;
