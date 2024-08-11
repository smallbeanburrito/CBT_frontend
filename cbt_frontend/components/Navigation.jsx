import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountLink from "./AccountLink";

function Navigation() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav>
            <Link href="/summary" passHref>
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link href="/monthly" passHref>
              <Nav.Link href="/monthly">Monthly</Nav.Link>
            </Link>
            <Link href="/visualizations" passHref>
              <Nav.Link href="/visualizations">Visualizations</Nav.Link>
            </Link>
            <Link href="/trends" passHref>
              <Nav.Link href="/trends">Trends</Nav.Link>
            </Link>
            <AccountLink />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
