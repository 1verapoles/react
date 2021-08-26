import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataAll } from './actions'
import { SET_SEARCH_PHRASE } from "./constants";
import './Form.css'

function Form() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const API_KEY = useSelector(state => state.API_KEY)
  const pageSize = useSelector(state => state.pageSize)
  const pageNumber = useSelector(state => state.pageNumber)
  const sortBy = useSelector(state => state.sortBy)
  const searchPhrase = useSelector(state => state.searchPhrase)

  const isInputEmpty = () => {
    if (!search.trim()) {
      return true
    } else {
      return false
    }
  }

  const onKeyUpSearch = (e) => {
    if (e.keyCode === 13) {
      if (isInputEmpty()) {
        alert("Введите поисковую фразу!")
        return
      } else {
        dispatch({ type: SET_SEARCH_PHRASE, payload: search.trim() })
        dispatch(fetchDataAll(`https://newsapi.org/v2/everything?q=${searchPhrase}&pageSize=${pageSize}&page=${pageNumber}&sortBy=${sortBy}&apiKey=${API_KEY}`))
      }
    }
  }

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="form-group form">
      <label className="d-flex justify-content-center" htmlFor="search">Введите поисковую фразу:</label>
      <input type="text" className="form-control" id="search" aria-describedby="search" value={search} onKeyUp={onKeyUpSearch} onChange={onChangeSearch} />
    </div>
  )
}

export default Form
