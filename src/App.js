import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Achats from './components/Achats';
import './styles/App.css';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Dune', price: 18.5, month: 'Novembre 2025' },
    { id: 2, title: 'Neuromancien', price: 14.99, month: 'Novembre 2025' },
  ]);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/achats">Achats</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/achats" element={<Achats books={books} setBooks={setBooks} />} />
      </Routes>
    </div>
  );
}

export default App;
