import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Form from './Form'
import Cards from './Cards'
import Spinner from './Spinner'
import SortComponent from './SortComponent'
import PaginationComponent from './PaginationComponent'

function App() {
  const isLoading = useSelector(state => state.isLoading)

  return (
    <div className="container">
      <Form />
      <SortComponent />
      <PaginationComponent />
      {isLoading && <Spinner />}
      <Cards />
    </div>

  )
}

export default App
