import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Professional certifications and achievements in AI, Cloud,
          Data Analytics, and Software Development.
        </p>

        <Row style={{ justifyContent: "center" }}>

          {/* Oracle AI Foundations */}

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <h4 className="purple">
                  Oracle Cloud Infrastructure AI Foundations Associate
                </h4>

                <p>
                  Oracle
                </p>

                <p>
                  Demonstrated knowledge of Artificial Intelligence,
                  Machine Learning concepts, Generative AI, and OCI AI
                  services.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Oracle Generative AI */}

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <h4 className="purple">
                  Oracle Generative AI Professional
                </h4>

                <p>
                  Oracle
                </p>

                <p>
                  Certified in Generative AI concepts including LLMs,
                  Prompt Engineering, RAG, and AI-powered solutions.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Power BI */}

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <h4 className="purple">
                  Power BI Data Analytics
                </h4>

                <p>
                  Data Analytics
                </p>

                <p>
                  Data visualization, dashboard development, KPI tracking,
                  and business intelligence reporting using Power BI.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Tableau */}

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <h4 className="purple">
                  Tableau Data Visualization
                </h4>

                <p>
                  Data Analytics
                </p>

                <p>
                  Interactive dashboard creation, business reporting,
                  and advanced data visualization techniques.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* GenAI */}

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <h4 className="purple">
                  Generative AI Fundamentals
                </h4>

                <p>
                  AI & Machine Learning
                </p>

                <p>
                  Foundations of Large Language Models, Prompt Engineering,
                  AI Agents, and Generative AI applications.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Software Development */}

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <h4 className="purple">
                  Software Development Certification
                </h4>

                <p>
                  Programming & Development
                </p>

                <p>
                  Core concepts of software engineering, development
                  lifecycle, testing, and deployment practices.
                </p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;