import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Logo from "../assets/images/Logo.png"; // Import your logo

const Footer = () => {
  return (
    <footer className="footer-pro">
      <Container>
        <Row>
          {/* --- Column 1: Brand --- */}
          <Col md={4} className="mb-3">
            <img src={Logo} alt="Shape Up" className="footer-pro-brand" style={{ filter: 'none' }} />
            <p style={{ color: '#b0b0b0' }}>
              Your personal guide to achieving your fitness dreams. Track, learn,
              and improve every day.
            </p>
          </Col>

          {/* --- Column 2: Features --- */}
          <Col md={2} sm={6} className="mb-3">
            <h5 style={{ color: '#ffffff' }}>Features</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/pages/workouts" style={{ color: '#b0b0b0' }}>
                Workouts
              </Nav.Link>
              <Nav.Link as={Link} to="/pages/nutrition-checker" style={{ color: '#b0b0b0' }}>
                Nutrition
              </Nav.Link>
              <Nav.Link as={Link} to="/pages/bmr-calculator" style={{ color: '#b0b0b0' }}>
                BMR
              </Nav.Link>
              <Nav.Link as={Link} to="/pages/profile/meal-plan" style={{ color: '#b0b0b0' }}>
                Meal Plan
              </Nav.Link>
            </Nav>
          </Col>

          {/* --- Column 3: Account --- */}
          <Col md={2} sm={6} className="mb-3">
            <h5 style={{ color: '#ffffff' }}>Account</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/pages/login" style={{ color: '#b0b0b0' }}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/pages/register" style={{ color: '#b0b0b0' }}>
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/pages/profile" style={{ color: '#b0b0b0' }}>
                Profile
              </Nav.Link>
            </Nav>
          </Col>

          {/* --- Column 4: Company --- */}
          <Col md={2} sm={6} className="mb-3">
            <h5 style={{ color: '#ffffff' }}>Company</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/pages/about" style={{ color: '#b0b0b0' }}>
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/pages/features" style={{ color: '#b0b0b0' }}>
                All Features
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* --- Copyright Row --- */}
        <Row>
          <Col className="text-center footer-pro-copyright">
            © {new Date().getFullYear()} Shape-Up, Inc. All RightsReserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

