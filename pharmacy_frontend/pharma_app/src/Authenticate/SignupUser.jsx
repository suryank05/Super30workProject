import React, { useState } from "react";
import { registerUser } from "../Service/UserService";
import { useNavigate } from "react-router-dom";
import './SignupUserStyle.css'; 

const SignupUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the object to backend
      await registerUser({
        emailId: user.email,  // map frontend email to backend emailId
        username: user.email, // backend expects username same as email
        password: user.password,
        role: "ROLE_USER"     // default role
      });
      alert("User registered successfully");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("User already exists or error occurred");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupUser;
