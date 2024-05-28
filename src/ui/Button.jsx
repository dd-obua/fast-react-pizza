import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const className = 'bg-yellow-500 uppercase tracking-wide font-semibold text-stone-900 px-4 py-2 inline-block rounded-full hover:bg-yellow-400 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus: ring-offset-2 disabled:cursor-not-allowed'

  if (to) return <Link to={to} className={className}>{children}</Link>

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string
}

export default Button
