import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
// REMOVED: import FormContainer from "../components/FormContainer";

const CalorieCalculator = () => {
  // ... (All existing logic, states, and functions remain the same) ...
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male"); // Added gender state
  const [activity, setActivity] = useState(1.2); // Added activity state

  const [results, setResults] = useState({
    deficit: "",
    maintenance: "",
    bulking: "",
  });

  const calculateCalories = (e) => {
    e.preventDefault();

    // 1. Input Validation
    if (!age || !weight || !height) {
      alert("Please enter age, weight, and height.");
      return;
    }

    // 2. Calculate BMR (Mifflin-St Jeor Equation)
    // BMR is the energy required at rest.
    let bmr;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (gender === "male") {
      // Male BMR: 10 * weight (kg) + 6.25 * height (cm) - 5 * age (y) + 5
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      // Female BMR: 10 * weight (kg) + 6.25 * height (cm) - 5 * age (y) - 161
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // 3. Calculate TDEE (Maintenance Calories)
    // TDEE = BMR * Activity Multiplier
    const tdee = bmr * parseFloat(activity);
    const maintenanceCalories = Math.trunc(tdee);

    // 4. Calculate Goals
    const deficitCalories = maintenanceCalories - 500;
    const bulkingCalories = maintenanceCalories + 500;

    setResults({
      deficit: deficitCalories.toFixed(0),
      maintenance: maintenanceCalories.toFixed(0),
      bulking: bulkingCalories.toFixed(0),
    });
  };

  return (
    <Form onSubmit={calculateCalories}>
      {/* Gender Input */}
      <FormGroup>
        <FormLabel htmlFor="gender" style={{ color: '#ffffff' }}>Gender:</FormLabel>
        <FormControl
          as="select"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </FormControl>
      </FormGroup>

      {/* Age Input */}
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

      {/* Weight Input */}
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

      {/* Height Input */}
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

      {/* Activity Level Input */}
      <FormGroup>
        <FormLabel htmlFor="activity" style={{ color: '#ffffff' }}>Activity Level:</FormLabel>
        <FormControl
          as="select"
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}
        >
          <option value={1.2}>Sedentary (little or no exercise)</option>
          <option value={1.375}>Lightly Active (light exercise/sports 1-3 days/week)</option>
          <option value={1.55}>Moderately Active (moderate exercise/sports 3-5 days/week)</option>
          <option value={1.725}>Very Active (hard exercise/sports 6-7 days a week)</option>
          <option value={1.9}>Extra Active (very hard exercise/physical job)</option>
        </FormControl>
      </FormGroup>

      <Button variant="primary" type="submit" className="mb-3 mt-3">
        Calculate Calories
      </Button>

      {/* Results Table */}
      <Table bordered style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555' }}>Calorie Type</th>
            <th style={{ backgroundColor: '#333', color: '#ffffff', borderColor: '#555' }}>Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>Deficit (Weight Loss)</td>
            <td data-testid="deficit" style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{results.deficit}</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>Maintenance (Stay Same)</td>
            <td data-testid="maintenance" style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{results.maintenance}</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>Surplus (Bulking/Gain)</td>
            <td data-testid="bulking" style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}>{results.bulking}</td>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
};

export default CalorieCalculator;
