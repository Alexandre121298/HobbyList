import React, { useState } from 'react';
import '../styles/AddBookForm.css';

function AddBookForm({ books, setBooks }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [month, setMonth] = useState('Novembre 2025');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price) {
      alert('Veuillez renseigner un titre et un prix valide.');
      return;
    }

    const newBook = {
      id: books.length + 1,
      title: title.trim(),
      price: parseFloat(price),
      month
    };

    setBooks([...books, newBook]);
    setTitle('');
    setPrice('');
    setSuccessMessage(`Le livre "${newBook.title}" a été ajouté avec succès !`);

    // Message disparaît après 3 secondes
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="number" step="0.01" placeholder="Prix" value={price} onChange={e => setPrice(e.target.value)} />
        <select value={month} onChange={e => setMonth(e.target.value)}>
          <option value="Septembre 2025">Septembre 2025</option>
          <option value="Octobre 2025">Octobre 2025</option>
          <option value="Novembre 2025">Novembre 2025</option>
          <option value="Décembre 2025">Décembre 2025</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
      {successMessage && (
        <div style={{ marginTop: '15px', textAlign: 'center', color: 'green', fontWeight: 'bold' }}>
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default AddBookForm;
