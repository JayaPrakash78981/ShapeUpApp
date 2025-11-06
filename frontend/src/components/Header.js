import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
      toast.success("Logout Successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // For mobile toggle

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Nav.Link as={Link} to={to} className={isActive ? "active" : ""}>
        {children}
      </Nav.Link>
    );
  };

  return (
    // --- UPDATED: Navbar props for dark theme ---
    <Navbar
      bg="dark" // Dark background
      variant="dark" // Dark variant
      expand="md"
      sticky="top" // Use sticky="top" instead of fixed="top"
      className="navbar-custom" // Dark scrolled style
      onToggle={setMobileMenuOpen} // Track if mobile menu is open
      expanded={isMobileMenuOpen}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "100px",
              filter: "none", // Remove filter to show original logo
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" onClick={() => setMobileMenuOpen(false)}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pages/features">Features</NavLink>
            <NavLink to="/pages/workouts">Workout Database</NavLink>
            <NavLink to="/pages/nutrition-checker">Nutrition Checker</NavLink>
            <NavLink to="/pages/bmr-calculator">BMR</NavLink>
          </Nav>
          <Nav onClick={() => setMobileMenuOpen(false)}>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item as={Link} to="/pages/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/pages/register">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/pages/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

