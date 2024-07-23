import React from "react";

const Body = () => {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="hero-btn">
            <button className="buttshop">Shop Now</button>
            <button className="buttcat">Category</button>
          </div>

          <div className="shopping">
            <p>Also available on </p>
            <div className="brand-icons">
              <img src="/images/flipkartLOGO.jpeg" height={30} />
              <img src="/images/amazonLOGO.png" height={30} />
            </div>
          </div>
        </div>

        <div className="hero-img">
          <img src="/images/shoe2.jpeg" height={600} />
        </div>
      </main>
    </div>
  );
};

export default Body;
