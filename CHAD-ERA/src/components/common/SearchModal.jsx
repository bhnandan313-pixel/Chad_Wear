import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';

export const SearchModal = ({ isOpen, onClose, products, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl p-6 overflow-hidden transition-colors duration-300"
          >
            {/* Header / Input */}
            <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-color)]">
              <Search className="w-5 h-5 text-[var(--text-secondary)] shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="SEARCH GARMENTS, TEES, HOODIES..."
                className="w-full bg-transparent text-sm sm:text-base font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] uppercase tracking-wider outline-none"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Live Search Results */}
            <div className="mt-4 max-h-80 overflow-y-auto space-y-3">
              {query.trim() === '' ? (
                <div className="py-8 text-center text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">
                  TYPE TO SEARCH ARCHIVAL COLLECTION
                </div>
              ) : filtered.length === 0 ? (
                <div className="py-8 text-center text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">
                  NO MATCHING RELEASES FOUND FOR &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 bg-[var(--bg-secondary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] cursor-pointer group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.images.primary}
                        alt={item.name}
                        className="w-12 h-14 object-cover object-center bg-[var(--bg-secondary)] border border-[var(--border-color)]"
                      />
                      <div>
                        <h4 className="font-heading text-sm text-[var(--text-primary)] tracking-[0.15em] uppercase group-hover:opacity-80">
                          {item.name}
                        </h4>
                        <p className="font-mono text-xs text-[var(--text-secondary)]">
                          ₹{item.price.toLocaleString('en-IN')} &bull; {item.badge}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
                  </div>
                ))
              )}
            </div>

            {/* Popular quick tags */}
            <div className="mt-4 pt-4 border-t border-[var(--border-color)] flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mr-2">
                TRENDING:
              </span>
              {['OVERSIZED', 'COMPASS', 'HOODIE', 'HEAVYWEIGHT'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="font-mono text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] uppercase tracking-wider hover:border-[var(--text-primary)] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
