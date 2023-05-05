import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="navbar">
      <button type="button"><Link to="/index">Startpage</Link></button>
      <button type="button"><Link to="/books">All Books</Link></button>
      <button type="button"><Link to="/books/reversed">Reversed List</Link></button>
    </div>
  )
}