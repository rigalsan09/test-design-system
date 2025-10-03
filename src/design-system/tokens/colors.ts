// Color tokens extracted from Figma design system
export const colors = {
  // Brand colors
  brand: {
    highVolume: '#008C5D',
    secondaryVolume: '#00A36C',
    lowVolume: '#008c5d80',
  },

  // Primary colors (comprehensive scale)
  primary: {
    50: '#e0f5ee',
    100: '#c2ebdd',
    200: '#70d7b4',
    300: '#28b888',
    400: '#00a36c',
    500: '#008c5d',
    600: '#00704b',
    700: '#005438',
    800: '#003d29',
    900: '#002a1c',
    30: '#f1f9f7',
  },

  // Secondary colors
  secondary: {
    primary: '#0066cc',
    hover: '#148aff',
    pressed: '#0052a3',
    active: '#003d7a',
  },

  // Text colors
  text: {
    primary: '#000000',
    secondary: '#000000',
    tertiary: '#000000',
    disabled: '#000000',
    white: {
      primary: '#ffffff',
    },
    dark: {
      primary: '#000000e5',
    },
  },

  // Background colors
  background: {
    app: '#F3F3F6',
    dialog: '#1E1E1F',
    system: '#FFFFFF',
    secondary: '#FBFBFB',
    tertiary: '#F7F7F8',
  },

  // Neutral colors (comprehensive scale)
  neutral: {
    50: '#FCFCFC',
    100: '#FAFAFA',
    150: '#F5F5F5',
    200: '#EFEFF0',
    250: '#E9E9EA',
    300: '#E0E0E1',
    350: '#D5D5D7',
    400: '#CBCBCD',
    450: '#C1C1C2',
    550: '#A2A2A4',
    600: '#8E8E90',
    650: '#79797C',
    700: '#646468',
    750: '#505051',
    800: '#424243',
    850: '#383839',
    900: '#2D2D2E',
    950: '#232324',
    black: '#000000',
    white: '#FFFFFF',
  },

  // System colors
  system: {
    primary: {
      blue: '#007AFF',
      brown: '#A2845E',
      cyan: '#55BEF0',
      green: '#28CD41',
      indigo: '#5856D6',
      mint: '#00C7BE',
      orange: '#FF9500',
      pink: '#FF2D55',
      purple: '#AF52DE',
      red: '#FF3B30',
      teal: '#59ADC4',
      yellow: '#FFCC00',
    },
    tertiary: {
      blue: '#007AFF',
      brown: '#A2845E',
      cyan: '#55BEF0',
      green: '#28CD41',
      indigo: '#5856D6',
      mint: '#00C7BE',
      orange: '#FF9500',
      pink: '#FF2D55',
      purple: '#AF52DE',
      red: '#FF3B30',
      teal: '#59ADC4',
      yellow: '#FFCC00',
    },
  },

  // Button colors (updated from Figma design)
  button: {
    primary: {
      default: '#8f0000',
      hover: '#008c5d',
      pressed: '#28b888',
      focused: '#008c5d',
      disabled: '#28b888',
    },
    secondary: {
      default: '#fafafa',
      hover: '#f5f5f5',
      pressed: '#d5d5d7',
      focused: '#efeff0',
      disabled: '#fafafa',
      border: {
        default: '#d5d5d7',
        hover: '#a2a2a4',
        pressed: '#a2a2a4',
        focused: '#8e8e90',
        disabled: '#d5d5d7',
      },
    },
    tertiary: {
      default: '#ffffff',
      hover: '#f5f5f5',
      pressed: '#d5d5d7',
      focused: '#e0e0e1',
      disabled: '#ffffff',
      border: {
        default: '#ffffff',
        hover: '#f5f5f5',
        pressed: '#d5d5d7',
        focused: '#e0e0e1',
        disabled: '#ffffff',
      },
    },
  },
} as const;

export type ColorToken = typeof colors;
