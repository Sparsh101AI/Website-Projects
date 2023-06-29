import "./Dynamics.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";

function Dynamics() {
  //Force Variables
  const [fma_Answer, setFMA_Answer] = React.useState("Press Calculate!");
  const [fma_F, setFMA_F] = React.useState("");
  const [fma_M, setFMA_M] = React.useState("");
  const [fma_A, setFMA_A] = React.useState("");
  let changeFMA_F = (event) => {
    const newValue = event.target.value;
    setFMA_F(newValue);
  };
  let changeFMA_M = (event) => {
    const newValue = event.target.value;
    setFMA_M(newValue);
  };
  let changeFMA_A = (event) => {
    const newValue = event.target.value;
    setFMA_A(newValue);
  };
  let changeFMA_Answer = () => {
    const fma_variables = [fma_F, fma_M, fma_A];
    let counter = 0;
    for (var i = 0; i < fma_variables.length; i++) {
      if (fma_variables[i] === "") counter++;
    }
    if (counter > 1) {
      setFMA_Answer("ERROR");
      return;
    }
    if (counter === 0 && parseInt(fma_F) === fma_M * fma_A) {
      setFMA_Answer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setFMA_Answer("Equation is Incorrect");
      return;
    }
    if (fma_F === "") setFMA_Answer(fma_M * fma_A + " N");
    if (fma_M === "") setFMA_Answer(fma_F / fma_A + " kg");
    if (fma_A === "") setFMA_Answer(fma_F / fma_M + " m/s²");
  };
  //Force Gravity Formula
  const [fmg_Answer, setFMG_Answer] = React.useState("Press Calculate!");
  const [fmg_F, setFMG_F] = React.useState("");
  const [fmg_M, setFMG_M] = React.useState("");
  const [fmg_G, setFMG_G] = React.useState("");
  let changeFMG_F = (event) => {
    const newValue = event.target.value;
    setFMG_F(newValue);
  };
  let changeFMG_M = (event) => {
    const newValue = event.target.value;
    setFMG_M(newValue);
  };
  let changeFMG_G = (event) => {
    const newValue = event.target.value;
    setFMG_G(newValue);
  };
  let changeFMG_Answer = () => {
    const fmg_variables = [fmg_F, fmg_M, fmg_G];
    let counter = 0;
    for (var i = 0; i < fmg_variables.length; i++) {
      if (fmg_variables[i] === "") counter++;
    }
    if (counter > 1) {
      setFMG_Answer("ERROR");
      return;
    }
    if (counter === 0 && parseInt(fmg_F) === fmg_M * fmg_G) {
      setFMG_Answer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setFMG_Answer("Equation is Incorrect");
      return;
    }
    if (fmg_F === "") setFMG_Answer(fmg_M * fmg_G + " N");
    if (fmg_M === "") setFMG_Answer(fmg_F / fmg_G + " kg");
    if (fmg_G === "") setFMG_Answer(fmg_F / fmg_M + " m/s²");
  };
  //Friction Static Variables
  const [fus_Answer, setFUS_Answer] = React.useState("Press Calculate!");
  const [fus_F, setFUS_F] = React.useState("");
  const [fus_Us, setFUS_Us] = React.useState("");
  const [fus_Fn, setFUS_Fn] = React.useState("");
  let changeFUS_F = (event) => {
    const newValue = event.target.value;
    setFUS_F(newValue);
  };
  let changeFUS_Us = (event) => {
    const newValue = event.target.value;
    setFUS_Us(newValue);
  };
  let changeFUS_Fn = (event) => {
    const newValue = event.target.value;
    setFUS_Fn(newValue);
  };
  let changeFUS_Answer = () => {
    const fus_variables = [fus_F, fus_Us, fus_Fn];
    let counter = 0;
    for (var i = 0; i < fus_variables.length; i++) {
      if (fus_variables[i] === "") counter++;
    }
    if (counter > 1) {
      setFUS_Answer("ERROR");
      return;
    }
    if (counter === 0 && parseInt(fus_F) === fus_Us * fus_Fn) {
      setFUS_Answer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setFUS_Answer("Equation is Incorrect");
      return;
    }
    if (fus_F === "") setFUS_Answer(fus_Us * fus_Fn + " N");
    if (fus_Us === "") setFUS_Answer(fus_F / fus_Fn);
    if (fus_Fn === "") setFUS_Answer(fus_F / fus_Us + " N");
  };
  //FUK Variables
  const [fuk_Answer, setFUK_Answer] = React.useState("Press Calculate!");
  const [fuk_F, setFUK_F] = React.useState("");
  const [fuk_Uk, setFUK_Uk] = React.useState("");
  const [fuk_Fn, setFUK_Fn] = React.useState("");
  let changeFUK_F = (event) => {
    const newValue = event.target.value;
    setFUK_F(newValue);
  };
  let changeFUK_Uk = (event) => {
    const newValue = event.target.value;
    setFUK_Uk(newValue);
  };
  let changeFUK_Fn = (event) => {
    const newValue = event.target.value;
    setFUK_Fn(newValue);
  };
  let changeFUK_Answer = () => {
    const fuk_variables = [fuk_F, fuk_Uk, fuk_Fn];
    let counter = 0;
    for (var i = 0; i < fuk_variables.length; i++) {
      if (fuk_variables[i] === "") counter++;
    }
    if (counter > 1) {
      setFUK_Answer("ERROR");
      return;
    }
    if (counter === 0 && parseInt(fuk_F) === fuk_Uk * fuk_Fn) {
      setFUK_Answer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setFUK_Answer("Equation is Incorrect");
      return;
    }
    if (fuk_F === "") setFUK_Answer(fuk_Uk * fuk_Fn + " N");
    if (fuk_Uk === "") setFUK_Answer(fuk_F / fuk_Fn);
    if (fuk_Fn === "") setFUK_Answer(fuk_F / fuk_Uk + " N");
  };
  //FG
  const [fg_Answer, setFG_Answer] = React.useState("Press Calculate!");
  const [fg_F, setFG_F] = React.useState("");
  const [fg_G, setFG_G] = React.useState("");
  const [fg_M1, setFG_M1] = React.useState("");
  const [fg_M2, setFG_M2] = React.useState("");
  const [fg_R, setFG_R] = React.useState("");
  let changeFG_F = (event) => {
    const newValue = event.target.value;
    setFG_F(newValue);
  };
  let changeFG_G = (event) => {
    const newValue = event.target.value;
    setFG_G(newValue);
  };
  let changeFG_M1 = (event) => {
    const newValue = event.target.value;
    setFG_M1(newValue);
  };
  let changeFG_M2 = (event) => {
    const newValue = event.target.value;
    setFG_M2(newValue);
  };
  let changeFG_R = (event) => {
    const newValue = event.target.value;
    setFG_R(newValue);
  };
  let changeFG_Answer = () => {
    const fg_variables = [fg_F, fg_G, fg_M1, fg_M2, fg_R];
    let counter = 0;
    for (var i = 0; i < fg_variables.length; i++) {
      if (fg_variables[i] === "") counter++;
    }
    if (counter > 1) {
      setFG_Answer("ERROR");
      return;
    }
    if (
      counter === 0 &&
      parseInt(fg_F) === parseInt((fg_G * fg_M1 * fg_M2) / (fg_R * fg_R))
    ) {
      setFG_Answer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setFG_Answer("Equation is Incorrect");
      return;
    }
    if (fg_F === "")
      setFG_Answer((fg_G * fg_M1 * fg_M2) / (fg_R * fg_R) + " N");
    if (fg_G === "")
      setFG_Answer((fg_F * fg_R * fg_R) / (fg_M1 * fg_M2) + " N m² / kg²");
    if (fg_M1 === "")
      setFG_Answer((fg_F * fg_R * fg_R) / (fg_G * fg_M2) + " kg");
    if (fg_M2 === "")
      setFG_Answer((fg_F * fg_R * fg_R) / (fg_G * fg_M1) + " kg");
    if (fg_R === "")
      setFG_Answer(Math.sqrt((fg_G * fg_M1 * fg_M2) / fg_F) + " m");
  };
  //Gravity Variables
  const [g1_Answer, setG1_Answer] = React.useState("Press Calculate!");
  const [g1_Gra, setG1_Gra] = React.useState("");
  const [g1_G, setG1_G] = React.useState("");
  const [g1_M, setG1_M] = React.useState("");
  const [g1_R, setG1_R] = React.useState("");
  let changeG1_Gra = (event) => {
    const newValue = event.target.value;
    setG1_Gra(newValue);
  };
  let changeG1_G = (event) => {
    const newValue = event.target.value;
    setG1_G(newValue);
  };
  let changeG1_M = (event) => {
    const newValue = event.target.value;
    setG1_M(newValue);
  };
  let changeG1_R = (event) => {
    const newValue = event.target.value;
    setG1_R(newValue);
  };
  let changeG1_Answer = () => {
    const g1_variables = [g1_Gra, g1_G, g1_M, g1_R];
    let counter = 0;
    for (var i = 0; i < g1_variables.length; i++) {
      if (g1_variables[i] === "") counter++;
    }
    if (counter > 1) {
      setG1_Answer("ERROR");
      return;
    }
    if (
      counter === 0 &&
      parseInt(g1_Gra) === parseInt((g1_G * g1_M) / (g1_R * g1_R))
    ) {
      setG1_Answer("Equation is Correct");
      return;
    } else if (counter === 0) {
      setG1_Answer("Equation is Incorrect");
      return;
    }
    if (g1_Gra === "") setG1_Answer((g1_G * g1_M) / (g1_R * g1_R) + " m/s²");
    if (g1_G === "")
      setG1_Answer((g1_Gra * g1_R * g1_R) / g1_M + " N m² / kg²");
    if (g1_M === "") setG1_Answer((g1_Gra * g1_R * g1_R) / g1_G + " kg");
    if (g1_R === "") setG1_Answer(Math.sqrt((g1_G * g1_M) / g1_Gra) + " m");
  };
  return (
    <div>
      <div>
        <CardGroup>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title>
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">net</sub> = m a
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Net Force (N)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFMA_F}
              ></input>
              <h6 id="d1">Mass (kg)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFMA_M}
              ></input>
              <h6 id="d1">
                Acceleration (m/s <sup id="d1">2</sup>)
              </h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFMA_A}
              ></input>
              <br />
              <button className="calcbtn" onClick={changeFMA_Answer}>
                Calculate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{fma_Answer}</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title id="d1">
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">g</sub> = m g
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Force Gravity (N)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFMG_F}
              ></input>
              <h6 id="d1">Mass (kg)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFMG_M}
              ></input>
              <h6 id="d1">
                Acceleration due to Gravity (m/s<sup id="d1">2</sup>)
              </h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFMG_G}
              ></input>
              <br />
              <button className="calcbtn" onClick={changeFMG_Answer}>
                Cacluate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{fmg_Answer}</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title>
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">f static</sub> = μ <sub id="d1">s</sub> F{" "}
                    <sub id="d1">N</sub>
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Force of Static Friction (N)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFUS_F}
              ></input>
              <h6 id="d1">Static Friction Coefficient</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFUS_Us}
              ></input>
              <h6 id="d1">Normal Force (N)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFUS_Fn}
              ></input>
              <br />
              <button className="calcbtn" onClick={changeFUS_Answer}>
                Cacluate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{fus_Answer}</h5>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div>
        <CardGroup>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title>
                {" "}
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">f kinetic</sub> = μ <sub id="d1">k</sub> F{" "}
                    <sub id="d1">N</sub>
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Force of Friction Kinetic (N)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFUK_F}
              ></input>
              <h6 id="d1">Kinetic Friction Coefficient</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFUK_Uk}
              ></input>
              <h6 id="d1">Normal Force</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFUK_Fn}
              ></input>
              <br />
              <button className="calcbtn" onClick={changeFUK_Answer}>
                Calculate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{fuk_Answer}</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title>
                <h4 id="d1">
                  <em id="d1">
                    F <sub id="d1">g</sub> = (G m <sub id="d1">1</sub> m{" "}
                    <sub id="d1">2</sub> ) / (r <sup id="d1">2</sup>)
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">Force Gravity (N)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFG_F}
              ></input>
              <h6 id="d1">
                Gravitational Constant (N m<sup id="d1">2</sup> / kg
                <sup id="d1">2</sup>)
              </h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFG_G}
              ></input>
              <h6 id="d1">Mass One (kg)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFG_M1}
              ></input>
              <h6 id="d1">Mass Two (kg)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFG_M2}
              ></input>
              <h6 id="d1">Radius (m)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeFG_R}
              ></input>
              <br />
              <button className="calcbtn" onClick={changeFG_Answer}>
                Calculate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{fg_Answer}</h5>
            </Card.Footer>
          </Card>
          <Card className="kcard">
            <Card.Body id="d1">
              <Card.Title>
                <h4 id="d1">
                  <em id="d1">
                    g = (G m <sub id="d1">source</sub> ) / (r{" "}
                    <sup id="d1">2</sup>)
                  </em>
                </h4>
              </Card.Title>
              <Card.Text id="d1">
                Leave a blank for the variable you want to solve for.
              </Card.Text>
              <h6 id="d1">
                Gravity (m/s<sup id="d1">2</sup>)
              </h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeG1_Gra}
              ></input>
              <h6 id="d1">
                Gravitational Constant (N m<sup id="d1">2</sup> / kg
                <sup id="d1">2</sup>)
              </h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeG1_G}
              ></input>
              <h6 id="d1">Mass Source (kg)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeG1_M}
              ></input>
              <h6 id="d1">Radius (m)</h6>
              <input
                id="d1"
                className="inp"
                type="number"
                onChange={changeG1_R}
              ></input>
              <br />
              <button className="calcbtn" onClick={changeG1_Answer}>
                Calculate
              </button>
            </Card.Body>
            <Card.Footer className="foot">
              <h5 className="foot-text">Answer:</h5>
              <h5 className="foot-text">{g1_Answer}</h5>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Dynamics;
