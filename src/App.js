import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Main } from 'components/Main'
import { StartPage } from 'components/StartPage'
import { SingleBook } from 'components/SingleBook'
import { Navigation } from 'components/Navigation'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigation />
        <Routes>
          <Route path="/index" element={<StartPage />} />
          <Route path="/books" element={<Main />} />
          <Route path="/books/title" element={<SingleBook />} />
          <Route path="*" element={<Navigate to="/index" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

