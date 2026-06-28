import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import lexcounsel from "../../Assets/Projects/lexcounsel.png";
import evbattery from "../../Assets/Projects/evbattery.png";
import facerecognition from "../../Assets/Projects/facerecognition.png";
import traffic from "../../Assets/Projects/traffic.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import tourism from "../../Assets/Projects/tourism.png";
import online_movie_ticket_booking from "../../Assets/Projects/online_movie_ticket_booking.png";
import retail from "../../Assets/Projects/retail.png";
import protfolio from "../../Assets/Projects/protfolio.png";
import object_detection from "../../Assets/Projects/objectdetection.png";
import gramaurja from "../../Assets/Projects/gramaurja.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Project Portfolio</strong>
        </h1>

        <p style={{ color: "white", textAlign: "center" }}>
          A collection of AI, Machine Learning, Data Engineering,
          Full Stack Development, and Intelligent Systems projects.
        </p>

        {/* Featured Projects */}

        <h2
          className="purple"
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          ⭐ Featured Projects
        </h2>

        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lexcounsel}
              isBlog={false}
              title="LexCounsel AI"
              description="AI-powered legal assistant using Generative AI and RAG for legal document analysis, legal search, and intelligent legal guidance."
              ghLink="https://github.com/Rameshkn04/LexCounselAI"
              demoLink="https://lex-counsel-ai-kecs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evbattery}
              isBlog={false}
              title="EV Battery Copilot"
              description="Machine Learning based EV battery health prediction platform with battery analytics, charging insights, and trip planning."
              ghLink="https://github.com/Rameshkn04/AI-Copilot-for-Electric-Vehicle-Battery-Health-Prediction-and-Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protfolio}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Modern React.js portfolio website showcasing projects, research papers, patents, internships, certifications, and technical skills."
              ghLink="https://github.com/Rameshkn04/Portfolio-Website"
              demoLink="https://rameshkn.vercel.app"
            />
          </Col>
        </Row>

        {/* AI & ML */}

        <h2
          className="purple"
          style={{
            textAlign: "center",
            marginTop: "70px",
            marginBottom: "30px",
          }}
        >
          🤖 AI & Machine Learning
        </h2>

        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Smart Traffic Management System"
              description="AI-based traffic monitoring and congestion management system with adaptive signal optimization and route analysis."
              ghLink="https://github.com/Rameshkn04/Smart-AI-Based-Traffic-Management-Using-Django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facerecognition}
              isBlog={false}
              title="Face Recognition Attendance System"
              description="AI-powered attendance and campus access management system using face recognition, liveness detection, and anti-spoofing."
              ghLink="https://github.com/Rameshkn04/Face-Recognition-Based-Attendance-System-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={object_detection}
              isBlog={false}
              title="Real-Time Object Detection (YOLOv8)"
              description="Computer Vision project using YOLOv8 and OpenCV for real-time object detection and live camera inference."
              ghLink="https://github.com/Rameshkn04/Real-Time-Object-Detection-YOLOv8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourism}
              isBlog={false}
              title="Multi-Agent Tourism System"
              description="AI-powered tourism recommendation platform utilizing multiple intelligent agents and real-time travel insights."
              ghLink="https://github.com/Rameshkn04/Multi-Agent-Tourism"
            />
          </Col>
        </Row>

        {/* Data Engineering */}

        <h2
          className="purple"
          style={{
            textAlign: "center",
            marginTop: "70px",
            marginBottom: "30px",
          }}
        >
          📊 Data Engineering
        </h2>

        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retail}
              isBlog={false}
              title="Retail Data Engineering Pipeline"
              description="End-to-end retail data engineering solution featuring ETL pipelines, Medallion Architecture, KPI dashboards, logging, and Power BI analytics."
              ghLink="https://github.com/Rameshkn04/Retail-Data-Engineering-Pipeline"
            />
          </Col>
        </Row>

        {/* Software Development */}

        <h2
          className="purple"
          style={{
            textAlign: "center",
            marginTop: "70px",
            marginBottom: "30px",
          }}
        >
          💻 Software Development
        </h2>

        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Website"
              description="Full-stack e-commerce platform with product management, authentication, shopping cart, and payment integration."
              ghLink="https://github.com/Rameshkn04/E-CommerceWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online_movie_ticket_booking}
              isBlog={false}
              title="Movie Ticket Booking System"
              description="Online movie ticket booking platform with seat selection, show management, and booking history."
              ghLink="https://github.com/Rameshkn04/Online-Movie-Ticket-Booking-System-Using-PHP-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gramaurja}
              isBlog={false}
              title="GramaUrja Android App"
              description="Mobile application designed to support rural energy management and community engagement initiatives."
              ghLink="https://github.com/Rameshkn04/GramaUrja"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;