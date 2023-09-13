import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h2 className="text-white">Data Analysis</h2>
      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2 className="text-white">Python Programming</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2 className="text-white">Machine Learning</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2 className="text-white">Deep Learning</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h2 className="text-white">Web Scraping</h2>
      </Col>
    </Row>
  );
}

export default Techstack;
