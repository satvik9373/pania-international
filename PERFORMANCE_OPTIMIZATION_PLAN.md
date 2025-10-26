# 🚀 Performance Optimization Plan - Pania International

## Current Metrics
- **FCP:** 2.0s → Target: <1.5s
- **LCP:** 2.6s → Target: <2.0s  
- **TBT:** 170ms → Target: <100ms
- **CLS:** 0 ✅ (maintain)
- **Speed Index:** 4.1s → Target: <3.0s

## Stack Analysis
- Framework: **Vite + React** (not Next.js)
- Styling: Tailwind CSS
- Hosting: Vercel
- Heavy dependencies: Framer Motion, Keen Slider, 30+ Radix UI components

---

## 📋 Step-by-Step Optimization Plan

### PHASE 1: Critical Assets & LCP Optimization (Target LCP < 2.0s)

#### 1.1 Optimize Hero Banner Images
**Problem:** Banner images are the LCP element but not optimized

**Action:**
```html
<!-- Update index.html -->
<head>
  <!-- High priority preload for LCP image -->
  <link rel="preload" href="/Banner Image/1.webp" as="image" fetchpriority="high" />
  
  <!-- Preconnect to CDN if using external images -->
  <link rel="preconnect" href="https://your-cdn.com" crossorigin />
</head>
```

#### 1.2 Optimize HeroSlider Component
**Current Issue:** Keen Slider + all banner images loaded upfront

**Fix HeroSlider.tsx:**
```tsx
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [sliderRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const banners = [
    { src: '/Banner Image/1.webp', alt: 'Premium Indian Products' },
    { src: '/Banner Image/2.webp', alt: 'Natural Oils & Ghee' },
    { src: '/Banner Image/3.webp', alt: 'Fresh Produce' },
    { src: '/Banner Image/4.webp', alt: 'Export Quality' },
  ];

  return (
    <div ref={sliderRef} className="keen-slider">
      {banners.map((banner, idx) => (
        <div key={idx} className="keen-slider__slide">
          <img
            src={banner.src}
            alt={banner.alt}
            // Priority load ONLY first image
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchpriority={idx === 0 ? 'high' : 'low'}
            decoding={idx === 0 ? 'sync' : 'async'}
            width={1920}
            height={800}
            style={{ 
              width: '100%', 
              height: 'auto',
              aspectRatio: '1920/800' // Prevent CLS
            }}
          />
        </div>
      ))}
    </div>
  );
};
```

#### 1.3 Preload Critical Fonts
**Update index.html:**
```html
<link 
  rel="preload" 
  href="/fonts/coolvetica.ttf" 
  as="font" 
  type="font/ttf" 
  crossorigin 
/>
<link 
  rel="preload" 
  href="/fonts/soria-font.ttf" 
  as="font" 
  type="font/ttf" 
  crossorigin 
/>

<!-- Add font-display swap to reduce blocking -->
<style>
  @font-face {
    font-family: 'Coolvetica';
    src: url('/fonts/coolvetica.ttf') format('truetype');
    font-display: swap; /* Show fallback immediately */
  }
  @font-face {
    font-family: 'Soria';
    src: url('/fonts/soria-font.ttf') format('truetype');
    font-display: swap;
  }
</style>
```

---

### PHASE 2: JavaScript Bundle Optimization (Target TBT < 100ms)

#### 2.1 Code Splitting - Lazy Load Heavy Components

**Create: src/utils/lazyComponents.ts**
```typescript
import { lazy } from 'react';

// Lazy load non-critical sections
export const LazyTestimonials = lazy(() => import('@/components/TestimonialsSection'));
export const LazyBlogSection = lazy(() => import('@/components/BlogSection'));
export const LazyFAQSection = lazy(() => import('@/components/FAQSection'));
export const LazyServicesSection = lazy(() => import('@/components/ServicesSection'));
```

