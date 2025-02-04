import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import "../assets/css/Navbar.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Navbar expand="md" fixed="top" light className="custom-navbar">
        <NavbarBrand href="/" className="navbar-brand-text">
          THE VOID
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/" className="navbar-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="navbar-link">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog" className="navbar-link">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/soul-services" className="navbar-link">
                Soul Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/vip" className="navbar-link">
                Soul VIP
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/connections" className="navbar-link">
                Connections & Others
              </NavLink>
            </NavItem>
            <NavItem className="search-icon">
              <FaSearch />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;
