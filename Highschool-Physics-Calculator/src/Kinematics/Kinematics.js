import "./Kinematics.css";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";

function Kinematics() {
  //VDT Variables
  const [vdtAnswer, setVDTAnswer] = React.useState("Press Calculate!");
  const [vdt_V, setVDT_V] = React.useState("");
  const [vdt_D, setVDT_D] = React.useState("");
  const [vdt_T, setVDT_T] = React.useState("");
  let changeVDT_V = (event) => {
    const newValue = event.target.value;
    setVDT_V(newValue);
  };
  let changeVDT_D = (event) => {
    const newValue = event.target.value;
    setVDT_D(newValue);
  };
  let changeVDT_T = (event) => {
    const newValue = event.target.value;
    setVDT_T(newValue);
  };
  let changeVDT_Answer = () => {
    const vdt_variables = [vdt_V, vdt_D, vdt_T];
    let counter = 0;
    for (var i = 0; i < vdt_variables.length; i++)
      if (vdt_variables[i] === "") counter++;
    if (counter > 1) {
      setVDTAnswer("ERROR");
      return;
    }
    if (counter === 0 && parseInt(vdt_V) === vdt_D / vdt_T) {
      setVDTAnswer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setVDTAnswer("Equation is Incorrect");
      return;
    }
    if (vdt_T === "") setVDTAnswer(vdt_D / vdt_V + " s");
    if (vdt_V === "") setVDTAnswer(vdt_D / vdt_T + " m/s");
    if (vdt_D === "") setVDTAnswer(vdt_V * vdt_T + " m");
  };
  //Acceleration Variables
  const [accAnswer, setAccAnswer] = React.useState("Press Calculate!");
  const [acc_A, setAcc_A] = React.useState("");
  const [acc_Vf, setAcc_Vf] = React.useState("");
  const [acc_Vi, setAcc_Vi] = React.useState("");
  const [acc_T, setAcc_T] = React.useState("");
  let changeACC_A = (event) => {
    const newValue = event.target.value;
    setAcc_A(newValue);
  };
  let changeACC_Vf = (event) => {
    const newValue = event.target.value;
    setAcc_Vf(newValue);
  };
  let changeACC_Vi = (event) => {
    const newValue = event.target.value;
    setAcc_Vi(newValue);
  };
  let changeACC_T = (event) => {
    const newValue = event.target.value;
    setAcc_T(newValue);
  };
  let changeACC_Answer = () => {
    const acc_variables = [acc_A, acc_Vf, acc_Vi, acc_T];
    let counter = 0;
    for (var i = 0; i < acc_variables.length; i++)
      if (acc_variables[i] === "") counter++;
    if (counter > 1) {
      setAccAnswer("ERROR");
      return;
    }
    if (counter === 0 && parseInt(acc_A) === (acc_Vf - acc_Vi) / acc_T) {
      setAccAnswer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setAccAnswer("Equation is Incorrect");
      return;
    }

    if (acc_A === "") setAccAnswer((acc_Vf - acc_Vi) / acc_T + " m/s²");
    if (acc_Vf === "") setAccAnswer(acc_A * acc_T + parseInt(acc_Vi) + " m/s");
    if (acc_Vi === "") setAccAnswer(acc_Vf - acc_A * acc_T + " m/s");
    if (acc_T === "") setAccAnswer(Math.abs((acc_Vf - acc_Vi) / acc_A) + " s");
  };
  //Distance 1 Variables
  const [d1Answer, setD1Answer] = React.useState("Press Calculate!");
  const [d1_D, setD1_D] = React.useState("");
  const [d1_Vi, setD1_Vi] = React.useState("");
  const [d1_T, setD1_T] = React.useState("");
  const [d1_A, setD1_A] = React.useState("");
  let changeD1_D = (event) => {
    const newValue = event.target.value;
    setD1_D(newValue);
  };
  let changeD1_Vi = (event) => {
    const newValue = event.target.value;
    setD1_Vi(newValue);
  };
  let changeD1_T = (event) => {
    const newValue = event.target.value;
    setD1_T(newValue);
  };
  let changeD1_A = (event) => {
    const newValue = event.target.value;
    setD1_A(newValue);
  };
  let changeD1_Answer = () => {
    const d1_variables = [d1_D, d1_Vi, d1_T, d1_A];
    let counter = 0;
    for (var i = 0; i < d1_variables.length; i++)
      if (d1_variables[i] === "") counter++;
    if (counter > 1) {
      setD1Answer("ERROR");
      return;
    }
    if (
      counter === 0 &&
      parseInt(d1_D) === d1_Vi * d1_T + 0.5 * d1_A * d1_T * d1_T
    ) {
      setD1Answer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setD1Answer("Equation is Incorrect");
      return;
    }

    if (d1_D === "")
      setD1Answer(d1_Vi * d1_T + 0.5 * d1_A * d1_T * d1_T + " m");
    if (d1_A === "")
      setD1Answer(2 * ((d1_D - d1_Vi * d1_T) / (d1_T * d1_T)) + " m/s²");
    if (d1_Vi === "")
      setD1Answer((d1_D - 0.5 * d1_A * d1_T * d1_T) / d1_T + " m/s");
    if (d1_T === "")
      setD1Answer(
        Math.abs(
          (-1 * d1_Vi + Math.sqrt(d1_Vi * d1_Vi + 2 * d1_A * d1_D)) / d1_A
        ) + " s"
      );
  };
  // Distance 2 Variables
  const [d2Answer, setD2Answer] = React.useState("Press Calculate!");
  const [d2_D, setD2_D] = React.useState("");
  const [d2_Vf, setD2_Vf] = React.useState("");
  const [d2_Vi, setD2_Vi] = React.useState("");
  const [d2_T, setD2_T] = React.useState("");
  let changeD2_D = (event) => {
    const newValue = event.target.value;
    setD2_D(newValue);
  };
  let changeD2_Vf = (event) => {
    const newValue = event.target.value;
    setD2_Vf(newValue);
  };
  let changeD2_Vi = (event) => {
    const newValue = event.target.value;
    setD2_Vi(newValue);
  };
  let changeD2_T = (event) => {
    const newValue = event.target.value;
    setD2_T(newValue);
  };
  let changeD2_Answer = () => {
    const d2_variables = [d2_D, d2_Vf, d2_Vi, d2_T];
    let counter = 0;
    for (var i = 0; i < d2_variables.length; i++)
      if (d2_variables[i] === "") counter++;
    if (counter > 1) {
      setD2Answer("ERROR");
      return;
    }
    if (
      counter === 0 &&
      parseInt(d2_D) === (parseInt(d2_Vf) + parseInt(d2_Vi)) * 0.5 * d2_T
    ) {
      setD2Answer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setD2Answer("Equation is Incorrect");
      return;
    }

    if (d2_D === "")
      setD2Answer((parseInt(d2_Vf) + parseInt(d2_Vi)) * 0.5 * d2_T + " m");
    if (d2_Vf === "") setD2Answer((d2_D / d2_T) * 2 - d2_Vi + " m/s");
    if (d2_Vi === "") setD2Answer((d2_D / d2_T) * 2 - d2_Vf + " m/s");
    if (d2_T === "")
      setD2Answer(
        Math.abs((d2_D * 2) / (parseInt(d2_Vf) + parseInt(d2_Vi))) + " s"
      );
  };
  //Velocity Final Variables
  const [vAnswer, setVAnswer] = React.useState("Press Calculate!");
  const [v_Vf, setV_Vf] = React.useState("");
  const [v_Vi, setV_Vi] = React.useState("");
  const [v_A, setV_A] = React.useState("");
  const [v_D, setV_D] = React.useState("");
  let changeV_Vf = (event) => {
    const newValue = event.target.value;
    setV_Vf(newValue);
  };
  let changeV_Vi = (event) => {
    const newValue = event.target.value;
    setV_Vi(newValue);
  };
  let changeV_A = (event) => {
    const newValue = event.target.value;
    setV_A(newValue);
  };
  let changeV_D = (event) => {
    const newValue = event.target.value;
    setV_D(newValue);
  };
  let changeV_Answer = () => {
    const v_variables = [v_Vf, v_Vi, v_A, v_D];
    let counter = 0;
    for (var i = 0; i < v_variables.length; i++)
      if (v_variables[i] === "") counter++;
    if (counter > 1) {
      setVAnswer("ERROR");
      return;
    }
    console.log();
    if (counter === 0 && v_Vf * v_Vf === v_Vi * v_Vi + 2 * v_A * v_D) {
      setVAnswer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setVAnswer("Equation is Incorrect");
      return;
    }

    if (v_Vf === "")
      setVAnswer(Math.sqrt(v_Vi * v_Vi + 2 * v_A * v_D) + " m/s");
    if (v_Vi === "")
      setVAnswer(Math.sqrt(v_Vf * v_Vf - 2 * v_A * v_D) + " m/s");
    if (v_A === "")
      setVAnswer((v_Vf * v_Vf - v_Vi * v_Vi) / (2 * v_D) + " m/s²");
    if (v_D === "") setVAnswer((v_Vf * v_Vf - v_Vi * v_Vi) / (2 * v_A) + " m");
  };
  return (
    <div>
      <div>
        <CardGroup>
          <Card className="kcard">
            <Card.Body id="k2">
              <Card.Title id="k2">
                <h4 id="k2">
                  <em id="k2">
                    V <sub id="k2">ave</sub> = d / t
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="k2">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="k2">Average Velocity (m/s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeVDT_V}
                type="number"
              ></input>
              <h6 id="k2">Distance (m)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeVDT_D}
                type="number"
              ></input>
              <h6 id="k2">Time (s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeVDT_T}
                type="number"
              ></input>
              <br />
              <button className="calcbtn" onClick={changeVDT_Answer}>
                Calculate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{vdtAnswer}</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="k2">
              <Card.Title>
                <h4 id="k2">
                  <em id="k2">
                    a = ( V <sub id="k2">f</sub> - V <sub id="k2">i </sub> ) / t
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="k2">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="k2">
                Acceleration (m/s<sup id="k2">2</sup>)
              </h6>
              <input
                id="k2"
                className="inp"
                onChange={changeACC_A}
                type="number"
              ></input>
              <h6 id="k2">Velocity Final (m/s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeACC_Vf}
                type="number"
              ></input>
              <h6 id="k2">Velocity Initial</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeACC_Vi}
                type="number"
              ></input>
              <h6 id="k2">Time (s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeACC_T}
                type="number"
              ></input>
              <br />
              <button
                className="calcbtn"
                onClick={changeACC_Answer}
                type="number"
              >
                Cacluate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{accAnswer}</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="k2">
              <Card.Title>
                <h4 id="k2">
                  <em id="k2">
                    d = V <sub id="k2">i</sub> t + (1/2) a t{" "}
                    <sup id="k2">2</sup>
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="k2">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="k2">Distance (m)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeD1_D}
                type="number"
              ></input>
              <h6 id="k2">Velocity Initial (m/s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeD1_Vi}
                type="number"
              ></input>
              <h6 id="k2">Time (s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeD1_T}
                type="number"
              ></input>
              <h6 id="k2">
                Acceleration (m/s<sup id="k2">2</sup>)
              </h6>
              <input
                id="k2"
                className="inp"
                onChange={changeD1_A}
                type="number"
              ></input>
              <br />
              <button
                className="calcbtn"
                onClick={changeD1_Answer}
                type="number"
              >
                Calculate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{d1Answer}</h5>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div>
        <CardGroup>
          <Card className="kcard">
            <Card.Body id="k2">
              <Card.Title>
                <h4 id="k2">
                  <em id="k2">
                    d = ( ( V <sub id="k2">f</sub> + V <sub id="k2">i</sub> ) /
                    2 ) t
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="k2">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="k2">Distance (m)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeD2_D}
                type="number"
              ></input>
              <h6 id="k2">Velocity Final (m/s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeD2_Vf}
                type="number"
              ></input>
              <h6 id="k2">Velocity Initial (m/s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeD2_Vi}
                type="number"
              ></input>
              <h6 id="k2">Time (s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeD2_T}
                type="number"
              ></input>
              <br />
              <button
                className="calcbtn"
                onClick={changeD2_Answer}
                type="number"
              >
                Calculate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{d2Answer}</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="k2">
              <Card.Title>
                <h4 id="k2">
                  <em id="k2">
                    V <sub id="k2">f</sub> <sup id="k2">2</sup> = V{" "}
                    <sub id="k2">i</sub> <sup id="k2">2</sup> + 2 a d
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="k2">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="k2">Velocity Final (m/s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeV_Vf}
                type="number"
              ></input>
              <h6 id="k2">Velocity Initial (m/s)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeV_Vi}
                type="number"
              ></input>
              <h6 id="k2">
                Acceleration (m/s<sup id="k2">2</sup>)
              </h6>
              <input
                id="k2"
                className="inp"
                onChange={changeV_A}
                type="number"
              ></input>
              <h6 id="k2">Distance (m)</h6>
              <input
                id="k2"
                className="inp"
                onChange={changeV_D}
                type="number"
              ></input>
              <br />
              <button
                className="calcbtn"
                onClick={changeV_Answer}
                type="number"
              >
                Calculate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{vAnswer}</h5>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Kinematics;
