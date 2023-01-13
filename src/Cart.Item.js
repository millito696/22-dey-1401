import React from 'react';
import './Cart.Item.style.css';

function CartItem(props) {
  return (
    <div className="cart-item row">
      <img src={props.item.img}></img>
      <div>
        <p>{props.item.desc}</p>
        <div className="row">
          <p>${props.item.orice} x 1</p>
          <button>remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
