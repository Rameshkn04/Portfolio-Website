import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { FaLightbulb, FaRobot, FaMousePointer } from "react-icons/fa";

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
          Intellectual property contributions showcasing innovation in
          Artificial Intelligence, Healthcare, and Human-Computer Interaction.
        </p>

        <Row style={{ justifyContent: "center" }}>

          {/* Patent 1 */}

          <Col lg={5} md={6} className="project-card">
            <Card className="project-card-view">

              <Card.Body>

                <div
                  style={{
                    fontSize: "55px",
                    textAlign: "center",
                    color: "#c770f0",
                    marginBottom: "20px",
                  }}
                >
                  <FaRobot />
                </div>

                <h4
                  className="purple"
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  AI-Powered Intelligent Pet Health Monitoring and Behavioral
                  Anomaly Detection System
                </h4>

                <hr />

                <p>
                  <strong>Status:</strong> Filed
                </p>

                <p>
                  <strong>Domain:</strong> Artificial Intelligence • Computer
                  Vision • IoT • Healthcare
                </p>

                <p style={{ textAlign: "justify" }}>
                  An AI-powered intelligent system designed to continuously
                  monitor pet health and detect abnormal behavioural patterns
                  using intelligent sensing, machine learning, and automated
                  analytics to enable early health diagnosis and improve animal
                  care.
                </p>

                <div
                  style={{
                    color: "#c770f0",
                    fontWeight: "600",
                    marginTop: "15px",
                  }}
                >
                  <FaLightbulb /> Patent Filed
                </div>

              </Card.Body>

            </Card>
          </Col>

          {/* Patent 2 */}

          <Col lg={5} md={6} className="project-card">
            <Card className="project-card-view">

              <Card.Body>

                <div
                  style={{
                    fontSize: "55px",
                    textAlign: "center",
                    color: "#c770f0",
                    marginBottom: "20px",
                  }}
                >
                  <FaMousePointer />
                </div>

                <h4
                  className="purple"
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  A Position Sensor-Based System and Method for Real-Time Mouse
                  Pointer Tracking
                </h4>

                <hr />

                <p>
                  <strong>Status:</strong> Filed
                </p>

                <p>
                  <strong>Domain:</strong> Human-Computer Interaction • Sensors
                  • Embedded Systems
                </p>

                <p style={{ textAlign: "justify" }}>
                  A position sensor-based tracking system developed for precise
                  real-time mouse pointer movement using intelligent sensing and
                  efficient motion detection techniques, enabling improved
                  accuracy and enhanced user interaction.
                </p>

                <div
                  style={{
                    color: "#c770f0",
                    fontWeight: "600",
                    marginTop: "15px",
                  }}
                >
                  <FaLightbulb /> Patent Filed
                </div>

              </Card.Body>

            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Patents;