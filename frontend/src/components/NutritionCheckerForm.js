import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

const NutritionCheckerForm = () => {
  const [foodItem, setFoodItem] = useState("");
  const [nutritionResult, setNutritionResult] = useState(null);

  const handleSearchNutrition = async (e) => {
    try {
      const response = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(
          foodItem
        )}`,
        {
          headers: {
            "X-Api-Key": "WOO23cTA4ww2yrQ+otISmw==Z3Q2fFBcCTeE3OWj",
          },
        }
      );

      const data = response.data;

      if (data.items.length > 0) {
        setNutritionResult(data.items[0]);
      } else {
        alert("No nutrition information found for that food item");
      }
    } catch (error) {
      console.error("Error fetching nutrition information:", error);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
        <h2 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '2rem' }}>Nutrition Information Search</h2>
          <Form
            inline
            onSubmit={(e) => {
              e.preventDefault();
              handleSearchNutrition();
            }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
          >
            <Form.Control
              type="text"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              placeholder="Enter food item (e.g., apple, chicken breast)"
              className="mr-sm-2"
              style={{
                backgroundColor: '#1e1e1e',
                color: '#ffffff',
                borderColor: '#333',
                borderRadius: '8px',
                padding: '0.75rem',
                fontSize: '1.1rem',
                minWidth: '300px'
              }}
            />
            <Button
              variant="primary"
              className="my-3"
              onClick={handleSearchNutrition}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '8px',
                backgroundColor: '#90caf9',
                borderColor: '#90caf9',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(144, 202, 249, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Nutrition
            </Button>
          </Form>
        </Col>
      </Row>

      {nutritionResult && (
        <Row className="justify-content-md-center" style={{ marginTop: '3rem' }}>
          <Col md={10}>
            <h2 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '2rem' }}>Nutrition Results</h2>
            <div style={{
              backgroundColor: '#1e1e1e',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid #333',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}>
              <Table striped bordered hover responsive="md" style={{
                backgroundColor: '#1e1e1e',
                color: '#ffffff',
                borderColor: '#333',
                marginBottom: '0'
              }}>
                <thead>
                  <tr>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Name</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Serving Size</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Calories</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Total Fat</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Saturated Fat</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Cholesterol</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Sodium</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Carbohydrates</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Fiber</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Sugar</th>
                    <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555', fontWeight: '600' }}>Protein</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333', fontWeight: '500' }}>{nutritionResult.name}</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>100g</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333', fontWeight: '600', color: '#90caf9' }}>{nutritionResult.calories}</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{nutritionResult.fat_total_g}g</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{nutritionResult.fat_saturated_g}g</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{nutritionResult.cholesterol_mg}mg</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{nutritionResult.sodium_mg}mg</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{nutritionResult.carbohydrates_total_g}g</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{nutritionResult.fiber_g}g</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{nutritionResult.sugar_g}g</td>
                    <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{nutritionResult.protein_g}g</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NutritionCheckerForm;
