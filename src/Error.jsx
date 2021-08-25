import React from 'react'
import './Error.css'
import img from './assets/images/404.png'

function Error() {
  return (
    <div className="container">
      <div className="error-wrapper">
        <div className="error-inner">
          <img src={img} alt="error" />
          <div className="error-text">Sorry, smth went <br /> wrong((
          </div>
        </div>
      </div>
    </div>
  )
}


export default Error
