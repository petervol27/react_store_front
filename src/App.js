import './App.css';
import Footer from './components/Footer';
import JumboTron from './components/JumboTron';
import Nav from './components/Nav';

import { getAllProducts } from './api';
import { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  return (
    <>
      <JumboTron />
      <Nav />
      <ProductsList products={products} />
      <Footer />
    </>
  );
}

export default App;
