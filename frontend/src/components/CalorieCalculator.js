import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const calculateCalories = (e) => {
    e.preventDefault();
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    bmr = Math.trunc(bmr);
    const deficitCalories = bmr - 500;
    const maintenanceCalories = bmr;
    const bulkingCalories = bmr + 500;

    setResults({
      deficit: deficitCalories.toFixed(2),
      maintenance: maintenanceCalories.toFixed(2),
      bulking: bulkingCalories.toFixed(2),
    });
  };

  const [results, setResults] = useState({
    deficit: "",
    maintenance: "",
    bulking: "",
  });

  return (
    <Form onSubmit={calculateCalories}>
      <FormGroup>
        <FormLabel htmlFor="age" style={{ color: '#ffffff' }}>Age: </FormLabel>
        <FormControl
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="weight" style={{ color: '#ffffff' }}>Weight (kg): </FormLabel>
        <FormControl
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="height" style={{ color: '#ffffff' }}>Height (cm): </FormLabel>
        <FormControl
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}
        />
      </FormGroup>

      <Button variant="primary" type="submit" className="mb-3 mt-3">
        Calculate Calories
      </Button>

      <Table bordered style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555' }}>Calorie Type</th>
            <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555' }}>Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>Deficit</td>
            <td data-testid="deficit" style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{results.deficit}</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>Maintenance</td>
            <td data-testid="maintenance" style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{results.maintenance}</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>Bulking</td>
            <td data-testid="bulking" style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{results.bulking}</td>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
};

export default CalorieCalculator;
