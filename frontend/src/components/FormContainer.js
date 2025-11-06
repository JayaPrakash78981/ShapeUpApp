import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        {/* We use Col-md-8 to give it some space on larger screens */}
        <Col xs={12} md={8}>
          {/* This new class uses our professional styles from App.css */}
          <div className="form-container-pro">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;

