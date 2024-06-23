import React from 'react'
import "./studentSay.scss"
import StudentSayItem from '../MiniComponents/StudentSayItem/StudentSayItem'

const StudentSay = () => {
  return (
    <div className='studentSay-con container'>
        <div className="studentSay-title">
            <h1>What Our Students Say</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="studentSay-items">
            <StudentSayItem />
            <StudentSayItem />
            <StudentSayItem />
        </div>
    </div>
  )
}

export default StudentSay