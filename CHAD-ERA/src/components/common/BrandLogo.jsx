import React from 'react';

/**
 * BrandLogo Component
 * Renders the official CHAD ERA brand assets.
 * LOGO 1: /assets/brand/chad-era-monogram.png (Compass + CE monogram)
 * LOGO 2: /assets/brand/chad-era-full-logo.png (Full horizontal logo)
 */

export const CompassEmblem = ({ className = 'w-6 h-6', ...props }) => (
  <img
    src="/assets/brand/chad-era-monogram.png"
    alt="CHAD ERA Compass Monogram"
    className={`inline-block object-contain ${className}`}
    loading="eager"
    {...props}
  />
);

export const BrandLogo = ({
  variant = 'auto', // 'auto' (responsive: full on desktop, monogram on mobile), 'full', 'monogram'
  className = '',
  imgClassName = '',
  ...props
}) => {
  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center ${className}`} {...props}>
        <img
          src="/assets/brand/chad-era-monogram.png"
          alt="CHAD ERA Monogram"
          className={`h-8 sm:h-9 w-auto object-contain ${imgClassName}`}
          loading="eager"
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center ${className}`} {...props}>
        <img
          src="/assets/brand/chad-era-full-logo.png"
          alt="CHAD ERA Full Logo"
          className={`h-10 sm:h-12 md:h-14 w-auto object-contain ${imgClassName}`}
          loading="eager"
        />
      </div>
    );
  }

  // 'auto': Desktop gets full horizontal logo, mobile gets compass monogram
  return (
    <div className={`inline-flex items-center ${className}`} {...props}>
      {/* Desktop & Tablet: Full Horizontal Logo */}
      <img
        src="/assets/brand/chad-era-full-logo.png"
        alt="CHAD ERA"
        className={`hidden sm:block h-10 md:h-12 w-auto object-contain transition-opacity duration-300 hover:opacity-95 ${imgClassName}`}
        loading="eager"
      />
      {/* Mobile: Compact Compass Monogram */}
      <img
        src="/assets/brand/chad-era-monogram.png"
        alt="CHAD ERA Monogram"
        className={`block sm:hidden h-8 w-auto object-contain transition-opacity duration-300 hover:opacity-95 ${imgClassName}`}
        loading="eager"
      />
    </div>
  );
};

export default BrandLogo;
