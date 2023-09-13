import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Arqum-dp.jpeg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm Arqum Khurshid, a final-year Data Science student 
              <br />
              <br />I'm passionate for extracting insights from complex datasets. Currently, I'm gaining 
              <i>
                <b className="purple"> practical experience as a Machine Learning Intern at Horrizon AI.
 </b>
              </i>
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div>
              <img src={myImg} className="img-fluid" alt="avatar" style={{width: "200px", height:"200px" , borderRadius: "50%"}} />
            </div>
          </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
