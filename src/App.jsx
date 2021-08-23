import React, { useState } from 'react'
import './App.css'
import Form from './Form'
import Cards from './Cards'

function App() {
  const [cards, setCards] = useState([])
  const addCard = (name, date, country, gender, agreement) => {
    setCards(prevCards => [...prevCards, { name, date, country, gender, agreement }])
  }

  return (
    <div className="container">
      <Form addCard={addCard} />
      <Cards cards={cards} />
    </div>

  )
}

export default App
