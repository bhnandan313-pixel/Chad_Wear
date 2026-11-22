import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Instagram, Twitter } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const MobileMenu = ({ isOpen, onClose, navLinks, activeSection, onNavigate, cartCount, onOpenCart }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Body (Permanent Light Mode) */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 left-0 w-full max-w-xs sm:max-w-sm bg-[#FFFFFF] border-r border-[#E5E5E5] flex flex-col justify-between p-6 shadow-2xl overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5]">
                {/* Official Monogram Logo */}
                <BrandLogo variant="monogram" />
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 text-[#707070] hover:text-[#111111] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-8 space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.04, duration: 0.25 }}
                  >
                    <button
                      onClick={() => {
                        onNavigate(link.href);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between py-3 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#999999]">0{idx + 1}</span>
                        <span className="font-heading text-2xl tracking-[0.2em] text-[#111111] uppercase group-hover:text-[#707070] transition-colors">
                          {link.name}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#999999] group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* Quick bag shortcut */}
              <div className="pt-4 border-t border-[#E5E5E5]">
                <button
                  onClick={() => {
                    onClose();
                    onOpenCart();
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-[#F7F7F5] border border-[#E5E5E5] text-[#111111] font-heading text-xs tracking-[0.2em] uppercase hover:border-[#111111] transition-colors"
                >
                  <span>VIEW SHOPPING BAG</span>
                  <span className="bg-[#111111] text-[#FFFFFF] px-2 py-0.5 font-mono text-[10px] font-bold">
                    {cartCount}
                  </span>
                </button>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="pt-8 border-t border-[#E5E5E5] space-y-4">
              <div className="flex items-center justify-between text-xs text-[#707070]">
                <span className="font-mono">EDITION 001 // 2026</span>
                <span className="text-emerald-600 font-mono flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block animate-pulse" />
                  DROP IMMINENT
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 text-[#707070] pt-1">
                <a
                  href="#instagram"
                  className="hover:text-[#111111] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  className="hover:text-[#111111] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono text-[#999999]">@CHADERA.STUDIO</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
