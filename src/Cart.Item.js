import React, { useState } from 'react';
import './Cart.Item.style.css';

function CartItem(props) {
  const removeHandler = (e) => {
    // console.log(e.target.id);
    props.onRemove(e.target.id);
  }
  return (
    <div className="cart-item row">
      <img src={props.item.img}></img>
      <div>
        <p>{props.item.desc}</p>
        <div className="row">
          <p>${props.item.price} x {props.item.count}</p>
          <button id={props.item.id} onClick={removeHandler} >remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
