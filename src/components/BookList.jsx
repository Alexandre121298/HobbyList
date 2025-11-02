import React from 'react';
import BookItem from './BookItem';
import '../styles/BookList.css';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length === 0 ? <p>Aucun livre ce mois-ci.</p> : 
        books.map(book => <BookItem key={book.id} book={book} />)}
    </div>
  );
}

export default BookList;
