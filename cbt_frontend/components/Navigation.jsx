import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav>
            <Nav.Link href="#home" className="mr-3">
              Home
            </Nav.Link>
            <Nav.Link href="#monthly" className="mr-3">
              Monthly
            </Nav.Link>
            <Nav.Link href="#visualizations" className="mr-3">
              Visualizations
            </Nav.Link>
            <Nav.Link href="#trends" className="mr-3">
              Trends
            </Nav.Link>
            <Nav.Link href="#link_accounts" className="mr-3">
              Link Account
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
