import "./Nav.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import React from "react";

function Nav1() {
  const [ButtonState, setButtonState] = React.useState([
    "homeButtonColor",
    "button-color",
    "button-color",
  ]);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-color1"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              onClick={() =>
                setButtonState([
                  "homeButtonColor",
                  "button-color",
                  "button-color",
                ])
              }
            >
              <img
                alt=""
                src="logoM.png"
                width="170"
                height="70"
                className="d-inline-block align-top"
              />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="auto">
              <Link
                to="/"
                className="auto1"
                onClick={() =>
                  setButtonState([
                    "homeButtonColor",
                    "button-color",
                    "button-color",
                  ])
                }
              >
                <li className={ButtonState[0]} id="homeButton">
                  Home
                </li>
              </Link>

              <Link
                to="/Calculator"
                className="auto1"
                onClick={() =>
                  setButtonState([
                    "button-color",
                    "pcButtonColor",
                    "button-color",
                  ])
                }
              >
                <li className={ButtonState[1]} id="calcButton">
                  Physics Calculator
                </li>
              </Link>

              <Link
                to="/AboutUs"
                className="auto1"
                onClick={() =>
                  setButtonState([
                    "button-color",
                    "button-color",
                    "aboutButtonColor",
                  ])
                }
              >
                <li className={ButtonState[2]} id="aboutButton">
                  About Us
                </li>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav1;
