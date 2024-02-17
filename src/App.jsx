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
import Details from "./components/Details/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/api/register" Component={Register} />

          <Route path="/quizz" Component={Home} />
          <Route path="/quizz/:id" Component={Quizz} />
          <Route path="/add/question" Component={AddQuestion} />
          <Route path="/user/detail" Component={Details} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
