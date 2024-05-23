import PropTypes from 'prop-types';

function Main({ children }) {
  return <div>{children}</div>;
}

export default Main;

Main.propTypes = {
  children: PropTypes.node,
};
