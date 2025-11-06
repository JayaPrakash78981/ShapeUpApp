import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// Import the icons we installed
import {
  CollectionPlay,
  ClipboardCheck,
  Calculator,
  PersonCircle,
  JournalCheck,
  CupStraw,
} from "react-bootstrap-icons";

// We've moved the card into its own component for cleanliness
const FeatureCard = ({ title, description, link, icon: Icon }) => {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card as={Link} to={link} className="feature-card-pro text-decoration-none">
        <Card.Body>
          <div className="feature-icon">
            <Icon /> {/* Render the icon */}
          </div>
          <Card.Title style={{ color: '#ffffff' }}>{title}</Card.Title>
          <Card.Text style={{ color: '#b0b0b0' }}>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const FeaturesPage = () => {
  const features = [
    {
      title: "Workout Database",
      description:
        "Find the perfect routine to target your specific goals.",
      link: "/pages/workouts",
      icon: CollectionPlay, // Assign the icon
    },
    {
      title: "Nutrition Checker",
      description:
        "Quickly see the nutritional value of any food.",
      link: "/pages/nutrition-checker",
      icon: ClipboardCheck,
    },
    {
      title: "BMR Calculator",
      description:
        "Determine your daily calorie needs and metabolism insights.",
      link: "/pages/bmr-calculator",
      icon: Calculator,
    },
    {
      title: "Create Account",
      description:
        "Save your progress and customize your experience.",
      link: "/pages/register",
      icon: PersonCircle,
    },
    {
      title: "Meal Planner",
      description:
        "Plan your meals for the day to stay on track and eat healthier.",
      link: "/pages/profile/meal-plan",
      icon: JournalCheck,
    },
    {
      title: "Water Intake Log",
      description:
        "Track how much water you drink each day to stay hydrated.",
      link: "/pages/profile/water-intake",
      icon: CupStraw,
    },
  ];

  return (
    <>
      <div className="page-container">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="section-title" style={{ color: '#ffffff' }}>App Features</h1>
              <p className="section-subtitle" style={{ color: '#b0b0b0' }}>
                All the tools you need to take control of your health and
                achieve your fitness goals.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                icon={feature.icon} // Pass the icon component
              />
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default FeaturesPage;

