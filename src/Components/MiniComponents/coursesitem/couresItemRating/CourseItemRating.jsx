import React from 'react'
import "./CourseItemRating.scss"

const CourseItemRating = ({image, count}) => {
  return (
    <div className='course-rate-con'>
        <img src={image} alt="img" />
        <p>{count}</p>
    </div>
  )
}

export default CourseItemRating