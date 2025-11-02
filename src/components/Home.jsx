import React, { useState } from 'react';
import MonthSelector from './MonthSelector';
import '../styles/Home.css';

function Home({ books }) {
  const [selectedMonth, setSelectedMonth] = useState('Novembre 2025');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('title'); // 'title' ou 'price'

  const filteredBooks = books
    .filter(book => book.month === selectedMonth)
    .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if(sortKey === 'title') return a.title.localeCompare(b.title);
      if(sortKey === 'price') return a.price - b.price;
      return 0;
    });

  const total = filteredBooks.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="home">
      <h1>Mes livres</h1>

      <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />

      <div className="home-controls">
        <input
          type="text"
          placeholder="Rechercher un livre..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={sortKey} onChange={e => setSortKey(e.target.value)}>
          <option value="title">Trier par titre</option>
          <option value="price">Trier par prix</option>
        </select>
      </div>

      <div className="table-container">
        <table className="book-list">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Prix (€)</th>
              <th>Mois</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length === 0 ? (
              <tr>
                <td colSpan="3">Aucun livre trouvé.</td>
              </tr>
            ) : (
              filteredBooks.map(book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.price.toFixed(2)}</td>
                  <td>{book.month}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="home-total">Total : {total.toFixed(2)} €</div>
    </div>
  );
}

export default Home;
