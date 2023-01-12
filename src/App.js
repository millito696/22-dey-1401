import './App.css';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import CardContainer from './Card.Container';
import Cart from './Cart';
import Modal from './modal';
import CartItem from './Cart.Item';
import Checkout from './Checkout';
import { useState } from 'react';

function App() {
  const [priceSort, setPriceSort] = useState('lowest');
  const [sizeSort, setSizeSort] = useState('all');
  const [productsNumber, setProductsNumber] = useState(6);
  const priceSortHandler = (sort) => {
    setPriceSort(sort);
    // console.log(`from App ${sort}`);
  }
  const SizeSortHandler = (sort) => {
    setSizeSort(sort);
    // console.log(`from App ${sort}`);
  }
  const products = (number) => {
    // console.log(`in App ${number}`);
    setProductsNumber(number)
  }

  return (
    <>
      <Header></Header>
      <div className="main">
        <div className="products">
          <Navbar onPriceSortChange={priceSortHandler} onSizeSortChange={SizeSortHandler} products={productsNumber} />
          <CardContainer priceSort={priceSort} sizeSort={sizeSort} products={products} />
        </div>
        <div className="cart-main">
          <Cart></Cart>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
