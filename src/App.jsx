import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Form'
import Cards from './Cards'
import Spinner from './Spinner'
import SortComponent from './SortComponent'
import PaginationComponent from './PaginationComponent'
const API_KEY = "2aedd492fa3c4e97b41ac78483bc25e1"

function App() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [pageNumber, setPageNumber] = useState('')
  const [pageNumberVal, setPageNumberVal] = useState(undefined)
  const [pageSize, setPageSize] = useState('')
  const [pageSizeVal, setPageSizeVal] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (sortBy === '') { return }
    fetchData(`https://newsapi.org/v2/everything?q=${search}&pageSize=${pageSizeVal || 20}&page=${pageNumberVal || 1}&sortBy=${sortBy}&apiKey=${API_KEY}`)
  }, [sortBy])

  useEffect(() => {
    if (pageNumberVal === undefined) { return }
    fetchData(`https://newsapi.org/v2/everything?q=${search}&pageSize=${pageSizeVal || 20}&page=${pageNumberVal || 1}&sortBy=${sortBy}&apiKey=${API_KEY}`)
  }, [pageNumberVal])

  useEffect(() => {
    if (pageSizeVal === undefined) { return }
    fetchData(`https://newsapi.org/v2/everything?q=${search}&pageSize=${pageSizeVal || 20}&page=${pageNumberVal || 1}&sortBy=${sortBy}&apiKey=${API_KEY}`)
  }, [pageSizeVal])


  const isInputEmpty = () => {
    if (!search.trim()) {
      return true
    } else {
      return false
    }
  }

  const fetchData = (url) => {
    setIsLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(json => { setCards(json); setIsLoading(false) })
      .catch(error => { console.log(error); setIsLoading(false) })
  }

  const onKeyUpSearch = (e) => {
    if (e.keyCode === 13) {
      if (isInputEmpty()) {
        alert("Введите поисковую фразу!")
        return
      } else {
        fetchData(`https://newsapi.org/v2/everything?q=${search}&pageSize=${pageSizeVal || 20}&page=${pageNumberVal || 1}&sortBy=${sortBy}&apiKey=${API_KEY}`)
      }
    }
  }

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }


  const onChangeSortBy = ({ target: { value } }) => {
    if (isInputEmpty()) {
      alert("Введите поисковую фразу!")
      return
    } else {
      setSortBy(value)
    }
  }

  const onChangePageNumber = ({ target: { value } }) => {
    if (isInputEmpty()) {
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
    if (isInputEmpty()) {
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
    if (pageNumber !== '') {
      setPageNumberVal(Number(pageNumber))
    }
  }

  const onBlurPageSize = () => {
    if (pageSize !== '') {
      setPageSizeVal(Number(pageSize))
    }
  }



  return (
    <div className="container">
      <Form search={search} onChangeSearch={onChangeSearch} onKeyUpSearch={onKeyUpSearch} />
      <SortComponent sortBy={sortBy} onChangeSortBy={onChangeSortBy} />
      <PaginationComponent pageNumber={pageNumber} pageSize={pageSize} totalResults={cards.totalResults} onBlurPageNumber={onBlurPageNumber} onBlurPageSize={onBlurPageSize} onChangePageNumber={onChangePageNumber} onChangePageSize={onChangePageSize} />
      {isLoading && <Spinner />}
      <Cards cards={cards.articles} />
    </div>

  )
}

export default App
