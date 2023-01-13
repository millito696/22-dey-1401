import React, { useState } from 'react';
import './Cart.style.css';
import CartItem from './Cart.Item';
import { data } from './data';

function Cart(props) {
  // const [newArray, setNewArray] = useState([]);
  // setNewArray(props)

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
        return <CartItem key={el.id} item={el} />;
      })}
    </>
  );
}

export default Cart;
