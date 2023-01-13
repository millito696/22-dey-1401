import React, { useState } from 'react';
import './Cart.style.css';
import CartItem from './Cart.Item';
import { data } from './data';

function Cart(props) {
  return (
    <>
      <div className="cart">
        <p>
          {props.array.length
            ? `${props.array.length} items in the cart`
            : 'cart is empty'}
        </p>
        <hr />
      </div>
      {props.array.map((el) => {
        return <CartItem item={el} />;
      })}
    </>
  );
}

export default Cart;
