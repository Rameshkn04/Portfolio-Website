import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">

        {/* Left */}
        <Col md={4} className="footer-copywright">
          <h3>Designed & Developed by <span className="purple">Ramesh K N</span></h3>
        </Col>

        {/* Center */}
        <Col md={4} className="footer-copywright">
          <h3>© {year} Ramesh K N • All Rights Reserved</h3>
        </Col>

        {/* Right */}
        <Col md={4} className="footer-body">

          <ul className="footer-icons">

            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/Rameshkn04"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ramesh-kn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* LeetCode */}
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/RameshKN04/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <SiLeetcode />
              </a>
            </li>

            {/* Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ramesh.kn04/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
            {/* Facebook */}
            <li className="social-icons">
              <a
                href="https://www.facebook.com/people/Ramesh-KN/pfbid0CMtjuDGr1aGy6WeJcFNEXyn1btXK1DANd94YQiMebj1Ewtx2PL8W1StxUskBTsMGl/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiFillFacebook />
              </a>
            </li>

            {/* X (Twitter) */}
            <li className="social-icons">
              <a
                href="https://x.com/RameshKN04"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>

            {/* Email */}
            <li className="social-icons">
              <a
                href="mailto:rameshkn2004@gmail.com"
                style={{ color: "white" }}
              >
                <AiOutlineMail />
              </a>
            </li>

          </ul>

        </Col>
      </Row>
    </Container>
  );
}

export default Footer;