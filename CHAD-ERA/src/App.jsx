import React, { useState } from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import MobileMenu from './components/layout/MobileMenu';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import SearchModal from './components/common/SearchModal';
import Toast from './components/ui/Toast';
import ScrollToTop from './components/common/ScrollToTop';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import About from './pages/About';

import { PRODUCTS } from './data/products';

export default function App() {
  // Navigation / View State
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'shop' | 'product-details' | 'about'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [shopCategory, setShopCategory] = useState('all');

  // Cart & Wishlist state
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Trigger Toast Notification
  const showToast = (title, message) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Navigate to Product Details
  const handleOpenProduct = (product) => {
    setSelectedProduct(product);
    setCurrentView('product-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to Shop
  const handleNavigateToShop = (categoryId = 'all') => {
    setShopCategory(categoryId);
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // General Navigation handler for Navbar / Footer
  const handleNavigate = (view, extraParam = 'all') => {
    if (view === 'home' || view === '#home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'shop' || view === '#shop' || view === 'collections' || view === '#collections') {
      setShopCategory(extraParam);
      setCurrentView('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'about' || view === '#about') {
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Add to Cart
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (i) =>
          i.id === item.id &&
          i.selectedColor === item.selectedColor &&
          i.selectedSize === item.selectedSize
      );

      const addQty = item.quantity || 1;

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += addQty;
        return next;
      } else {
        return [...prev, { ...item, quantity: addQty }];
      }
    });

    showToast('ADDED TO BAG', `${item.name} (${item.selectedSize})`);
  };

  // Buy Now: adds to cart and opens Cart Drawer
  const handleBuyNow = (item) => {
    handleAddToCart(item);
    setIsCartOpen(true);
  };

  // Update Cart Quantity
  const handleUpdateCartQuantity = (id, selectedColor, selectedSize, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id, selectedColor, selectedSize);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Remove from Cart
  const handleRemoveFromCart = (id, selectedColor, selectedSize) => {
    setCart((prev) =>
      prev.filter(
        (i) =>
          !(
            i.id === id &&
            i.selectedColor === selectedColor &&
            i.selectedSize === selectedSize
          )
      )
    );
    showToast('BAG UPDATED', 'Item removed from bag');
  };

  // Wishlist toggle
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast('WISHLIST UPDATED', `${product.name} removed`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast('SAVED TO WISHLIST', `${product.name} added to your wishlist`);
        return [...prev, product];
      }
    });
  };

  const navLinks = [
    { name: 'HOME', href: '#home', onClick: () => handleNavigate('home') },
    { name: 'SHOP', href: '#shop', onClick: () => handleNavigate('shop') },
    { name: 'COLLECTIONS', href: '#collections', onClick: () => handleNavigate('shop') },
    { name: 'ABOUT', href: '#about', onClick: () => handleNavigate('about') },
  ];

  const totalCartCount = cart.reduce((total, i) => total + i.quantity, 0);

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col transition-colors duration-300">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Top Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => {
          if (wishlist.length === 0) {
            showToast('WISHLIST EMPTY', 'Your wishlist is currently empty.');
          } else {
            showToast('WISHLIST ARCHIVE', `${wishlist.length} garment(s) saved.`);
          }
        }}
        onOpenAccount={() => {
          showToast('CHAD ERA PASSPORT', 'Member login opens with Drop 001 launch.');
        }}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        activeSection={currentView}
        onNavigate={(target) => {
          if (target.includes('shop')) handleNavigate('shop');
          else if (target.includes('about')) handleNavigate('about');
          else handleNavigate('home');
        }}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={currentView}
        onNavigate={(target) => {
          if (target.includes('shop')) handleNavigate('shop');
          else if (target.includes('about')) handleNavigate('about');
          else handleNavigate('home');
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Active View: Home, Shop, Product Details, or About */}
      <div className="flex-1">
        {currentView === 'home' && (
          <Home
            products={PRODUCTS}
            onNavigateToShop={handleNavigateToShop}
            onSelectCategory={(catId) => handleNavigateToShop(catId)}
            onProductClick={handleOpenProduct}
          />
        )}

        {currentView === 'shop' && (
          <Shop
            initialCategory={shopCategory}
            onProductClick={handleOpenProduct}
          />
        )}

        {currentView === 'product-details' && (
          <ProductPage
            product={selectedProduct || PRODUCTS[0]}
            onBack={() => handleNavigate('home')}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onProductClick={handleOpenProduct}
          />
        )}

        {currentView === 'about' && (
          <About
            onBackToShop={() => handleNavigate('shop')}
          />
        )}
      </div>

      {/* 3. Dark/Light Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-in Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateCartQuantity}
        removeFromCart={handleRemoveFromCart}
        onCheckout={() => {
          showToast('CHECKOUT READY', 'Demonstration order system active.');
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleOpenProduct}
      />

      {/* Global Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Scroll to Top Utility */}
      <ScrollToTop />
    </div>
  );
}