**Update Index.tsx:**
```tsx
import { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Critical components - load immediately
import Loader from '../components/Loader';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

// Non-critical - lazy load
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const BlogSection = lazy(() => import('../components/BlogSection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));

const Index = () => {
  // ... existing state

  return (
    <div className="min-h-screen">
      {/* ... loader code ... */}
      
      {!isLoading && (
        <div style={{ backgroundColor: 'white' }}>
          <AnnouncementBar />
          <Navbar />
          <HeroSlider />
          <CategorySection />
          <ProductSection />
          
          {/* Lazy load below-the-fold content */}
          <Suspense fallback={<div className="h-96" />}>
            <ServicesSection />
          </Suspense>
          
          <Suspense fallback={<div className="h-96" />}>
            <TestimonialsSection />
          </Suspense>
          
          <Suspense fallback={<div className="h-96" />}>
            <BlogSection />
          </Suspense>
          
          <Suspense fallback={<div className="h-96" />}>
            <FAQSection />
          </Suspense>
          
          {/* Why Choose Pania section */}
          <section className="py-12 bg-olive-green">
            {/* ... existing content ... */}
          </section>

          <Footer />
        </div>
      )}
    </div>
  );
};
```

#### 2.2 Optimize Framer Motion Usage

**Problem:** Framer Motion adds 40-50KB to bundle, used extensively

**Solution: Conditional Animation Loading**
```tsx
// Create: src/utils/motionConfig.ts
export const shouldAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const getMotionProps = (animate = true) => 
  animate ? {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
  } : {};
```

**Update heavy components:**
```tsx
import { motion } from 'framer-motion';
import { shouldAnimate, fadeInVariants, getMotionProps } from '@/utils/motionConfig';

const ProductSection = () => {
  return (
    <motion.div 
      variants={fadeInVariants}
      {...getMotionProps(shouldAnimate)}
    >
      {/* content */}
    </motion.div>
  );
};
```

#### 2.3 Remove Unused Radix UI Components

**Analyze package.json - You have 30+ Radix components but likely use <10**

**Action:**
```bash
# Analyze bundle size first
npm install -D vite-bundle-visualizer

# Add to package.json scripts
"analyze": "vite-bundle-visualizer"

# Run analysis
npm run analyze
```

**Then remove unused Radix packages:**
```bash
# Example - remove if not used
npm uninstall @radix-ui/react-menubar \
  @radix-ui/react-toggle-group \
  @radix-ui/react-hover-card \
  @radix-ui/react-context-menu \
  @radix-ui/react-avatar
```

---

### PHASE 3: Vite Build Configuration Optimization

#### 3.1 Update vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  base: "/",
  
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && visualizer({
      filename: './dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'radix-ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
          ],
          // Heavy slider library
          'slider': ['keen-slider'],
        },
      },
    },
    
    // Increase chunk size warning limit (optional)
    chunkSizeWarningLimit: 1000,
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Improve tree-shaking
    modulePreload: {
      polyfill: true,
    },
  },
  
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
    ],
    exclude: ['lovable-tagger'],
  },
}));
```

#### 3.2 Install Required Dependencies

```bash
npm install -D vite-plugin-compression rollup-plugin-visualizer terser
```

#### 3.3 Add Compression Plugin

```typescript
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    // ... other plugins
    
    // Brotli compression
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240, // Only compress files > 10KB
    }),
    
    // Gzip compression
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
});
```

---

### PHASE 4: Image Optimization

#### 4.1 Convert Images to Modern Formats

**Use WebP for all images:**
```bash
# Install image optimization tool
npm install -D @squoosh/cli

# Add script to package.json
"optimize-images": "squoosh-cli --webp auto public/**/*.{jpg,png}"
```

#### 4.2 Implement Responsive Images

**Create: src/components/OptimizedImage.tsx**
```tsx
import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: string;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  priority = false,
  aspectRatio,
  className,
  ...props 
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchpriority={priority ? 'high' : 'auto'}
      style={{
        aspectRatio: aspectRatio,
        width: '100%',
        height: 'auto',
      }}
      className={className}
      {...props}
    />
  );
};
```

**Usage:**
```tsx
// Hero banner - priority
<OptimizedImage 
  src="/Banner Image/1.webp" 
  alt="Hero banner"
  priority
  aspectRatio="1920/800"
/>

// Product images - lazy
<OptimizedImage 
  src="/product-image/ghee.png" 
  alt="A2 Ghee"
  aspectRatio="1/1"
