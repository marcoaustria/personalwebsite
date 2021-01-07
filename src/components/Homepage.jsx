import React, { Fragment } from "react";
import logo from "../logo.svg";
import "../assets/css/style.css";
import Cards from "./Cards";
import ReactNotepad from "react-notepad";

export const Homepage = () => {
  return (
    <React.Fragment>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header ">
          <div className="header-bottom  header-sticky">
            <div className=" navbar-header container-fluid">
              {/* Logo
                <div className="col-xl-2 col-lg-2 col-sm-1">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div> */}
              {/* Main-menu */}
              <div className="row align-items-center">
                <div className="col">
                  <div className="section-tittle">
                    <h2>Marco Austria</h2>
                  </div>
                </div>
                <div className="col">
                  {/* Button */}
                  <div className="button-header">
                    <a href="https://ufl.zoom.us/j/2492570197" className="btn">
                      Zoom
                    </a>
                  </div>
                </div>
              </div>

              {/* <li>
                            <a href="#">Blog</a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog_details.html">Blog Details</a>
                              </li>
                              <li>
                                <a href="elements.html">Element</a>
                              </li>
                            </ul>
                          </li> */}
            </div>
            {/* Mobile Menu */}
            {/* <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div> */}
          </div>
        </div>
      </div>
      {/* Header End */}
      <div className="row align-items-center">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/prHFVUaL_bU?start=1&controls=0"
          frameborder="0"
        /> */}
      </div>
    </React.Fragment>
  );
};

export default Homepage;
