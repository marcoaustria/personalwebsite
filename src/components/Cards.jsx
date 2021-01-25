import React, { Fragment } from "react";
import { Card, CardColumns } from "react-bootstrap";

import logo from "../logo.svg";
// import "../assets/css/style.css";

export const Cards = () => {
  return (
    <React.Fragment>
      <CardColumns>
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
          <Card.Img variant="top" src={require("../assets/img/lalaland.jpg")} />
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/img/office.jpeg")} />
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/img/uf.jpg")} />
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/img/supra.gif")} />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/img/ferrisbueller.jpg")}
          />
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/img/rooftop.jpg")} />
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/img/doge.jpg")} />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/img/wonderfullife.jpg")}
          />
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/img/gilberto.jpg")} />
        </Card>
        <Card>
          <Card.Img variant="top" src={require("../assets/img/jobim.jpg")} />
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={require("../assets/img/planewing.jpg")}
          />
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
          <Card.Img variant="top" src={require("../assets/img/pikachu.jpg")} />
        </Card>

        <Card className="text-center">
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
      </CardColumns>
    </React.Fragment>
  );
};

export default Cards;
