import React from 'react';
import AddBookForm from './AddBookForm';
import '../styles/Achats.css';

function Achats({ books, setBooks }) {
  return (
    <div className="achats">
      <h1>Ajouter un livre</h1>
      <AddBookForm books={books} setBooks={setBooks} />
    </div>
  );
}

export default Achats;
