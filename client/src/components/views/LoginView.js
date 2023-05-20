import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/users";
import ErrorAlert from "../ErrorAlert";
import { loginUser } from "../../helpers/authHelper";
import "./LoginView.css";

const LoginView = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2 className="login-title">
          <Link className="link" to="/">
            SinkIN
          </Link>
        </h2>
        <h5 className="login-subtitle">Login</h5>
        <p className="login-secondary-text">
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="email"
          autoFocus
          required
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <ErrorAlert error={serverError} />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;
