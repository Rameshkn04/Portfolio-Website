import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";

import mindmatrixLogo from "../../Assets/Experience/mindmatrixed-logo.png";
import completionLetter from "../../Assets/Experience/MindMatrixEd_Completion_Letter.pdf";

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
          My internship experience, industry exposure, and real-world software
          development journey.
        </p>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="quote-card-view">
              <Card.Body>

                {/* Header */}

                <Row className="align-items-center">

                  <Col md={9}>

                    <h2 className="purple">
                      Android App Developer using GenAI Intern
                    </h2>

                    <h5 style={{ color: "#c770f0" }}>
                      MindMatrixEd | Bengaluru
                    </h5>

                    <p style={{ color: "#bdbdbd" }}>
                      February 2026 – May 2026
                    </p>

                  </Col>

                  <Col md={3} className="text-center">

                    <img
                      src={mindmatrixLogo}
                      alt="MindMatrixEd"
                      style={{
                        width: "150px",
                        maxWidth: "100%",
                      }}
                    />

                  </Col>

                </Row>

                <hr />

                {/* Project */}

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
                    application to monitor electricity consumption and
                    distribution.
                  </li>

                  <li>
                    Built interactive dashboards for real-time monitoring of
                    village energy usage.
                  </li>

                  <li>
                    Integrated REST APIs and Firebase for live energy
                    management.
                  </li>

                  <li>
                    Designed intuitive mobile interfaces using Android
                    development best practices.
                  </li>

                  <li>
                    Implemented smart reporting and visualization modules for
                    power analytics.
                  </li>

                  <li>
                    Collaborated with mentors and developers following software
                    engineering workflows.
                  </li>

                  <li>
                    Gained practical experience in Android Development,
                    Generative AI, Firebase, API Integration and UI/UX Design.
                  </li>
                </ul>

                <br />

                {/* Technologies */}

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
                    Jetpack Compose
                  </span>

                  <span className="badge bg-info text-dark p-2">
                    Firebase
                  </span>

                  <span className="badge bg-danger p-2">
                    REST APIs
                  </span>

                  <span className="badge bg-secondary p-2">
                    Android Studio
                  </span>

                  <span className="badge bg-dark p-2">
                    Google AI Studio
                  </span>

                  <span className="badge bg-primary p-2">
                    Google Cloud Labs
                  </span>

                  <span className="badge bg-success p-2">
                    Generative AI
                  </span>

                  <span className="badge bg-warning text-dark p-2">
                    Mobile UI/UX
                  </span>

                </div>

                <br />

                {/* Achievements */}

                <h4 className="purple">
                  🏆 Key Achievements
                </h4>

                <ul
                  style={{
                    textAlign: "left",
                    color: "white",
                    lineHeight: "2",
                  }}
                >
                  <li>
                    Successfully completed a 4-month Android Development
                    Internship.
                  </li>

                  <li>
                    Developed the GramaUrja mobile application for rural power
                    monitoring.
                  </li>

                  <li>
                    Worked with Kotlin, Jetpack Compose, Firebase and REST APIs.
                  </li>

                  <li>
                    Explored Generative AI concepts using Google AI Studio.
                  </li>

                  <li>
                    Received an <strong>EXCELLENT</strong> performance rating
                    during the internship.
                  </li>
                </ul>

                <br />

                {/* Completion Letter */}

                <h4 className="purple">
                  📄 Internship Completion Letter
                </h4>

                <p style={{ color: "white" }}>
                  Internship successfully completed with an
                  <strong> EXCELLENT </strong>
                  performance rating.
                </p>

                <Button
                  variant="primary"
                  href="https://mindmatrix.io/"
                  target="_blank"
                  style={{ marginRight: "15px" }}
                >
                  🌐 Company Website
                </Button>

                <Button
                  variant="outline-primary"
                  href={completionLetter}
                  target="_blank"
                >
                  📄 View Completion Letter
                </Button>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;