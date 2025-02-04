import React from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import '../assets/css/Footer.css';
import footerBg from "/Images/mobile-footer.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerBg} className='mobile-footer-bg' alt="" />
      <div className="footer-overlay">
        <Container>
          <Row>
            {/* Section 1: Newsletter */}
            <Col md="4">
              <h5 className="text-white">THE VOID</h5>
              <p className="text-white">Sign up for our newsletter</p>
              <div className="d-flex newsletter">
                <Input
                  type="email"
                  placeholder="Email"
                  className="me-2 newsletter-input"
                />
                <Button style={{ backgroundColor: "#84054F" }} className="newsletter-button">
                  Subscribe
                </Button>
              </div>
            </Col>

            {/* Section 2 & 3: Navigation and Legal */}
            <Col md="4" xs="12" className="mt-4 mt-md-0">
              <Row>
                <Col xs="6" className=" text-md-start mb-3 mb-md-0">
                  <h5 className="text-white">Navigation</h5>
                  <ul className="list-unstyled">
                    <li className="text-white">Overview</li>
                    <li className="text-white">Blog</li>
                    <li className="text-white">Categories</li>
                    <li className="text-white">Tags</li>
                    <li className="text-white">Contact</li>
                  </ul>
                </Col>
                <Col xs="6" className="text-md-start">
                  <h5 className="text-white">Legal</h5>
                  <ul className="list-unstyled">
                    <li className="text-white">License</li>
                    <li className="text-white">Refund policy</li>
                    <li className="text-white">Terms of use</li>
                    <li className="text-white">Privacy policy</li>
                    <li className="text-white">Support</li>
                  </ul>
                </Col>
              </Row>
            </Col>

            {/* Section 4: In the Know */}
            <Col md="4" xs="12" className="mt-4 mt-md-0">
              <h5 className="text-white">In the Know</h5>
              <ul className="list-unstyled">
                <li className="text-white">@BowTiedWebReapr</li>
                <li className="text-white">@Cosmic_Themes</li>
              </ul>
            </Col>
          </Row>

          {/* Copyright Section */}
          <Row>
            <Col className="text-center mt-4">
              <p className="text-white small">
                &copy; 2024 The Void. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;