import React from "react";
import { Container } from "react-bootstrap";
import NutritionCheckerForm from "../components/NutritionCheckerForm";
import Footer from "../components/Footer";

const NutritionChecker = () => {
  return (
    <>
      {/* We use the same 'page-container' for a consistent look */}
      <div className="page-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Container>
          <h1 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '2rem', fontWeight: '700' }}>
            Nutrition Checker
          </h1>
          <NutritionCheckerForm />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default NutritionChecker;

