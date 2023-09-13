import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ARQUM KHURSHID </span>
            from <span className="purple"> Lahore, Paksitan.</span>
            <br /> As a Machine Learning Intern at Horrizon AI, I work alongside seasoned professionals, contributing to cutting-edge solutions. This experience has enhanced my problem-solving skills and collaboration abilities.
           </p>
          

          <p style={{ color: "rgb(225 173 255)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">arqum</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
