import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataAll } from './actions'
import { CHANGE_PAGE_NUMBER, CHANGE_PAGE_SIZE } from "./constants";

function PaginationComponent() {
  const [pageNumberL, setPageNumber] = useState('')
  const [pageSizeL, setPageSize] = useState('')
  const dispatch = useDispatch()
  const API_KEY = useSelector(state => state.API_KEY)
  const pageSize = useSelector(state => state.pageSize)
  const pageNumber = useSelector(state => state.pageNumber)
  const sortBy = useSelector(state => state.sortBy)
  const totalResults = useSelector(state => state.cards.totalResults)
  const searchPhrase = useSelector(state => state.searchPhrase)
  let total

  if (totalResults) {
    total = Math.ceil(totalResults / pageSize)
  } else { total = '' }

  const onChangePageNumber = ({ target: { value } }) => {
    if (!searchPhrase) {
      alert("Введите поисковую фразу!")
      return
    } else {
      if (/^\d*$/i.test(value)) {
        setPageNumber(value)
      } else {
        alert("В данное поле можно вводить только положительные целые числа!")
        return
      }

    }
  }

  const onChangePageSize = ({ target: { value } }) => {
    if (!searchPhrase) {
      alert("Введите поисковую фразу!")
      return
    } else {
      if (/^\d*$/i.test(value)) {
        setPageSize(value)
      } else {
        alert("В данное поле можно вводить только положительные целые числа!")
        return
      }

    }
  }

  const onBlurPageNumber = () => {
    if (pageNumberL !== '') {
      dispatch({ type: CHANGE_PAGE_NUMBER, payload: Number(pageNumberL) })
      dispatch(fetchDataAll(`https://newsapi.org/v2/everything?q=${searchPhrase}&pageSize=${pageSize}&page=${pageNumber}&sortBy=${sortBy}&apiKey=${API_KEY}`))
    }
  }

  const onBlurPageSize = () => {
    if (pageSizeL !== '') {
      dispatch({ type: CHANGE_PAGE_SIZE, payload: Number(pageSizeL) })
      dispatch(fetchDataAll(`https://newsapi.org/v2/everything?q=${searchPhrase}&pageSize=${pageSize}&page=${pageNumber}&sortBy=${sortBy}&apiKey=${API_KEY}`))
    }
  }


  return (
    <>
      <div className="d-flex justify-content-center my-2">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="pageSize">Кол-во статей на странице</label>
            <input type="number" className="form-control" data-testid="art" min={1} id="pageSize" placeholder={20} value={pageSizeL} onBlur={onBlurPageSize} onChange={onChangePageSize} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="pageNumber">Номер страницы</label>
            <input type="number" className="form-control" min={1} id="pageNumber" placeholder={1} value={pageNumberL} onBlur={onBlurPageNumber} onChange={onChangePageNumber} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-2 mb-5">Количество страниц: {total}</div>
    </>
  )
}


export default PaginationComponent
