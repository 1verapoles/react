import React from 'react'
import Card from './Card'
//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

function Cards() {
  const cards = useSelector(state => state.cards.articles)

  return (
    <div className="d-flex flex-wrap">
      {cards && cards.map((el, index) => <Card key={index} {...el} />)}
    </div>
  )
}

// Cards.propTypes = {
//   cards: PropTypes.array
// };

export default Cards
