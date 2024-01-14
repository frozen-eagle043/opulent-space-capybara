import React from 'react'
import ImageCard from './ImageCard';
const Body = () => {
  const images = [
    "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.jpg?s=1024x1024&w=is&k=20&c=Zyc6mQ-VrbJIVjPOhrdzKlr6CpUdpcqT__bPJHJemXI=",
    "https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=1024x1024&w=is&k=20&c=CdAO7r8O3xWGG_v3aqJCCEWwQTRG2PIvZqyZS0933T0=",
    // Add more image URLs as needed
  ];
  return (
    <div>
      <ImageCard images={images} />
      
    </div>
  );
}

export default Body