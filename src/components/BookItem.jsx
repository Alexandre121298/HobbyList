import React from 'react';
import '../styles/BookItem.css';

function BookItem({ book }) {
  return (
    <div className="book-item">
      <span>{book.title}</span> - <span>{book.price} €</span>
    </div>
  );
}

export default BookItem;
