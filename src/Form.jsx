import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './Form.css'

function Form({ search, onChangeSearch, onKeyUpSearch }) {
  return (
    <div className="form-group form">
      <label className="d-flex justify-content-center" htmlFor="search">Введите поисковую фразу:</label>
      <input type="text" className="form-control" id="search" aria-describedby="search" value={search} onKeyUp={onKeyUpSearch} onChange={onChangeSearch} />
    </div>
  )
}


Form.propTypes = {
  search: PropTypes.string,
  onChangeSearch: PropTypes.func,
  onKeyUpSearch: PropTypes.func
};

export default Form
