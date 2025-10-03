# Claris UI Design System

A comprehensive design system built in React + TypeScript, extracted directly from Figma design specifications.

## 🎨 Design Tokens

### Colors
- **Primary**: `#00a36c` - Main brand color
- **Text Colors**: White and dark variants with proper opacity
- **Button States**: Complete state system for primary, secondary, and tertiary variants

### Typography
- **Font Family**: SF Pro (with system font fallbacks)
- **Font Weights**: Regular (400), Medium (500), Semibold (590), Bold (700), Heavy (900)
- **Text Styles**: Predefined styles for Subtitle 1 and Subtitle 2

### Spacing
- **Base Units**: 2px, 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px
- **Semantic Spacing**: Component padding, layout spacing, button-specific spacing

## 🧩 Components

### Button System
The button component implements the complete Figma design system with:

#### Variants
- **Primary**: Brand color with white text
- **Secondary**: Light background with dark text and borders
- **Tertiary**: White background with dark text

#### Sizes
- **Small**: 24px height
- **Medium**: 32px height  
- **Large**: 40px height

#### States
- **Default**: Initial appearance
- **Hover**: Mouse hover state
- **Pressed**: Active/clicked state
- **Focused**: Keyboard focus state
- **Disabled**: Inactive state

#### Types
- **Text**: Text only
- **Symbol + Text**: Icon with text
- **Symbol**: Icon only

### Input System
The input component system provides comprehensive form input functionality with:

#### Variants
- **Regular**: Standard text input
- **Search**: Input with search icon
- **Password**: Input with password toggle functionality

#### Sizes
- **Small**: 24px height
- **Medium**: 32px height

#### States
- **Default**: Initial appearance
- **Hover**: Mouse hover state
- **Focused**: Keyboard focus state with brand color border
- **Disabled**: Inactive state with muted colors
- **Read-Only**: Non-editable state with visible text

#### Features
- **Accessibility**: Full keyboard navigation and screen reader support
- **Interactive States**: Automatic state management based on user interactions
- **Password Toggle**: Built-in show/hide password functionality
- **Icon Integration**: Seamless integration with the Icon component system

## 🚀 Usage

### Basic Button
```tsx
import { Button } from './design-system';

<Button variant="primary" size="medium">
  Click Me
</Button>
```

### Button with Icon
```tsx
<Button 
  variant="secondary" 
  size="large" 
  type="symbol-text"
  icon={<Icon>⚡</Icon>}
>
  Action Button
</Button>
```

### Button States
```tsx
<Button variant="primary" state="hover">
  Hover State
</Button>

<Button variant="secondary" state="focused">
  Focused State
</Button>
```

### Basic Input
```tsx
import { Input } from './design-system';

<Input variant="regular" size="medium" placeholder="Enter text..." />
```

### Input Variants
```tsx
// Regular input
<Input variant="regular" placeholder="Regular input..." />

// Search input with icon
<Input variant="search" placeholder="Search..." />

// Password input with toggle
<Input 
  variant="password" 
  placeholder="Enter password..."
  showPassword={showPassword}
  onTogglePassword={() => setShowPassword(!showPassword)}
/>
```

### Input States
```tsx
// Disabled input
<Input variant="regular" disabled placeholder="Disabled input..." />

// Read-only input
<Input variant="regular" readOnly value="Read-only value" />

// Controlled input
<Input 
  variant="regular" 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
```

## 🏗️ Architecture

```
src/design-system/
├── tokens/           # Design tokens (colors, typography, spacing)
├── components/       # Reusable components
│   ├── Button.tsx    # Button component with variants and states
│   ├── Input.tsx     # Input component with variants and states
│   ├── Icon/         # Icon component system
│   └── index.ts      # Component exports
└── index.ts         # Main exports
```

## 🔧 Development

### Adding New Components
1. Create component in `src/design-system/components/`
2. Export from `src/design-system/components/index.ts`
3. Add to main `src/design-system/index.ts`
4. Update showcase if needed

### Adding New Tokens
1. Create token file in `src/design-system/tokens/`
2. Export from `src/design-system/tokens/index.ts`
3. Use in components

### Figma Integration
This design system is automatically synced with Figma through MCP server:
- Colors, typography, and spacing are extracted from Figma variables
- Component specifications match Figma designs exactly
- Changes in Figma can be reflected in code through MCP updates

## 📱 Responsive Design
The design system is built with responsive principles:
- Flexible spacing system
- Scalable typography
- Adaptive component sizing

## 🎯 Best Practices
- Always use design tokens instead of hardcoded values
- Follow the established component patterns
- Test all button states and variants
- Maintain consistency with Figma specifications

## 🔄 Updates
To sync with Figma changes:
1. Update Figma design system
2. Use MCP server to extract new tokens
3. Update corresponding token files
4. Test components with new values

---

Built with ❤️ using React + TypeScript + Vite
Design System: Claris UI
Figma Integration: MCP Server
