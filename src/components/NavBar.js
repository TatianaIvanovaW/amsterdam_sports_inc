import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>Amsterdam Sports Inc</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "purple",
            }}
            to="/members"
          >
            Members
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "purple",
            }}
            to="/sports"
          >
            Sports
          </NavLink>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
