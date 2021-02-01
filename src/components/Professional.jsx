import React from "react";
import LazyHero from "react-lazy-hero";
import { Image, Col, Row, Container } from "react-bootstrap";
import "../styles/Professional.css";

const Professional = () => {
  return (
    <>
      <LazyHero
        minHeight="90vh"
        opacity="0.5"
        imageSrc={require("../assets/img/church.jpg")}
        parallaxOffset="1"
        transitionDuration="500"
      >
        <h1>Generic Startup Hype Headline</h1>
      </LazyHero>
      <div id="water">
        <img src={require("../assets/img/water.jpg")} />
      </div>
      <div class="container-fluid">
        <div id="water" className="row">
          {/* <div className="col" id="column">
            <img src={require("../assets/img/wave.jpg")} class="img-fluid" />
          </div> */}
          {/* <div className="col" id="column">
            <img src={require("../assets/img/wave.jpg")} class="img-fluid" />
          </div> */}
        </div>
      </div>
      <Container fluid className="images-container">
        <Row noGutters="true">
          <Col>
            <Image src={require("../assets/img/wave.jpg")} fluid />
          </Col>
          <Col>
            <Image src={require("../assets/img/moon.jpg")} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Professional;
