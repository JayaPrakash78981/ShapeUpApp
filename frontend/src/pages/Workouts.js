import React from "react";
import { Container } from "react-bootstrap";
import ExercisePage from "../components/ExerciseDB";
import Footer from "../components/Footer";

const Workouts = () => {
  return (
    <>
      {/* This new 'page-container' class adds proper padding and
        fixes the "lot of white space" problem.
      */}
      <div className="page-container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Container>
          <h1 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '2rem', fontWeight: '700' }}>
            Workout Database
          </h1>
          <ExercisePage />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Workouts;

