import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { CompassEmblem } from '../common/BrandLogo';

export const Newsletter = ({ onSubscribed }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      if (onSubscribed) {
        onSubscribed(email);
      }
      setEmail('');
    }, 700);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--text-primary)]/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Emblem Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-6">
          <CompassEmblem className="w-3.5 h-3.5 object-contain" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--text-muted)] uppercase">
            VIP ACCESS // DROP NOTIFICATIONS
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl tracking-[0.08em] text-[var(--text-primary)] uppercase leading-none">
          ENTER THE ERA.
        </h2>

        {/* Description */}
        <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] max-w-lg mx-auto mt-4 font-light tracking-wide leading-relaxed">
          Be the first to know about upcoming drops, exclusive releases and everything CHAD ERA.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center gap-3 text-[var(--text-primary)]"
            >
              <Check className="w-5 h-5 text-emerald-500" />
              <div className="text-left">
                <p className="font-heading text-sm tracking-[0.2em] uppercase">ACCESS GRANTED</p>
                <p className="font-sans text-xs text-[var(--text-secondary)]">You are on the priority dispatch list for Drop 001.</p>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="ENTER YOUR EMAIL"
                  required
                  className={`w-full bg-[var(--input-bg)] border ${
                    status === 'error' ? 'border-red-500' : 'border-[var(--border-color)] focus:border-[var(--text-primary)]'
                  } px-5 py-4 text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] uppercase tracking-wider outline-none transition-colors`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-8 py-4 font-heading text-xs tracking-[0.25em] uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>SUBSCRIBE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          )}

          {status === 'error' && (
            <p className="font-mono text-[11px] text-red-500 mt-2 text-left">
              PLEASE ENTER A VALID EMAIL ADDRESS.
            </p>
          )}

          <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase mt-4">
            NO SPAM &bull; ONLY ARCHIVAL DROPS &amp; PRIVATE RELEASE CODES
          </p>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;
