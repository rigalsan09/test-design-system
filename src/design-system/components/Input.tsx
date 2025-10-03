import React, { forwardRef, useState } from 'react';
import { Icon } from './Icon';
import { colors, typography, spacing } from '../tokens';

// Input component variant types from Figma design system
export type InputVariant = 'regular' | 'search' | 'password';

// Input component size types from Figma design system
export type InputSize = 'small' | 'medium';

// Input component statetypes from Figma design system
export type InputState = 'default' | 'hover' | 'focused' | 'disabled' | 'read-only';

export interface InputProps {
  variant?: InputVariant;
  size?: InputSize;
  state?: InputState;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

// Input component implementation
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'regular',
      size = 'medium',
      state = 'default',
      placeholder = 'Placeholder text...',
      value,
      onChange,
      onFocus,
      onBlur,
      className = '',
      disabled = false,
      readOnly = false,
      showPassword = false,
      onTogglePassword,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Determine the actual state based on props and interactions
    const actualState = disabled 
      ? 'disabled' 
      : readOnly 
      ? 'read-only' 
      : isFocused 
      ? 'focused' 
      : isHovered 
      ? 'hover' 
      : state;

    // Determine input type based on variant
    const inputType = variant === 'password' ? (showPassword ? 'text' : 'password') : 'text';

    // Get size-specific styles
    const sizeStyles = {
      small: {
        height: '24px',
        padding: '6px 12px',
        fontSize: '14px',
        lineHeight: '20px',
      },
      medium: {
        height: '32px',
        padding: '6px 12px',
        fontSize: '14px',
        lineHeight: '20px',
      },
    };

    // Get state-specific styles
    const getStateStyles = () => {
      const baseStyles = {
        backgroundColor: colors.neutral.white,
        border: `1px solid ${colors.neutral[400]}`,
        color: colors.text.dark.primary,
      };

      switch (actualState) {
        case 'hover':
          return {
            ...baseStyles,
            borderColor: colors.neutral[650],
          };
        case 'focused':
          return {
            ...baseStyles,
            borderColor: colors.primary[400],
            borderWidth: '2px',
            color: colors.text.dark.primary,
          };
        case 'disabled':
          return {
            backgroundColor: colors.neutral[150],
            borderColor: colors.neutral[200],
            color: colors.text.disabled,
          };
        case 'read-only':
          return {
            backgroundColor: colors.neutral[150],
            borderColor: colors.neutral[200],
            color: colors.text.dark.primary,
          };
        default:
          return baseStyles;
      }
    };

    // Get placeholder color based on state
    const getPlaceholderColor = () => {
      switch (actualState) {
        case 'disabled':
          return colors.text.disabled;
        case 'focused':
          return colors.text.tertiary;
        default:
          return colors.text.tertiary;
      }
    };

    const containerStyles: React.CSSProperties = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: spacing[2],
      borderRadius: '6px',
      fontFamily: typography.fontFamily.primary,
      ...sizeStyles[size],
      ...getStateStyles(),
    };

    const inputStyles: React.CSSProperties = {
      flex: 1,
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontFamily: 'inherit',
      width: '100%',
    };


    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };

    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleTogglePassword = () => {
      onTogglePassword?.();
    };

    return (
      <div
        className={`input-container ${className}`}
        style={containerStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Search icon for search variant */}
        {variant === 'search' && (
          <div style={{ color: getPlaceholderColor(), fontSize: '14px' }}>
            <Icon name="search" size="md" />
          </div>
        )}

        {/* Input field */}
        <input
          ref={ref}
          type={inputType}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          style={inputStyles}
        />

        {/* Password toggle for password variant */}
        {variant === 'password' && (
          <button
            type="button"
            onClick={handleTogglePassword}
            style={{
              background: 'none',
              border: 'none',
              color: getPlaceholderColor(),
              fontSize: '14px',
              cursor: disabled ? 'not-allowed' : 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
            disabled={disabled}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
