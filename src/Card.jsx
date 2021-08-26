import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Card.css'
import imgDef from './assets/images/comp.jpg'

function Card({ title, description, author, publishedAt, urlToImage, url }) {
  let date = new Date(publishedAt).toLocaleString().split(',')[0];
  let titleUrl = encodeURIComponent(title);
  return (
    <Link className="card" to={`/details/${titleUrl}`}>
      <img src={urlToImage || imgDef} className="card-img-top" alt={title} />
      <div className="card-body card-body2">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Автор: {author}</li>
        <li className="list-group-item">Дата публикации: {date}</li>
      </ul>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string
};

export default Card
