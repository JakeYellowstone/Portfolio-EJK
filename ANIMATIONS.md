# Animation System Documentation

## Overview

This portfolio implements a professional, performant animation system using GSAP ScrollTrigger and Framer Motion. All animations are GPU-accelerated, accessibility-compliant, and mobile-optimized.

## Dependencies

```bash
npm install gsap framer-motion
```

**Installed versions:**
- `gsap`: ^3.x - For scroll-driven animations and timelines
- `framer-motion`: ^11.x - For React component animations and transitions

## Architecture

### Custom Hooks

#### `useScrollReveal` (IntersectionObserver-based)
Detects when elements enter viewport for reveal animations.

```typescript
import { useScrollReveal } from './hooks/useScrollReveal';

const { ref, isVisible } = useScrollReveal({
  threshold: 0.1,         // 10% of element visible triggers
  rootMargin: '0px 0px -100px 0px',  // Trigger 100px before viewport bottom
  triggerOnce: true       // Animate only once
});
```

#### `useReducedMotion`
Respects user's `prefers-reduced-motion` system preference.

```typescript
import { useReducedMotion } from './hooks/useReducedMotion';

const prefersReducedMotion = useReducedMotion();
// Returns true if user prefers reduced motion
```

#### `useIsMobile`
Detects mobile devices (< 768px) to disable heavy animations.

```typescript
import { useIsMobile } from './hooks/useIsMobile';

const isMobile = useIsMobile();
// Returns true on mobile devices
```

## Components

### SectionReveal
Animates entire sections into view with fade + slide.

```tsx
import SectionReveal from './components/SectionReveal';

<SectionReveal
  delay={0.2}        // Optional delay in seconds
  threshold={0.1}     // IntersectionObserver threshold
>
  <YourContent />
</SectionReveal>
```

**Animation specs:**
- Duration: 450ms
- Easing: cubic-bezier(0.22, 0.9, 0.28, 1)
- Transform: Y-axis 30px → 0
- Opacity: 0 → 1

### StaggerReveal
Animates children sequentially with stagger effect.

```tsx
import StaggerReveal from './components/StaggerReveal';

<StaggerReveal
  staggerDelay={0.08}  // Delay between each child (seconds)
  threshold={0.1}
>
  {items.map(item => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</StaggerReveal>
```

**Animation specs:**
- Per-item duration: 450ms
- Stagger delay: 80ms (default)
- Transform: Y-axis 20px → 0
- Opacity: 0 → 1

## Implemented Animations

### Hero Section (GSAP ScrollTrigger)

**Features:**
- Pinned scroll: Hero stays fixed for 100vh
- Scrubbed parallax: Content fades/scales with scroll
- Canvas particle animation (desktop only)
- Staggered content reveal on mount

**Code reference:** `src/components/Hero.tsx:102-136`

```typescript
// Scroll-linked timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: heroRef.current,
    start: 'top top',
    end: '+=100%',
    scrub: true,      // Tie animation to scroll position
    pin: true,        // Pin element during animation
  },
});

tl.to(contentRef.current, {
  y: 100,
  opacity: 0.3,
  scale: 0.95,
  ease: 'power2.out',
});
```

**Mobile optimization:**
- Canvas disabled on mobile (< 768px)
- Replaced with lightweight gradient animation
- Particle count reduced from 80 → 60 on desktop

### Project Grid (Framer Motion)

**Features:**
- Staggered grid reveal (0.08s per item)
- Hover scale + lift effect
- Modal with AnimatePresence transitions
- Exit animations when filtering

**Code reference:** `src/components/Projects.tsx:133-188`

```typescript
<motion.div
  initial="hidden"
  animate={isVisible ? 'visible' : 'hidden'}
  variants={variants}
  whileHover={{ scale: 1.03, y: -5 }}
  style={{ willChange: 'transform' }}
>
```

**Modal transitions:**
- Entry: Scale 0.9 → 1, opacity 0 → 1, Y 20px → 0
- Exit: Reverse of entry
- Backdrop: Blur + fade
- Duration: 300ms

### Section Reveals

Applied to:
- About section (`src/components/About.tsx`)
- Skills grid
- Experience timeline
- Services cards

**Pattern:**
```tsx
<SectionReveal className="...">
  <h2>Section Title</h2>
</SectionReveal>

<StaggerReveal staggerDelay={0.08} className="grid...">
  {items.map(item => <Card {...item} />)}
</StaggerReveal>
```

## Performance Optimizations

### GPU Acceleration
All animations use GPU-accelerated properties only:
- ✅ `transform` (translate, scale, rotate)
- ✅ `opacity`
- ❌ No `width`, `height`, `top`, `left`, `margin`

### Will-Change
Applied sparingly to animated elements:
```tsx
style={{ willChange: 'transform, opacity' }}
```

**Remove after animation completes to free GPU memory.**

