import React from "react";
import LazyHero from "react-lazy-hero";
import { Image, Col, Row, Container, Nav } from "react-bootstrap";
import "../styles/Professional.css";

const Professional = () => {
  const psalm23 = [
    {
      imgSrc: require("../assets/img/psalm23.jpg"),
      text: "PSALM 23",
    },
    {
      imgSrc: require("../assets/img/shepherd.jpg"),
      text: "The Lord is my shepherd",
    },
    {
      imgSrc: require("../assets/img/lack.jpg"),
      text: "I lack nothing.",
    },

    {
      imgSrc: require("../assets/img/field.jpg"),
      text: "He makes me lie down in green pastures",
    },

    {
      imgSrc: require("../assets/img/stream2.jpg"),
      text: "He leads me beside quiet waters",
    },

    {
      imgSrc: require("../assets/img/refresh.jpg"),
      text: "He refreshes my soul.",
    },
  ];
  return (
    <>
      <LazyHero
        minHeight="90vh"
        opacity="0"
        imageSrc={require("../assets/img/church.jpg")}
        parallaxOffset="1"
        transitionDuration="500"
      >
        <h1>Generic Startup Hype Headline</h1>
      </LazyHero>
      <div id="water">
        <img src={require("../assets/img/water.jpg")} />
      </div>

      <Container className="images-container" fluid>
        <Row noGutters="true">
          <Col>
            <div>
              <a href="#/typography">
                <Image
                  src={require("../assets/img/wave.jpg")}
                  className="inner"
                  fluid
                />
                <div className="wave-text">
                  Even the winds and the waves obey Him
                </div>
              </a>
            </div>
          </Col>
          <Col>
            <Image src={require("../assets/img/moon.jpg")} fluid />
          </Col>
        </Row>
      </Container>

      {/* Psalm 23 ===================================================================*/}
      <Container className="images-container" fluid>
        {psalm23.map((card) => (
          <Row noGutters="true">
            <Col>
              <Image src={card.imgSrc} fluid />
              <div className="psalm23-text">{card.text}</div>
            </Col>
          </Row>
        ))}
      </Container>
      {/* Psalm 23 ===================================================================*/}

      <Container className="footer" fluid>
        <Row lg={6}>
          <Col style={{ marginLeft: "20px" }}>
            <p className="footer-section">Header</p>
            <Nav.Link href="#/professional"> Lorem</Nav.Link>
            <Nav.Link href="#/professional"> Ipsum</Nav.Link>
            <Nav.Link href="#/professional"> Dolor</Nav.Link>
            <Nav.Link href="#/professional"> Sit</Nav.Link>
            <Nav.Link href="#/professional"> Atem</Nav.Link>
          </Col>
          <Col style={{ marginLeft: "20px" }}>
            <p className="footer-section">Header</p>
            <Nav.Link href="#/professional"> Lorem</Nav.Link>
            <Nav.Link href="#/professional"> Ipsum</Nav.Link>
            <Nav.Link href="#/professional"> Dolor</Nav.Link>
            <Nav.Link href="#/professional"> Sit</Nav.Link>
            <Nav.Link href="#/professional"> Atem</Nav.Link>
          </Col>
          <Col style={{ marginLeft: "20px" }}>
            <p className="footer-section">Header</p>
            <Nav.Link href="#/professional"> Lorem</Nav.Link>
            <Nav.Link href="#/professional"> Ipsum</Nav.Link>
            <Nav.Link href="#/professional"> Dolor</Nav.Link>
            <Nav.Link href="#/professional"> Sit</Nav.Link>
            <Nav.Link href="#/professional"> Atem</Nav.Link>
          </Col>
          <Col style={{ marginLeft: "20px" }}>
            <p className="footer-section">Header</p>
            <Nav.Link href="#/professional"> Lorem</Nav.Link>
            <Nav.Link href="#/professional"> Ipsum</Nav.Link>
            <Nav.Link href="#/professional"> Dolor</Nav.Link>
            <Nav.Link href="#/professional"> Sit</Nav.Link>
            <Nav.Link href="#/professional"> Atem</Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Professional;
