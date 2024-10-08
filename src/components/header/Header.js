import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <Navbar bg="dark" variants="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": "white"}}>
                <FontAwesomeIcon icon={faBuilding}/> Facilities Management
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <NavLink className="nav-link" style={{"color": "white"}} to="/">Home</NavLink>
                    <NavLink className="nav-link" style={{"color": "white"}} to="/Rooms">Rooms</NavLink>
                    <NavLink className="nav-link" style={{"color": "white"}} to="/Classes">Classes</NavLink>
                </Nav>
                <Button variant="outline-info" className="me-2">Login</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header