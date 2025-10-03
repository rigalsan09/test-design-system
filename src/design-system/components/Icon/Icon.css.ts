import { style } from '@vanilla-extract/css';

export const icon = style({
  display: 'inline-block',
  verticalAlign: 'middle',
  fill: 'currentColor',
});

export const sizeVariants = {
  sm: style({
    width: '16px',
    height: '16px',
  }),
  md: style({
    width: '24px',
    height: '24px',
  }),
  lg: style({
    width: '32px',
    height: '32px',
  }),
  xl: style({
    width: '40px',
    height: '40px',
  }),
} as const;

export type SizeVariant = keyof typeof sizeVariants;