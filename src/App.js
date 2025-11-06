import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Achats from "./components/Achats";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="logo">BookFlow</h1>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/achats">Achats</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achats" element={<Achats />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
