import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import {
  AiOutlineLink,
  AiOutlineCalendar,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";

function CertificateCard({ certificate }) {
  return (
    <Card className="certificate-card h-100">

      <div className="certificate-image-wrapper">
        <Card.Img
          variant="top"
          src={certificate.image}
          alt={certificate.title}
          className="certificate-image"
        />
      </div>

      <Card.Body className="d-flex flex-column">

        <div className="certificate-header">

          <h5 className="certificate-title">
            {certificate.title}
          </h5>

          <p className="certificate-issuer">
            <AiOutlineSafetyCertificate />{" "}
            {certificate.issuer}
          </p>

        </div>

        <p className="certificate-description">
          {certificate.description}
        </p>

        <div className="certificate-skills">

          {certificate.skills.map((skill, index) => (
            <Badge
              bg="secondary"
              className="skill-badge"
              key={index}
            >
              {skill}
            </Badge>
          ))}

        </div>

        <div className="certificate-footer mt-auto">

          <div className="certificate-category">
            <AiOutlineCalendar /> {certificate.category}
          </div>

          <Button
            variant="primary"
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-btn"
          >
            <AiOutlineLink /> View Credential
          </Button>

        </div>

      </Card.Body>

    </Card>
  );
}

export default CertificateCard;