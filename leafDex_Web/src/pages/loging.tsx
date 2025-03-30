// Login.tsx
import React, { useState } from "react";
import "./style/log_style.css"; // Import your CSS file

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      <div className="login-card fade-in">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email  </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password  </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
              autoComplete="off"
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
      <div className="bubbles-bg"></div>
    </div>
  );
};

export default Login;