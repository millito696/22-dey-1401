import React from 'react';
import Card from './Card';
import { data } from './data';
import './Card.Container.css';

let dataSorted = data.sort((a, b) => a.price - b.price);

function CardContainer(props) {
  return (
    <div className="card-container">
      {dataSorted.map((el) => (
        <Card data={el} />
      ))}
    </div>
  );
}

export default CardContainer;
