import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { CompassEmblem } from '../common/BrandLogo';

export const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart, onCheckout }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 2500;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 right-0 w-full max-w-md bg-[var(--bg-primary)] border-l border-[var(--border-color)] flex flex-col shadow-2xl transition-colors duration-300"
          >
            {/* Header */}
            <div className="p-6 border-b border-[var(--border-color)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CompassEmblem className="w-5 h-5 object-contain" />
                <h2 className="font-heading text-lg tracking-[0.2em] text-[var(--text-primary)] uppercase">
                  SHOPPING BAG ({cart.reduce((total, i) => total + i.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close cart"
                className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="px-6 py-3.5 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
              <div className="flex justify-between items-center text-[11px] font-sans text-[var(--text-secondary)] mb-2 uppercase tracking-wider">
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-[var(--text-primary)] font-medium">COMPLIMENTARY DOMESTIC SHIPPING UNLOCKED</span>
                ) : (
                  <span>
                    ADD <span className="text-[var(--text-primary)] font-semibold">₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')}</span> FOR COMPLIMENTARY SHIPPING
                  </span>
                )}
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-1 bg-[var(--bg-card)] overflow-hidden">
                <div
                  className="h-full bg-[var(--text-primary)] transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 border border-[var(--border-color)] flex items-center justify-center mb-4 text-[var(--text-muted)]">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-base tracking-[0.2em] text-[var(--text-primary)] uppercase mb-2">
                    YOUR BAG IS EMPTY
                  </h3>
                  <p className="font-sans text-xs text-[var(--text-secondary)] max-w-xs mb-6">
                    Explore the inaugural drop and secure your limited pieces before the run closes.
                  </p>
                  <button
                    onClick={onClose}
                    className="font-heading text-xs uppercase tracking-[0.2em] text-[var(--btn-primary-text)] bg-[var(--btn-primary-bg)] px-6 py-3 hover:opacity-90 transition-opacity"
                  >
                    EXPLORE COLLECTION
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex gap-4 pb-6 border-b border-[var(--border-color)] group"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-24 bg-[var(--bg-secondary)] shrink-0 border border-[var(--border-color)] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-heading text-sm tracking-[0.15em] text-[var(--text-primary)] uppercase line-clamp-1">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                            aria-label="Remove item"
                            className="text-[var(--text-muted)] hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-sans text-[11px] text-[var(--text-secondary)] mt-0.5">
                          Color: {item.selectedColor} &bull; Size: {item.selectedSize}
                        </p>
                        <p className="font-sans text-xs font-semibold text-[var(--text-primary)] mt-1">
                          ₹{item.price.toLocaleString('en-IN')}
                        </p>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="inline-flex items-center border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs text-[var(--text-primary)] px-3 select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-mono text-xs text-[var(--text-secondary)]">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-6 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[var(--text-secondary)] uppercase tracking-wider font-sans">
                    <span>Subtotal</span>
                    <span className="font-mono text-[var(--text-primary)] font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-xs text-[var(--text-secondary)] uppercase tracking-wider font-sans">
                    <span>Shipping</span>
                    <span>{subtotal >= freeShippingThreshold ? 'FREE' : 'CALCULATED AT CHECKOUT'}</span>
                  </div>
                </div>

                <div className="border-t border-[var(--border-color)] pt-3 flex justify-between items-baseline">
                  <span className="font-heading text-base tracking-[0.2em] text-[var(--text-primary)] uppercase">
                    ESTIMATED TOTAL
                  </span>
                  <span className="font-mono text-lg font-bold text-[var(--text-primary)]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] py-4 font-heading text-sm tracking-[0.25em] uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-center text-[var(--text-muted)] tracking-widest uppercase font-mono">
                  ALL SALES FINAL &bull; LIMITED ARCHIVAL RELEASE
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
