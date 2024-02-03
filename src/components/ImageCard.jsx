import React from "react";
//import "./ImageCard.css"; // Assuming you have a CSS file for styling

const ImageCard = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
