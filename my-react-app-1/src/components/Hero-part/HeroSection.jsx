import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main>
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button type="button">Shop Now</button>
          <button className="btn-2">Category</button>
        </div>
        <div className="shop-icons">
          <img src="./images/flipkart.png" alt="filipkart-icon" />
          <p>Also Available On</p>
          <img src="./images/amazon.png" alt="amazon-icon" />
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/shoe_image.png" alt="show-img" />
      </div>
    </main>
  );
};

export default HeroSection;
