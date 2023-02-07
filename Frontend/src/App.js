import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import BookCars from "./pages/BookCarsPage";
import React from "react";
import Rent from "./pages/RentPage";
import Dashboard from "./pages/DashboardPage";
import Profile from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cars" element={<BookCars />} />
        <Route path="/rent/:id" element={<Rent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={"404"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
