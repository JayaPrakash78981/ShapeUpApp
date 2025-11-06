import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalorieCalculator from "../components/CalorieCalculator";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";

const BMRCalculator = () => {
  return (
    <>
      {/* We use the same 'page-container' for a consistent look */}
      <div className="page-container">
        <FormContainer>
          {/* FormContainer gives us the professional card style */}
          <h2 className="text-center" style={{ color: '#ffffff' }}>BMR Calculator</h2>
          <CalorieCalculator />
        </FormContainer>
      </div>
      <Footer />
    </>
  );
};

export default BMRCalculator;

