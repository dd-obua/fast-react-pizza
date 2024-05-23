import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Main from './Main';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      {isLoading && <Loader />}
      
      <Header />

      <Main>
        <Outlet />
      </Main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
