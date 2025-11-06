import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';

const HeroBanner = () => {
  return (
    // This no longer needs the negative margin-top
    <div className="hero-banner">
      {/* This div is for the background image and overlay */}
      <div className="hero-background"></div>
      
      {/* This Container holds the centered content */}
      <Container className="hero-content">
        <h1 className="hero-title">Your Fitness Journey Starts Here</h1>
        <p className="hero-subtitle">
          We are here to help you achieve your fitness dreams.
        </p>
        <Button 
          as={Link} 
          to="../pages/features" 
          variant="success" 
          size="lg" 
          className="hero-button"
        >
          What We Offer
        </Button>
      </Container>
    </div>
  );
};

export default HeroBanner;
