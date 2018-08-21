import React from "react";
import { Jumbotron, Navbar, Nav, NavItem, Button } from "react-bootstrap";

const Header = () => (
  <div>
    <Jumbotron style={{ position: "relative" }}>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Logo</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Our Successes
            </NavItem>
            <NavItem eventKey={2} href="#">
              Login
            </NavItem>
            <NavItem eventKey={3} href="#">
              Sign up
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Button bsStyle="primary">Submit btn</Button>
            </NavItem>
            <NavItem eventKey={2} href="#">
              ico
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1 className="text-center">Submit</h1>
      <div className="container" style={{
        position: "absolute",
        width: "100%",
        height: " 100%",
        marginTop: "1rem"
      }}>
        <div
          className="row"
          style={{width: "85%", margin: "0 auto"}}
        >
          <div className="col-sm-4">
            <p>Step one: introduction</p>
          </div>
          <div className="col-sm-4">
            <p>Step two: about you</p>
          </div>
          <div className="col-sm-4">
            <p>Step three: additional information</p>
          </div>
        </div>
      </div>
    </Jumbotron>
  </div>
);

export default Header;
