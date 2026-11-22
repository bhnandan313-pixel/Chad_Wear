import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero = ({ onShopNow }) => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[90vh] w-full flex items-end justify-start overflow-hidden bg-[#FFFFFF]"
    >
      {/* Background Streetwear Fashion Photograph occupying the entire section */}
      <div className="absolute inset-0 z-0 select-none">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=85&w=2200&auto=format&fit=crop"
          />
          <source
            media="(min-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=85&w=1400&auto=format&fit=crop"
          />
          <img
            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=85&w=900&auto=format&fit=crop"
            alt="CHAD ERA Streetwear Collection - Oversized Heavyweight Streetwear Silhouette"
            className="w-full h-full object-cover object-top sm:object-center filter grayscale contrast-[1.12] brightness-[0.52] transition-all duration-700"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Ambient Bottom Fade to Pure White */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      </div>

      {/* Hero Content (Positioned elegantly at lower-left of the image) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-32">
        <div className="max-w-2xl text-white">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] text-white uppercase leading-[0.95]"
          >
            THE NEW ERA OF STREETWEAR
          </motion.h1>

          {/* Small Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 sm:mt-4 font-sans text-sm sm:text-base text-[#E5E5E5] tracking-wide font-light"
          >
            Discover the latest collection.
          </motion.p>

          {/* Shop Now Action */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8"
          >
            <Button
              size="lg"
              variant="primary"
              onClick={onShopNow}
              icon={ArrowRight}
              className="px-8 py-4 text-sm bg-white text-black hover:bg-[#F3F3F1] border-none shadow-xl"
            >
              SHOP NOW
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
