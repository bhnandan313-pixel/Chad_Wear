# CHAD ERA — Premium Streetwear E-Commerce Store

> **"THE NEW ERA OF STREETWEAR"**

CHAD ERA is a high-grade, product-focused independent streetwear e-commerce web platform engineered with a borderless fashion editorial aesthetic, minimal dark/light luxury styling, and intuitive product discovery.

---

## 🏛️ E-Commerce Architecture & Homepage Layout

The homepage is organized around clothing discovery and conversion:

1. **Navbar:** Minimalist responsive navigation with official CHAD ERA branding, shopping bag badge, wishlist counter, search dialog, and animated Light/Dark theme toggle.
2. **Hero Banner:** Full-width streetwear campaign photography featuring models in oversized apparel. Headline: *"THE NEW ERA OF STREETWEAR"* with *"SHOP NOW"* call to action.
3. **Shop by Category:** 4 visual category cards (`Oversized T-Shirts`, `Graphic T-Shirts`, `Hoodies`, `Essentials`) with dedicated photo styling and explore arrows.
4. **New Arrivals (Borderless Grid):** Editorial 4-column (desktop) / 2-column (mobile) grid displaying product photography, name, current price, strikethrough original price, and top-right monochrome discount badge. No intrusive buy buttons on cards.
5. **Featured Collection Banner:** *"THE SIGNATURE COLLECTION"* panoramic clothing photography banner with direct *"EXPLORE COLLECTION"* action.
6. **Bestsellers (Borderless Grid):** 4 core archival staples (`CHAD ERA Essential Tee`, `Compass Graphic Tee`, `Oversized Street Tee`, `Signature Hoodie`) utilizing the exact borderless editorial design.
7. **Editorial Fashion Banner:** High-fashion lookbook spotlight (*"OWN YOUR STYLE."* / *"EXPLORE THE DROP"*).
8. **Footer:** Clean e-commerce footer featuring the official full CHAD ERA logo, shop links, customer support, shipping policies, and social media.

---

## 🛍️ Borderless Product Presentation

- **No Boxed Cards:** Traditional card borders, card backgrounds, and heavy box shadows have been removed.
- **Editorial Layout:** Products float cleanly on the page separated purely by whitespace and photographic hierarchy.
- **Micro-Interactions:** Smooth desktop hover reveals the secondary garment angle with subtle image zoom while keeping typography stable.
- **Clean Metadata:** Only essential purchase evaluation data is shown upfront (Image, Title, Price, Original Price, Discount %).
- **Dedicated Product Page:** Clicking any product navigates to the dedicated Product Details view with variant selection, zoom functionality, and purchase buttons.

---

## 👕 Product Details Experience

- **Left Column:** High-resolution zoomable gallery, multiple angles, and responsive image thumbnail selector.
- **Right Column:** Title, customer rating, pricing breakdown, garment GSM and composition details, interactive colour swatches, S/M/L/XL/XXL size chips, popup size guide, real-time stock indicator, and quantity selector.
- **Exclusive Purchase Gate:** `ADD TO CART` and `BUY NOW` are available exclusively here with variant validation.
- **Mobile Sticky Bar:** Bottom dock on mobile displays price and `ADD TO CART` for seamless one-hand checkout.

---

## 🔍 Shop Page & Working Filters

The dedicated Shop page offers real-time client-side filtering:
- **Category:** All, Oversized T-Shirts, Graphic T-Shirts, Hoodies, Essentials
- **Price Range:** All, Under ₹1,000, ₹1,000 – ₹1,500, Above ₹1,500
- **Size:** S, M, L, XL, XXL
- **Colour:** Black, Charcoal, White, Sand
- **Discount:** 30%+ Off
- **Sort By:** Featured, Newest, Price: Low to High, Price: High to Low, Most Popular

---

## 🌓 Dual Themes & Official Branding

- **Dark Mode (Default):** `#080808` background, `#FFFFFF` typography.
- **Light Mode:** `#F7F7F5` background, `#111111` typography.
- **Zero FOUT:** Synchronous early theme initializer in `index.html`.
- **Logos:** Official `chad-era-monogram.png` and `chad-era-full-logo.png` integrated with zero distortion.

---

## 🚀 Running Locally

```bash
cd CHAD-ERA
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```
Live preview server runs at `http://localhost:5173/`.
