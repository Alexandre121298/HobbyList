import React, { useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [selectedMonth, setSelectedMonth] = useState("Novembre 2025");
  const [books, setBooks] = useState([
    { id: 1, title: "Dune", price: 18.5, bought: false },
    { id: 2, title: "Neuromancien", price: 14.99, bought: false },
    { id: 3, title: "Fondation", price: 19.99, bought: false },
  ]);

  const handleCheckbox = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, bought: !book.bought } : book
      )
    );
  };

  const months = [
    "Janvier 2025", "Février 2025", "Mars 2025", "Avril 2025",
    "Mai 2025", "Juin 2025", "Juillet 2025", "Août 2025",
    "Septembre 2025", "Octobre 2025", "Novembre 2025", "Décembre 2025"
  ];

  const total = books.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="home-container">
      <h1 className="home-title">Mes achats de livres</h1>

      <div className="mois-dropdown">
        <label>Sélectionnez un mois :</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <table className="book-table">
        <thead>
          <tr>
            <th></th>
            <th>TITRE</th>
            <th>PRIX (€)</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr
              key={book.id}
              className={`book-row ${book.bought ? "bought fade-slide" : "fade-slide"}`}
            >
              <td>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={book.bought}
                    onChange={() => handleCheckbox(book.id)}
                  />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>{book.title}</td>
              <td>{book.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="total">Total pour {selectedMonth} : {total.toFixed(2)} €</p>
    </div>
  );
};

export default Home;
