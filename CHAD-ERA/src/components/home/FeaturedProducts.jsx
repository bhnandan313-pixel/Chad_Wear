import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import ProductGrid from '../products/ProductGrid';
import { Button } from '../common/Button';
import { CompassEmblem } from '../common/BrandLogo';

export const FeaturedProducts = ({
  products,
  onQuickAdd,
  onToggleWishlist,
  wishlistedIds,
  onOpenDetails,
  onViewAll
}) => {
  return (
    <section id="shop" className="py-20 md:py-28 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[var(--border-color)] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-[var(--text-secondary)]">
              <CompassEmblem className="w-3.5 h-3.5 object-contain" />
              <span className="font-mono text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
                DROP 001 // ARCHIVAL INVENTORY
              </span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.1em] text-[var(--text-primary)] uppercase leading-none">
              THE FIRST DROP
            </h2>
            
            <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] mt-2 font-light tracking-wide">
              Designed to stand apart. Heavyweight custom cottons, boxy geometry, and subtle stealth branding.
            </p>
          </div>

          {/* Desktop View All Link */}
          <div className="hidden md:block">
            <button
              onClick={onViewAll}
              className="group inline-flex items-center gap-3 font-heading text-sm uppercase tracking-[0.22em] text-[var(--text-primary)] hover:opacity-80 transition-colors py-2"
            >
              <span>VIEW ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={products}
          onQuickAdd={onQuickAdd}
          onToggleWishlist={onToggleWishlist}
          wishlistedIds={wishlistedIds}
          onOpenDetails={onOpenDetails}
        />

        {/* Mobile View All Button */}
        <div className="mt-10 md:hidden flex justify-center">
          <Button
            variant="secondary"
            size="md"
            onClick={onViewAll}
            icon={ArrowRight}
            className="w-full sm:w-auto"
          >
            VIEW ALL PRODUCTS
          </Button>
        </div>

        {/* Demonstration Disclaimer Note Required by Spec */}
        <div className="mt-12 p-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center gap-2.5 text-center transition-colors">
          <AlertCircle className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
          <p className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider uppercase">
            DEMONSTRATION CATALOG &bull; ALL GARMENTS SHOWN ARE ARCHIVAL SAMPLES FOR BRAND PREVIEW
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
