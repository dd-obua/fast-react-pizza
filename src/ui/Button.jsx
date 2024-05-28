import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {

  const base = 'bg-yellow-500 uppercase tracking-wide font-semibold text-stone-900 inline-block rounded-full hover:bg-yellow-400 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus: ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    secondary: base + ' px-3 py-1  md:px-5 md:py-2.5 text-xs'
  }

  if (to) return <Link to={to} className={styles[type]}>{children}</Link>

  return (
    <button type={type} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string
}

export default Button
