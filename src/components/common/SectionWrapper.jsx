import PropTypes from 'prop-types';

export function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`w-full max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-0 py-10 lg:py-16 ${className}`}
    >
      {children}
    </section>
  );
}

SectionWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
