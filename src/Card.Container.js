import React from 'react';
import Card from './Card';
import { data } from './data';
import './Card.Container.css';

function CardContainer(props) {
  return (
    <div className="card-container">
      {data.map((el) => (
        <Card data={el} />
      ))}
    </div>
  );
}

export default CardContainer;
