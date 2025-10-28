import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} HobbyList — Projet personnel</p>
    </footer>
  );
}

export default Footer;
