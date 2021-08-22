import React from 'react'
import './SearchBar.css'

function SearchBar() {

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input type="text" className="form-control" id="search" aria-describedby="search" />
      </div>
    </form>
  )
}


export default SearchBar
