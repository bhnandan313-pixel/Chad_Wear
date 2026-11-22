import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';

export const Navbar = ({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist,
  onOpenAccount,
  onOpenMobileMenu,
  activeSection = 'home',
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SHOP', href: '#shop' },
    { name: 'COLLECTIONS', href: '#collections' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFFF]/96 backdrop-blur-md border-b border-[#E5E5E5] py-3 shadow-sm'
          : 'bg-[#FFFFFF]/85 backdrop-blur-sm border-b border-[#E5E5E5]/60 py-4 md:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo (Full on desktop, Monogram on mobile) */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#home');
              }}
              className="group focus:outline-none flex items-center py-1 select-none"
              aria-label="CHAD ERA Homepage"
            >
              <BrandLogo variant="auto" />
            </a>
          </div>

          {/* Center (Desktop): Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.href);
                  }}
                  className={`font-heading text-sm uppercase tracking-[0.22em] transition-all duration-200 relative py-1 select-none ${
                    isActive ? 'text-[#111111] font-bold' : 'text-[#707070] hover:text-[#111111]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-[#111111] transition-all duration-200 ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              aria-label="Search collection"
              className="p-2 text-[#707070] hover:text-[#111111] transition-colors focus:outline-none"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Account Icon (Desktop) */}
            <button
              onClick={onOpenAccount}
              aria-label="User Account"
              className="hidden sm:inline-flex p-2 text-[#707070] hover:text-[#111111] transition-colors focus:outline-none"
            >
              <User className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={onOpenWishlist}
              aria-label="Wishlist items"
              className="relative p-2 text-[#707070] hover:text-[#111111] transition-colors focus:outline-none"
            >
              <Heart className="w-4 h-4 md:w-5 md:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#111111] text-[#FFFFFF] text-[9px] font-mono font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon with Count */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping bag"
              className="relative p-2 text-[#111111] hover:opacity-75 transition-opacity focus:outline-none flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-[#111111] text-[#FFFFFF]">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={onOpenMobileMenu}
              aria-label="Open mobile navigation"
              className="lg:hidden p-2 text-[#111111] hover:text-[#707070] transition-colors ml-0.5 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
