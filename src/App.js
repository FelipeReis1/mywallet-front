import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/Context";
import LoginPage from "../src/components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import IncomePage from "./components/IncomePage";
import HomePage from "./components/HomePage";
import OutcomePage from "./components/OutcomePage";
export default function App() {
  const [user, setUser] = useState({});
  const contextValue = { user, setUser };
  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-entrada" element={<IncomePage />} />
          <Route path="/nova-saida" element={<OutcomePage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
