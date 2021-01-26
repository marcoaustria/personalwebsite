import React from "react";
import { Spinner, Jumbotron, Button } from "react-bootstrap";

export const Typography = () => {
  const jumbotrons = [
    {
      style: {
        fontFamily: "Amiri, serif",
        textAlign: "start",
        marginBottom: 0,
      },
      text:
        "Lord, to whom shall we go? You have the words of eternal life. We have come to believe and to know that You are the Holy One of God.",
    },
    {
      style: {
        fontFamily: "Cormorant Garamond, serif",
        textAlign: "start",
      },
      text: "We love because He first loved us.",
      secondText: "1 John 4:19",
    },
    {
      style: {
        fontFamily: "Cinzel, serif",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "Jesus is Lord",
    },
    {
      style: {
        fontFamily: "Tangering, cursive",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "musings",
    },
  ];
  return (
    <>
      {/* <NavbarComp /> */}
      <h1 className="mb-3 mt-2 " style={{ fontFamily: "Poiret One, cursive" }}>
        Typography
      </h1>

      <div className="row m-2">
        {jumbotrons.map((card) => (
          <div className="col-6">
            <Jumbotron>
              <h2 style={card.style}>{card.text}</h2>
              {card.secondText ? (
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "start",
                  }}
                >
                  {card.secondText}
                </p>
              ) : (
                ""
              )}
            </Jumbotron>
          </div>
        ))}
      </div>
    </>
  );
};
export default Typography;
