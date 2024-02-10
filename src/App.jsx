import { useState } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Quizz from "./components/Quizz/Quizz";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/quizz" Component={Quizz}/>
        </Routes>
      </BrowserRouter>
      {/* <Navbar/>
      <Home/> */}
    </>
  );
}

export default App;
