import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

function Research() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Research <strong className="purple">Publications</strong>
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Research contributions and publications.
        </p>

        <Row style={{ justifyContent: "center" }}>

          <Col md={5} className="project-card">
            <Card className="project-card-view">
              <Card.Body>

                <h4 className="purple">
                  AI Copilot for Electric Vehicle Battery Health Prediction &
                  Management
                </h4>

                <p>
                  Research focused on Machine Learning and AI-driven battery
                  health prediction, predictive maintenance, and EV analytics.
                </p>

                <Button variant="primary">
                  Publication Coming Soon
                </Button>

              </Card.Body>
            </Card>
          </Col>

          <Col md={5} className="project-card">
            <Card className="project-card-view">
              <Card.Body>

                <h4 className="purple">
                  AI-Based Pet Monitoring and Health Analysis System
                </h4>

                <p>
                  Research on intelligent monitoring systems using Artificial
                  Intelligence for pet health tracking and behavior analysis.
                </p>

                <Button variant="primary">
                  Publication Coming Soon
                </Button>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Research;