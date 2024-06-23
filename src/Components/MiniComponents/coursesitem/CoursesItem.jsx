import React from 'react'
import "./CoursesItem.scss"
import CourseItemRating from './couresItemRating/CourseItemRating'
import { Assets } from '../../Assets/Assets'

const CoursesItem = (props) => {
  return (
    <div className='course-item-con'>
        <div className="course-item-image">
            <img src={props.image} alt="image-course" />
        </div>
        <div className="course-item-rating">
            <CourseItemRating image={Assets.userIcon} count={"5.8k"}/>
            <CourseItemRating image={Assets.visibility} count={"69k"}/>
            <CourseItemRating image={Assets.star} count={"4.5"}/>
            <img src={props.avatar} alt="avatar" />
        </div>
        <div className="course-title">
          <div className="course-price">
            <h1>{props.dev}</h1>
            <h1 className="price">${props.price}</h1>
          </div>
          <div className="course-parag">
            <p>{props.parag}</p>
          </div>
        </div>
    </div>
  )
}

export default CoursesItem