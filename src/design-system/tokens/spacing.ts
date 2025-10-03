// Spacing tokens extracted from Figma design system
export const spacing = {
  // Base spacing units
  0: '0px',
  2: '2px',
  4: '4px',
  6: '6px',
  8: '8px',
  10: '10px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  64: '64px',
  80: '80px',
  96: '96px',
  128: '128px',
} as const;

// Semantic spacing
export const semanticSpacing = {
  // Component spacing
  component: {
    padding: {
      xs: spacing[4],
      sm: spacing[8],
      md: spacing[12],
      lg: spacing[16],
      xl: spacing[24],
    },
    margin: {
      xs: spacing[4],
      sm: spacing[8],
      md: spacing[12],
      lg: spacing[16],
      xl: spacing[24],
    },
  },

  // Layout spacing
  layout: {
    section: spacing[32],
    container: spacing[24],
    stack: spacing[16],
    inline: spacing[8],
  },

  // Button specific spacing (from Figma)
  button: {
    large: spacing[40], // 40px height
    medium: spacing[32], // 32px height
    small: spacing[24], // 24px height
    padding: {
      horizontal: spacing[12],
      vertical: spacing[8],
    },
  },
} as const;

export type SpacingToken = typeof spacing;
export type SemanticSpacingToken = typeof semanticSpacing;
