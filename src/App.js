import Login from "./components/pages/LoginPage";
import SignUp from "./components/pages/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage";
import BookCars from "./components/pages/BookCarsPage";
import Header from "./components/layouts/header/Header";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book_cars" element={<BookCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
