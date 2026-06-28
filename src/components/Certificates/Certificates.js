import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCard";
import certificates from "./certificateData";
import "./Certificates.css";

function Certificates() {
  const professional = certificates.filter(
    (item) => item.category === "Professional"
  );

  const academic = certificates.filter(
    (item) => item.category === "Academic"
  );

  const hackathons = certificates.filter(
    (item) => item.category === "Hackathon"
  );

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
            marginBottom: "50px",
          }}
        >
          A collection of professional certifications, academic achievements,
          and hackathon participations demonstrating my continuous learning
          journey in Artificial Intelligence, Machine Learning, Software
          Engineering, Cloud Computing, and Full Stack Development.
        </p>

        {/* ---------------- Professional ---------------- */}

        <h2 className="certificate-section-title">
          🏆 Professional Certifications
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          {professional.map((certificate, index) => (
            <Col
              md={6}
              lg={4}
              className="certificate-col"
              key={index}
            >
              <CertificateCard certificate={certificate} />
            </Col>
          ))}
        </Row>

        {/* ---------------- Academic ---------------- */}

        <h2 className="certificate-section-title">
          🎓 Academic Certifications
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          {academic.map((certificate, index) => (
            <Col
              md={6}
              lg={4}
              className="certificate-col"
              key={index}
            >
              <CertificateCard certificate={certificate} />
            </Col>
          ))}
        </Row>

        {/* ---------------- Hackathons ---------------- */}

        <h2 className="certificate-section-title">
          🚀 Hackathons & Competitions
        </h2>

        <Row style={{ justifyContent: "center" }}>
          {hackathons.map((certificate, index) => (
            <Col
              md={6}
              lg={4}
              className="certificate-col"
              key={index}
            >
              <CertificateCard certificate={certificate} />
            </Col>
          ))}
        </Row>

      </Container>
    </Container>
  );
}

export default Certificates;