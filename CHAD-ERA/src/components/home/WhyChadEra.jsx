import React from 'react';
import { motion } from 'framer-motion';
import { CompassEmblem } from '../common/BrandLogo';

export const WhyChadEra = () => {
  const features = [
    {
      num: '01',
      title: 'QUALITY FIRST',
      tagline: 'Thoughtful materials. Better construction.',
      description: 'Crafted with premium custom heavyweight 280 to 480 GSM combed cottons and French terry. Reinforced high-density ribbed collars, preshrunk silhouettes, and precision double-needle lockstitching ensure enduring structural integrity.',
      spec: '280 - 480 GSM // ZERO PILLING // DOUBLE-NEEDLE'
    },
    {
      num: '02',
      title: 'OWN YOUR IDENTITY',
      tagline: 'Designed for those who define their own path.',
      description: 'Streetwear stripped of loud gimmicks. Boxy architectural silhouettes engineered to drape cleanly on any physique, projecting quiet authority, self-possession, and uncompromising individuality.',
      spec: 'BOXY GEOMETRY // DROP-SHOULDER // TONAL BRANDING'
    },
    {
      num: '03',
      title: 'BEYOND TRENDS',
      tagline: 'Style that goes beyond temporary trends.',
      description: 'We do not follow fast-fashion cycles or seasonal hypes. Every release is produced as a numbered archival capsule made to remain relevant across eras, years, and urban landscapes.',
      spec: 'CAPSULE ARCHIVE // MONOCHROME PALETTE // ALL-SEASON'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[var(--border-color)] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-[var(--text-muted)]">
              <CompassEmblem className="w-3.5 h-3.5 object-contain" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase">
                STANDARDS &amp; EXECUTION
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.08em] text-[var(--text-primary)] uppercase leading-none">
              WHY CHAD ERA
            </h2>
          </div>

          <p className="font-mono text-xs text-[var(--text-muted)] tracking-[0.2em] uppercase max-w-xs">
            NO COMPROMISES. NO MEDIOCRITY. THE NEW STANDARD IN LUXURY STREETWEAR.
          </p>
        </div>

        {/* 3 Minimal Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-light)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Compass tick */}
                <div className="flex items-center justify-between pb-6 border-b border-[var(--border-color)]">
                  <span className="font-heading text-4xl font-bold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    {item.num}
                  </span>
                  <CompassEmblem className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl tracking-[0.18em] text-[var(--text-primary)] uppercase mt-6 group-hover:opacity-90 transition-opacity">
                  {item.title}
                </h3>

                {/* Tagline */}
                <p className="font-mono text-xs text-[var(--text-primary)] mt-2 tracking-wide font-medium">
                  &ldquo;{item.tagline}&rdquo;
                </p>

                {/* Description */}
                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed mt-4 font-light">
                  {item.description}
                </p>
              </div>

              {/* Technical Spec Footnote */}
              <div className="mt-8 pt-4 border-t border-[var(--border-color)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider uppercase block">
                  {item.spec}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChadEra;
