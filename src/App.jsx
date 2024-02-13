import { useState } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizz from "./components/Quizz/Quizz";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AddQuestion from "./components/AddQuestion/AddQuestion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/api/register" Component={Register} />
          {/* <Route path="/api/login" exact Component={Login} /> */}
          <Route path="/quizz" Component={Home} />
          <Route path="/add" Component={AddQuestion} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
