import React, { useState } from 'react';
import Card from './Card';
import { data } from './data';
import './Card.Container.css';

let dataSorted = data.sort((a, b) => a.price - b.price);

function CardContainer(props) {
  // props.onAddToCart()
  props.priceSort === 'lowest' ? dataSorted = data.sort((a, b) => a.price - b.price) : dataSorted = data.sort((a, b) => b.price - a.price);
  switch (props.sizeSort) {
    case 'all':
      props.priceSort === 'lowest' ? dataSorted = data.sort((a, b) => a.price - b.price) : dataSorted = data.sort((a, b) => b.price - a.price);
      props.products(dataSorted.length);
      break;
    case 'xs':
      dataSorted = data.filter((el) => el.sizes.includes('xs'));
      props.products(dataSorted.length);
      break;
    case 's':
      dataSorted = data.filter((el) => el.sizes.includes('s'));
      props.products(dataSorted.length);
      break;
    case 'm':
      dataSorted = data.filter((el) => el.sizes.includes('m'));
      props.products(dataSorted.length);
      break;
    case 'l':
      dataSorted = data.filter((el) => el.sizes.includes('l'));
      props.products(dataSorted.length);
      break;
    case 'xl':
      dataSorted = data.filter((el) => el.sizes.includes('xl'));
      props.products(dataSorted.length);
      break;
    case 'xxl':
      dataSorted = data.filter((el) => el.sizes.includes('xxl'));
      props.products(dataSorted.length);
      break;
    default:
      break;
  }

  return (
    <div className="card-container">
      {dataSorted.map((el) => (
        <Card key={el.id} data={el} onClickAddToCart={props.onAddToCart} />
      ))}
    </div>
  );
}

export default CardContainer;
