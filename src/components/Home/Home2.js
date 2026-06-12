import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple">ME</span>
            </h1>

            <p className="home-about-body">
              Hi everyone, I am{" "}
              <b className="purple">Ramesh K N</b>, an Artificial Intelligence &
              Machine Learning Engineer from Bengaluru, India.

              <br />
              <br />

              I am passionate about building intelligent software solutions using
              <b className="purple">
                {" "}Machine Learning, Generative AI, Full Stack Development,
                Computer Vision, and Data Analytics.
              </b>

              <br />
              <br />

              Currently, I am pursuing my Bachelor's degree in
              <b className="purple">
                {" "}Artificial Intelligence & Machine Learning
              </b>
              with a CGPA of
              <b className="purple"> 8.34</b>.

              <br />
              <br />

              I have worked on several impactful projects including
              <b className="purple">
                {" "}LexCounsel AI,
                EV Battery Copilot,
                Face Recognition Student Management System,
                and Smart Traffic Management System.
              </b>

              <br />
              <br />

              My technical expertise includes
              <b className="purple">
                {" "}Python, Java, React.js, FastAPI, Machine Learning,
                Generative AI, MongoDB, Power BI, Tableau, and Git.
              </b>

              <br />
              <br />

              I have completed a
              <b className="purple"> Generative AI Internship </b>
              and contributed to
              <b className="purple">
                {" "}research publications and patent development
              </b>
              focused on innovative AI-powered solutions.

              <br />
              <br />

              I am continuously learning, building projects, and exploring new
              technologies to create real-world solutions that make a meaningful
              impact.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;