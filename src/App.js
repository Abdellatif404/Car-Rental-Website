import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import BookCars from "./pages/BookCarsPage";
import Header from "./layouts/header/Header";
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
