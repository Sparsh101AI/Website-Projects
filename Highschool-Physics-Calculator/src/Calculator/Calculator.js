import "./Calculator.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";

function Calculator() {
  return (
    <div>
      <br />
      <div>
        <p className="header1">Select A Topic!</p>
      </div>

      <br />

      <CardGroup>
        <Card className="cardg">
          <Link to="/Kinematics" className="link1">
            <Card.Body id="kinematics">
              <Card.Title className="calcTitle" id="kinematics">
                Kinematics
              </Card.Title>
              <Card.Text className="calcText" id="kinematics">
                Solve equations which pretain to kinematics. Problems which fall
                under kinematics include variables such as velocity, distance,
                acceleration, and time.
                <br />
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="cardg">
          <Link to="/Dynamics" className="link1">
            <Card.Body id="dynamics">
              <Card.Title className="calcTitle" id="dynamics">
                Dynamics
              </Card.Title>
              <Card.Text className="calcText" id="dynamics">
                Solve equations which pretain to dynamics. Problems which fall
                under dynamics include variables such as force, mass, gravity,
                acceleration, and friction.
                <br />
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
        <Card className="cardg">
          <Card.Body id="cM">
            <Card.Title className="calcTitle" id="cM">
              Circular Motion
            </Card.Title>
            <Card.Text className="calcText" id="cM">
              <br />
              Coming Soon...
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Calculator;
