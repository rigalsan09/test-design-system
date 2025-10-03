import React from 'react';

// Import SVG icons as React components
import AddIcon from './svgs/add.svg?react';
import AttachIcon from './svgs/attach.svg?react';
import BackwardsIcon from './svgs/arrow.backward.svg?react';
import ChevronDownIcon from './svgs/arrow.down.svg?react';
import ChevronUpIcon from './svgs/arrow.up.svg?react';
import CalendarIcon from './svgs/calendar.svg?react';
import ChevronLeftIcon from './svgs/chevron.left.svg?react';
import ChevronRightIcon from './svgs/chevron.right.svg?react';
import CloseIcon from './svgs/close.svg?react';
import CustomIcon from './svgs/customView.svg?react';
import DeleteIcon from './svgs/delete.svg?react';
import DownloadIcon from './svgs/download.svg?react';
import EditIcon from './svgs/edit.svg?react';
import ExpandIcon from './svgs/expand.svg?react';
import EyeIcon from './svgs/eye.svg?react';
import EyeSlashIcon from './svgs/eye.slash.svg?react';
import FormIcon from './svgs/form.svg?react';
import ForwardsIcon from './svgs/arrow.forward.svg?react';
import GalleryIcon from './svgs/gallery.svg?react';
import GrabberIcon from './svgs/grabber.svg?react';
import HomeIcon from './svgs/home.svg?react';
import InfoIcon from './svgs/information.svg?react';
import KanbanIcon from './svgs/kanban.svg?react';
import LinkIcon from './svgs/link.svg?react';
import PlaceholderIcon from './svgs/icon.svg?react';
import SearchIcon from './svgs/search.svg?react';
import SettingsIcon from './svgs/settings.svg?react';
import UploadIcon from './svgs/upload.svg?react';


// Simple icon registry
const icons = {
  add: AddIcon,
  attach: AttachIcon,
  backwards: BackwardsIcon, 
  chevronDown: ChevronDownIcon,
  chevronUp: ChevronUpIcon, 
  calendar: CalendarIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon, 
  close: CloseIcon, 
  custom: CustomIcon,
  delete: DeleteIcon,
  download: DownloadIcon,
  edit: EditIcon,
  expand: ExpandIcon,
  eye: EyeIcon,
  eyeSlash: EyeSlashIcon,
  form: FormIcon,
  forwards: ForwardsIcon, 
  gallery: GalleryIcon,
  grabber: GrabberIcon,
  home: HomeIcon,
  info: InfoIcon,
  kanban: KanbanIcon,
  link: LinkIcon,
  placeholder: PlaceholderIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  upload: UploadIcon

};

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  color, 
  className 
}) => {
  const IconComponent = icons[name];
  
  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  const sizeMap = {
    sm: '16px',
    md: '24px', 
    lg: '32px',
    xl: '40px'
  };

  return (
    <IconComponent
      width={sizeMap[size]}
      height={sizeMap[size]}
      style={{ color }}
      className={className}
    />
  );
};