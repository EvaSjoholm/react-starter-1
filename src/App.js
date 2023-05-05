import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Main } from 'components/Main'
import { StartPage } from 'components/StartPage'
import { BooksDataReversed } from 'components/BooksDataReversed'
import { Navigation } from 'components/Navigation'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigation />
        <Routes>
          <Route path="/index" element={<StartPage />} />
          <Route path="/books" element={<Main />} />
          <Route path="/books/reversed" element={<BooksDataReversed />} />
          <Route path="*" element={<Navigate to="/index" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

