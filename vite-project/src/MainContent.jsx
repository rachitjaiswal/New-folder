// MainContent.js
import React from 'react';
import './MainContent.css';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import ProductCard from './ProductCard';
import productImage1 from './assets/Image 39@2x.png'; // replace with actual path
import productImage2 from './assets/Image 40@2x.png'; // replace with actual path

function MainContent() {
  return (
    <div className="main-content">
      <div className="post">
        <div className="user">
          <img src="./src/assets/pexels-ali-pazani-2613260@2x.png" alt="user" className="user-image" />
          <div>
            <p className="username">Lara Leones</p>
            <p className="user-handle">@thewallart</p>
          </div>
        </div>
        <p className="post-text">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="read-more">Read More</span>
        </p>
        <img src="./src/assets/pexels-humphrey-muleba-2045248@2x.png" alt="post" className="post-image" />
        <div className="post-stats">
          <span><FaHeart className="icon" /> 9.8k</span>
          <span><FaComment className="icon" /> 8.6k</span>
          <span><FaShare className="icon" /> 7.2k</span>
        </div>
      </div>
      <div className="post">
        <div className="user">
          <img src="./src/assets/pexels-imad-clicks-9810659@2x.png" alt="user" className="user-image" />
          <div>
            <p className="username">Thomas J.</p>
            <p className="user-handle">@thecustomcreator</p>
          </div>
        </div>
        <p className="post-text">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="read-more">Read More</span>
        </p>
        <img src="./src/assets/pexels-tobias-bjørkli-2236382@2x.png" alt="post" className="post-image" />
        <div className="post-stats">
          <span><FaHeart className="icon" /> 9.8k</span>
          <span><FaComment className="icon" /> 8.6k</span>
          <span><FaShare className="icon" /> 7.2k</span>
        </div>
      </div>
      {/* Product Section */}
      <div className="product-section">
        <ProductCard 
          image={productImage1} 
          title="Modern Wall Decor Framed Painting" 
          price="199.99" 
          rating={5} 
        />
        <ProductCard 
          image={productImage2} 
          title="Modern Wall Decor Framed Painting" 
          price="199.99" 
          rating={5} 
        />
      </div>
    </div>
  );
}

export default MainContent;
