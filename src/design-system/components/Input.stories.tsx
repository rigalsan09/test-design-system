import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive input component system with multiple variants, sizes, and states extracted from Figma.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['regular', 'search', 'password'],
      description: 'Input variant type',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      description: 'Input size',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focused', 'disabled', 'read-only'],
      description: 'Input state',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Whether the input is read-only',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default story
export const Default: Story = {
  args: {
    variant: 'regular',
    size: 'medium',
    placeholder: 'Placeholder text...',
  },
};

// Variants
export const Regular: Story = {
  args: {
    variant: 'regular',
    size: 'medium',
    placeholder: 'Regular input...',
  },
};

export const Search: Story = {
  args: {
    variant: 'search',
    size: 'medium',
    placeholder: 'Search...',
  },
};

export const Password: Story = {
  args: {
    variant: 'password',
    size: 'medium',
    placeholder: 'Enter password...',
  },
};

// Sizes
export const Small: Story = {
  args: {
    variant: 'regular',
    size: 'small',
    placeholder: 'Small input...',
  },
};

export const Medium: Story = {
  args: {
    variant: 'regular',
    size: 'medium',
    placeholder: 'Medium input...',
  },
};

// States
export const DefaultState: Story = {
  args: {
    variant: 'regular',
    size: 'medium',
    state: 'default',
    placeholder: 'Default state...',
  },
};

export const HoverState: Story = {
  args: {
    variant: 'regular',
    size: 'medium',
    state: 'hover',
    placeholder: 'Hover state...',
  },
};

export const FocusedState: Story = {
  args: {
    variant: 'regular',
    size: 'medium',
    state: 'focused',
    placeholder: 'Focused state...',
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'regular',
    size: 'medium',
    state: 'disabled',
    placeholder: 'Disabled state...',
    disabled: true,
  },
};

export const ReadOnlyState: Story = {
  args: {
    variant: 'regular',
    size: 'medium',
    state: 'read-only',
    placeholder: 'Read-only state...',
    readOnly: true,
    value: 'Read-only value',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Regular</h3>
        <Input variant="regular" size="medium" placeholder="Regular input..." />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Search</h3>
        <Input variant="search" size="medium" placeholder="Search..." />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Password</h3>
        <Input variant="password" size="medium" placeholder="Enter password..." />
      </div>
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Small</h3>
        <Input variant="regular" size="small" placeholder="Small input..." />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Medium</h3>
        <Input variant="regular" size="medium" placeholder="Medium input..." />
      </div>
    </div>
  ),
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Default</h3>
        <Input variant="regular" size="medium" state="default" placeholder="Default state..." />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Hover</h3>
        <Input variant="regular" size="medium" state="hover" placeholder="Hover state..." />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Focused</h3>
        <Input variant="regular" size="medium" state="focused" placeholder="Focused state..." />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Disabled</h3>
        <Input variant="regular" size="medium" state="disabled" placeholder="Disabled state..." disabled />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Read-Only</h3>
        <Input variant="regular" size="medium" state="read-only" placeholder="Read-only state..." readOnly value="Read-only value" />
      </div>
    </div>
  ),
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Regular Input</h3>
          <Input
            variant="regular"
            size="medium"
            placeholder="Type something..."
            value={value}
            onChange={setValue}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Search Input</h3>
          <Input
            variant="search"
            size="medium"
            placeholder="Search..."
            value={value}
            onChange={setValue}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Password Input</h3>
          <Input
            variant="password"
            size="medium"
            placeholder="Enter password..."
            value={value}
            onChange={setValue}
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>
    );
  },
};
