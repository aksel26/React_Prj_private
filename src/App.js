import logo from "./logo.svg"
import "./App.css"
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap"
import product1 from "./11.png"
import product2 from "./12.png"
import product3 from "./13.png"
function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">COFFEE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="background">
        <h1>20% Season OFF!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={product1} width="100%" />
            <h4>진심의 딸기</h4>
            <p>딸기잼 & 20,500</p>
          </div>
          <div className="col-4">
            <img src={product2} width="100%" height="57%" />
            <h4>카페 베로나</h4>
            <p>스벅 원두커피 & 21,000</p>
          </div>
          <div className="col-4">
            <img src={product3} width="100%" />
            <h4>브렉퍼스트</h4>
            <p>스벅 원두커피 & 21,100</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
