import React from "react";
import { Container, Card } from "react-bootstrap";

function CareerObjective() {
  return (
    <Container style={{ paddingTop: "70px", paddingBottom: "70px" }}>
      <h1 className="project-heading">
        Career <strong className="purple">Objective</strong>
      </h1>

      <Card className="quote-card-view">
        <Card.Body>

          <p style={{ textAlign: "justify", fontSize: "1.15em" }}>
            I am a final-year Bachelor of Engineering student specializing in
            <span className="purple"> Artificial Intelligence and Machine Learning</span>,
            passionate about building intelligent, scalable, and impactful software
            solutions.

            <br /><br />

            My interests include
            <span className="purple">
              {" "}Artificial Intelligence,
              Machine Learning,
              Data Engineering,
              Generative AI,
              Full Stack Development,
              Cloud Computing
            </span>
            {" "}and Software Engineering.

            <br /><br />

            Through academic projects, internships, research, and continuous
            problem-solving on LeetCode, I have developed practical experience in
            designing AI-powered applications and modern software systems.

            <br /><br />

            I am actively seeking opportunities where I can contribute to innovative
            products, collaborate with talented teams, and continuously enhance my
            technical and problem-solving skills while delivering real-world impact.
          </p>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default CareerObjective;