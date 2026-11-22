import React, { useState, useMemo, useEffect } from 'react';
import { X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid';
import { PRODUCTS, CATEGORIES } from '../data/products';

export const Shop = ({ initialCategory = 'all', onProductClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedDiscount, setSelectedDiscount] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialCategory]);

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'under-1000', label: 'Under ₹1,000', max: 1000 },
    { id: '1000-1500', label: '₹1,000 – ₹1,500', min: 1000, max: 1500 },
    { id: 'above-1500', label: 'Above ₹1,500', min: 1500 },
  ];

  const sizes = ['all', 'S', 'M', 'L', 'XL', 'XXL'];

  const colors = [
    { id: 'all', label: 'All Colours' },
    { id: 'Black', label: 'Black' },
    { id: 'Charcoal', label: 'Charcoal' },
    { id: 'White', label: 'White' },
    { id: 'Sand', label: 'Sand' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        if (range.min !== undefined && range.max !== undefined) {
          result = result.filter((p) => p.price >= range.min && p.price <= range.max);
        } else if (range.max !== undefined) {
          result = result.filter((p) => p.price <= range.max);
        } else if (range.min !== undefined) {
          result = result.filter((p) => p.price >= range.min);
        }
      }
    }

    if (selectedSize !== 'all') {
      result = result.filter((p) => p.sizes && p.sizes.includes(selectedSize));
    }

    if (selectedColor !== 'all') {
      result = result.filter((p) =>
        p.colors && p.colors.some((c) => c.name.toLowerCase().includes(selectedColor.toLowerCase()))
      );
    }

    if (selectedDiscount === '30+') {
      result = result.filter((p) => {
        const discountVal = parseInt(p.discount, 10);
        return !isNaN(discountVal) && discountVal >= 30;
      });
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    } else if (sortBy === 'popular') {
      result.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedSize, selectedColor, selectedDiscount, sortBy]);

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPriceRange !== 'all',
    selectedSize !== 'all',
    selectedColor !== 'all',
    selectedDiscount !== 'all',
  ].filter(Boolean).length;

  const handleClearAll = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedSize('all');
    setSelectedColor('all');
    setSelectedDiscount('all');
    setSortBy('featured');
  };

  return (
    <div className="bg-[#FFFFFF] text-[#111111] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        
        {/* Header */}
        <div className="py-6 border-b border-[#E5E5E5] flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#999999] uppercase block mb-1">
              FULL ARCHIVAL CATALOG // {filteredProducts.length} STYLES
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-[0.08em] uppercase text-[#111111] leading-none">
              ALL CLOTHING
            </h1>
          </div>

          {/* Sort Control & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F7F7F5] border border-[#E5E5E5] text-xs font-mono uppercase text-[#111111]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>FILTERS {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            <div className="flex items-center gap-2 bg-[#F7F7F5] border border-[#E5E5E5] px-3 py-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#999999] shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs font-mono uppercase text-[#111111] outline-none cursor-pointer"
                aria-label="Sort products"
              >
                <option value="featured" className="bg-[#FFFFFF]">SORT: FEATURED</option>
                <option value="newest" className="bg-[#FFFFFF]">SORT: NEWEST</option>
                <option value="price-low" className="bg-[#FFFFFF]">PRICE: LOW TO HIGH</option>
                <option value="price-high" className="bg-[#FFFFFF]">PRICE: HIGH TO LOW</option>
                <option value="popular" className="bg-[#FFFFFF]">SORT: MOST POPULAR</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* DESKTOP FILTERS SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8 select-none">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5]">
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-[#111111]">
                FILTERS {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </span>
              {activeFiltersCount > 0 && (
                <button
                  onClick={handleClearAll}
                  className="font-mono text-[11px] text-[#999999] hover:text-[#111111] underline uppercase"
                >
                  CLEAR ALL
                </button>
              )}
            </div>

            {/* 1. Category */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold mb-3">
                CATEGORY
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left uppercase transition-colors ${
                      selectedCategory === 'all'
                        ? 'text-[#111111] font-bold'
                        : 'text-[#707070] hover:text-[#111111]'
                    }`}
                  >
                    &bull; ALL CATEGORIES
                  </button>
                </li>
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left uppercase transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-[#111111] font-bold'
                          : 'text-[#707070] hover:text-[#111111]'
                      }`}
                    >
                      &bull; {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Price Range */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold mb-3">
                PRICE RANGE
              </h4>
              <div className="space-y-2 text-xs font-mono">
                {priceRanges.map((r) => (
                  <label key={r.id} className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === r.id}
                      onChange={() => setSelectedPriceRange(r.id)}
                      className="accent-[#111111]"
                    />
                    <span className="uppercase text-[#707070]">{r.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Sizes */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold mb-3">
                SIZE
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-10 h-9 font-mono text-xs border uppercase transition-colors ${
                      selectedSize === s
                        ? 'bg-[#111111] text-[#FFFFFF] border-[#111111] font-bold'
                        : 'bg-[#FFFFFF] text-[#707070] border-[#E5E5E5] hover:border-[#111111] hover:text-[#111111]'
                    }`}
                  >
                    {s === 'all' ? 'ALL' : s}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Colours */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold mb-3">
                COLOUR
              </h4>
              <div className="space-y-2 text-xs font-mono">
                {colors.map((c) => (
                  <label key={c.id} className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      checked={selectedColor === c.id}
                      onChange={() => setSelectedColor(c.id)}
                      className="accent-[#111111]"
                    />
                    <span className="uppercase text-[#707070]">{c.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Discount Filter */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold mb-3">
                DISCOUNT
              </h4>
              <div className="space-y-2 text-xs font-mono">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="discount"
                    checked={selectedDiscount === 'all'}
                    onChange={() => setSelectedDiscount('all')}
                    className="accent-[#111111]"
                  />
                  <span className="uppercase text-[#707070]">ALL DISCOUNTS</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="radio"
                    name="discount"
                    checked={selectedDiscount === '30+'}
                    onChange={() => setSelectedDiscount('30+')}
                    className="accent-[#111111]"
                  />
                  <span className="uppercase text-[#707070]">30% OFF OR MORE</span>
                </label>
              </div>
            </div>
          </aside>

          {/* MAIN PRODUCT CATALOG */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center border border-[#E5E5E5] p-8 bg-[#F7F7F5]">
                <h3 className="font-heading text-2xl uppercase tracking-[0.15em] text-[#111111] mb-2">
                  NO STYLES MATCH YOUR FILTER
                </h3>
                <p className="font-sans text-xs text-[#707070] max-w-sm mx-auto mb-6">
                  Try clearing some filter criteria to explore the complete streetwear drop.
                </p>
                <button
                  onClick={handleClearAll}
                  className="bg-[#111111] text-[#FFFFFF] px-6 py-3 font-heading text-xs uppercase tracking-[0.2em]"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            ) : (
              <ProductGrid
                products={filteredProducts}
                onProductClick={onProductClick}
              />
            )}
          </main>

        </div>

      </div>

      {/* MOBILE FILTERS MODAL */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs h-full bg-[#FFFFFF] p-6 overflow-y-auto space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5]">
              <span className="font-heading text-base uppercase tracking-[0.2em] text-[#111111]">
                FILTER PRODUCTS
              </span>
              <button onClick={() => setIsMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-[#111111]" />
              </button>
            </div>

            {/* Category */}
            <div>
              <h4 className="font-mono text-xs uppercase font-bold text-[#111111] mb-2">
                CATEGORY
              </h4>
              <div className="space-y-1.5 text-xs font-mono">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`block w-full text-left py-1 uppercase ${
                    selectedCategory === 'all' ? 'text-[#111111] font-bold' : 'text-[#707070]'
                  }`}
                >
                  ALL CATEGORIES
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`block w-full text-left py-1 uppercase ${
                      selectedCategory === cat.id ? 'text-[#111111] font-bold' : 'text-[#707070]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h4 className="font-mono text-xs uppercase font-bold text-[#111111] mb-2">
                PRICE
              </h4>
              <div className="space-y-1.5 text-xs font-mono">
                {priceRanges.map((r) => (
                  <label key={r.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile_price"
                      checked={selectedPriceRange === r.id}
                      onChange={() => setSelectedPriceRange(r.id)}
                    />
                    <span className="uppercase text-[#707070]">{r.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="font-mono text-xs uppercase font-bold text-[#111111] mb-2">
                SIZE
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-9 h-8 font-mono text-xs border uppercase ${
                      selectedSize === s
                        ? 'bg-[#111111] text-[#FFFFFF] border-[#111111] font-bold'
                        : 'bg-[#FFFFFF] text-[#707070] border-[#E5E5E5]'
                    }`}
                  >
                    {s === 'all' ? 'ALL' : s}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-6 border-t border-[#E5E5E5] flex gap-3">
              <button
                onClick={handleClearAll}
                className="flex-1 py-3 text-xs font-mono uppercase border border-[#E5E5E5] text-[#111111]"
              >
                RESET
              </button>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="flex-1 py-3 text-xs font-mono uppercase bg-[#111111] text-[#FFFFFF] font-bold"
              >
                APPLY ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
