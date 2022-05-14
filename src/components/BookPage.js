import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import Form from './Form';
import { loadBooksApi } from '../redux/books/books';

function BookPage() {
  const myBooks = useSelector((store) => store.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooksApi());
  }, [dispatch]);

  return (
    <div className="AllContainer">
      {
        myBooks.map((book) => (
          <BookItem
            key={book.item_id}
            item_id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
      }
      <Form />
    </div>
  );
}

export default BookPage;