import React from 'react';

const PortfolioItem = ({ image, title, description }) => {
    return (
        <div className="portfolio-item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default PortfolioItem;