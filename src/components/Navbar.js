import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo1 from "../Assets/logo1.png";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
        >
          <img
            src={logo1}
            className="img-fluid logo"
            alt="Ramesh KN"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            {/* Home */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            {/* Projects */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* Experience */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/experience"
                onClick={() => updateExpanded(false)}
              >
                <MdWorkOutline /> Experience
              </Nav.Link>
            </Nav.Item>

            {/* Resume */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* Achievements */}

            <NavDropdown
              title={
                <>
                  <HiOutlineAcademicCap /> Achievements
                </>
              }
              id="achievements-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item
                as={Link}
                to="/certificates"
                onClick={() => updateExpanded(false)}
              >
                🏆 Certifications
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/publications"
                onClick={() => updateExpanded(false)}
              >
                📄 Publications
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/patents"
                onClick={() => updateExpanded(false)}
              >
                📜 Patents
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                📞 Contact
              </NavDropdown.Item>
            </NavDropdown>


          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;