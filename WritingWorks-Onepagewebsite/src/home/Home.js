import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


 function Home(){

    return(
        

        
    <div>
        
 <Container fluid>

  <Row>
    <Col>
   
    <Navbar className="nav1" collapseOnSelect expand="lg" >

    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/img1.png"
          width="110"
          height="110"
          className="d-inline-block align-top"
        />{' '}
     
      </Navbar.Brand>
    </Container>
  <Container>
  
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
        
    </Nav>
    <Nav>
  
      <p className="text1">
        FortMcMurray, AB
      </p>
  </Nav>
  </Container>
</Navbar>
    
    </Col>
  </Row>
 </Container>



    
    <Row>

    <Card className="text2">WRITING WORKS</Card>
    
    <Card body className="text3">"WORKSHOPS TO HELP YOUTH IMPROVE ON
WRITING FOR SCHOOL AND BEYOND "</Card>


    </Row>
    
    
    <br/>
    <br/>
    
    
    
    
    
    
    
    
    
    
    
    
    
    <Container fluid>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="img2.png" />
    <Card.Body className="nav1">
      <Card.Title className="nav2">WORKSHOPS</Card.Title>
      <h1 className="nav3">LEARN NEW WRITING SKILLS
</h1>
<br/>
      <Card.Text className="nav2">
      Join our interactive workshops with a variety of
subjects such as Resume building and Applications
with experienced speakers.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <br/>
  <Card>
    
  <Card.Body>
      <Card.Title className="nav4">WHO ARE WE?
</Card.Title>
      <h1 className="nav5">YOUTH RUN ORGANIZATION

</h1>
<br/>
      <Card.Text className="nav9">
      Writing Works is an organization that aims to teach
writing skills needed for school and other endeavors
through interactive workshops.

      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="14.png" />
  </Card>

  <br/>
  <Card>
    <Card.Img variant="top" src="0.png" />
    <Card.Body className="nav1">
      <Card.Title className="nav2">OUR PURPOSE
</Card.Title>
      <h1 className="nav3">VISION FOR US AND YOU

</h1>
<br/>
      <Card.Text className="nav2">
      Our goal is to offer youth a place where they can
acquire the information to build writing skills they
need to succeed in their future.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    
    <Card.Body>
        <Card.Title className="nav4">WHAT CAN WE DO FOR YOU?

  </Card.Title>
        <h1 className="nav5">AIMING TO HELP YOU IMPORVE

  
  </h1>
  <br/>
        <Card.Text className="nav9">
        Our workshops can be a resource for you to further
your writing skills. Our qualified speakers are here to
help you progress on your writing skills.
  
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src="111.png" />
    </Card>
</CardGroup>
    </Container>
<br></br>


<Container fluid>

<CardGroup>
 
  
  <Card>
  
    <Card.Body className="nav1">
      
      <Card.Title className="nav2">OUR SOCIAL MEDIA
</Card.Title>
      <h1 className="nav3">Stay Updated!

</h1>
<br/>
<Card.Body>
    <Card.Link className="pv1" href="https://www.instagram.com/writingworksgroup1/">Instagram</Card.Link>
    <Card.Link className="pv2" href="https://www.facebook.com/profile.php?id=100070718792744">Facebook</Card.Link>
    <Card.Link className="pv3" href="https://twitter.com/WritingWorks3">Twitter</Card.Link>

  </Card.Body>
    </Card.Body>
   
  </Card>
  <Card>
    
  <Card.Body>
      <Card.Title className="nav4">CONTACT US

</Card.Title>
      <h1 className="nav5">Email Us At:

</h1>
<br/>
      <Card.Text className="nav9">
    writingworksgroup@gmail.com
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>




</Container>











    </div>
        





    )


}

export default Home;