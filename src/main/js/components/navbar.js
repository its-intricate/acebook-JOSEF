import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

class Navigation extends React.Component {
    render () {
        return (
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
                  <Navbar.Brand href="/">
                    <img
                        alt="Acebook"
                        src="http://1.bp.blogspot.com/-nuwapOiwsgg/UkAFIS9WFII/AAAAAAAAAPs/5jEvH7ag3l0/s1600/AH+Logo+free+download+copy.png"
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Acebook
                  </Navbar.Brand>
                   <Form inline>
                      <FormControl type="text" placeholder="username" className="mr-sm-2" />
                      <FormControl type="password" placeholder="password" className="mr-sm-2" />
                      <Button variant="outline-info">Log In</Button>
                   </Form>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <NavDropdown title="My Account" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="profile">View Profile</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="settings">Manage Settings</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="help">Help</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#log_out">Log Out</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-info">Search</Button>
                    </Form>
                  </Navbar.Collapse>
            </Navbar>
        );
    };
};

export default Navigation;