import React from 'react'
import "./statisItem.scss"

const StatisItem = ({image, count, title}) => {
  return (
    <div className='statis-item'>
        <div className="statis-image">
            <img src={image} alt="statis-image" />
        </div>
        <div className="statis-title">
            <h1>{count}+</h1>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default StatisItem