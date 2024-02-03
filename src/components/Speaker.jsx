import React from "react";
// import "./Speakers.css"; // Import your styles

const Speakers = () => {
  // Sample data for speakers
  const speakersData = [
    {
      id: 1,
      name: "Speaker 1",
      designation: "Professor",
      institute: "University A",
      imageUrl:
        'F:IEEEopulent-space-capybarasrcistockphoto-1223671392-612x612.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      name: "Speaker 2",
      designation: "Researcher",
      institute: "Institute B",
      imageUrl:
        "F:IEEEopulent-space-capybarasrcistockphoto-1223671392-612x612.jpg", // Replace with actual image URL
    },
    // Add more speakers as needed
  ];

  return (
    <div className="speakers-container">
      {speakersData.map((speaker) => (
        <div key={speaker.id} className="speaker-card">
          <div className="speaker-image">
            <img src={speaker.imageUrl} alt={speaker.name} />
            <div className="curtain">
              <div className="speaker-info">
                <p>{speaker.name}</p>
                <p>{speaker.designation}</p>
                <p>{speaker.institute}</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speakers;
