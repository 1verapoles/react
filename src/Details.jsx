import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_DETAIL } from "./constants";
import Spinner from './Spinner'
import { fetchData } from './actions'
import './Card.css'
import imgDef from './assets/images/comp.jpg'

function Details() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const API_KEY = useSelector(state => state.API_KEY)
  const card = useSelector(state => state.card)
  const isLoading = useSelector(state => state.isLoading)
  useEffect(() => {
    let data = localStorage.getItem(id)
    if (data) { data = JSON.parse(data); dispatch({ type: FETCH_DETAIL, payload: data }); return; }
    dispatch(fetchData(`https://newsapi.org/v2/everything?qInTitle=${id}&apiKey=${API_KEY}`, id))
    return () => { dispatch({ type: FETCH_DETAIL, payload: {} }); }
  }, [])

  const { title, description, author, publishedAt, urlToImage, url } = card
  let date = new Date(publishedAt).toLocaleString().split(',')[0];
  return (
    <div className="container d-flex justify-content-center">
      {isLoading && <Spinner />}
      {title && <div className="card mt-5 card2" >
        <img src={urlToImage || imgDef} className="card-img-top" alt={title} />
        <div className="card-body card-body2">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Автор: {author}</li>
          <li className="list-group-item">Дата публикации: {date}</li>
        </ul>
        <div className="card-body">
          <a href={url} target="_blank" rel="noreferrer" className="card-link">Подробнее</a>
        </div>
      </div>}
    </div>
  )
}

export default Details
