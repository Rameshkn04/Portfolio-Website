import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

function Patents() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Patents</strong>
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Innovation, research, and intellectual property contributions.
        </p>

        <Row style={{ justifyContent: "center" }}>

          {/* Patent 1 */}

          <Col md={5} className="project-card">
            <Card className="project-card-view">
              <Card.Body>

                <h4 className="purple">
                  Patent Title 1
                </h4>

                <p>
                  Status: Published / Filed
                </p>

                <p>
                  Add your patent abstract or short description here.
                </p>

                <Button variant="primary">
                  Patent Details
                </Button>

              </Card.Body>
            </Card>
          </Col>

          {/* Patent 2 */}

          <Col md={5} className="project-card">
            <Card className="project-card-view">
              <Card.Body>

                <h4 className="purple">
                  Patent Title 2
                </h4>

                <p>
                  Status: Published / Filed
                </p>

                <p>
                  Add your patent abstract or short description here.
                </p>

                <Button variant="primary">
                  Patent Details
                </Button>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Patents;