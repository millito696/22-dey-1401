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
import { data } from './data';
let myArray = [];
function App() {
  const [priceSort, setPriceSort] = useState('lowest');
  const [sizeSort, setSizeSort] = useState('all');
  const [productsNumber, setProductsNumber] = useState(6);
  const [card, setCard] = useState('');
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
  const onAddToCartHandler = (cardId) => {

    let NewPerson = {};

    data.map((el) => {
      if (String(el.id) === cardId) {
        NewPerson = {
          id: el.id,
          img: el.img,
          desc: el.desc,
          fullDesc: el.fullDesc,
          price: el.price,
          sizes: el.sizes,
          count: 1,
        }
      }
    });
    myArray.push(NewPerson);
    console.log(myArray)
    // console.log(`In APP ${cardId}`);
    // console.log(cardId)
    // console.log(data.find((el) => String(el.id) === cardId));
  }



  return (
    <>
      <Header></Header>
      <div className="main">
        <Navbar className='navbar' onPriceSortChange={priceSortHandler} onSizeSortChange={SizeSortHandler} products={productsNumber} />
        <div className="products">
          <CardContainer priceSort={priceSort} sizeSort={sizeSort} products={products} onAddToCart={onAddToCartHandler} />
        </div>
        <div className="cart-main">
          <Cart card={card}></Cart>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
