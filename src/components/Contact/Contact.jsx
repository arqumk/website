import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="py-5 my-5">
      <Container>
        <Row>
          <Col>
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="number">Number:</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <button type="submit" class="submit-btn">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
