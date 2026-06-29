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
              <b className="purple">Ramesh K N</b>, a{" "}
              <b className="purple">
                Bachelor of Engineering graduate in Artificial Intelligence &
                Machine Learning
              </b>{" "}
              from{" "}
              <b className="purple">
                CMR Institute of Technology (CMRIT), Bengaluru
              </b>
              .

              <br />
              <br />

              I am passionate about building intelligent software solutions
              using
              <b className="purple">
                {" "}Artificial Intelligence, Machine Learning,
                Generative AI, Full Stack Development,
                Computer Vision, Data Analytics,
                and Intelligent Systems.
              </b>

              <br />
              <br />

              I graduated with a
              <b className="purple"> CGPA of 8.34</b>
              {" "}and enjoy applying AI to solve practical,
              real-world challenges.

              <br />
              <br />

              I have developed several impactful projects including
              <b className="purple">
                {" "}LexCounsel AI,
                EV Battery Copilot,
                Multi-Agent Tourism Recommendation System,
                GramaUrja Android Application,
                Face Recognition Attendance System,
                and Smart Traffic Management System.
              </b>

              <br />
              <br />

              My technical expertise includes
              <b className="purple">
                {" "}Python, Java, Kotlin,
                React.js, FastAPI, Machine Learning,
                Generative AI, Firebase,
                MongoDB, MySQL,
                Power BI, Tableau,
                Git & GitHub.
              </b>

              <br />
              <br />

              I successfully completed a
              <b className="purple">
                {" "}Generative AI Internship at MindMatrixEd
              </b>{" "}
              where I developed the
              <b className="purple">
                {" "}GramaUrja Android application
              </b>
              . I have also co-authored
              <b className="purple">
                {" "}one research publication
              </b>{" "}
              and filed
              <b className="purple">
                {" "}two AI-related patents
              </b>
              .

              <br />
              <br />

              I am continuously learning emerging technologies,
              contributing to innovative projects,
              and exploring opportunities in
              <b className="purple">
                {" "}Software Engineering,
                Artificial Intelligence,
                Machine Learning,
                and Generative AI.
              </b>
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