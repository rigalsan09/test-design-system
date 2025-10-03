# Icon Component

A flexible SVG-based icon system that follows the pattern established by your co-worker's design system.

## Features

- **SVG-based**: All icons are individual SVG files for maximum flexibility
- **Type-safe**: Full TypeScript support with icon name validation
- **Size variants**: Consistent sizing with `sm`, `md`, `lg`, `xl` options
- **Customizable**: Easy color and styling overrides
- **Accessible**: Built-in ARIA support
- **Tree-shakeable**: Only imports the icons you use

## Usage

### Basic Usage

```tsx
import { Icon } from './design-system';

// Simple icon
<Icon name="search" />

// With size
<Icon name="settings" size="lg" />

// With custom color
<Icon name="delete" color="#ff2d55" />
```

### Advanced Usage

```tsx
// With accessibility attributes
<Icon 
  name="upload" 
  size="xl"
  color="#008c5d"
  className="hover:opacity-75 transition-opacity"
  aria-label="Upload file"
/>

// With custom styling
<Icon 
  name="download" 
  size="md"
  className="text-blue-500 hover:text-blue-700"
/>
```

## Available Icons

### Action Icons
- `delete` - Delete/trash icon
- `undo` - Undo action
- `redo` - Redo action
- `upload` - Upload file
- `download` - Download file

### Navigation Icons
- `chevron-left` - Left chevron
- `chevron-right` - Right chevron
- `chevron-up` - Up chevron
- `chevron-down` - Down chevron

### Interface Icons
- `search` - Search/magnifying glass
- `settings` - Settings/gear

## Size Variants

| Size | Dimensions | Use Case |
|------|------------|----------|
| `sm` | 16×16px | Inline text, small buttons |
| `md` | 24×24px | Default size, most UI elements |
| `lg` | 32×32px | Large buttons, headers |
| `xl` | 40×40px | Hero sections, large displays |

## Adding New Icons

1. **Create SVG file**: Add your SVG to `svgs/` folder
2. **Import in Icon.tsx**: Add import statement
3. **Register icon**: Add to `iconRegistry` object
4. **Update types**: Add to `IconName` type

Example:

```tsx
// 1. Create svgs/new-icon.svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="..." fill="currentColor"/>
</svg>

// 2. Import in Icon.tsx
import NewIcon from './svgs/new-icon.svg?react';

// 3. Add to registry
const iconRegistry = {
  // ... existing icons
  'new-icon': NewIcon,
} as const;
```

## Styling

Icons inherit the current text color by default. You can override this with:

- `color` prop for direct color control
- `className` prop for CSS classes
- CSS custom properties for theme-based colors

```tsx
// Direct color
<Icon name="search" color="#ff2d55" />

// CSS class
<Icon name="search" className="text-red-500" />

// CSS custom property
<Icon name="search" style={{ color: 'var(--primary-color)' }} />
```

## Accessibility

The Icon component includes built-in accessibility features:

- `aria-hidden="true"` by default (for decorative icons)
- `aria-label` support for meaningful icons
- Proper focus management
- Screen reader compatibility

```tsx
// Decorative icon (default)
<Icon name="chevron-right" />

// Meaningful icon
<Icon name="search" aria-label="Search" aria-hidden={false} />
```

## Migration from SF Symbols

If you're migrating from the SF Symbols approach:

1. **Replace individual components** with the `Icon` component
2. **Update prop names** (`name` instead of component name)
3. **Use string literals** for icon names
4. **Leverage size variants** instead of custom sizing

```tsx
// Before (SF Symbols)
<DeleteIcon size="md" color="#ff2d55" />

// After (SVG-based)
<Icon name="delete" size="md" color="#ff2d55" />
```
