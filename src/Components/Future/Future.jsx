import React from 'react'
import "./future.scss"
import { Assets } from '../Assets/Assets'

const Future = () => {
  return (
    <div className='future-con container'>
        <div className="future-title">
            <h1>Find Your Course That Makes Bright Future</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi, </p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.</h4>
            <button className='out'>Learn More</button>
        </div>
        <div className="future-image">
            <img src={Assets.futureImage} alt="" />
        </div>
    </div>
  )
}

export default Future