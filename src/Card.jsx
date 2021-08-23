import React from 'react'
import PropTypes from 'prop-types';
import './Card.css'
import img from './assets/images/comp.jpg'

function Card({ name, date, country, gender, agreement }) {
  return (
    <div className="card" >
      <img src={img} className="card-img-top" alt="computer" />
      <div className="card-body">
        <h5 className="card-title">Заголовок</h5>
        <p className="card-text">Описание</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Имя: {name}</li>
        <li className="list-group-item">Дата рождения: {date}</li>
        <li className="list-group-item">Страна: {country}</li>
        <li className="list-group-item">Пол: {gender === "male" ? "мужской" : "женский"}</li>
        <li className="list-group-item">Согласен на обработку данных: {agreement ? "да" : "нет"}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Ссылка</a>
        <a href="#" className="card-link">Ссылка</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  country: PropTypes.string,
  gender: PropTypes.string,
  agreement: PropTypes.bool
};

export default Card
