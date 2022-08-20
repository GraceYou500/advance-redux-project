import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/exports';

function App() {
  const showCart = useSelector(state => state.ui.showCart); // the function will receive redux state(can think as the store) auto, and will execute by react-redux.

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