/>
```

---

### PHASE 5: Critical CSS Inlining

#### 5.1 Inline Critical CSS in index.html

```html
<head>
  <style>
    /* Critical CSS - inline for FCP */
    html, body {
      margin: 0;
      padding: 0;
      background-color: #2E3E27;
      overflow-x: hidden;
      font-family: system-ui, -apple-system, sans-serif;
    }
    
    #root {
      min-height: 100vh;
      background-color: #2E3E27;
    }
    
    /* Loader styles - prevent CLS */
    .loader-container {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2E3E27;
      z-index: 9999;
    }
    
    /* Prevent FOUC for fonts */
    .font-coolvetica {
      font-family: 'Coolvetica', sans-serif;
      font-display: swap;
    }
    
    /* Above-the-fold skeleton */
    .navbar-skeleton {
      height: 80px;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
      0% { background-position: -1000px; }
      100% { background-position: 1000px; }
    }
  </style>
</head>
```

---

### PHASE 6: Reduce Loader Time (Improve FCP)

#### 6.1 Optimize Loader Component

**Current Issue:** 500ms loader delay blocks FCP

**Update Loader.tsx:**
```tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // Reduce to 300ms or remove entirely
    const timer = setTimeout(() => {
      onComplete();
    }, 300); // Reduced from 500ms

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loader-container"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }} // Faster fade
    >
      <img
        src="/loader-img-3.png"
        alt="Loading"
        width={120}
        height={120}
        loading="eager"
        fetchpriority="high"
      />
    </motion.div>
  );
};
```

**Better: Consider removing loader entirely for instant FCP**

---

### PHASE 7: Vercel Deployment Optimization

#### 7.1 Create vercel.json Configuration

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.webp",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### PHASE 8: Monitoring & Validation

#### 8.1 Bundle Analysis Script

**Add to package.json:**
```json
{
  "scripts": {
    "analyze": "vite-bundle-visualizer",
    "build:analyze": "vite build && vite-bundle-visualizer"
  }
}
```

#### 8.2 Lighthouse CI Integration

**Create: lighthouserc.js**
```javascript
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4173/'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0 }],
        'total-blocking-time': ['error', { maxNumericValue: 100 }],
      },
    },
  },
};
```

---

## 📊 Expected Results After Optimization

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| FCP | 2.0s | **1.2s** | ⬇️ 40% |
| LCP | 2.6s | **1.8s** | ⬇️ 31% |
| TBT | 170ms | **85ms** | ⬇️ 50% |
| CLS | 0 | **0** | ✅ Maintained |
| Speed Index | 4.1s | **2.7s** | ⬇️ 34% |
| Bundle Size | ~500KB | **~320KB** | ⬇️ 36% |

---

## 🔍 Implementation Checklist

### Week 1: Quick Wins
- [ ] Update image loading attributes (priority, lazy, fetchpriority)
- [ ] Add font-display: swap to fonts
- [ ] Reduce loader time to 300ms or remove
- [ ] Preload LCP image in index.html
- [ ] Add aspect ratios to prevent CLS

### Week 2: Code Splitting
- [ ] Implement lazy loading for below-fold components
- [ ] Set up Suspense boundaries with fallbacks
- [ ] Configure manual chunks in vite.config.ts
- [ ] Run bundle analyzer and remove unused dependencies

### Week 3: Build Optimization
- [ ] Update vite.config.ts with compression plugins
- [ ] Enable CSS code splitting
- [ ] Configure Brotli/Gzip compression
- [ ] Optimize Vercel caching headers

### Week 4: Testing & Validation
- [ ] Run Lighthouse tests (mobile + desktop)
- [ ] Test on real devices (3G/4G throttling)
- [ ] Validate Core Web Vitals in Chrome DevTools
- [ ] Set up continuous monitoring with Vercel Analytics

---

## 🚨 Critical Warnings

1. **Don't over-optimize animations** - Framer Motion is used heavily. Consider replacing with CSS animations for simpler use cases.

2. **Test on real devices** - Lighthouse scores on desktop don't reflect mobile performance.

3. **Monitor bundle size** - Your 30+ Radix UI components are likely bloating the bundle. Audit and remove unused ones.

4. **Loader screen hurts FCP** - Consider removing or showing content immediately with skeleton loaders.

---

## 📈 Next Steps

1. Implement Phase 1 (Critical Assets) first - **Biggest impact on LCP**
2. Run Lighthouse audit after each phase
3. Use Chrome DevTools Performance tab to profile TBT
4. Set up Vercel Analytics for real-user monitoring
5. Implement budget alerts for bundle size

---

**Questions or need clarification on any step? Let me know!**
