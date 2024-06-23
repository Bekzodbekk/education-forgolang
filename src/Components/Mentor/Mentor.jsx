import React from 'react'
import MentorItem from '../MiniComponents/mentorItem/MentorItem'
import "./mentor.scss"
import { Assets } from '../Assets/Assets'

const Mentor = () => {
  return (
    <div className='mentor-con container'>
        <div className="mentor-title">
            <h1>Meet with Our Mentor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa.</p>
        </div>
        <div className="mentor-items">
            <MentorItem image={Assets.teach1} fullName={"Muhammad Ali"} job={"CEO, Developer"} users={"8.2k"} stars={"4.5"} courses={"25+"}/>
            <MentorItem image={Assets.teach2} fullName={"Braniya Lara"} job={"Content Writter"} users={"8.2k"} stars={"4.5"} courses={"25+"}/>
            <MentorItem image={Assets.teach3} fullName={"Muhammad Ali"} job={"Content Writter"} users={"8.2k"} stars={"4.5"} courses={"25+"}/>
        </div>
    </div>
  )
}

export default Mentor