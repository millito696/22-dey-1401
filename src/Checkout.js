import React from 'react';
import './Checkout.style.css';

function Checkout() {
  return (
    <div className="checkout">
      <div>
        <p>Name</p>
        <input></input>
      </div>
      <div>
        <p>Email</p>
        <input></input>
      </div>
      <div>
        <p>Address</p>
        <input></input>
      </div>
      <button>Checkout</button>
    </div>
  );
}

export default Checkout;
