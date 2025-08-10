
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import rvLogo from "/rv.jpg";       // keep your actual paths
import vikshaLogo from "/Viksha.jpg";

const CustomNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top" collapseOnSelect>
      <Container>
        {/* left: brand with two logos (no animation) */}
        <Navbar.Brand href="#home" className="navbar-brand">
          <div className="brand-logos">
            <img src={rvLogo} alt="RVU Logo" className="navbar-logo rv-logo" />
            <img src={vikshaLogo} alt="Viksha Logo" className="navbar-logo viksha-logo" />
          </div>
        </Navbar.Brand>

        {/* toggler (appears on mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />

        {/* right: nav links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#achievements">Achievement</Nav.Link>
            <Nav.Link href="#team">Our Team</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
