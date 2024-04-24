import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/Navbar.scss';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('about');

    const updateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="lg" className="sticky-top" fixed="top">
                <Container>
                    <Navbar.Brand className="logo">
                        <h3>NURUL ISTIQOMAH</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle variant="dark" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#about"
                                className={
                                    activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
                                }
                                onClick={() => updateActiveLink('about')}
                            >
                                About Me
                            </Nav.Link>
                            <Nav.Link
                                href="#experience"
                                className={
                                    activeLink === 'experience'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                                onClick={() => updateActiveLink('experience')}
                            >
                                Experience
                            </Nav.Link>
                            <Nav.Link
                                href="#achievement"
                                className={
                                    activeLink === 'achievement'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                                onClick={() => updateActiveLink('achievement')}
                            >
                                Achievement
                            </Nav.Link>
                            <Nav.Link
                                href="#project"
                                className={
                                    activeLink === 'project' ? 'active navbar-link' : 'navbar-link'
                                }
                                onClick={() => updateActiveLink('project')}
                            >
                                Project
                            </Nav.Link>
                            <Nav.Link
                                href="#contact"
                                className={
                                    activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'
                                }
                                onClick={() => updateActiveLink('contact')}
                            >
                                <Button style={{ color: '#0B0513', backgroundColor: '#ffcad4', border: "none"}}>
                                    Let’s Connect
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};

export default NavBar;
