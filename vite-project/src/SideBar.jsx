import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        
        <li>Home</li>
        <li>Notifications</li>
        <li>Shop</li>
        <li>Conversation</li>
        <li>Wallet</li>
        <li>Subscription</li>
        <li>My Profile</li>
        <li>Settings</li>
        <li className="logout">Log out</li>
      </ul>
      <div className="footer">
        <p>2022 logo name</p>
        <p>Developed by Ivan Infotech</p>
      </div>
    </div>
  );
}

export default Sidebar;
