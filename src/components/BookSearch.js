import React, { useState, useEffect } from 'react'

export const BookSearch = () => {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    fetch('https://express-ip-ej5lzeqelq-lz.a.run.app/books/title/')
      .then((res) => res.json())
      .then((data) => {
        setBookList(data.body.title);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (

    <section className="results">
      {bookList.length > 0 && bookList.map((item) => {
        return (
          <article className="searchWrapper" key={item.isbn}>
            <div className="details">
              <h3>{item.title}</h3>
            </div>
          </article>
        )
      })}
    </section>
  )
}

