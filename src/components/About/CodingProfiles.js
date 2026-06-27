import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function CodingProfiles() {
  return (
    <Container style={{ paddingTop: "70px", paddingBottom: "50px" }}>

      <h1 className="project-heading">
        Coding <strong className="purple">Profiles</strong>
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
        }}
      >
        Explore my coding journey, open-source contributions, professional
        profile, and competitive programming achievements.
      </p>

      <Row className="justify-content-center">

        {/* GitHub */}

        <Col md={3} className="mb-4">
          <Card className="quote-card-view text-center">
            <Card.Body>

              <FaGithub
                size={60}
                color="#ffffff"
                style={{ marginBottom: "15px" }}
              />

              <h4>GitHub</h4>

              <p>
                Explore my AI, ML, Full Stack, Data Engineering and Open Source
                Projects.
              </p>

              <Button
                variant="primary"
                href="https://github.com/Rameshkn04"
                target="_blank"
              >
                Visit Profile
              </Button>

            </Card.Body>
          </Card>
        </Col>

        {/* LeetCode */}

        <Col md={3} className="mb-4">
          <Card className="quote-card-view text-center">
            <Card.Body>

              <SiLeetcode
                size={60}
                color="#FFA116"
                style={{ marginBottom: "15px" }}
              />

              <h4>LeetCode</h4>

              <p>
                Solved 900+ coding problems covering DSA, SQL, Algorithms and
                Interview Preparation.
              </p>

              <Button
                variant="primary"
                href="https://leetcode.com/u/RameshKN04/"
                target="_blank"
              >
                View Profile
              </Button>

            </Card.Body>
          </Card>
        </Col>

        {/* LinkedIn */}

        <Col md={3} className="mb-4">
          <Card className="quote-card-view text-center">
            <Card.Body>

              <FaLinkedin
                size={60}
                color="#0A66C2"
                style={{ marginBottom: "15px" }}
              />

              <h4>LinkedIn</h4>

              <p>
                Connect with me for networking, collaborations and career
                opportunities.
              </p>

              <Button
                variant="primary"
                href="https://www.linkedin.com/in/ramesh-kn"
                target="_blank"
              >
                Connect
              </Button>

            </Card.Body>
          </Card>
        </Col>

        {/* Portfolio */}

        <Col md={3} className="mb-4">
          <Card className="quote-card-view text-center">
            <Card.Body>

              <FaGlobe
                size={60}
                color="#c770f0"
                style={{ marginBottom: "15px" }}
              />

              <h4>Portfolio</h4>

              <p>
                Explore my projects, experience, certifications, patents and
                research work.
              </p>

              <Button
                variant="primary"
                href="/"
              >
                Visit
              </Button>

            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default CodingProfiles;