import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";  
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home() {
  const navigate = useNavigate();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAMESH K N</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />

                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/resume")}
                >
                📄 View Resume
                </Button>

                <Button
                variant="outline-light"
                size="lg"
                onClick={() => navigate("/contact")}
                >
                📬 Contact Me
              </Button>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Let's Connect</h1>
            <p>
              Interested in collaborating, discussing opportunities, or learning more
              about my work? Connect with me through any of the platforms below.
            </p>
            <ul className="home-about-social-links">

              {/* GitHub */}

              <li className="social-icons">
                <a
                  href="https://github.com/Rameshkn04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* LinkedIn */}

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ramesh-kn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* LeetCode */}

              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/RameshKN04/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="LeetCode"
                >
                  <SiLeetcode />
                </a>
              </li>

              {/* Instagram */}

              <li className="social-icons">
                <a
                  href="https://instagram.com/ramesh.kn04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              {/* Facebook */}

              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100081888117211"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  title="Facebook"
                >
                  <AiFillFacebook />
                </a>
              </li>

              {/* X (Twitter) */}

              <li className="social-icons">
                <a
                  href="https://x.com/RameshKN04"
                  target="_blank"
                  rel="noreferrer"  
                  className="icon-colour home-social-icons"
                  title="X (Twitter)"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              {/* Email */}

              <li className="social-icons">
                <a
                  href="mailto:rameshkn2004@gmail.com"
                  className="icon-colour home-social-icons"
                  title="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>

            </ul>
            <div style={{ marginTop: "35px" }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/contact")}
              >
                📬 Get In Touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
