import React, { Fragment } from "react";
import { Card, CardColumns } from "react-bootstrap";
import "../styles/Cards.css";

export const Cards = () => {
  return (
    <React.Fragment>
      <CardColumns style={{ padding: "20px" }}>
        <Card className="p-3">
          <blockquote className="blockquote mb-0 card-body">
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
        <Card>
          <Card.Img src={require("../assets/img/lalaland.jpg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/office.jpeg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/uf.jpg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/supra.gif")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/ferrisbueller.jpg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/rooftop.jpg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/doge.jpg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/jobs.jpg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/wonderfullife.jpg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/gilberto.jpg")} />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/jobim.jpg")} />
        </Card>
        <Card>
          <Card.Img
            style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
            src={require("../assets/img/speedracer.jpg")}
          />
        </Card>
        <Card>
          <Card.Img src={require("../assets/img/planewing.jpg")} />
        </Card>
        <Card className="p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p> Is there love in the telematic embrace?</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">Roy Ascott</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Img
            style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
            src={require("../assets/img/pikachu.jpg")}
          />
        </Card>

        <Card>
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
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p style={{ textAlign: "start" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">meta</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
      </CardColumns>
    </React.Fragment>
  );
};

export default Cards;
