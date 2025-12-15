import React, { useState } from "react";
import { registerPharmacy } from "../Service/UserService";
import { useNavigate } from "react-router-dom";

const SignupPharmacy = () => {
  const navigate = useNavigate();
  const [pharmacy, setPharmacy] = useState({ username: "", password: "", pharmacyName: "", licenseNumber: "" });

  const handleChange = (e) => {
    setPharmacy({ ...pharmacy, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerPharmacy(pharmacy);
      alert("Pharmacy registered successfully");
      navigate("/login");
    } catch {
      alert("Pharmacy registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="pharmacyName" placeholder="Pharmacy Name" onChange={handleChange} required />
      <input name="licenseNumber" placeholder="License Number" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register Pharmacy</button>
    </form>
  );
};

export default SignupPharmacy;
