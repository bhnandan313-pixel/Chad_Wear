// CHAD ERA Official Product & Category Catalog

export const CATEGORIES = [
  {
    id: 'oversized-tees',
    name: 'Oversized T-Shirts',
    subtitle: '280 GSM Heavyweight Cotton / Boxy Silhouette',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop',
    itemCount: '12 Styles'
  },
  {
    id: 'graphic-tees',
    name: 'Graphic T-Shirts',
    subtitle: 'Signature Compass & Architectural Screenprints',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop',
    itemCount: '8 Styles'
  },
  {
    id: 'hoodies',
    name: 'Hoodies',
    subtitle: '480 GSM French Loopback Terry / Structured Hood',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
    itemCount: '6 Styles'
  },
  {
    id: 'essentials',
    name: 'Essentials',
    subtitle: 'Minimalist Monochrome Foundation Garments',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop',
    itemCount: '10 Styles'
  }
];

export const PRODUCTS = [
  // --- NEW ARRIVALS ---
  {
    id: 'era-oversized-tee',
    name: 'ERA OVERSIZED TEE',
    category: 'oversized-tees',
    categoryLabel: 'Oversized T-Shirts',
    price: 999,
    originalPrice: 1499,
    discount: '33% OFF',
    rating: 4.9,
    reviewsCount: 38,
    isNewArrival: true,
    isBestseller: false,
    stockStatus: 'In Stock — Ships in 24 hours',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pitch Black', hex: '#0A0A0A', border: '#2B2B2B' },
      { name: 'Washed Charcoal', hex: '#2C2C2E', border: '#424245' },
      { name: 'Chalk White', hex: '#E2E2E2', border: '#CCCCCC' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Engineered from custom 280 GSM combed luxury cotton. Features a tailored drop-shoulder, reinforced 1.25" ribbed neckline, and an architectural boxy drape that holds its shape through all-day wear.',
    details: [
      '280 GSM 100% Combed Cotton',
      'Pre-shrunk to maintain geometric boxy fit',
      'Reinforced twin-needle stitching at collar and hem',
      'Stealth tonal branding label on side seam',
      'Machine wash cold, air dry recommended'
    ]
  },
  {
    id: 'compass-graphic-tee',
    name: 'COMPASS GRAPHIC TEE',
    category: 'graphic-tees',
    categoryLabel: 'Graphic T-Shirts',
    price: 1199,
    originalPrice: 1799,
    discount: '33% OFF',
    rating: 4.8,
    reviewsCount: 42,
    isNewArrival: true,
    isBestseller: true,
    stockStatus: 'Low Stock — Only 4 left in L',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pitch Black', hex: '#080808', border: '#2B2B2B' },
      { name: 'Distressed Concrete', hex: '#444444', border: '#5A5A5A' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Featuring the signature CHAD ERA vector compass emblem across the chest with high-density puff ink. Reverse carries the technical coordinates and architectural motif.',
    details: [
      '300 GSM Heavyweight Jersey Cotton',
      'Crackle-resistant puff screenprint',
      'Zero-twist luxury combed yarn',
      'Relaxed drop-shoulder pattern',
      'Specially treated for ultra-soft hand feel'
    ]
  },
  {
    id: 'archival-heavyweight-tee',
    name: 'ARCHIVAL HEAVYWEIGHT TEE',
    category: 'oversized-tees',
    categoryLabel: 'Oversized T-Shirts',
    price: 1099,
    originalPrice: 1599,
    discount: '31% OFF',
    rating: 4.9,
    reviewsCount: 29,
    isNewArrival: true,
    isBestseller: false,
    stockStatus: 'In Stock — Ships in 24 hours',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Washed Charcoal', hex: '#2C2C2E', border: '#424245' },
      { name: 'Pitch Black', hex: '#0A0A0A', border: '#2B2B2B' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Vintage mineral-washed boxy streetwear tee. Heavy enzyme wash delivers a broken-in, muted drape reminiscent of archival Tokyo streetwear pieces.',
    details: [
      '290 GSM Vintage Washed Cotton',
      'Acid enzyme finished for vintage patina',
      'Thick ribbing that will not bacon or stretch',
      'Seamless tubular side construction',
      'Handcrafted in limited batches'
    ]
  },
  {
    id: 'raw-street-oversized-tee',
    name: 'OVERSIZED STREET TEE',
    category: 'oversized-tees',
    categoryLabel: 'Oversized T-Shirts',
    price: 999,
    originalPrice: 1499,
    discount: '33% OFF',
    rating: 4.7,
    reviewsCount: 34,
    isNewArrival: true,
    isBestseller: true,
    stockStatus: 'In Stock — Ships in 24 hours',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pitch Black', hex: '#0D0D0D', border: '#2D2D2D' },
      { name: 'Chalk White', hex: '#E5E5E5', border: '#CCCCCC' },
      { name: 'Raw Sand', hex: '#544E46', border: '#6E675D' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A staple silhouette designed to layer underneath outerwear or stand alone as a statement piece. Generous chest width, dropped armholes, and clean hems.',
    details: [
      '260 GSM Single Jersey Cotton',
      'Anti-shrink pre-wash treatment',
      'Minimalist blind-stitched cuffs',
      'Double-stitched shoulder taping',
      'Colorfast reactive dye formulation'
    ]
  },

  // --- BESTSELLERS & ESSENTIALS ---
  {
    id: 'chad-era-essential-tee',
    name: 'CHAD ERA ESSENTIAL TEE',
    category: 'essentials',
    categoryLabel: 'Essentials',
    price: 899,
    originalPrice: 1299,
    discount: '31% OFF',
    rating: 5.0,
    reviewsCount: 64,
    isNewArrival: false,
    isBestseller: true,
    stockStatus: 'In Stock — Ships in 24 hours',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Jet Black', hex: '#0D0D0D', border: '#2D2D2D' },
      { name: 'Raw Sand', hex: '#544E46', border: '#6E675D' },
      { name: 'Olive Drab', hex: '#2A2E28', border: '#40453D' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The foundation of everyday streetwear styling. Engineered for drape, balance, and all-day thermal breathability. Free of exterior branding for pure understated elegance.',
    details: [
      '240 GSM Organic Cotton',
      'Seamless tubular body',
      'Clean unbranded minimalist exterior',
      'Reinforced neck tape for durability',
      'Tailored sleeve proportion'
    ]
  },
  {
    id: 'signature-hoodie',
    name: 'SIGNATURE HOODIE',
    category: 'hoodies',
    categoryLabel: 'Hoodies',
    price: 2299,
    originalPrice: 3299,
    discount: '30% OFF',
    rating: 4.9,
    reviewsCount: 51,
    isNewArrival: false,
    isBestseller: true,
    stockStatus: 'Low Stock — High Demand',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#0F0F0F', border: '#333333' },
      { name: 'Off-Black', hex: '#222222', border: '#3E3E3E' },
      { name: 'Raw Earth', hex: '#3B3631', border: '#534C45' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Uncompromising silhouette crafted from custom 480 GSM French loopback terry. Features a structured double-layer crossover hood without drawstrings for clean architectural lines.',
    details: [
      '480 GSM Custom Loopback French Terry',
      'Crossover structured hood with no drawstrings',
      'Hidden kangaroo pocket with reinforced bartacks',
      'Double-ribbed side gussets for mobility',
      'Pre-shrunk heavyweight construction'
    ]
  },
  {
    id: 'monochrome-zip-hoodie',
    name: 'MONOCHROME ZIP HOODIE',
    category: 'hoodies',
    categoryLabel: 'Hoodies',
    price: 2499,
    originalPrice: 3499,
    discount: '29% OFF',
    rating: 4.8,
    reviewsCount: 22,
    isNewArrival: true,
    isBestseller: false,
    stockStatus: 'In Stock — Ships in 24 hours',
    images: [
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#0F0F0F', border: '#333333' },
      { name: 'Charcoal Wash', hex: '#282828', border: '#444444' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Heavyweight two-way zipper hoodie with custom gunmetal hardware. Clean boxy cut, ribbed cuffs, and oversized dual pockets.',
    details: [
      '460 GSM Heavy Terry',
      'Two-way matte black metal zipper',
      'Reinforced drop shoulder',
      'Custom gunmetal aglets',
      'Heavy-duty ribbed waistband'
    ]
  },
  {
    id: 'vector-emblem-graphic-tee',
    name: 'VECTOR EMBLEM GRAPHIC TEE',
    category: 'graphic-tees',
    categoryLabel: 'Graphic T-Shirts',
    price: 1149,
    originalPrice: 1699,
    discount: '32% OFF',
    rating: 4.8,
    reviewsCount: 31,
    isNewArrival: false,
    isBestseller: true,
    stockStatus: 'In Stock — Ships in 24 hours',
    images: [
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pitch Black', hex: '#080808', border: '#2B2B2B' },
      { name: 'Chalk White', hex: '#E5E5E5', border: '#CCCCCC' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Minimal chest compass logo paired with an oversized geometric back blueprint graphic inspired by brutalist architecture.',
    details: [
      '280 GSM Premium Combed Cotton',
      'Discharge print technique for zero hand-feel',
      'Pre-washed and preshrunk',
      'Double-stitched ribbed neckline',
      'Tailored street-ready drop shoulder'
    ]
  }
];

export const SIZING_GUIDE = [
  { size: 'S', chest: '42"', length: '28"', shoulder: '21"' },
  { size: 'M', chest: '44"', length: '29"', shoulder: '22"' },
  { size: 'L', chest: '46"', length: '30"', shoulder: '23"' },
  { size: 'XL', chest: '48"', length: '31"', shoulder: '24"' },
  { size: 'XXL', chest: '50"', length: '32"', shoulder: '25"' },
];
