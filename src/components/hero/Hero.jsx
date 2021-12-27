import React from "react";

export const Hero = () => {
  return (
    <div
      className="hero__img"
      style={{ backgroundImage: "url(/img/hero-photo.jpg)" }}
    >
      <div className="container hero__text">
        <div className="row">
          <div className="pl-2 mt-5 col-12-xs col-8-md">
            <h1 className="font-xl">Hello</h1>
            <h1 className="font-xl mt-1 mb-1">
              My name is <span className="font-xxl text-fourth">Adam Kudłacik</span>
            </h1>
            <h1 className="">
              and im a <span className="font-xxl text-fourth">Front-end</span> developer
            </h1>
          </div>
        </div>
      </div>
      <div className="arrow font-xl text-hover-fourth">
        <i class="fas fa-arrow-circle-down"></i>
      </div>
    </div>
  );
};
