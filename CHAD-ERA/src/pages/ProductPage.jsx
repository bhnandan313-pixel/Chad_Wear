import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, Ruler, Check, ArrowLeft, ShoppingBag } from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid';
import { SIZING_GUIDE, PRODUCTS } from '../data/products';

export const ProductPage = ({ product, onBack, onAddToCart, onBuyNow, onProductClick }) => {
  if (!product) return null;

  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIndex(0);
    setSelectedSize('');
    setValidationError('');
    setQuantity(1);
  }, [product.id]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setValidationError('Please select a size to continue.');
      return;
    }
    setValidationError('');
    setIsAddedFeedback(true);
    onAddToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
      image: images[0]
    });
    setTimeout(() => setIsAddedFeedback(false), 1200);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setValidationError('Please select a size to continue.');
      return;
    }
    setValidationError('');
    onBuyNow({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
      image: images[0]
    });
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-[#FFFFFF] text-[#111111] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="py-4 flex items-center justify-between border-b border-[#E5E5E5] mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#707070] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO COLLECTION</span>
          </button>
          <span className="font-mono text-[11px] text-[#999999] uppercase hidden sm:inline">
            ARCHIVAL ITEM // {product.id}
          </span>
        </div>

        {/* 2-Column Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* LEFT SIDE: Large Product Images + Thumbnails + Zoom (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails list */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto shrink-0 py-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-20 sm:w-20 sm:h-24 overflow-hidden bg-[#F3F3F1] border transition-all duration-200 shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-[#111111] ring-1 ring-[#111111]'
                      : 'border-[#E5E5E5] opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} angle ${idx + 1}`}
                    className="w-full h-full object-cover filter grayscale contrast-[1.06]"
                  />
                </button>
              ))}
            </div>

            {/* Main Image with Zoom on Hover (4:5 Ratio) */}
            <div
              className="relative flex-1 aspect-[4/5] bg-[#F3F3F1] overflow-hidden cursor-crosshair select-none"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={images[activeImageIndex]}
                alt={product.name}
                className={`w-full h-full object-cover object-center filter grayscale contrast-[1.08] transition-transform duration-200 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                      }
                    : undefined
                }
              />

              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <span className="px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider bg-[#111111] text-[#FFFFFF]">
                    {product.discount}
                  </span>
                </div>
              )}

              {/* Subtle zoom indicator on hover */}
              <div className="hidden sm:block absolute bottom-4 left-4 z-10 pointer-events-none">
                <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest bg-black/60 text-white backdrop-blur-sm">
                  HOVER TO ZOOM
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Product Details, Variant Selection & Actions (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category tag & Rating */}
              <div className="flex items-center justify-between pb-2">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#999999]">
                  {product.categoryLabel || 'CHAD ERA STREETWEAR'}
                </span>

                {product.rating && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#111111]">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-[#999999]">({product.reviewsCount} reviews)</span>
                  </div>
                )}
              </div>

              {/* Product Name */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-[0.08em] text-[#111111] uppercase leading-tight mt-1">
                {product.name}
              </h1>

              {/* Pricing Line */}
              <div className="mt-4 flex items-baseline gap-3 pb-6 border-b border-[#E5E5E5]">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-[#111111]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="font-mono text-base text-[#999999] line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discount && (
                  <span className="font-mono text-xs uppercase px-2 py-0.5 bg-[#F7F7F5] text-[#111111] border border-[#E5E5E5] font-bold">
                    SAVE ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 font-sans text-xs sm:text-sm text-[#707070] leading-relaxed font-light">
                {product.description}
              </p>

              {/* Garment Details Bulletpoints */}
              {product.details && (
                <div className="mt-4 space-y-1.5">
                  {product.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#707070]">
                      <span className="w-1.5 h-1.5 bg-[#111111] opacity-70 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Colour Selection */}
              {product.colors && (
                <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                  <div className="flex justify-between items-center text-xs font-mono mb-3">
                    <span className="text-[#707070] uppercase tracking-wider">
                      COLOUR: <strong className="text-[#111111]">{selectedColor}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        aria-label={`Select ${color.name}`}
                        className={`w-8 h-8 rounded-full border transition-all duration-200 ${
                          selectedColor === color.name
                            ? 'ring-2 ring-[#111111] ring-offset-2 ring-offset-[#FFFFFF] scale-110'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: color.hex, borderColor: color.border }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection (S, M, L, XL, XXL) */}
              <div className="mt-8">
                <div className="flex justify-between items-center text-xs font-mono mb-3">
                  <span className="text-[#707070] uppercase tracking-wider">
                    SELECT SIZE: <strong className="text-[#111111]">{selectedSize || 'CHOOSE'}</strong>
                  </span>
                  <button
                    onClick={() => setShowSizeModal(true)}
                    className="inline-flex items-center gap-1 text-[#707070] hover:text-[#111111] transition-colors underline uppercase"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>SIZE GUIDE</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setValidationError('');
                      }}
                      className={`h-12 border font-mono text-xs flex items-center justify-center uppercase transition-all duration-200 ${
                        selectedSize === size
                          ? 'bg-[#111111] text-[#FFFFFF] border-[#111111] font-bold shadow-sm'
                          : 'bg-[#FFFFFF] text-[#707070] border-[#E5E5E5] hover:border-[#111111] hover:text-[#111111]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {validationError && (
                  <p className="mt-2 text-xs font-mono text-red-600 uppercase tracking-wide">
                    {validationError}
                  </p>
                )}
              </div>

              {/* Stock Status Availability */}
              <div className="mt-6 flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
                <span className="text-[#111111] font-medium">
                  {product.stockStatus || 'IN STOCK // DISPATCHES WITHIN 24 HOURS'}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="mt-6 flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#707070]">
                  QUANTITY:
                </span>
                <div className="inline-flex items-center border border-[#E5E5E5] bg-[#FFFFFF]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="p-2.5 text-[#707070] hover:text-[#111111] disabled:opacity-30 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-xs text-[#111111] font-bold px-4 select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2.5 text-[#707070] hover:text-[#111111] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Purchase Buttons (ONLY HERE) */}
              <div className="mt-8 space-y-3">
                {/* 1. ADD TO CART */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#111111] text-[#FFFFFF] py-4 font-heading text-sm tracking-[0.25em] uppercase hover:bg-[#262626] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  {isAddedFeedback ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO BAG</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO CART</span>
                    </>
                  )}
                </button>

                {/* 2. BUY NOW */}
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] text-[#111111] py-4 font-heading text-sm tracking-[0.25em] uppercase hover:border-[#111111] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <span>BUY NOW</span>
                </button>
              </div>

              {/* Guarantees & Trust Badges */}
              <div className="mt-8 pt-6 border-t border-[#E5E5E5] grid grid-cols-3 gap-3 text-center">
                <div className="flex flex-col items-center gap-1.5 p-2">
                  <Truck className="w-4 h-4 text-[#707070]" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#707070]">FREE EXPRESS SHIPPING</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2">
                  <RotateCcw className="w-4 h-4 text-[#707070]" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#707070]">7 DAYS HASSLE-FREE EXCHANGE</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2">
                  <ShieldCheck className="w-4 h-4 text-[#707070]" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#707070]">100% AUTHENTIC GARMENT</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-28 pt-12 border-t border-[#E5E5E5]">
          <div className="mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#999999] uppercase block mb-1">
              COMPLETE THE FIT
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl tracking-[0.1em] uppercase text-[#111111]">
              YOU MAY ALSO LIKE
            </h2>
          </div>

          <ProductGrid
            products={relatedProducts}
            onProductClick={onProductClick}
          />
        </div>

      </div>

      {/* MOBILE STICKY BOTTOM PURCHASE BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF] border-t border-[#E5E5E5] p-3.5 backdrop-blur-md shadow-2xl flex items-center justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-[#999999] uppercase block">PRICE</span>
          <span className="font-mono text-base font-bold text-[#111111]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex-1 bg-[#111111] text-[#FFFFFF] py-3 px-4 font-heading text-xs tracking-[0.2em] uppercase hover:bg-[#262626] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          {isAddedFeedback ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>ADDED</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ADD TO CART {selectedSize ? `(${selectedSize})` : ''}</span>
            </>
          )}
        </button>
      </div>

      {/* SIZE GUIDE MODAL */}
      {showSizeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSizeModal(false)}
          />
          <div className="relative z-10 w-full max-w-lg bg-[#FFFFFF] border border-[#E5E5E5] p-6 sm:p-8 shadow-2xl">
            <h3 className="font-heading text-xl uppercase tracking-[0.15em] text-[#111111] mb-2">
              SIZE GUIDE // BOXY STREETWEAR FIT
            </h3>
            <p className="font-sans text-xs text-[#707070] mb-6">
              All dimensions in inches. Designed for an intentional boxy drop-shoulder streetwear fit. Order your normal size.
            </p>

            <table className="w-full text-xs font-mono text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E5E5] text-[#999999] uppercase">
                  <th className="py-2.5">SIZE</th>
                  <th className="py-2.5">CHEST</th>
                  <th className="py-2.5">LENGTH</th>
                  <th className="py-2.5">SHOULDER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5]">
                {SIZING_GUIDE.map((row) => (
                  <tr key={row.size} className="hover:bg-[#F7F7F5]">
                    <td className="py-2.5 font-bold text-[#111111]">{row.size}</td>
                    <td className="py-2.5 text-[#707070]">{row.chest}</td>
                    <td className="py-2.5 text-[#707070]">{row.length}</td>
                    <td className="py-2.5 text-[#707070]">{row.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowSizeModal(false)}
                className="bg-[#111111] text-[#FFFFFF] px-6 py-2.5 font-heading text-xs tracking-wider uppercase hover:bg-[#262626]"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
