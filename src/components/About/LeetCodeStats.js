import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SiLeetcode } from "react-icons/si";

function LeetCodeStats() {
  const username = "RameshKN04";

  return (
    <Container fluid className="about-section">
      <Container>

        <h1 className="project-heading">
          LeetCode <strong className="purple">Profile</strong>
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          My coding journey, problem-solving progress, contest performance and
          achievements on LeetCode.
        </p>

        <Row className="justify-content-center">

          <Col lg={8} md={10} className="text-center">

            <img
              src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Fira%20Code&ext=contest`}
              alt="LeetCode Card"
              className="img-fluid"
              style={{
                maxWidth: "700px",
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 0 25px rgba(199,112,240,0.25)",
              }}
            />

          </Col>

        </Row>

        <Row className="justify-content-center mt-5">

          <Col md={12} className="text-center">

            <Button
              variant="primary"
              href={`https://leetcode.com/u/${username}/`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 35px",
                fontSize: "18px",
                borderRadius: "10px",
              }}
            >
              <SiLeetcode
                style={{
                  marginRight: "10px",
                  marginBottom: "3px",
                }}
              />
              View LeetCode Profile
            </Button>

          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default LeetCodeStats;