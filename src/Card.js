import React from 'react';
import './Card.style.css';

function Card(props) {
  const addToCartHandler = (e) => {
    props.onClickAddToCart(e.target.id);
  }
  return (
    <div className="card">
      <div className="picture">
        <img src={props.data.img}></img>
      </div>
      <p>{props.data.desc}</p>
      <div className="row">
        <p>${props.data.price}</p>
        <button id={props.data.id} onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Card;
