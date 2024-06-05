// ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price, rating }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <p className="product-title">{title}</p>
            <p className="product-price">${price}</p>
            <div className="product-rating">
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>&#9733;</span>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
