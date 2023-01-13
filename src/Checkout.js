import React, { useState } from 'react';
import './Checkout.style.css';

function Checkout(props) {
  const [infoUser, setInfoUser] = useState('');
  const [infoEmail, setInfoEmail] = useState('');
  const [infoAddress, setInfoAddress] = useState('');
  const [border, setBorder] = useState("1px gray solid");
  const [border1, setBorder1] = useState("1px gray solid");
  const [border2, setBorder2] = useState("1px gray solid");
  const checkOutHandler = () => {
    console.log(infoUser, infoEmail, infoAddress);
    setInfoUser('');
    setInfoEmail('');
    setInfoAddress('');
    alert('your information received');
  }
  const nameHandler = (e) => {
    if ((e.target.value).length > 3) {
      setBorder('1px gray solid')
    } else {
      setBorder('red 2px solid')
    }
    setInfoUser(e.target.value)
  }
  const emailHandler = (e) => {
    if ((e.target.value).includes('@')) {
      setBorder1('1px gray solid')
    } else {
      setBorder1('red 2px solid')
    }
    setInfoEmail(e.target.value)
  }
  const addreeHandler = (e) => {
    if ((e.target.value).length > 5) {
      setBorder2('1px gray solid')
    } else {
      setBorder2('red 2px solid')
    }
    setInfoAddress(e.target.value)
  }
  return (
    <div className="checkout">
      <div>
        <p>Name</p>
        <input style={{ border: border }} onChange={nameHandler} value={infoUser} type='text' placeholder='Enter Your name' />
      </div>
      <div>
        <p>Email</p>
        <input style={{ border: border1 }} onChange={emailHandler} value={infoEmail} type='email' placeholder='Enter Your Email' />
      </div>
      <div>
        <p>Address</p>
        <input style={{ border: border2 }} type='text' onChange={addreeHandler} value={infoAddress} placeholder='Enter Your Password' />
      </div>
      <button onClick={checkOutHandler}>Checkout</button>
    </div>
  );
}

export default Checkout;
