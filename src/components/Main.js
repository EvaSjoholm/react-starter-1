import React, { useState, useEffect } from 'react';

export const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://express-ip-ej5lzeqelq-lz.a.run.app/books/')
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.books);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="main">
      <h1>Info</h1>
      {list.map((item) => (
        <div className="list">
          <ul>ID: {item.bookID}</ul>
          <ul>Title: {item.title}</ul>
          <ul>Author: {item.authors}</ul>
        </div>
      ))}
    </div>
  )
}