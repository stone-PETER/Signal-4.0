# Comic Impact Effect

A Marvel Cinematic Universe-inspired comic book impact effect for React applications using Framer Motion.

## Features

- **Interactive**: Click anywhere to trigger comic book onomatopoeia effects
- **Animated**: Smooth spring animations using Framer Motion
- **Customizable**: Multiple comic words (POW!, BAM!, ZAP!, etc.)
- **MCU Theme**: Red and yellow colors matching your site's theme
- **Auto-cleanup**: Effects automatically disappear after 800ms

## Installation

Make sure you have `framer-motion` installed:

```bash
npm install framer-motion
```

## Usage

### Method 1: Using the Container Component (Easiest)

```jsx
import { ComicImpactContainer } from "./components/ComicImpact";

function MyComponent() {
  return (
    <ComicImpactContainer>
      <div className="my-gallery-panel">
        <img src="hero.jpg" alt="Click me!" />
      </div>
    </ComicImpactContainer>
  );
}
```

### Method 2: Using the Hook (More Control)

```jsx
import { useComicImpact } from "./components/ComicImpact";
import ComicBubble from "./components/ComicImpact/ComicBubble";

function MyComponent() {
  const { impacts, triggerImpact } = useComicImpact();

  return (
    <div style={{ position: "relative" }} onClick={triggerImpact}>
      <div className="my-content">Click anywhere for comic effects!</div>

      {impacts.map((impact) => (
        <ComicBubble
          key={impact.id}
          x={impact.x}
          y={impact.y}
          word={impact.word}
          rotation={impact.rotation}
        />
      ))}
    </div>
  );
}
```

### Method 3: Apply to Specific Elements

```jsx
import { useComicImpact } from "./components/ComicImpact";
import ComicBubble from "./components/ComicImpact/ComicBubble";

function GalleryPanel({ image }) {
  const { impacts, triggerImpact } = useComicImpact();

  return (
    <div className="gallery-panel" style={{ position: "relative" }}>
      <img
        src={image}
        alt="Gallery"
        onClick={triggerImpact}
        style={{ cursor: "pointer" }}
      />

      {impacts.map((impact) => (
        <ComicBubble
          key={impact.id}
          x={impact.x}
          y={impact.y}
          word={impact.word}
          rotation={impact.rotation}
        />
      ))}
    </div>
  );
}
```

## Animation Details

- **Initial scale**: 0 (invisible)
- **Peak scale**: 1.2 (overscale)
- **Final scale**: 1.0 (normal)
- **Transition**: Spring physics (stiffness: 400, damping: 10)
- **Rotation**: Random between -15° and 15°
- **Duration**: Auto-removes after 800ms
- **Colors**: Yellow to red gradient with black stroke

## Customization

### Adding Custom Comic Words

Edit the `COMIC_WORDS` array in `useComicImpact.js`:

```javascript
const COMIC_WORDS = [
  "POW!",
  "BAM!",
  "ZAP!",
  "BOOM!",
  "WHAM!",
  "SMASH!",
  "CRASH!",
  "KAPOW!",
];
```

### Changing Colors

Modify the gradient in `ComicBubble.jsx`:

```jsx
<radialGradient id="comicGradient">
  <stop offset="0%" style={{ stopColor: "#YOUR_COLOR", stopOpacity: 1 }} />
  <stop offset="100%" style={{ stopColor: "#YOUR_COLOR", stopOpacity: 1 }} />
</radialGradient>
```

### Adjusting Animation Timing

Change the timeout in `useComicImpact.js`:

```javascript
setTimeout(() => {
  setImpacts((prev) => prev.filter((impact) => impact.id !== newImpact.id));
}, 1200); // Change from 800ms to 1200ms
```

## Browser Support

Works in all modern browsers that support:

- CSS transforms
- SVG
- Framer Motion
- React Hooks

## Performance

- Lightweight: Only renders active impacts
- Auto-cleanup: Old impacts are automatically removed
- GPU-accelerated: Uses CSS transforms for smooth animation
- Optimized: Uses `useCallback` to prevent unnecessary re-renders
