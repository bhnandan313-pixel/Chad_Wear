import React from 'react';

/**
 * Editorial Button Component
 * Streetwear-styled minimal button with high-contrast hover states
 * Fully responsive to Light and Dark themes
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold uppercase tracking-[0.18em] transition-all duration-300 relative overflow-hidden select-none disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 gap-2',
    md: 'text-sm px-6 py-3.5 gap-2.5',
    lg: 'text-base px-8 py-4 gap-3',
    icon: 'p-3 text-sm'
  };

  const variantStyles = {
    primary: 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 active:scale-[0.98]',
    secondary: 'bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] border border-[var(--border-color)] hover:border-[var(--text-primary)] active:scale-[0.98]',
    outline: 'bg-transparent text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] active:scale-[0.98]',
    ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
    stealth: 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;
