import React, { useState } from "react";
import { Spinner, Jumbotron, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect/dist/core";
import { FaICursor } from "react-icons/fa";

export const Typography = () => {
  const [buttonOn, setButtonOn] = useState(true);
  const jumbotrons = [
    {
      style: {
        fontFamily: "Cormorant Garamond, serif",
        textAlign: "start",
      },
      text: "We love because He first loved us.",
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
    {
      style: {
        fontFamily: "Montserrat Alternates, sans-serif",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "meu bem",
    },
    {
      style: {
        fontFamily: "Comfortaa, cursive",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "tchau!",
    },
    {
      style: {
        fontFamily: "ZCOOL Kuaile, cursive",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "没问题",
    },
    {
      style: {
        fontFamily: "Ma Shan Zheng, cursive",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "我爱你",
    },
    {
      style: {
        fontFamily: "Liu Jian Mao Cao, cursive",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "加油加油",
    },
    {
      style: {
        fontFamily: "ZCOOL QingKe HuangYou, cursive",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "帅强",
    },
    {
      style: {
        fontFamily: "Raleway Dots, cursive",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "yikes",
    },
    {
      style: {
        fontFamily: "Josefin Sans, sans-serif",
        textAlign: "start",
        marginBottom: 0,
      },
      text: "café con Dios",
    },
  ];

  const writeType = (txt) => {
    var app = document.getElementById(txt + "-typewriter");

    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 50,
    });
    typewriter.typeString(txt).start();
  };

  return (
    <>
      {/* <NavbarComp /> */}
      {/* <h2
        className="mb-3 mt-2 "
        style={{ color: "#7B7484", fontFamily: "Poiret One, cursive" }}
      >
        Typography
      </h2> */}

      <div className="row m-3 mt-5 ">
        {jumbotrons.map((card) => (
          <div className="col-lg-6" style={{ height: "100%" }}>
            <Jumbotron>
              <h2 id={`${card.text}-typewriter`} style={card.style}></h2>
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
              {buttonOn && (
                <Button
                  variant="light"
                  className="mt-3"
                  style={{ marginBottom: "-50px" }}
                  onClick={() => {
                    writeType(card.text);
                  }}
                >
                  <FaICursor />
                </Button>
              )}
            </Jumbotron>
          </div>
        ))}
      </div>
      {buttonOn && (
        <Button
          variant="light"
          style={{
            marginTop: "-25px",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={() => {
            jumbotrons.forEach((card) => {
              writeType(card.text);
              setButtonOn(false);
            });
          }}
        >
          type all
        </Button>
      )}
    </>
  );
};
export default Typography;
