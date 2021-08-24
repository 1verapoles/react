import React from 'react'
import PropTypes from 'prop-types';

function SortComponent({ sortBy, onChangeSortBy }) {
  return (
    <>
      <div className="d-flex justify-content-center">Sort by:</div>
      <div className="d-flex justify-content-center my-2">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked={sortBy === "relevancy"} onChange={onChangeSortBy} value="relevancy" />
          <label className="form-check-label" htmlFor="inlineRadio1">relevancy</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" checked={sortBy === "popularity"} onChange={onChangeSortBy} value="popularity" />
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

SortComponent.propTypes = {
  sortBy: PropTypes.string,
  onChangeSortBy: PropTypes.func
};

export default SortComponent
