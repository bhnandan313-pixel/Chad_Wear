import React, { useState } from 'react';

/**
 * Borderless Product Card
 * Strict editorial luxury aesthetic (Permanent Light Mode):
 * - NO card border, NO card background, NO shadows.
 * - 4:5 product image ratio (aspect-[4/5]).
 * - Top-right discount badge: #111111 with white text.
 * - Below image: Product Name, Selling Price, Original Price (crossed out), Discount.
 * - Entire card clickable to open Product Details.
 */
export const ProductCard = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const primaryImage = product.images?.[0] || product.image;
  const hoverImage = product.images?.[1] || null;

  return (
    <div
      onClick={() => onClick && onClick(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer select-none flex flex-col w-full"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick && onClick(product);
        }
      }}
      aria-label={`View details for ${product.name}`}
    >
      {/* 1. Product Image Frame (Borderless, 4:5 Aspect Ratio, #F3F3F1 Product Background) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F3F3F1]">
        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-[1.06] transition-all duration-700 ease-out ${
            isHovered && hoverImage
              ? 'opacity-0 scale-105'
              : 'opacity-100 group-hover:scale-105'
          }`}
          loading="lazy"
        />

        {/* Secondary Image on Desktop Hover */}
        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${product.name} alternate view`}
            className={`hidden sm:block absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-[1.06] transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            loading="lazy"
          />
        )}

        {/* Top-Right Monochrome Discount Badge: #111111 with white text */}
        {product.discount && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#111111] text-[#FFFFFF]">
              {product.discount}
            </span>
          </div>
        )}
      </div>

      {/* 2. Product Information (Directly Underneath Image) */}
      <div className="pt-2 pb-0.5 flex flex-col">
        {/* Product Name */}
        <h3 className="font-heading text-sm sm:text-base tracking-[0.16em] uppercase text-[#111111] group-hover:text-[#707070] transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Pricing Line: Selling Price + Crossed Out Original Price + Discount */}
        <div className="mt-1 flex items-baseline gap-2 flex-wrap">
          <span className="font-mono text-sm sm:text-base font-bold text-[#111111]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>

          {product.originalPrice && (
            <span className="font-mono text-xs text-[#999999] line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}

          {product.discount && (
            <span className="font-mono text-[11px] text-[#707070] font-medium">
              ({product.discount})
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
