import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm{" "}
            <span className="purple">Ramesh K N</span>
            from <span className="purple">Bengaluru, India</span>.
            <br />
            <br />

            I am an enthusiastic{" "}
            <span className="purple">
              Artificial Intelligence & Machine Learning Engineer
            </span>{" "}
            passionate about building intelligent software solutions that solve
            real-world problems.

            <br />
            <br />

            My interests include{" "}
            <span className="purple">
              Machine Learning, Generative AI, Full Stack Development,
              Computer Vision, Data Analytics, and Intelligent Systems.
            </span>

            <br />
            <br />

            I have worked on several impactful projects including{" "}
            <span className="purple">
              LexCounsel AI, EV Battery Copilot,
              Face Recognition Student Management System,
              and Smart Traffic Management System.
            </span>

            <br />
            <br />

            I have also completed a{" "}
            <span className="purple">
              Generative AI Internship
            </span>{" "}
            and contributed to{" "}
            <span className="purple">
              research publications and patent development
            </span>{" "}
            focused on innovative AI-driven solutions.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI & ML Projects 🤖
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring Generative AI 🚀
            </li>

            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 📚
            </li>

            <li className="about-activity">
              <ImPointRight /> Playing Cricket & Volleyball 🏏🏐
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building technology that creates real-world impact."
          </p>

          <footer className="blockquote-footer">
            Ramesh K N
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;