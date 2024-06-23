import React from 'react'
import "./courses.scss"
import CoursesItem from '../MiniComponents/coursesitem/CoursesItem'
import { Assets } from '../Assets/Assets'

const Courses = () => {
    return (
        <div className='courses-con'>
            <div className="container">
                <div className="courses-title">
                    <h1>Our All The Online Courses</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="course-items">
                    <CoursesItem image={Assets.courseImage1} dev={"Development"} price={150} parag={"Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."} avatar={Assets.avatar1}/>
                    <CoursesItem image={Assets.courseImage2} dev={"Development"} price={150} parag={"Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."} avatar={Assets.avatar2}/>
                    <CoursesItem image={Assets.courseImage3} dev={"Development"} price={150} parag={"Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."} avatar={Assets.avatar3}/>
                    <CoursesItem image={Assets.courseImage4} dev={"Development"} price={150} parag={"Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."} avatar={Assets.avatar3}/>
                    <CoursesItem image={Assets.courseImage5} dev={"Development"} price={150} parag={"Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."} avatar={Assets.avatar4}/>
                    <CoursesItem image={Assets.courseImage6} dev={"Development"} price={150} parag={"Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit."} avatar={Assets.avatar5}/>
                </div>
                <button className='course-btn'>View All Course</button>
            </div>

        </div>
    )
}

export default Courses