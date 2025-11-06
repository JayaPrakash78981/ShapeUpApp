import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomeContent = () => {
  return (
    <>
      {/* --- SECTION 1: "Tools for Your Goals" --- */}
      <div className="home-content-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h2 className="section-title">The Tools for Your Goals</h2>
              <p className="section-subtitle">
                Trying to lose weight, tone up, lower your BMI, or invest in your
                overall health? We give you the right features to get there.
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Card className="mb-4 feature-card">
                <Card.Body>
                  <Card.Title style={{ color: '#ffffff' }}>Learn. Track. Improve.</Card.Title>
                  <Card.Text style={{ color: '#b0b0b0' }}>
                    Keeping a food diary helps you understand your habits and
                    to hit your goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-4 feature-card">
                <Card.Body>
                  <Card.Title style={{ color: '#ffffff' }}>Logging Simplified.</Card.Title>
                  <Card.Text style={{ color: '#b0b0b0' }}>
                    Save meals and use Quick Tools for
                    fast and easy food tracking.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-4 feature-card">
                <Card.Body>
                  <Card.Title style={{ color: '#ffffff' }}>Stay Motivated.</Card.Title>
                  <Card.Text style={{ color: '#b0b0b0' }}>
                    Join the World's Largest Fitness Community for advice, tips, and
                    support 24/7.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- SECTION 2: "Start your fitness journey" --- */}
      <div className="final-cta-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="section-title" style={{ color: '#ffffff' }}>Start your fitness journey today!</h2>
              <p className="lead" style={{ color: '#b0b0b0' }}>
                Sign up for Shape Up and get started on your path to a healthier
                lifestyle.
              </p>
              <Button
                variant="success"
                className="me-2"
                as={Link}
                to="/pages/register"
                size="lg"
                style={{ backgroundColor: '#90caf9', borderColor: '#90caf9' }}
              >
                Register
              </Button>
              <Button
                variant="outline-primary"
                as={Link}
                to="/pages/login"
                size="lg"
                style={{ color: '#90caf9', borderColor: '#90caf9' }}
              >
                Login
              </Button>
            </Col>
            <Col md={6}>
              {/* This image is from your original HomeContent.js file */}
              <img
                src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
                alt="Fitness illustration"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeContent;