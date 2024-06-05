import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa'; // You need to install react-icons package

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search here..." className="search-input" />
        <button className="filters-button">Filters</button>
      </div>
      <button className="become-seller">Become a Seller</button>
    </header>
  );
}

export default Header;
