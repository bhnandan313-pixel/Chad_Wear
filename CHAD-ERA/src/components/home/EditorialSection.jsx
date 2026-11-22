import React from 'react';
import { motion } from 'framer-motion';
import { CompassEmblem } from '../common/BrandLogo';
import { EDITORIAL_LOOKS } from '../../data/products';

export const EditorialSection = () => {
  return (
    <section id="collections" className="py-24 md:py-32 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Typography Hook */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[var(--border-color)] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-[var(--text-muted)]">
              <CompassEmblem className="w-3.5 h-3.5 object-contain" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase">
                CAMPAIGN LOOKBOOK // VOL. 01
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.08em] text-[var(--text-primary)] uppercase leading-none">
              EDITORIAL VISION
            </h2>
          </div>

          <div className="text-left md:text-right">
            <span className="font-heading text-lg sm:text-xl md:text-2xl tracking-[0.25em] text-[var(--text-secondary)] uppercase block">
              THE ART OF STANDING APART.
            </span>
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mt-1 block">
              SHOT ON LOCATION &bull; BRUTALIST ARCHITECTURAL FRAMEWORK
            </span>
          </div>
        </div>

        {/* Editorial Layout: Asymmetric Fashion Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          
          {/* Look 1: Tall Dominant Left Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-7 group relative bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden"
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden relative">
              <img
                src={EDITORIAL_LOOKS[0].image}
                alt="CHAD ERA Editorial Campaign Look 01 - Heavyweight Streetwear Drop"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              {/* Overlay Content */}
              <div className="absolute inset-x-6 bottom-6 flex flex-col justify-end text-white">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#D0D0D0] uppercase mb-1">
                  {EDITORIAL_LOOKS[0].tag}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl tracking-[0.15em] uppercase">
                  {EDITORIAL_LOOKS[0].caption}
                </h3>
                <p className="font-sans text-xs text-[#B5B5B5] max-w-md mt-1 font-light">
                  {EDITORIAL_LOOKS[0].subtext}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Look 2: Complementary Right Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-5 flex flex-col justify-between group relative bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden"
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-auto md:h-full w-full overflow-hidden relative">
              <img
                src={EDITORIAL_LOOKS[1].image}
                alt="CHAD ERA Editorial Campaign Look 02 - Monochrome Streetwear Silhouette"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute inset-x-6 bottom-6 flex flex-col justify-end text-white">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#D0D0D0] uppercase mb-1">
                  {EDITORIAL_LOOKS[1].tag}
                </span>
                <h3 className="font-heading text-2xl tracking-[0.15em] uppercase">
                  {EDITORIAL_LOOKS[1].caption}
                </h3>
                <p className="font-sans text-xs text-[#B5B5B5] max-w-sm mt-1 font-light">
                  {EDITORIAL_LOOKS[1].subtext}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Look 3: Wide Full-Span Cinematic Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 group relative bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden"
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden relative">
              <img
                src={EDITORIAL_LOOKS[2].image}
                alt="CHAD ERA Editorial Campaign Look 03 - Wide Streetwear Panorama"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute inset-x-6 sm:inset-x-10 bottom-6 sm:bottom-10 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#D0D0D0] uppercase mb-1 block">
                    {EDITORIAL_LOOKS[2].tag}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] uppercase">
                    {EDITORIAL_LOOKS[2].caption}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#CCCCCC] max-w-md font-light">
                  {EDITORIAL_LOOKS[2].subtext}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default EditorialSection;
