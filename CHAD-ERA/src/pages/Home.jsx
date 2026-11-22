import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import NewArrivals from '../components/home/NewArrivals';
import FeaturedCollectionBanner from '../components/home/FeaturedCollectionBanner';
import Bestsellers from '../components/home/Bestsellers';
import EditorialBanner from '../components/home/EditorialBanner';

export const Home = ({
  products,
  onNavigateToShop,
  onSelectCategory,
  onProductClick
}) => {
  return (
    <main className="flex-1 bg-[var(--bg-primary)] transition-colors duration-300">
      {/* SECTION 2: HERO BANNER */}
      <Hero
        onShopNow={() => onNavigateToShop('all')}
      />

      {/* SECTION 3: SHOP BY CATEGORY */}
      <CategorySection
        onSelectCategory={(categoryId) => onSelectCategory(categoryId)}
      />

      {/* SECTION 4: NEW ARRIVALS (BORDERLESS) */}
      <NewArrivals
        products={products}
        onProductClick={onProductClick}
        onViewAll={() => onNavigateToShop('all')}
      />

      {/* SECTION 5: FEATURED COLLECTION BANNER */}
      <FeaturedCollectionBanner
        onExplore={() => onNavigateToShop('all')}
      />

      {/* SECTION 6: BESTSELLERS (BORDERLESS) */}
      <Bestsellers
        products={products}
        onProductClick={onProductClick}
        onViewAll={() => onNavigateToShop('all')}
      />

      {/* SECTION 7: EDITORIAL FASHION BANNER */}
      <EditorialBanner
        onExploreDrop={() => onNavigateToShop('all')}
      />
    </main>
  );
};

export default Home;
