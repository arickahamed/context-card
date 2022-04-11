import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import CartState from './components/Context API/CartState';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <CartState>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CartState>
  );
}

export default App;
