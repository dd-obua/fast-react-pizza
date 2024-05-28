import PropTypes from 'prop-types';

function Button({ children, disabled }) {
  return (
    <button disabled={disabled} className='bg-yellow-500 uppercase tracking-wide font-semibold text-stone-900 px-4 py-2 inline-block rounded-full hover:bg-yellow-400 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus: ring-offset-2 disabled:cursor-not-allowed'>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.boolean
}

export default Button
