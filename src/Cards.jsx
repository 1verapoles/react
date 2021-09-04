import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

function Cards() {
  const cards = useSelector(state => state.cards.articles)


  return (
    <div className="d-flex flex-wrap">
      {cards && cards.map((el, index) => <Card key={index} {...el} />)}
    </div>
  )
}


export default Cards
