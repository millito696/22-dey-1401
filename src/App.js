import './App.css';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import CardContainer from './Card.Container';
import Cart from './Cart';
import Modal from './modal';
import CartItem from './Cart.Item';
import Checkout from './Checkout';
import { useEffect, useState } from 'react';
import { data } from './data';
import useForceUpdate from './forceUpdate';

let newArray = [];
function App() {
  const forceUpdate = useForceUpdate();
  const [priceSort, setPriceSort] = useState('lowest');
  const [sizeSort, setSizeSort] = useState('all');
  const [productsNumber, setProductsNumber] = useState(6);
  const [card, setCard] = useState('');
  const [myArray, setMyArray] = useState([]);
  const priceSortHandler = (sort) => {
    setPriceSort(sort);
    // console.log(`from App ${sort}`);
  };
  const SizeSortHandler = (sort) => {
    setSizeSort(sort);
    // console.log(`from App ${sort}`);
  };
  const products = (number) => {
    // console.log(`in App ${number}`);
    setProductsNumber(number);
  };
  const onAddToCartHandler = (cardId) => {

    data.map((el) => {
      let newObj = {};
      if (String(el.id) == cardId) {
        newObj = el;
        // console.log(newObj);
        if (newArray.includes(el)) {
          el.count++;
        } else {
          newObj.count = 1;
          newArray.push(newObj)
        }
        // console.log(cardId);
        // console.log('from if');
        // console.log(el.id);

        // newArray.push(el);
        // console.log(newArray);
        setMyArray(newArray);
        forceUpdate();
        // console.log(myArray);
        // setMyArray(newArray);
      }
    });



    // if (myArray.length > 0) {
    //   myArray.map((el) => {
    //     if (el.id == NewPerson.id) {
    //       el.count++;
    //     } else {
    //       myArray.push(NewPerson);
    //     }
    //   });
    // } else {
    //   myArray.push(NewPerson);
    // }
    // console.log(`In APP ${cardId}`);
    // console.log(cardId)
    // console.log(data.find((el) => String(el.id) === cardId));
  };
  // useEffect(() => {
  //   setMyArray(newArray);
  // }, [myArray])
  const removeHandlerCart = (cardId) => {
    console.log(cardId);
    newArray.map((el, index) => {
      if (String(el.id) == cardId) {
        if (el.count > 1) {
          el.count--;
        } else {
          newArray.splice(index, 1);
        }
      }
    })
    setMyArray(newArray);
    forceUpdate();

  }
  return (
    <>
      {/* {console.log('test in app')} */}
      <Header></Header>
      {/* {console.log(myArray)} */}
      <div className="main">
        <Navbar
          className="navbar"
          onPriceSortChange={priceSortHandler}
          onSizeSortChange={SizeSortHandler}
          products={productsNumber}
        />

        <div className="products">
          <CardContainer
            priceSort={priceSort}
            sizeSort={sizeSort}
            products={products}
            onAddToCart={onAddToCartHandler}
          />
        </div>
        <div className="cart-main">
          <Cart array={myArray} removeHandler={removeHandlerCart}></Cart>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
