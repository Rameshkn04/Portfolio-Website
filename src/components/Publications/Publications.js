import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { FaFilePdf, FaBookOpen } from "react-icons/fa";

// Import your paper
import paper from "../../Assets/Publications/AI_Copilot_EV_Battery.pdf";

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>

        <h1 className="project-heading">
          Research <strong className="purple">Publication</strong>
        </h1>

        <p style={{ color: "white", textAlign: "center" }}>
          My published research work in Artificial Intelligence and Electric Vehicles.
        </p>

        <Row className="justify-content-center">

          <Col lg={10}>

            <Card className="quote-card-view">

              <Card.Body>

                <h2 className="purple">
                  AI Copilot for Electric Vehicle Battery Health Prediction and
                  Management
                </h2>

                <hr />

                <p>
                  <strong>Status:</strong> ✅ Published
                </p>

                <p>
                  <strong>Year:</strong> 2026
                </p>

                <p>
                  <strong>Research Area:</strong>
                  <br />
                  Artificial Intelligence • Machine Learning • Electric Vehicles •
                  Battery Analytics • Predictive Maintenance
                </p>

                <p>
                  <strong>Authors:</strong>
                  <br />
                  Priyanka S Talekar,
                  Anshika S,
                  Prajwal B Gowda,
                  <span className="purple"> Ramesh KN</span>,
                  Shivanand Gopal Gundappagol,
                  Nikhil Vasishta GA
                </p>

                <p style={{ textAlign: "justify" }}>
                  <strong>Abstract</strong>
                  <br /><br />
                  This research presents an AI-powered copilot for Electric Vehicle
                  Battery Health Prediction and Management. The proposed system
                  integrates real-time battery telemetry, machine learning-based
                  State of Charge (SOC) and State of Health (SOH) prediction,
                  intelligent trip planning, and conversational AI to provide
                  predictive battery analytics, reduce range anxiety, and improve
                  battery lifespan through data-driven decision support.
                </p>

                <p>
                  <strong>Technologies Used:</strong>
                  <br />
                  Python • FastAPI • React • SQLite • Machine Learning • AI •
                  Battery Analytics
                </p>

                <div className="text-center mt-4">

                  <Button
                    variant="primary"
                    href={paper}
                    target="_blank"
                    style={{ marginRight: "15px" }}
                  >
                    <FaBookOpen /> View Paper
                  </Button>

                  <Button
                    variant="success"
                    href={paper}
                    download
                  >
                    <FaFilePdf /> Download PDF
                  </Button>

                </div>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Publications;