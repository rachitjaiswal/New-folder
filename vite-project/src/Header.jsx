import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <div className="search-container">
        <input type="text" placeholder="Search here..." className="search-input" />
        <button className="filters-button">Filters</button>
      </div>
      <button className="become-seller">Become a Seller</button>
    </header>
  );
}

export default Header;
