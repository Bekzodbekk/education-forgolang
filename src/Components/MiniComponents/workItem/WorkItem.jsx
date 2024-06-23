import React from 'react'
import "./workitem.scss"

const WorkItem = ({image, title, parag}) => {
  return (
    <div className='work-item'>
        <div className="work-item-image">
            <img src={image} alt="item-image" />
        </div>
        <div className="work-item-title">
            <h1>{title}</h1>
            <p>{parag}</p>
        </div>
    </div>
  )
}

export default WorkItem