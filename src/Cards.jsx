import React from 'react'
import Card from './Card'

function Cards() {

  return (
    <div className="d-flex flex-wrap">
      {new Array(10).fill(0).map((_, index) => <Card key={index} />)}
    </div>
  )
}

export default Cards
