import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';

function App() {
  const showCart = useSelector(state => state.ui.showCart); // the function will receive redux state(can think as the store) auto, and will execute by react-redux.

  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch(
      'https://react-http-requests-24eb5-default-rtdb.firebaseio.com/cart.json',
      { method: 'PUT', body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
