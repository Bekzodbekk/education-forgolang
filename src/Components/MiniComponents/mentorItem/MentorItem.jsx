import React from 'react'
import "./mentorItem.scss"

const MentorItem = ({ image, fullName, job, users, stars, courses }) => {
    return (
        <div className='mentor-item'>
            <div className="mentor-imgae">
                <img src={image} alt="" />
            </div>
            <div className="mentor-info">
                <h1 className="name">{fullName}</h1>
                <p className="job">{job}</p>
            </div>
            <div className="mentor-rating">
                <div className="mentor-rate">
                    <div className="mentor-connection">
                        <i className="fa-regular fa-user"></i>
                        <p>{users}</p>
                    </div>
                    <div className="mentor-stars">
                        <i class="fa-solid fa-star"></i>
                        <p>{stars}</p>
                    </div>
                </div>
                <div className="mentor-courses">
                    <p>{courses} Courses</p>
                </div>
            </div>
        </div>
    )
}

export default MentorItem