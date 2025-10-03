//src/design-system/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

//Meta configuration - tells Storybook about the component

const meta = {
    title: 'Design System/Button', //This creates a folder in the sidebar for this component.
    component: Button,            //The component that will be displayed.
    //interactive controls
    argTypes: {
        
        variant: {
            control: {  type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
            description: 'The visual style of the button',
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'The size of the button',
        },
        state: {
            control: { type: 'select' },
            options: ['default', 'hover', 'pressed', 'focused', 'disabled'],  
            description: 'The interactive state of the button',
        },
        type: {
            control: { type: 'select' },
            options: ['text', 'symbol-text', 'symbol'],
            description: 'The content type of the button',
        },
        children: {
            control: { type: 'text' },
            description: 'The content of the button',
        },
        icon: {
            control: { type: 'text' },
            description: 'The icon of the button',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the button is disabled',
        },
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

//Your first story
export const Default: Story = {
    args: {
        children: 'Button',
    },
};


//Large size stories
export const LargeText: Story = {
    args: {
        size: 'large',
        variant: 'primary',
        children: 'Large Button',
    },
};

export const LargeIconText: Story = {
    args: {
        size: 'large',
        variant: 'primary',
        children: 'Large Button',
        icon: '⚡',
        type: 'symbol-text'
    },
};

export const LargeIconOnly: Story = {
    args: {
        size: 'large',
        variant: 'primary',
        icon: '⚡',
        type: 'symbol'
    },
};


//Medium size stories
export const MediumText: Story = {
    args: {
        size: 'medium',
        variant: 'primary',
        children: 'Medium Button',
    },
};

export const MediumIconText: Story = {
    args: {
        size: 'medium',
        variant: 'primary',
        children: 'Medium Button',
        icon: '⚡',
        type: 'symbol-text'
    },
};

export const MediumIconOnly: Story = {
    args: {
        size: 'medium',
        variant: 'primary',
        icon: '⚡',
        type: 'symbol'
    },
};


//Small size stories
export const SmallText: Story = {
    args: {
        size: 'small',
        variant: 'primary',
        children: 'Small Button',
    },
};

export const SmallIconText: Story = {
    args: {
        size: 'small',
        variant: 'primary',
        children: 'Small Button',
        icon: '⚡',
        type: 'symbol-text'
    },
};

export const SmallIconOnly: Story = {
    args: {
        size: 'small',
        variant: 'primary',
        icon: '⚡',
        type: 'symbol'
    },
};

