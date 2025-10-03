// Typography tokens extracted from Figma design system
export const typography = {
  // Font families
  fontFamily: {
    primary: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'SF Mono, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  },

  // Font weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 590, // SF Pro Semibold
    bold: 700,
    heavy: 900,
  },

  // Font sizes and line heights
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '32px',
    '4xl': '48px',
  },

  lineHeight: {
    tight: '16px',
    normal: '20px',
    relaxed: '24px',
    loose: '28px',
    'extra-loose': '48px',
  },

  // Typography styles from Figma (Light mode)
  styles: {
    // Headings
    h1: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '48px',
      fontWeight: 400,
      lineHeight: '56px',
      fontStyle: 'normal',
    },
    h2: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '32px',
      fontWeight: 400,
      lineHeight: '36px',
      fontStyle: 'normal',
    },
    h3: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '28px',
      fontStyle: 'normal',
    },
    h4: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '20px',
      fontWeight: 590,
      lineHeight: '24px',
      fontStyle: 'normal',
    },
    h5: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '18px',
      fontWeight: 590,
      lineHeight: '20px',
      fontStyle: 'normal',
    },
    
    // Subtitles
    subtitle1: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 590,
      lineHeight: '24px',
      fontStyle: 'normal',
    },
    subtitle2: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 590,
      lineHeight: '16px',
      fontStyle: 'normal',
    },
    
    // Body text
    body1: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      fontStyle: 'normal',
    },
    body2: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      fontStyle: 'normal',
    },
    
    // Captions
    captionSmall: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '14px',
      fontStyle: 'normal',
    },
    captionMini: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '100%', // 100% line height as specified in Figma
      fontStyle: 'normal',
    },
  },

  // Legacy text styles (maintaining compatibility)
  textStyles: {
    subtitle1: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 590,
      lineHeight: '24px',
      fontStyle: 'normal',
    },
    subtitle2: {
      fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '14px',
      fontWeight: 590,
      lineHeight: '20px',
      fontStyle: 'normal',
    },
  },
} as const;

export type TypographyToken = typeof typography;
