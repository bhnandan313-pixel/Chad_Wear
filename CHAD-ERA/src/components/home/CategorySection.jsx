import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/products';

export const CategorySection = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 sm:mb-12 pb-4 border-b border-[#E5E5E5]">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#999999] uppercase block mb-1">
              CURATED DIVISIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] text-[#111111] uppercase leading-none">
              SHOP BY CATEGORY
            </h2>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-[#999999] tracking-widest uppercase">
            04 ARCHIVAL DISCIPLINES
          </span>
        </div>

        {/* Categories Grid (2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory && onSelectCategory(category.id)}
              className="group cursor-pointer select-none flex flex-col relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory && onSelectCategory(category.id);
                }
              }}
              aria-label={`Shop ${category.name}`}
            >
              {/* Category Image Area */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3F3F1]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center filter grayscale contrast-[1.08] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Bottom Card Label */}
                <div className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 flex items-end justify-between text-white">
                  <div>
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#E0E0E0] uppercase block">
                      {category.itemCount}
                    </span>
                    <h3 className="font-heading text-base sm:text-xl tracking-[0.16em] uppercase leading-tight mt-0.5">
                      {category.name}
                    </h3>
                  </div>

                  {/* Explore Arrow Icon */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shrink-0 ml-2">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
