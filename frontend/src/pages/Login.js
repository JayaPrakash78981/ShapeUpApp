import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { BsLock } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success("Login Successfully!");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className=" py-5">
      <FormContainer className="d-flex justify-content-center">
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formEmail">
            <Form.Label style={{ color: '#ffffff' }}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className=" py-2">
            <Form.Label style={{ color: '#ffffff' }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderColor: '#333' }}
            />
          </Form.Group>

          {isLoading && <Loader />}

          <Button variant="primary" type="submit">
            <BsLock /> Login
          </Button>

          <Row className="py-3">
            <Col style={{ color: '#b0b0b0' }}>
              New Customer? <Link to="/pages/register" style={{ color: '#90caf9' }}>Register</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
      <Footer />
    </div>
  );
};

export default Login;
