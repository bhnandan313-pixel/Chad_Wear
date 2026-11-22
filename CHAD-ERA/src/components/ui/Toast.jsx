import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CompassEmblem } from '../common/BrandLogo';

export const Toast = ({ toast, onClose }) => {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] px-5 py-3.5 shadow-2xl min-w-[280px] max-w-[90vw] transition-colors duration-300"
        >
          <div className="shrink-0">
            <CompassEmblem className="w-4 h-4 object-contain" />
          </div>
          <div className="flex-1">
            <p className="font-heading text-xs tracking-[0.2em] text-[var(--text-primary)] uppercase">
              {toast.title || 'NOTIFICATION'}
            </p>
            {toast.message && (
              <p className="font-sans text-[11px] text-[var(--text-secondary)] mt-0.5">
                {toast.message}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close notification"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
