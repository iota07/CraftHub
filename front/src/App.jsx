import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Register from "./Pages/Register";
import Home from "./Pages/home";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignInForm from "./Components/SignInForm/SignInForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