### Animation Throttling
- GSAP ScrollTrigger automatically throttles scroll events
- IntersectionObserver used instead of scroll listeners
- `triggerOnce: true` prevents re-animation on scroll up

### Mobile Fallbacks
```typescript
if (isMobile) {
  // Disable WebGL canvas
  // Simplify particle effects
  // Reduce stagger delays
}
```

## Accessibility

### Prefers-Reduced-Motion
All components check `prefers-reduced-motion`:

```typescript
const variants = prefersReducedMotion
  ? {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    }
  : {
      hidden: { y: 30, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    };
```

**Result:** Users with motion sensitivity see instant reveals.

### Focus Management
- All interactive elements maintain visible focus rings
- Modals trap focus
- Close buttons have `aria-label`

### ARIA Labels
```tsx
<button aria-label="Scroll to about section">
  <ArrowDown />
</button>
```

## Animation Parameters (Defaults)

```typescript
// Timing
const DEFAULT_DURATION = 0.45;        // 450ms
const DEFAULT_STAGGER = 0.08;         // 80ms
const MOBILE_BREAKPOINT = 768;        // pixels

// Easing
const EASE_CUBIC = [0.22, 0.9, 0.28, 1];  // power2.out equivalent
const EASE_GSAP = 'power2.out';

// IntersectionObserver
const DEFAULT_THRESHOLD = 0.1;        // 10%
const DEFAULT_ROOT_MARGIN = '0px 0px -100px 0px';

// Transforms
const REVEAL_Y_DISTANCE = 30;         // pixels
const STAGGER_Y_DISTANCE = 20;        // pixels
const HOVER_SCALE = 1.03;
const ACTIVE_SCALE = 0.95;
```

## Testing Checklist

### Performance
- [ ] Lighthouse Performance score > 90 (desktop)
- [ ] Lighthouse Performance score > 70 (mobile)
- [ ] No layout shifts (CLS < 0.1)
- [ ] Smooth 60fps animations
- [ ] GPU usage monitored (Chrome DevTools > Performance)

### Accessibility
- [ ] Test with `prefers-reduced-motion: reduce`
- [ ] Keyboard navigation works
- [ ] Focus visible on all interactive elements
- [ ] Screen reader announces dynamic content
- [ ] No flashing/strobing effects

### Cross-Browser
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (desktop + iOS)
- [ ] Mobile browsers (Chrome, Safari)

### Responsive
- [ ] Animations work on mobile (< 768px)
- [ ] Heavy effects disabled on mobile
- [ ] Touch interactions smooth
- [ ] No horizontal scroll

## Troubleshooting

### Animations not triggering
1. Check element is in viewport: Use Chrome DevTools > IntersectionObserver
2. Verify `ref` is attached to correct DOM element
3. Ensure GSAP is registered: `gsap.registerPlugin(ScrollTrigger)`
4. Check console for errors

### Performance issues
1. Reduce particle count in Hero
2. Increase stagger delays
3. Disable canvas on low-end devices
4. Remove `will-change` after animations complete
5. Use React DevTools Profiler to find bottlenecks

### ScrollTrigger not working
```typescript
// Cleanup on unmount
useEffect(() => {
  // ... ScrollTrigger setup

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
```

### Framer Motion hydration errors
- Ensure `initial` prop matches SSR output
- Use `AnimatePresence` for conditional rendering
- Set `mode="wait"` for page transitions

## Advanced Usage

### Custom Scroll Timeline
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,          // Smooth scrubbing (1 second delay)
      markers: true,     // Debug markers (remove in production)
      onEnter: () => console.log('Entered'),
      onLeave: () => console.log('Left'),
    },
  });

  tl.to('.element', { x: 100 })
    .to('.element', { rotation: 360 });

  return () => tl.kill();
}, []);
```

### Progressive Enhancement (CSS Scroll-Timeline)
```css
@supports (animation-timeline: scroll()) {
  .element {
    animation: slide linear;
    animation-timeline: scroll();
    animation-range: entry 0% cover 50%;
  }
}

@keyframes slide {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**Browser support:** Chrome 115+, Edge 115+ (2023+)

## Best Practices

1. **Always animate transform/opacity only**
2. **Use `will-change` sparingly** (only during animation)
3. **Respect `prefers-reduced-motion`**
4. **Test on real devices**, not just desktop
5. **Cleanup on unmount** (GSAP timelines, event listeners)
6. **Lazy load heavy assets** (WebGL, large images)
7. **Use `triggerOnce`** for one-time reveals
8. **Profile with Chrome DevTools** Performance tab
9. **Avoid animating during scroll** (use scrub or throttle)
10. **Keep animations under 500ms** for snappy feel

## Resources

- [GSAP ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Framer Motion API](https://www.framer.com/motion/)
- [Web Animations Performance](https://web.dev/animations/)
- [Reduced Motion Guidelines](https://web.dev/prefers-reduced-motion/)
