import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet } from 'react-router-dom';
import Main from './Main';

function AppLayout() {
  return (
    <div>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
