import React from 'react';
import './Navbar.style.css';

function Navbar(props) {
  const priceSortHandler = (e) => {
    props.onPriceSortChange(e.target.value)
    // console.log(`from NavBAr ${e.target.value}`)
  }
  const sizeSorthandler = (e) => {
    props.onSizeSortChange(e.target.value)
  }
  return (
    <div className="row navbar">
      <div>
        <p>Products : {props.products}</p>
      </div>
      <div className="row">
        <p>Order</p>
        <select onChange={priceSortHandler}>
          <option value='lowest'>Lowest</option>
          <option value='highest'>Highest</option>
        </select>
      </div>
      <div className="row">
        <p>Filter</p>
        <select onChange={sizeSorthandler}>
          <option value='all'>All</option>
          <option value='xs'>xs</option>
          <option value='s'>s</option>
          <option value='m'>m</option>
          <option value='l'>l</option>
          <option value='xl'>xl</option>
          <option value='xxl'>xxl</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
