import React from 'react'
import "./statisBox.scss"
import StatisticsItem from "./item/StatisItem"
import { Assets } from '../../Assets/Assets'

const StatisticsBox = () => {
  return (
    <div className='statistics-box container'>
        <div className="items">
            <StatisticsItem image={Assets.courses} count={1400} title={"Online Courses"}/>
            <StatisticsItem image={Assets.instructor} count={1100} title={"Expert Instructors"}/>
            <StatisticsItem image={Assets.stories} count={800} title={"Success Stories"}/>
        </div>
    </div>
  )
}

export default StatisticsBox