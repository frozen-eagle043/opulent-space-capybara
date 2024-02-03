import React from "react";
import ImageCard from "./ImageCard";
//import "./Body.css"; // Only if you have specific styles for Body

const Body = () => {
  const images = [
    "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.jpg",
    "https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="body-container">
      <ImageCard images={images} />
    </div>
  );
};

export default Body;
