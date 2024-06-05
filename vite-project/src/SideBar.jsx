import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="SideBar">
      <div className="logo">LOGO</div>
      <ul className="menu">
        <li>Home</li>
        <li>Notifications</li>
        <li>Shop</li>
        <li>Conversation</li>
        <li>Wallet</li>
        <li>Subscription</li>
        <li>My Profile</li>
        <li>Settings</li>
      </ul>
      <button className="logout">Log out</button>
    </div>
  );
}

export default SideBar;
