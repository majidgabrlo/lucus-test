import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { login } from "./store/auth/authActions";
import { RootState } from "./store/store";

function App() {
  const { authenticated } = useSelector((state: RootState) => state.auth);

  if (!authenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <div>
      Moto
      <Routes>
        
      </Routes>
    </div>
  );
}

export default App;
