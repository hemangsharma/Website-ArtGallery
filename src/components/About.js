import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <img
        src="https://via.placeholder.com/300x300?text=Painter"
        alt="The Painter"
        className="painter-image"
      />
      <div className="about-text">
        <h2>About the Painter</h2>
        <p>
          Welcome to my gallery! I’m an artist who loves capturing the beauty of
          the world through colors and creativity. Each painting tells a story,
          and I hope you enjoy exploring them as much as I enjoyed creating
          them.
        </p>
      </div>
    </section>
  );
};

export default About;