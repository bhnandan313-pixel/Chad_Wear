import React from 'react';
import { motion } from 'framer-motion';
import { CompassEmblem } from '../common/BrandLogo';

export const BrandStory = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative overflow-hidden transition-colors duration-300">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--text-primary)]/[0.02] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Minimal Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <CompassEmblem className="w-4 h-4 object-contain" />
          <span className="font-mono text-xs tracking-[0.3em] text-[var(--text-muted)] uppercase">
            THE MANIFESTO // CHAD ERA
          </span>
        </div>

        {/* Official Full Horizontal CHAD ERA Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <img
            src="/assets/brand/chad-era-full-logo.png"
            alt="CHAD ERA Complete Brand Identity"
            className="h-20 sm:h-28 md:h-36 w-auto object-contain transition-opacity duration-300"
            loading="lazy"
          />
        </motion.div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] text-[var(--text-primary)] uppercase leading-[0.95] max-w-5xl mx-auto">
            WE DON'T FOLLOW TRENDS.<br />
            <span className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-500">
              WE CREATE OUR OWN ERA.
            </span>
          </h2>
        </motion.div>

        {/* Supporting Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 max-w-2xl mx-auto text-center"
        >
          <p className="font-sans text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light tracking-wide">
            CHAD ERA represents individuality, confidence and the freedom to define your own identity. Every piece is designed to make a statement without saying too much.
          </p>

          <div className="mt-10 flex items-center justify-center gap-6 text-[11px] font-mono text-[var(--text-muted)] tracking-[0.25em] uppercase">
            <span>HEAVYWEIGHT ARCHITECTURE</span>
            <span>&bull;</span>
            <span>ZERO FAST-FASHION SHORTCUTS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BrandStory;
