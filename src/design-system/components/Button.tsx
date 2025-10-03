import React from 'react';
import { colors, typography, spacing, semanticSpacing } from '../tokens';

// Button variants from Figma design system
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

// Button sizes from Figma design system
export type ButtonSize = 'small' | 'medium' | 'large';

// Button states from Figma design system
export type ButtonState = 'default' | 'hover' | 'pressed' | 'focused' | 'disabled';

// Button types from Figma design system
export type ButtonType = 'text' | 'symbol-text' | 'symbol';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  type?: ButtonType;
  children?: React.ReactNode; // Made optional
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

// Button size configurations
const buttonSizes = {
  small: {
    height: semanticSpacing.button.small,
    padding: `${spacing[4]} ${spacing[8]}`,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
  },
  medium: {
    height: semanticSpacing.button.medium,
    padding: `${spacing[6]} ${spacing[10]}`,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.relaxed,
  },
  large: {
    height: semanticSpacing.button.large,
    padding: `${spacing[8]} ${spacing[12]}`,
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.loose,
  },
};

// Get button styles based on variant and state
const getButtonStyles = (variant: ButtonVariant, state: ButtonState) => {
  const baseStyles = {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    border: '1px solid transparent',
    borderRadius: spacing[8],
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[8],
    textDecoration: 'none',
    outline: 'none',
  };

  switch (variant) {
    case 'primary':
      return {
        ...baseStyles,
        backgroundColor: colors.button.primary[state],
        color: colors.text.white.primary,
        borderColor: colors.button.primary[state],
        '&:hover': {
          backgroundColor: colors.button.primary.hover,
          borderColor: colors.button.primary.hover,
        },
        '&:active': {
          backgroundColor: colors.button.primary.pressed,
          borderColor: colors.button.primary.pressed,
        },
        '&:focus': {
          backgroundColor: colors.button.primary.focused,
          borderColor: colors.button.primary.focused,
          boxShadow: `0 0 0 2px ${colors.button.primary.focused}40`,
        },
        '&:disabled': {
          backgroundColor: colors.button.primary.disabled,
          borderColor: colors.button.primary.disabled,
          cursor: 'not-allowed',
          opacity: 0.6,
        },
      };

    case 'secondary':
      return {
        ...baseStyles,
        backgroundColor: colors.button.secondary[state],
        color: colors.text.dark.primary,
        borderColor: colors.button.secondary.border[state],
        '&:hover': {
          backgroundColor: colors.button.secondary.hover,
          borderColor: colors.button.secondary.border.hover,
        },
        '&:active': {
          backgroundColor: colors.button.secondary.pressed,
          borderColor: colors.button.secondary.border.pressed,
        },
        '&:focus': {
          backgroundColor: colors.button.secondary.focused,
          borderColor: colors.button.secondary.border.focused,
          boxShadow: `0 0 0 2px ${colors.button.secondary.border.focused}40`,
        },
        '&:disabled': {
          backgroundColor: colors.button.secondary.disabled,
          borderColor: colors.button.secondary.border.disabled,
          cursor: 'not-allowed',
          opacity: 0.6,
        },
      };

    case 'tertiary':
      return {
        ...baseStyles,
        backgroundColor: colors.button.tertiary[state],
        color: colors.text.dark.primary,
        borderColor: colors.button.tertiary.border[state],
        '&:hover': {
          backgroundColor: colors.button.tertiary.hover,
          borderColor: colors.button.tertiary.border.hover,
        },
        '&:active': {
          backgroundColor: colors.button.tertiary.pressed,
          borderColor: colors.button.tertiary.border.pressed,
        },
        '&:focus': {
          backgroundColor: colors.button.tertiary.focused,
          borderColor: colors.button.tertiary.border.focused,
          boxShadow: `0 0 0 2px ${colors.button.tertiary.border.focused}40`,
        },
        '&:disabled': {
          backgroundColor: colors.button.tertiary.disabled,
          borderColor: colors.button.tertiary.border.disabled,
          cursor: 'not-allowed',
          opacity: 0.6,
        },
      };

    default:
      return baseStyles;
  }
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  state = 'default',
  type = 'text',
  children,
  icon,
  disabled = false,
  onClick,
  className = '',
}) => {
  const sizeConfig = buttonSizes[size];
  const buttonState = disabled ? 'disabled' : state;
  const styles = getButtonStyles(variant, buttonState);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'symbol':
        return icon;
      case 'symbol-text':
        return (
          <>
            {icon}
            {children}
          </>
        );
      case 'text':
      default:
        return children;
    }
  };

  return (
    <button
      className={className}
      style={{
        ...styles,
        ...sizeConfig,
        ...(disabled && { cursor: 'not-allowed', opacity: 0.6 }),
      }}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      {renderContent()}
    </button>
  );
};

export default Button;
