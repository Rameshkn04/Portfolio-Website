import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";

import Particle from "../Particle";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

import { SiLeetcode } from "react-icons/si";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    show: false,
    variant: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    const now = new Date();

    const templateParams = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      company: form.current.company.value,
      reason: form.current.reason.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus({
          show: true,
          variant: "success",
          message:
                "✅ Thank you! Your message has been sent successfully. I'll get back to you as soon as possible.",
        });

        form.current.reset();
      })
      .catch(() => {
        setStatus({
          show: true,
          variant: "danger",
          message:
  "❌ Unable to send your message. Please try again later or contact me directly at rameshkn2004@gmail.com.",
        });
      })
      .finally(() => {
        setLoading(false);

        setTimeout(() => {
          setStatus({
            show: false,
            variant: "",
            message: "",
          });
        }, 5000);
      });
  };

  return (
    <Container fluid className="contact-section">
      <Particle />

      <Container>

        <h1 className="project-heading">
          Let's <strong className="purple">Connect</strong>
        </h1>

        <p className="contact-subtitle">
          I'm always open to discussing Software Engineering,
          Artificial Intelligence, Machine Learning,
          Research Collaborations, Internships,
          Full-Time Opportunities and exciting projects.
        </p>

        <Row className="justify-content-center">

          <Col lg={5}>

            <Card className="contact-card">

              <Card.Body>

                <h3 className="purple mb-4">
                  Contact Information
                </h3>

                <p>
                  <AiOutlineMail />{" "}
                  <strong>Email</strong>
                </p>

                <a
                  href="mailto:rameshkn2004@gmail.com"
                  className="contact-link"
                >
                  rameshkn2004@gmail.com
                </a>

                <hr />

                <p>
                  <FaMapMarkerAlt />{" "}
                  <strong>Location</strong>
                </p>

                <a
                href="https://maps.google.com/?q=Bengaluru,Karnataka"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                >
                Bengaluru, Karnataka, India
                </a>

                <hr />


                <h5 className="purple">
                Currently Available For
                </h5>

                <ul style={{ color: "white" }}>
                <li>✔ Full-Time Software Engineer Roles</li>
                <li>✔ AI / ML Engineer Opportunities</li>
                <li>✔ Research Collaborations</li>
                <li>✔ Open Source Contributions</li>
                </ul>

                <h5 className="purple">
                  Connect with me
                </h5>

                <div className="contact-icons">

                  <a
                    href="https://github.com/Rameshkn04"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ramesh-kn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>

                  <a
                    href="https://leetcode.com/u/RameshKN04/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiLeetcode />
                  </a>

                  <a
                    href="https://instagram.com/ramesh.kn04"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillInstagram />
                  </a>

                </div>

              </Card.Body>

            </Card>

          </Col>

          <Col lg={7}>

            <Card className="contact-card">

              <Card.Body>

                <h3 className="purple mb-4">
                  Send Me a Message
                </h3>

                {status.show && (
                  <Alert variant={status.variant}>
                    {status.message}
                  </Alert>
                )}

                <Form ref={form} onSubmit={sendEmail}>

                  <Form.Group className="mb-3">

                    <Form.Label>Full Name *</Form.Label>

                    <Form.Control
                      name="from_name"
                      required
                    />

                  </Form.Group>

                  <Form.Group className="mb-3">

                    <Form.Label>Email *</Form.Label>

                    <Form.Control
                      type="email"
                      name="from_email"
                      required
                    />

                  </Form.Group>

                  <Form.Group className="mb-3">

                    <Form.Label>Company</Form.Label>

                    <Form.Control
                      name="company"
                    />

                  </Form.Group>

                  <Form.Group className="mb-3">

                    <Form.Label>
                      Reason for Contact
                    </Form.Label>

                    <Form.Select
                      name="reason"
                    >

                      <option>
                        Full-Time Opportunity
                      </option>

                      <option>
                        Internship Opportunity
                      </option>

                      <option>
                        AI/ML Collaboration
                      </option>

                      <option>
                        Research Collaboration
                      </option>

                      <option>
                        Freelance Project
                      </option>

                      <option>
                        General Inquiry
                      </option>

                    </Form.Select>

                  </Form.Group>

                  <Form.Group className="mb-3">

                    <Form.Label>Subject *</Form.Label>

                    <Form.Control
                      name="subject"
                      required
                    />

                  </Form.Group>

                  <Form.Group className="mb-4">

                    <Form.Label>Message *</Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      required
                    />

                  </Form.Group>

                  <Button
                    className="send-btn"
                    type="submit"
                    disabled={loading}
                  >
                    <FaPaperPlane />

                    {" "}

                    {loading
                      ? "Sending..."
                      : "Send Message"}
                  </Button>

                </Form>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Contact;