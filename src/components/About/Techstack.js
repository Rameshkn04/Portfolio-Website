import React from "react";
import { Col, Row } from "react-bootstrap";

import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>⚡</h3>
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>🤖</h3>
        <div className="tech-icons-text">Machine Learning</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>🧠</h3>
        <div className="tech-icons-text">Generative AI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>📊</h3>
        <div className="tech-icons-text">Power BI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>📈</h3>
        <div className="tech-icons-text">Tableau</div>
      </Col>

    </Row>
  );
}

export default Techstack;