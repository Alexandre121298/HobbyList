import React, { useState } from "react";
import "../styles/Home.css";

export default function Home() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Dune", prix: 20, achete: false },
    { id: 2, titre: "Fondation", prix: 18, achete: false },
    { id: 3, titre: "Neuromancien", prix: 15, achete: false },
  ]);

  const [selectedMonth, setSelectedMonth] = useState("Janvier");

  const toggleBought = (id) => {
    setBooks(
      books.map((b) => (b.id === id ? { ...b, achete: !b.achete } : b))
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const totalFixe = books.reduce((acc, b) => acc + b.prix, 0);
  const totalRestant = books
    .filter((b) => !b.achete)
    .reduce((acc, b) => acc + b.prix, 0);

  return (
    <div className="home-container">
      <h1 className="home-title">HobbyList</h1>

      <div className="mois-dropdown">
        <label>Sélectionnez un mois :</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {[
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
          ].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <table className="book-table">
        <thead>
          <tr>
            <th>Acheté</th>
            <th>Titre</th>
            <th>Prix (€)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id} className={b.achete ? "bought fade-slide" : "fade-slide"}>
              <td>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={b.achete}
                    onChange={() => toggleBought(b.id)}
                  />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>{b.titre}</td>
              <td>{b.prix.toFixed(2)}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteBook(b.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totals-container">
        <p className="total-fixe">💰 Total mensuel : {totalFixe.toFixed(2)} €</p>
        <p className="total-restant">📉 Total restant : {totalRestant.toFixed(2)} €</p>
      </div>
    </div>
  );
}
