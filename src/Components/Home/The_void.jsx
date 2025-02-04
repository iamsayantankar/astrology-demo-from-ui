
import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import "../../assets/css/Home/The_void.css";

const VoidSection = () => {
  return (
    <section className="void-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Logo with Reflection */}
          <Col md={6} xs={12} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="void-title">THE VOID</h1>
            <h1 className="void-title reflection1">THE VOID</h1>
            <h1 className="void-title reflection2">THE VOID</h1>
          </Col>

          {/* Right Side: Description and Email Subscription */}
          <Col md={6} xs={12}>
            <div className="void-description text-start text-md-start">
              <h2 className="theme-title">The Greatest Blog Theme</h2>
              <p className="theme-description">
                My content is out of this world. Get the best web design tips twice a week for free.
              </p>
              <div className="subscription-form d-flex flex-column text-start flex-md-row align-items-center">
                <Input
                  type="email"
                  placeholder="Email"
                  className="email-input mb-3 mb-md-0"
                />
                <Button className="subscribe-btn my-auto">Subscribe</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VoidSection;
