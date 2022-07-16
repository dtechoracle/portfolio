import React, {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import bitmoji from './bitmoji2.png';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
function App() {
  const [show, setShow] = useState(false)
function showHandler(){
    setShow(!show)
}
  return(
    <div className="App">
    <Container>
    <Navbar bg="black" variant="red" expand="lg" className="bar">
    <Navbar.Brand href="#home" className="mm">dtechoracle</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-palette" viewBox="0 0 16 16">
  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
  <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
</svg></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>&nbsp;&nbsp;Home&nbsp;</Nav.Link>
        <Nav.Link href="#link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg>&nbsp;&nbsp;Works</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
<Row className="head" style={{textAlign: "center"}}>
<Col>

  <h1 className="header_text">Fullstack Developer</h1>
  <br />
  <p className="header_p">
    I like to craft solid and scalable frontend products with great user experiences.
  </p>
  <br />
  <Row className="align" style={{textAlign: "left"}}>
    <Col>Highly skilled at progressive <br />enhancement, design systems<br /> & UI Engineering.</Col>
    <Col>Over a two years of <br />experience building products <br />for clients across africa.</Col>
  </Row>
</Col>
<br />
<br />
<Col>
  <div className="circle"/><img src={bitmoji} className="bit" />
</Col>
</Row>

<Row>
  <Col>
  <h1 className="header_text">Development</h1>
    <p className="wid">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.</p>
  </Col>
  <br />
  <hr />
  <Col>
  <h1 className="header_text">Design</h1>
    <p className="wid">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.</p>
  </Col>
</Row>
<Row className="change">
  <Col>
    <div className="tools2"><h1 className="header_text chg">i build stuff</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button variant="outline-primary">View Projects</Button>
    </div>
  </Col>
  <Col>
    <div className="tools2"><h1 className="header_text chg">i design too</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
    <Button variant="outline-primary">View Projects</Button>
    </div>
  </Col>
</Row>
</Container>
  </div>
  );
}

export default App;
