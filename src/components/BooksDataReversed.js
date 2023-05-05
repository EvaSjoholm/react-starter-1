import React, { useState, useEffect } from 'react';

export const BooksDataReversed = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://express-ip-ej5lzeqelq-lz.a.run.app/books/reversed')
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.BooksDataReversed);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="main">
      <p>Reversed Order of Books</p>
      {list.map((item) => (
        <div className="list">
          <ul>ID: {item.bookID}</ul>
          <ul>Title: {item.title}</ul>
        </div>
      ))}
    </div>
  )
}