import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/Context";
import LoginPage from "../src/components/LoginPage";
export default function App() {
  const [user, setUser] = useState({});
  const contextValue = { user, setUser };
  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/cadastro" element={<RegistrationPage />} />
              <Route path="/home" element={<HabitsPage />} />
              <Route path="/nova-entrada" element={<TodayPage />} />
              <Route path="/nova-saida" element={<History />} /> */}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
