import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import authImg2 from "../../../public/images/auth/register.jpg";
import logo from "../../assets/icons/logo/Logo.png";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("dreamsUsers")) || [];

    users.push(formData);

    localStorage.setItem("dreamsUsers", JSON.stringify(users));

    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-left">

          <div className="auth-content">

            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <h2>Register</h2>

            <p className="subtitle">
              Create New Dreamspos Account
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Name</label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  required

                />
              </div>

              <div className="remember mb-3">
                <input type="checkbox" required/>
                <span>
                  I agree to the Terms & Privacy
                </span>
              </div>

              <button type="submit" className="btn auth-btn">
                Sign Up
              </button>

            </form>

            <div className="auth-footer">
              <p>
                New on our platform?
                <Link to="/"> Sign In instead</Link>
              </p>

              <div className="divider">
                <span>OR</span>
              </div>

              <div className="social-login">

                <button className="social-btn facebook">
                  <i className="bi bi-facebook"></i>
                </button>

                <button className="social-btn google">
                  <i className="bi bi-google"></i>
                </button>

                <button className="social-btn apple">
                  <i className="bi bi-apple"></i>
                </button>

              </div>
            </div>

            <div className="copyright">
              Copyright © 2025 - DreamsPOS
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="auth-right">
          <img src={authImg2} alt="register" />
        </div>

      </div>
    </div>
  );
};

export default Register;