import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './Form.css'

function Form({ addCard }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState('')
  const [agreement, setAgreement] = useState('')
  const [formIsSub, setFormIsSub] = useState(false)

  const onChangeName = ({ target: { value } }) => {
    setName(value)
  }

  const onChangeDate = ({ target: { value } }) => {
    setDate(value)
  }

  const onChangeCountry = ({ target: { value } }) => {
    setCountry(value)
  }

  const onChangeGender = ({ target: { value } }) => {
    setGender(value)
  }

  const onChangeAgreement = ({ target: { value } }) => {
    setAgreement(prev => { if (prev === '') { return true } else { return !prev } })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    setFormIsSub(true)
    if (name.trim() && date && country && gender && (agreement === false || agreement === true)) {
      let dateForm = new Date(date).toLocaleString().split(',')[0];
      addCard(name, dateForm, country, gender, agreement)
      alert('Данные успешно сохранены!')
      setName('')
      setDate('')
      setCountry('')
      setGender('')
      setAgreement('')
      setFormIsSub(false)
    } else {
      alert('Для отправки формы необходимо ее правильно заполнить!');
      return;
    }

  }

  return (
    <form className="form" onSubmit={onSubmitForm}>
      <div className="form-group">
        <label htmlFor="name">Имя:</label>
        <input type="text" className="form-control" id="name" aria-describedby="name" value={name} onChange={onChangeName} />
        {formIsSub && !name.trim() && <small className="form-text text-danger">Введите имя!</small>}
      </div>
      <div className="form-group">
        <label htmlFor="date">Дата рождения:</label>
        <input type="date" className="form-control" id="date" aria-describedby="date" value={date} onChange={onChangeDate} />
        {formIsSub && !date && <small className="form-text text-danger">Введите дату рождения!</small>}
      </div>
      <div className="form-group">
        <label htmlFor="country">Страна:</label>
        <select className="custom-select" id="country" value={country} onChange={onChangeCountry}>
          <option value=''>Выберите страну</option>
          <option value="РБ">Республика Беларусь</option>
          <option value="Россия">Россия</option>
          <option value="Литва">Литва</option>
        </select>
        {formIsSub && !country && <small className="form-text text-danger">Выберите страну!</small>}
      </div>
      <div className="form-group">
        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" checked={gender === 'male'} value='male' onChange={onChangeGender} />
          <label className="custom-control-label" htmlFor="customControlValidation2">Мужчина</label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input type="radio" className="custom-control-input" id="customControlValidation3" name="radio-stacked" checked={gender === 'female'} value='female' onChange={onChangeGender} />
          <label className="custom-control-label" htmlFor="customControlValidation3">Женщина</label>
          {formIsSub && !gender && <small className="form-text text-danger">Выберите пол!</small>}
        </div>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="agreement" checked={agreement} value={agreement} onChange={onChangeAgreement} />
        <label className="form-check-label" htmlFor="agreement">Согласен на обработку данных</label>
        {formIsSub && agreement === '' && <small className="form-text text-danger">Подтвердите согласие на обработку данных!</small>}
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  )
}


Form.propTypes = {
  addCard: PropTypes.func
};

export default Form
