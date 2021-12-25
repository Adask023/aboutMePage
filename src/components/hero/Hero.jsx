import React from "react";

export const Hero = () => {
  return (
    <div className="hero__img " style={{backgroundImage: 'url(/img/hero-photo.jpg)'}}>
      <div className="container hero__text">
        <h1>Hello</h1>
        <h2>Im, Front end Developer</h2>
      </div>

      {/* <img src="/img/hero-photo.jpg"  alt="" /> */}
    </div>
  );
};
