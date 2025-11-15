import PropTypes from 'prop-types';

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutralLight';

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent dark:bg-accent dark:hover:bg-accent/90',
  secondary:
    'bg-secondary/10 text-secondary hover:bg-secondary/20 focus-visible:ring-secondary',
  outline:
    'border border-white/40 text-white hover:bg-white/10 focus-visible:ring-white'
};

export function Button({ children, variant = 'primary', className = '', as = 'button', ...rest }) {
  const Component = as;
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType])
};
