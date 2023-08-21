import { Container, Nav, Navbar } from "react-bootstrap";
import './Navigation.css';

const Navigation = (props) => {
    const toCRUD = () => {
        props.navigation.navigate("CRUD");
    };


    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                            <ul className="nav-ul navbar-nav">
                                <Nav.Link href="#features" id="nav-secondary" className="mx-2 px-3">About us</Nav.Link>
                                <Nav.Link href="#pricing" id="nav-secondary" className="mx-2 px-3">Article</Nav.Link>
                                <Nav.Link href="#pricing1" id="nav-secondary" className="mx-2 px-3">Property</Nav.Link>
                                <Nav.Link href="#pricing2" id="main-btn" onClick={toCRUD} className="ml-2 px-3">Sign Up</Nav.Link>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img src={require("../../assets/logo.png")} className="logo" alt="hounter logo"/>
        </>
    );
};

export default Navigation
    ;