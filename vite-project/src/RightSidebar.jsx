import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      
      <div className="artists">
        <h3>Artists</h3>
        <div className="artist">
          <img src="artist1.jpg" alt="artist" className="artist-image" />
          <p className="artist-name">Thomas Edward</p>
        </div>
        <div className="artist">
          <img src="artist2.jpg" alt="artist" className="artist-image" />
          <p className="artist-name">Chris Doe</p>
        </div>
        <div className="artist">
          <img src="artist3.jpg" alt="artist" className="artist-image" />
          <p className="artist-name">Emilie Jones</p>
        </div>
        <div className="artist">
          <img src="artist4.jpg" alt="artist" className="artist-image" />
          <p className="artist-name">Jessica Williams</p>
        </div>
      </div>
      <div className="footer">
        <a href="#">Privacy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Notice</a>
      </div>
    </div>
  );
}

export default RightSidebar;
