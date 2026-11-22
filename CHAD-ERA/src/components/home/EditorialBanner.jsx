import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const EditorialBanner = ({ onExploreDrop }) => {
  return (
    <section className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] min-h-[400px] max-h-[580px] flex items-center justify-center overflow-hidden bg-[var(--bg-card)] border-b border-[var(--border-color)]">
      {/* Large Streetwear Photograph showing the clothing being worn */}
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=85&w=2200&auto=format&fit=crop"
        alt="CHAD ERA Editorial Fashion Campaign - Streetwear being worn"
        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-[1.2] brightness-[0.5]"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Short Visual Callout */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="font-mono text-[10px] tracking-[0.35em] text-[#D0D0D0] uppercase block mb-3">
          CHAD ERA // DIVISION 001
        </span>
        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl tracking-[0.08em] text-white uppercase leading-none">
          OWN YOUR STYLE.
        </h2>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Button
            size="md"
            variant="primary"
            onClick={onExploreDrop}
            icon={ArrowRight}
            className="px-8 py-3.5 text-xs"
          >
            EXPLORE THE DROP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EditorialBanner;
