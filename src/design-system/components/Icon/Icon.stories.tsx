import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, type IconName } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: ['delete', 'search', 'settings', 'upload', 'download', 'add'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - shows individual icon with name and size controls
export const Default: Story = {
  args: {
    name: 'search',
    size: 'md',
  },
};

// Gallery story - shows all icons with only size control
export const AllIcons: Story = {
  render: (args) => {
    const iconList = [
      { name: 'add', label: 'Add' },
      { name: 'backwards', label: 'Backwards' },
      { name: 'forwards', label: 'Forwards' },
      { name: 'chevronUp', label: 'Chevron Up' },
      { name: 'chevronDown', label: 'Chevron Down' },
      { name: 'attached', label: 'Attached' },
      { name: 'calendar', label: 'Calendar' },
      { name: 'chevronLeft', label: 'Chevron Left' },
      { name: 'chevronRight', label: 'Chevron Right' },
      { name: 'close', label: 'Close' },
      { name: 'custom', label: 'Custom' },
      { name: 'delete', label: 'Delete' },
      { name: 'edit', label: 'Edit' },
      { name: 'expand', label: 'Expand' },
      { name: 'form', label: 'Form' },
      { name: 'gallery', label: 'Gallery' },
      { name: 'grabber', label: 'Grabber' },
      { name: 'home', label: 'Home' },
      { name: 'placeholder', label: 'Placeholder' },
      { name: 'info', label: 'Info' },
      { name: 'kanban', label: 'Kanban' },
      { name: 'link', label: 'Link' },
      { name: 'search', label: 'Search' },
      { name: 'settings', label: 'Settings' },
      { name: 'upload', label: 'Upload' },
    ];

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px', padding: '20px' }}>
        {iconList.map((icon) => (
          <div key={icon.name} style={{ textAlign: 'center', padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
            <Icon name={icon.name as IconName} size={args.size} />
            <div style={{ marginTop: '8px', fontSize: '12px' }}>{icon.label}</div>
            <div style={{ marginTop: '4px', fontSize: '10px', color: '#999' }}>{icon.name}</div>
          </div>
        ))}
      </div>
    );
  },
  argTypes: {
    // Only show size control for the gallery
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    // Hide name control for this story
    name: { table: { disable: true } },
  },
  args: {
    size: 'lg',
  },
};