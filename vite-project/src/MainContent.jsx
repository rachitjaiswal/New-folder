import React from 'react';
import './MainContent.css';
import Post from './Post';

function MainContent() {
  return (
    <div className="main-content">
      <div className="search-bar">
        <input type="text" placeholder="Search here..." />
        <button className="filters">Filters</button>
      </div>
      <div className="posts">
        <Post 
          username="Lara Leones" 
          userhandle="@thewallart" 
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          image="image_url" 
          likes="9.8k" 
          comments="8.6k" 
          shares="7.2k" 
        />
        <Post 
          username="Thomas J." 
          userhandle="@thecustomcreator" 
          content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          image="image_url" 
          likes="9.8k" 
          comments="8.6k" 
          shares="7.2k" 
        />
      </div>
    </div>
  );
}

export default MainContent;
