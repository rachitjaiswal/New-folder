import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <div className="post">
        <div className="user">
          <img src="user-image.jpg" alt="user" className="user-image" />
          <div>
            <p className="username">Lara Leones</p>
            <p className="user-handle">@thewallart</p>
          </div>
        </div>
        <p className="post-text">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="read-more">Read More</span>
        </p>
        <img src="post-image.jpg" alt="post" className="post-image" />
        <div className="post-stats">
          <span>9.8k</span>
          <span>8.6k</span>
          <span>7.2k</span>
        </div>
      </div>
      {/* Repeat the post div for more posts */}
    </div>
  );
}

export default MainContent;
