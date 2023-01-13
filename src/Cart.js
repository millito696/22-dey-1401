import React, { useState } from 'react';
import './Cart.style.css';
import CartItem from './Cart.Item';
import { data } from './data';
import Checkout from './Checkout';

function Cart(props) {
  // const [newArray, setNewArray] = useState([]);
  // setNewArray(props)
  const [checkOut, setCheckOut] = useState(false);
  const proceedHandler = () => {
    setCheckOut(true)
  }
  return (
    <>
      <div className="cart">
        <p>
          {/* {console.log(props.array)} */}
          {props.array.length
            ? `${props.array.length} items in the cart`
            : 'cart is empty'}
        </p>
        <hr />
        {/* {console.log(`in Cart ${props.array}`)} */}
      </div>
      {props.array.map((el) => {
        return <CartItem key={el.id} item={el} onRemove={props.removeHandler} />;
      })}

      {props.array.length === 0 ? '' : <> <hr /><div className='proceed-section'>
        <div className='total-price'>
          total :${props.array.reduce((acc, curr) => acc + curr.price * curr.count, 0).toFixed(2)}
        </div>
        <div>
          <button onClick={proceedHandler} className='proceed-btn'>Proceed</button>
        </div>
      </div>
        {checkOut ? <Checkout /> : ''}
      </>}

    </>
  );
}

export default Cart;
