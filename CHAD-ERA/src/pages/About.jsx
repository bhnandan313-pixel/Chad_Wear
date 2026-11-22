import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const About = ({ onBackToShop }) => {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen pt-28 pb-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={onBackToShop}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO SHOP</span>
        </button>

        {/* Official Brand Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/assets/brand/chad-era-full-logo.png"
            alt="CHAD ERA Complete Brand Identity"
            className="h-20 sm:h-28 w-auto object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.08em] uppercase text-center text-[var(--text-primary)] leading-tight mb-8">
          ABOUT CHAD ERA
        </h1>

        <div className="space-y-6 text-sm sm:text-base font-sans text-[var(--text-secondary)] leading-relaxed font-light">
          <p>
            CHAD ERA is an independent luxury streetwear label engineered around heavyweight architectural silhouettes, minimalist typography, and uncompromised custom fabrications.
          </p>
          <p>
            Every garment in our catalog is built from 280 to 480 GSM combed cottons and French loopback terry. We reject transient fast-fashion cycles in favor of numbered archival drops designed to endure.
          </p>
          <p>
            Designed for those who define their own path without saying too much.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex justify-center">
          <button
            onClick={onBackToShop}
            className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-8 py-3.5 font-heading text-xs uppercase tracking-[0.2em]"
          >
            EXPLORE THE COLLECTION
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;
