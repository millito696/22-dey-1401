import React from 'react';
import './Cart.Item.style.css';

function CartItem() {
  return (
    <div className="cart-item row">
      <img src="./img/dress2.jpg"></img>
      <div>
        <p>Midi sunsdfsdf</p>
        <div className="row">
          <p>$18.9 x 1</p>
          <button>remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
