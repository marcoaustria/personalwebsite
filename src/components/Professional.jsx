import React from "react";
import LazyHero from "react-lazy-hero";
import "../styles/Professional.css";

const Professional = () => {
  return (
    <>
      <LazyHero
        minHeight="90vh"
        opacity="0.5"
        imageSrc="https://unsplash.it/2000/1000"
        parallaxOffset="100"
        transitionDuration="500"
      >
        <h1>Generic Startup Hype Headline</h1>
      </LazyHero>
      <div id="water">
        <img src={require("../assets/img/water.jpg")}></img>
      </div>
    </>
  );
};

export default Professional;
