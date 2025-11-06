import React, { useState } from "react";
import "../styles/Achats.css";

export default function Achats() {
  const [achats, setAchats] = useState([
    { id: 1, titre: "1984", auteur: "George Orwell" },
    { id: 2, titre: "Dune", auteur: "Frank Herbert" },
  ]);

  return (
    <div className="achats-container">
      <h1 className="achats-title">Mes Achats</h1>
      <div className="achats-list">
        {achats.map((livre) => (
          <div className="livre-card" key={livre.id}>
            <h2>{livre.titre}</h2>
            <p>{livre.auteur}</p>
          </div>
        ))}
      </div>

      <button className="add-button">＋</button>
    </div>
  );
}
