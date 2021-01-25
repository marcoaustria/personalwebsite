import React from "react";
import NavbarComp from "./NavbarComp";
import { Spinner, Jumbotron, Button } from "react-bootstrap";
// import "../assets/css/style.css";

export const Typography = () => {
  // const jumbotrons={
  //   {
  //     style: {
  //       color: "#331391",
  //       fontFamily: "Raleway, sans-serif",
  //       textAlign: "start"
  //     },
  //     text:"hello"
  //   },
  //   {
  //     style: {
  //       color: "#331391",
  //       fontFamily: "Raleway, sans-serif",
  //       textAlign: "start"
  //     },
  //     text:"hello"
  //   }

  // }
  return (
    <>
      <NavbarComp />
      <h1 className="m-3 " style={{ fontFamily: "Poiret One, cursive" }}>
        Typography
      </h1>

      {/* {jumbotrons.map((card) => (
        <Jumbotron>
          <h2 style={card.style}>{card.text}</h2>
          <p style={{ textAlign: "start" }}>{card.text}</p>
        </Jumbotron>
      ))} */}

      <div className="row m-2">
        <div className="col">
          <Jumbotron>
            <h2
              style={{
                fontFamily: "Amiri, serif",
                textAlign: "start",
              }}
            >
              Lord, to whom shall we go? You have the words of eternal life. We
              have come to believe and to know that you are the Holy One of God.
            </h2>
          </Jumbotron>
        </div>
        <div className="col">
          <Jumbotron>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",

                textAlign: "start",
              }}
            >
              We love because he first loved us.
            </h2>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                textAlign: "start",
              }}
            >
              1 John 4:19
            </p>
          </Jumbotron>
        </div>
      </div>
    </>
  );
};
export default Typography;
