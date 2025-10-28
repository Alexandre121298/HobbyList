import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="logo">HobbyList</h1>
      <nav>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Accueil
        </Link>
        <Link
          to="/liste"
          className={location.pathname === "/liste" ? "active" : ""}
        >
          Liste
        </Link>
      </nav>
    </header>
  );
}

export default Header;
