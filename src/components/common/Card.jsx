import PropTypes from 'prop-types';

export function Card({ children, className = '' }) {
  return (
    <article
      className={`bg-cardBg rounded-xl2 shadow-soft overflow-hidden border border-slate-100 dark:bg-slate-900 dark:border-slate-800 ${className}`}
    >
      {children}
    </article>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
