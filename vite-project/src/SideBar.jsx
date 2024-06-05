import React from 'react';
import './Sidebar.css';
import { FaHome, FaBell, FaHeart, FaEnvelope, FaWallet, FaRegPaperPlane, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item active">
          <FaHome className="icon" />
          <span>Home</span>
        </li>
        <li className="menu-item">
          <FaBell className="icon" />
          <span>Notifications</span>
        </li>
        <li className="menu-item">
          <FaHeart className="icon" />
          <span>Shop</span>
        </li>
        <li className="menu-item">
          <FaEnvelope className="icon" />
          <span>Conversation</span>
        </li>
        <li className="menu-item">
          <FaWallet className="icon" />
          <span>Wallet</span>
        </li>
        <li className="menu-item">
          <FaRegPaperPlane className="icon" />
          <span>Subscription</span>
        </li>
        <li className="menu-item">
          <FaUser className="icon" />
          <span>My Profile</span>
        </li>
        <li className="menu-item">
          <FaCog className="icon" />
          <span>Settings</span>
        </li>
        <li className="menu-item logout">
          <FaSignOutAlt className="icon" />
          <span>Log out</span>
        </li>
      </ul>
      <div className="footer">
        <p>2022 logo name</p>
        <p>Developed by Ivan Infotech</p>
      </div>
    </div>
  );
}

export default Sidebar;
