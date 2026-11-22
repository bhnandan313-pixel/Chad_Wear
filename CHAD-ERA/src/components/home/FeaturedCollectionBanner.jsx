import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const FeaturedCollectionBanner = ({ onExplore }) => {
  return (
    <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[420px] max-h-[640px] flex items-center justify-start overflow-hidden bg-[var(--bg-card)] border-b border-[var(--border-color)]">
      {/* Visual Clothing Photography */}
      <img
        src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=85&w=2200&auto=format&fit=crop"
        alt="CHAD ERA Signature Collection Streetwear Banner"
        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-[1.15] brightness-[0.55]"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-lg">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#D0D0D0] uppercase block mb-2">
            LIMITED ARCHIVAL RELEASE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.08em] text-white uppercase leading-none">
            THE SIGNATURE COLLECTION
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#C0C0C0] mt-3 font-light max-w-sm">
            Engineered heavyweight custom fabrications with sharp architectural tailoring.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button
              size="md"
              variant="primary"
              onClick={onExplore}
              icon={ArrowRight}
              className="px-6 py-3.5 text-xs"
            >
              EXPLORE COLLECTION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollectionBanner;
