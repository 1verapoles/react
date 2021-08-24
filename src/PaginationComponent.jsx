import React from 'react'
import PropTypes from 'prop-types';

function PaginationComponent({ pageNumber, pageSize, totalResults, onChangePageSize, onChangePageNumber, onBlurPageSize, onBlurPageNumber }) {
  let total
  if (totalResults) {
    total = Math.ceil(totalResults / pageSize)
  } else { total = '' }

  return (
    <>
      <div className="d-flex justify-content-center my-2">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="pageSize">Кол-во статей на странице</label>
            <input type="number" className="form-control" min={1} id="pageSize" placeholder={20} value={pageSize} onBlur={onBlurPageSize} onChange={onChangePageSize} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="pageNumber">Номер страницы</label>
            <input type="number" className="form-control" min={1} id="pageNumber" placeholder={1} value={pageNumber} onBlur={onBlurPageNumber} onChange={onChangePageNumber} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-2 mb-5">Количество страниц: {total}</div>
    </>
  )
}

PaginationComponent.propTypes = {
  pageNumber: PropTypes.string,
  totalResults: PropTypes.number,
  pageSize: PropTypes.string,
  onChangePageSize: PropTypes.func,
  onChangePageNumber: PropTypes.func,
  onBlurPageSize: PropTypes.func,
  onBlurPageNumber: PropTypes.func
};

export default PaginationComponent
