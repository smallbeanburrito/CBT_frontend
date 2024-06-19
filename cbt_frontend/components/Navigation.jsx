import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav>
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/monthly" passHref>
              <Nav.Link>Monthly</Nav.Link>
            </Link>
            <Link href="/visualizations" passHref>
              <Nav.Link>Visualizations</Nav.Link>
            </Link>
            <Link href="/trends" passHref>
              <Nav.Link>Trends</Nav.Link>
            </Link>
            <Link href="/link_accounts" passHref>
              <Nav.Link>Link Account</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
