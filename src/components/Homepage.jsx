import React, { Fragment } from "react";
// import "../assets/css/style.css";
import Cards from "./Cards";
import NavbarComp from "./NavbarComp";

export const Homepage = () => {
  return (
    <Fragment>
      <NavbarComp />

      <div className="row align-items-center m-3 border-0">
        <div className="col">
          <Cards />
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
