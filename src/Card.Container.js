import React from 'react';
import Card from './Card';
import { data } from './data';
import './Card.Container.css';

let dataSorted = data.sort((a, b) => a.price - b.price);

function CardContainer(props) {
  props.priceSort === 'lowest' ? dataSorted = data.sort((a, b) => a.price - b.price) : dataSorted = data.sort((a, b) => b.price - a.price);
  switch (props.sizeSort) {
    case 'all':
      props.priceSort === 'lowest' ? dataSorted = data.sort((a, b) => a.price - b.price) : dataSorted = data.sort((a, b) => b.price - a.price);
      break;
    case 'xs':
      dataSorted = data.filter((el) => el.sizes.includes('xs'));
      break;
    case 's':
      dataSorted = data.filter((el) => el.sizes.includes('s'));
      break;
    case 'm':
      dataSorted = data.filter((el) => el.sizes.includes('m'));
      break;
    case 'l':
      dataSorted = data.filter((el) => el.sizes.includes('l'));
      break;
    case 'xl':
      dataSorted = data.filter((el) => el.sizes.includes('xl'));
      break;
    case 'xxl':
      dataSorted = data.filter((el) => el.sizes.includes('xxl'));
      break;
    default:
      break;
  }
  return (
    <div className="card-container">
      {dataSorted.map((el) => (
        <Card key={el.id} data={el} />
      ))}
    </div>
  );
}

export default CardContainer;
