import PropTypes from 'prop-types';

function Main({ children }) {
  return <main className='overflow-scroll'>
    <div className='max-w-3xl mx-auto'>
      {children}
    </div>
  </main>;
}

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
