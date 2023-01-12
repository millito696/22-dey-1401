import React from 'react';
import './Navbar.style.css';

function Navbar(props) {
  return (
    <div className="row">
      <div>
        <p>Products</p>
      </div>
      <div className="row">
        <p>Oreder</p>
        <select>
          <option>Lowest</option>
          <option>Highest</option>
        </select>
      </div>
      <div className="row">
        <p>Filter</p>
        <select>
          <option>All</option>
          <option>xs</option>
          <option>s</option>
          <option>m</option>
          <option>l</option>
          <option>xl</option>
          <option>xxl</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
