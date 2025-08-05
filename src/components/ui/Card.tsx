import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'image';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  // Image props
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: 'sm' | 'md' | 'lg';
  imagePosition?: 'top' | 'bottom';
  imageOverlay?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
  imageSrc,
  imageAlt = '',
  imageHeight = 'md',
  imagePosition = 'top',
  imageOverlay = false,
}) => {
  const baseClasses = 'rounded-xl transition-all duration-200 overflow-hidden';
  
  const variantClasses = {
    default: 'bg-white border border-gray-100',
    elevated: 'bg-white shadow-lg hover:shadow-xl border border-gray-100',
    outlined: 'bg-white border-2 border-teal-200 hover:border-teal-300',
    image: 'bg-white shadow-lg hover:shadow-xl border border-gray-100',
  };
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const imageHeightClasses = {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // Image component
  const ImageComponent = () => {
    if (!imageSrc) return null;

    return (
      <div className={`relative ${imageHeightClasses[imageHeight]} w-full`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {imageOverlay && (
          <div className="absolute inset-0 bg-black/20" />
        )}
      </div>
    );
  };

  // Content component
  const ContentComponent = () => (
    <div className={paddingClasses[padding]}>
      {children}
    </div>
  );

  return (
    <div className={classes} onClick={onClick}>
      {imageSrc && imagePosition === 'top' && <ImageComponent />}
      <ContentComponent />
      {imageSrc && imagePosition === 'bottom' && <ImageComponent />}
    </div>
  );
};

export default Card; 