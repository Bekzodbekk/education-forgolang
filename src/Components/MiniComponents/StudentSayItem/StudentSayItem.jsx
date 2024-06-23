import React from 'react'
import "./studentSayItem.scss"
import { Assets } from '../../Assets/Assets'

const StudentSayItem = () => {
  return (
    <div className='studentSayItem-con'>
        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat mauris non dictumst in leo etiam. Proin iaculis arcu iaculis egestas.</p>
        <div className="user">
            <div className="user-image">
                <img src={Assets.avatarComment} alt="" />
            </div>
            <div className="user-info">
                <h1>Jony Ahmed</h1>
                <p>UI/UX Student</p>
            </div>
        </div>
    </div>
  )
}

export default StudentSayItem