import { Navbar, Nav } from "react-bootstrap";

const CRUDNavigation = (props) => {
  const toClient = () => {
    props.navigation.navigate("Home");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="mx-5">
        <Navbar.Brand onClick={toClient}>Hounter Admin</Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <ul className="nav-ul navbar-nav">
              <Nav.Link href="#pricing2" id="nav-secondary" onClick={toClient} className="ml-2 px-3">To Client Site</Nav.Link>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CRUDNavigation;