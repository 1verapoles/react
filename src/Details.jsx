import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import Spinner from './Spinner'
import './Card.css'
import imgDef from './assets/images/comp.jpg'
const API_KEY = "2aedd492fa3c4e97b41ac78483bc25e1"

function Details() {
  const [isLoading, setIsLoading] = useState(false)
  const [card, setCard] = useState({})
  const { id } = useParams()
  useEffect(() => {
    let data = localStorage.getItem(id)
    if (data) { data = JSON.parse(data); setCard(data); return; }
    const fetchData = (url) => {
      setIsLoading(true)
      fetch(url)
        .then(response => response.json())
        .then(json => { setCard(json.articles[0]); localStorage.setItem(id, JSON.stringify(json.articles[0])); setIsLoading(false) })
        .catch(error => { console.log(error); setIsLoading(false) })
    }
    fetchData(`https://newsapi.org/v2/everything?qInTitle=${id}&apiKey=${API_KEY}`)
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

Details.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string
};

export default Details
