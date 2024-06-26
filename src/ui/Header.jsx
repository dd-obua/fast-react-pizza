import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className='flex justify-between items-center bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:p-6'>
      <Link to="/" className='tracking-widest'>Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
