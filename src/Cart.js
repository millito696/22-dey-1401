import React, { useState } from 'react';
import './Cart.style.css';
import CartItem from './Cart.Item';
import { data } from './data';


function Cart(props) {

  return (
    <>
      <div className="cart">
        <p>{props.card.desc}</p>

        <hr />
      </div>

    </>
  );
}

export default Cart;
