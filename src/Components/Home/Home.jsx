import React from 'react'
import "./home.scss"
import StatisticsBox from '../MiniComponents/StatisticsBox/StatisticsBox'

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-title">
            <h1>Self-Paced Learning Courses Online</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.</p>
            <button className='out'>Start a coures</button>
        </div>

        <StatisticsBox />
    </div>
  )
}

export default Home