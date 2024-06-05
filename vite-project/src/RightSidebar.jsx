
import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div>
        <div className="tab">
          <button className="active">Artists</button>
          <button>Photographers</button>
        </div>
        <div className="tabcontent">
          <div
            className="profile"
            style={{ backgroundImage: "url('./src/assets/pexels-ekaterina-12203460@2x.png')" }}
          >
            <img
              src="./src/assets/pexels-anastasia-shuraeva-4406721-1@2x.png"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <p className="profile-name">Thomas Edward</p>
              <p className="profile-handle">@thewildwithyou</p>
            </div>
          </div>
          <div
            className="profile"
            style={{ backgroundImage: "url(./src/assets/pexels-genaro-servín-763210@2x.png)" }}
          >
            <img
              src="./src/assets/pexels-andrea-piacquadio-3771118@2x.png"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <p className="profile-name">Chris Doe</p>
              <p className="profile-handle">@thewildwithyou</p>
            </div>
          </div>
          <div
            className="profile"
            style={{ backgroundImage: "url(./src/assets/pexels-pixabay-164455@2x.png)" }}
          >
            <img
              src="./src/assets/pexels-antoni-shkraba-4442102@2x.png"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <p className="profile-name">Emilie Jones</p>
              <p className="profile-handle">@thewildwithyou</p>
            </div>
          </div>
          <div
            className="profile"
            style={{ backgroundImage: "url('./src/assets/pexels-steve-johnson-1269968@2x.png')" }}
          >
            <img
              src="./src/assets/pexels-antoni-shkraba-4442005@2x.png"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <p className="profile-name">Jessica Williams</p>
              <p className="profile-handle">@thewildwithyou</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <a href="#">Privacy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Notice</a>
      </div>
    </div>
  );
};

export default RightSidebar;
