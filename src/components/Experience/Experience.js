import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          My internship experience and industry exposure.
        </p>

        <Row style={{ justifyContent: "center" }}>
          <Col md={10}>
            <Card className="quote-card-view">
              <Card.Body>

                <h2 className="purple">
                  Android App Developer using GenAI Intern
                </h2>

                <h5 style={{ color: "#c770f0" }}>
                  MindMatrixEd | Bengaluru
                </h5>

                <p style={{ color: "#bdbdbd" }}>
                  February 2026 – May 2026
                </p>

                <hr />

                <h4 className="purple">
                  🚀 Project Undertaken
                </h4>

                <h5>
                  GramaUrja – Smart Village Power Monitoring Application
                </h5>

                <br />

                <ul
                  style={{
                    textAlign: "left",
                    color: "white",
                    lineHeight: "2",
                  }}
                >
                  <li>
                    Developed an Android-based smart village power monitoring
                    application to track electricity consumption and
                    distribution.
                  </li>

                  <li>
                    Built interactive dashboards for real-time monitoring of
                    energy usage and power analytics.
                  </li>

                  <li>
                    Integrated backend APIs to fetch and display live energy
                    consumption data.
                  </li>

                  <li>
                    Implemented smart reporting and visualization features to
                    analyze village-level power usage trends.
                  </li>

                  <li>
                    Improved accessibility of energy insights for rural
                    communities through a user-friendly mobile interface.
                  </li>

                  <li>
                    Collaborated with developers and mentors to design,
                    develop, test, and deploy the application.
                  </li>

                  <li>
                    Gained practical experience in Android development,
                    API integration, software engineering workflows,
                    and GenAI-driven application concepts.
                  </li>
                </ul>

                <br />

                <h4 className="purple">
                  💻 Technologies Used
                </h4>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "15px",
                  }}
                >
                  <span className="badge bg-primary p-2">
                    Android Development
                  </span>

                  <span className="badge bg-success p-2">
                    Kotlin
                  </span>

                  <span className="badge bg-warning text-dark p-2">
                    Firebase
                  </span>

                  <span className="badge bg-info text-dark p-2">
                    REST APIs
                  </span>

                  <span className="badge bg-danger p-2">
                    GenAI
                  </span>

                  <span className="badge bg-secondary p-2">
                    Mobile UI/UX
                  </span>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;