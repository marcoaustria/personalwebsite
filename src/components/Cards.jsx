import React, { Fragment } from "react";
import { Card, CardColumns } from "react-bootstrap";
import "../styles/Cards.css";

export const Cards = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-11 col-xl-10">
          <CardColumns style={{ padding: "20px" }}>
            <Card className="p-3" id="textCard">
              <blockquote
                className="blockquote mb-0 card-body"
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                <p>Beautiful things don't ask for attention.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    <cite title="Source Title">
                      The Secret Life of Walter Mitty
                    </cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/lalaland.jpg")} />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/office.jpeg")} />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/uf.jpg")} />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/supra.gif")} />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/ferrisbueller.jpg")} />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/rooftop.jpg")} />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/doge.jpg")} />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/jobs.jpg")} />
            </Card>
            <Card className="p-3" id="textCard">
              <blockquote
                className="blockquote mb-0 card-body"
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                <p> Is there love in the telematic embrace?</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    <cite title="Source Title">Roy Ascott</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/wonderfullife.jpg")} />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/gilberto.jpg")} />
            </Card>
            <Card id="card">
              <Card.Img
                style={{
                  width: "50%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={require("../assets/img/pikachu.jpg")}
              />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/jobim.jpg")} />
            </Card>
            <Card id="card">
              <Card.Img
                style={{
                  width: "50%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={require("../assets/img/speedracer.jpg")}
              />
            </Card>
            <Card id="card">
              <Card.Img src={require("../assets/img/planewing.jpg")} />
            </Card>

            {/* <Card>
          <div className="row align-items-center">
            <div className="col">
              <iframe
                src="https://open.spotify.com/embed/playlist/3Co09fEKXIqDkDrL5P5YLB"
                width="340"
                height="340"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </Card> */}
            <Card className="text-right" id="textCard">
              <blockquote
                className="blockquote mb-0 card-body"
                style={{
                  textAlign: "start",
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <footer
                  className="blockquote-footer"
                  style={{
                    textAlign: "end",
                  }}
                >
                  <small className="text-muted">
                    <cite title="Source Title">meta</cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
          </CardColumns>
        </div>
      </div>
    </>
  );
};

export default Cards;
