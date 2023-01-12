import React from 'react';
import './Modal.style.css';

function Modal(props) {
  return (
    <div className="modal">
      <div className="relative">
        <img src="./img/dress1.jpg"></img>
        <div className="description">
          <div className="row">
            <h3>dfggsdfg</h3>
            <button>X</button>
          </div>
          <p>
            sdfgdhfghfhfghfhfh fghgfh fghfghfxhgsdghazhsdh sdghdghfgh
            fghxfhfxghfx xfghxfghxghdgh
          </p>
          <div className="row">
            <p>Price: 10000000</p>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
