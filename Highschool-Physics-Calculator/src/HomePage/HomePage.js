import "./HomePage.css";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div>
    <Card className="homeBody">
      <Card.Title className="homeTitle">Welcome to Physics Friend</Card.Title>
      <Card.Title className="homeTitle2">
        Solve All Types Of Types of Physics Equations!
      </Card.Title>
      <Card.Text className="homeText">
        Try out our new Physics Problem Solver. Capable of solving basic to
        advanced physics problems. Simply input the data that the problem
        provides and our solver will take care of the rest!
      </Card.Text>
    </Card>
    <br/>
    <br/>
    </div>
  );
}

export default HomePage;
