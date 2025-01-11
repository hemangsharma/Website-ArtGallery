import React from "react";
import "./Gallery.css";

const paintings = [
  { src: "https://via.placeholder.com/300", title: "Sunset Bliss", desc: "A serene view of a golden sunset." },
  { src: "https://via.placeholder.com/300", title: "Ocean Waves", desc: "Capturing the power of nature." },
  { src: "https://via.placeholder.com/300", title: "Mountain Peace", desc: "Tranquility in the mountains." },
  { src: "https://via.placeholder.com/300", title: "Forest Dreams", desc: "The beauty of a lush forest." },
  { src: "https://via.placeholder.com/300", title: "City Lights", desc: "The bustling charm of urban life." },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {paintings.map((painting, index) => (
        <div key={index} className="art-item">
          <img src={painting.src} alt={painting.title} />
          <h3>{painting.title}</h3>
          <div className="hover-overlay">
            <p>{painting.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
