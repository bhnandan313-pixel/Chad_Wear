import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Heart, Check, Ruler } from 'lucide-react';
import { CompassEmblem } from '../common/BrandLogo';

export const ProductDetailsModal = ({ product, isOpen, onClose, onAddToCart, onToggleWishlist, isWishlisted }) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.images.primary);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      ...product,
      selectedColor,
      selectedSize,
      image: selectedImage
    });
    setTimeout(() => setIsAdded(false), 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl overflow-hidden my-auto transition-colors duration-300"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close details"
              className="absolute top-4 right-4 z-20 p-2.5 bg-[var(--bg-card)]/90 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Preview & Angles */}
              <div className="bg-[var(--bg-card)] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--border-color)]">
                <div className="aspect-[3/4] w-full overflow-hidden bg-black border border-[var(--border-color)] relative">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-full object-cover object-center filter grayscale contrast-125"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-black/80 text-white font-heading text-xs tracking-widest uppercase border border-[#333333]">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Thumbnail angle switcher */}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setSelectedImage(product.images.primary)}
                    className={`w-16 h-20 border overflow-hidden transition-all ${
                      selectedImage === product.images.primary ? 'border-[var(--text-primary)]' : 'border-[var(--border-color)] opacity-60'
                    }`}
                  >
                    <img src={product.images.primary} alt="Primary angle" className="w-full h-full object-cover filter grayscale" />
                  </button>
                  {product.images.hover && (
                    <button
                      onClick={() => setSelectedImage(product.images.hover)}
                      className={`w-16 h-20 border overflow-hidden transition-all ${
                        selectedImage === product.images.hover ? 'border-[var(--text-primary)]' : 'border-[var(--border-color)] opacity-60'
                      }`}
                    >
                      <img src={product.images.hover} alt="Secondary angle" className="w-full h-full object-cover filter grayscale" />
                    </button>
                  )}
                </div>
              </div>

              {/* Product Info & Actions */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CompassEmblem className="w-3.5 h-3.5 object-contain" />
                    <span className="font-mono text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase">
                      ARCHIVAL SPECIFICATION
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl tracking-[0.16em] text-[var(--text-primary)] uppercase">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="font-mono text-xl font-bold text-[var(--text-primary)]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="font-mono text-sm text-[var(--text-muted)] line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs text-[var(--text-secondary)] mt-4 leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  {product.features && (
                    <div className="mt-4 space-y-1.5 border-t border-[var(--border-color)] pt-4">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)]">
                          <span className="w-1.5 h-1.5 bg-[var(--text-primary)] inline-block opacity-60" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Color Selector */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center text-xs font-mono text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                      <span>COLOR: <strong className="text-[var(--text-primary)]">{selectedColor}</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-7 h-7 rounded-full border transition-all ${
                            selectedColor === c.name
                              ? 'ring-2 ring-[var(--text-primary)] ring-offset-2 ring-offset-[var(--bg-secondary)] scale-110'
                              : 'opacity-70 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: c.hex, borderColor: c.border }}
                          aria-label={`Select ${c.name}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Size Selector */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center text-xs font-mono text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                      <span>SIZE SELECTION:</span>
                      <span className="text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-primary)] flex items-center gap-1">
                        <Ruler className="w-3 h-3" /> BOXY STREETWEAR FIT
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`min-w-10 h-10 px-3 font-mono text-xs border flex items-center justify-center transition-all ${
                            selectedSize === s
                              ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)] font-bold'
                              : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add to Bag and Wishlist Controls */}
                <div className="mt-8 pt-6 border-t border-[var(--border-color)] space-y-3">
                  <div className="flex gap-3">
                    <button
                      onClick={handleAdd}
                      disabled={isAdded}
                      className="flex-1 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] py-4 font-heading text-xs tracking-[0.25em] uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>ADDED TO BAG</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>ADD TO BAG &bull; ₹{product.price.toLocaleString('en-IN')}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onToggleWishlist(product)}
                      aria-label="Wishlist"
                      className="p-4 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-[var(--text-primary)]'}`}
                      />
                    </button>
                  </div>

                  <p className="text-center font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
                    COMPLIMENTARY SHIPPING OVER ₹2,499 &bull; LIMITED ARCHIVAL RUN
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailsModal;
