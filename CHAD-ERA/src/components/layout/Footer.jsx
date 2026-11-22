import React from 'react';
import { Instagram, Twitter, Youtube, Mail, Compass } from 'lucide-react';
import { CompassEmblem } from '../common/BrandLogo';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-16 pb-12 select-none relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[var(--border-color)]">
          
          {/* Brand Info & Socials (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <img
              src="/assets/brand/chad-era-full-logo.png"
              alt="CHAD ERA Official Brand Logo"
              className="h-11 sm:h-12 w-auto object-contain cursor-pointer"
              onClick={() => onNavigate && onNavigate('home')}
              loading="lazy"
            />
            
            <p className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
              HEAVYWEIGHT STREETWEAR &bull; ARCHIVAL RELEASE DIVISION
            </p>

            <div className="flex items-center gap-3 text-[var(--text-secondary)] pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links (Col 5-6) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-[0.25em] text-[var(--text-primary)]">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('shop')}
                  className="hover:text-[var(--text-primary)] transition-colors uppercase text-left"
                >
                  NEW ARRIVALS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('shop', 'oversized-tees')}
                  className="hover:text-[var(--text-primary)] transition-colors uppercase text-left"
                >
                  OVERSIZED T-SHIRTS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('shop', 'graphic-tees')}
                  className="hover:text-[var(--text-primary)] transition-colors uppercase text-left"
                >
                  GRAPHIC T-SHIRTS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('shop', 'hoodies')}
                  className="hover:text-[var(--text-primary)] transition-colors uppercase text-left"
                >
                  HOODIES
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('shop', 'essentials')}
                  className="hover:text-[var(--text-primary)] transition-colors uppercase text-left"
                >
                  ESSENTIALS
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-[0.25em] text-[var(--text-primary)]">
              CUSTOMER SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#order-tracking" className="hover:text-[var(--text-primary)] transition-colors uppercase">
                  ORDER STATUS &amp; TRACKING
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('about')}
                  className="hover:text-[var(--text-primary)] transition-colors uppercase text-left"
                >
                  ABOUT THE BRAND
                </button>
              </li>
              <li>
                <a href="#size-guide" className="hover:text-[var(--text-primary)] transition-colors uppercase">
                  SIZE MATRIX &amp; FIT GUIDE
                </a>
              </li>
              <li className="pt-1">
                <div className="flex items-center gap-2 text-[var(--text-primary)] font-mono text-xs">
                  <Mail className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                  <a href="mailto:concierge@chadera.com" className="hover:underline">
                    concierge@chadera.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Shipping & Returns (Col 10-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-[0.25em] text-[var(--text-primary)]">
              SHIPPING &amp; RETURNS
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <span className="text-[var(--text-secondary)]">COMPLIMENTARY SHIPPING OVER ₹2,499</span>
              </li>
              <li>
                <span className="text-[var(--text-secondary)]">7-DAY DOMESTIC EXCHANGE</span>
              </li>
              <li>
                <span className="text-[var(--text-secondary)]">DISPATCH WITHIN 24-48 HOURS</span>
              </li>
              <li>
                <span className="text-[var(--text-secondary)]">100% VERIFIED AUTHENTIC</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-2.5">
            <CompassEmblem className="w-4 h-4 object-contain inline-block" />
            <span>&copy; {new Date().getFullYear()} CHAD ERA. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[var(--text-primary)] cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-[var(--text-primary)] cursor-pointer">TERMS OF DISPATCH</span>
            <span className="hover:text-[var(--text-primary)] cursor-pointer">AUTHENTICITY VERIFIED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
