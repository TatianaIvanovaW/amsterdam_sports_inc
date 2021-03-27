import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand className="navItem">Amsterdam Sports Inc</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item className="navItem">
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            to="/members"
          >
            Members
          </NavLink>
        </Nav.Item>
        <Nav.Item className="navItem">
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            to="/sports"
          >
            Sports
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
