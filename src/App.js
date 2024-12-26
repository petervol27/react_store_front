import './App.css';
import Footer from './components/Footer';
import JumboTron from './components/JumboTron';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAllProducts } from './api';
import { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';
import CartContext from './CartContext';
import Login from './components/Login';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState('');
  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cart,
            setCart,
            user,
            setUser,
          }}
        >
          <JumboTron />
          <Nav />
          <Routes>
            <Route path="/" element={<ProductsList products={products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
