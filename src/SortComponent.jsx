import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataAll } from './actions'
import { CHANGE_SORT_BY } from "./constants";

function SortComponent() {
  const dispatch = useDispatch()
  const searchPhrase = useSelector(state => state.searchPhrase)
  const API_KEY = useSelector(state => state.API_KEY)
  const pageSize = useSelector(state => state.pageSize)
  const pageNumber = useSelector(state => state.pageNumber)
  const sortBy = useSelector(state => state.sortBy)

  const onChangeSortBy = ({ target: { value } }) => {
    if (!searchPhrase) {
      alert("Введите поисковую фразу!")
      return
    } else {
      dispatch({ type: CHANGE_SORT_BY, payload: value })
      dispatch(fetchDataAll(`https://newsapi.org/v2/everything?q=${searchPhrase}&pageSize=${pageSize}&page=${pageNumber}&sortBy=${sortBy}&apiKey=${API_KEY}`))
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center">Sort by:</div>
      <div className="d-flex justify-content-center my-2">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked={sortBy === "relevancy"} onChange={onChangeSortBy} value="relevancy" />
          <label className="form-check-label" htmlFor="inlineRadio1">relevancy</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" data-testid="popl" id="inlineRadio2" checked={sortBy === "popularity"} onChange={onChangeSortBy} value="popularity" />
          <label className="form-check-label" htmlFor="inlineRadio2">popularity</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" checked={sortBy === "publishedAt"} onChange={onChangeSortBy} value="publishedAt" />
          <label className="form-check-label" htmlFor="inlineRadio3">publishedAt</label>
        </div>
      </div>
    </>
  )
}


export default SortComponent
