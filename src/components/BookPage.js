import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import Form from './Form';

function BookPage() {
  const myBooks = useSelector((store) => store.booksReducer);
  return (
    <div>
      {
        myBooks.map(
          (book) => (<BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />),
        )
      }
      <Form />
    </div>
  );
}

export default BookPage;