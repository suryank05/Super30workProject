import Login from "./Authenticate/login";
import SignupPharmacy from "./Authenticate/SignupPharmacy";
import SignupUser from "./Authenticate/SignupUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/signup" element={<SignupUser />} />
        <Route path="/signup-pharmacy" element={<SignupPharmacy />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App
