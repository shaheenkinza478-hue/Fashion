'use client';

import React, { useState } from 'react';
import { FiLoader, FiCheck, FiHeart, FiShoppingBag, FiArrowRight } from 'react-icons/fi';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  loading = false,
  success = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  rounded = 'md',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Size Classes - UPDATED FONTS
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm gap-1.5 font-mono font-medium',
    md: 'px-6 py-2.5 text-base gap-2 font-sans font-semibold',
    lg: 'px-8 py-3.5 text-lg gap-2.5 font-serif font-bold',
  };

  // Variant Classes with Pink & Gray Theme
  const variantClasses = {
    primary: `
      bg-pink-500 
      text-white 
      hover:bg-pink-600 
      active:bg-pink-700
      shadow-md hover:shadow-lg
      disabled:bg-gray-300
    `,
    secondary: `
      bg-gray-600 
      text-white 
      hover:bg-gray-700 
      active:bg-gray-800
      shadow-md hover:shadow-lg
      disabled:bg-gray-300
    `,
    outline: `
      bg-transparent 
      border-2 border-pink-500 
      text-pink-500 
      hover:bg-pink-500 hover:text-white 
      active:bg-pink-600 active:border-pink-600
      disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent
    `,
    ghost: `
      bg-transparent 
      text-pink-500 
      hover:bg-pink-50 
      active:bg-pink-100
      disabled:text-gray-400 disabled:hover:bg-transparent
    `,
    gradient: `
      bg-gradient-to-r from-pink-400 via-pink-500 to-gray-500 
      text-white 
      hover:from-pink-500 hover:via-pink-600 hover:to-gray-600 
      active:from-pink-600 active:via-pink-700 active:to-gray-700
      shadow-md hover:shadow-lg
      disabled:from-gray-300 disabled:via-gray-300 disabled:to-gray-400
    `,
  };

  // Rounded Classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  // Click Handler
  const handleClick = (e: any) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    onClick?.();
  };

  // Get font class based on size
  const getFontClass = () => {
    switch(size) {
      case 'sm': return 'font-mono font-medium tracking-wide';
      case 'md': return 'font-sans font-semibold tracking-wide';
      case 'lg': return 'font-serif font-bold tracking-wider';
      default: return 'font-sans font-medium';
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
        relative
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${roundedClasses[rounded]}
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${getFontClass()}
        transition-all
        duration-300
        ${!disabled && !loading ? 'hover:scale-105 active:scale-95' : ''}
        disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
        overflow-hidden
        ${isClicked ? 'scale-95' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading Spinner */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit">
          <FiLoader className="animate-spin text-xl" />
        </span>
      )}

      {/* Success Check */}
      {success && !loading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit">
          <FiCheck className="animate-bounce text-xl" />
        </span>
      )}

      {/* Button Content */}
      <span className={`
        flex items-center justify-center gap-2
        ${loading || success ? 'opacity-0' : 'opacity-100'}
        transition-opacity duration-300
      `}>
        {/* Icon Left */}
        {icon && iconPosition === 'left' && (
          <span className={`
            transition-transform duration-300
            ${isHovered ? '-translate-x-0.5' : ''}
          `}>
            {icon}
          </span>
        )}

        {/* Children - Font already applied from parent */}
        <span className="relative">
          {children}
        </span>

        {/* Icon Right */}
        {icon && iconPosition === 'right' && (
          <span className={`
            transition-transform duration-300
            ${isHovered ? 'translate-x-0.5' : ''}
          `}>
            {icon}
          </span>
        )}

        {/* Arrow for gradient */}
        {variant === 'gradient' && !icon && (
          <FiArrowRight className={`
            transition-transform duration-300
            ${isHovered ? 'translate-x-0.5' : ''}
          `} />
        )}
      </span>

      {/* Simple Hover Effect */}
      <span className={`
        absolute inset-0 bg-white/10 
        transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}></span>
    </button>
  );
};

// Pre-made button variants - UPDATED FONTS THROUGH PROPS
export const PrimaryButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="primary" {...props} />
);

export const SecondaryButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="secondary" {...props} />
);

export const OutlineButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="outline" {...props} />
);

export const GhostButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="ghost" {...props} />
);

export const GradientButton = (props: Omit<ButtonProps, 'variant'>) => (
  <Button variant="gradient" {...props} />
);

// Icon Buttons - UPDATED
export const IconButton = ({ icon, ...props }: ButtonProps) => (
  <Button
    size="md"
    rounded="full"
    className="!p-3 aspect-square font-sans"
    {...props}
    icon={icon}
  >
    {null}
  </Button>
);

// Shop-specific buttons - UPDATED FONTS
export const AddToCartButton = (props: Omit<ButtonProps, 'children' | 'icon'>) => (
  <Button
    variant="primary"
    size="md"
    rounded="full"
    icon={<FiShoppingBag />}
    className="font-mono font-bold tracking-wider"
    {...props}
  >
    ADD TO CART
  </Button>
);

export const WishlistButton = ({ isWishlisted, ...props }: ButtonProps & { isWishlisted?: boolean }) => (
  <Button
    variant={isWishlisted ? 'primary' : 'outline'}
    size="md"
    rounded="full"
    icon={<FiHeart className={isWishlisted ? 'fill-white' : ''} />}
    className="font-sans font-medium tracking-wide"
    {...props}
  >
    {isWishlisted ? 'WISHLISTED' : 'ADD TO WISHLIST'}
  </Button>
);

export default Button;