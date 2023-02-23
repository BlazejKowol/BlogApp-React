
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Col, Container } from 'react-bootstrap';

const NavBar = () => {

    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Container xs={12}>
                <Col className="text-white">Blog.app</Col>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
            </Container>  
        </Navbar>
    )
}

export default NavBar;