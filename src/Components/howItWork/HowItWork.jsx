import React from 'react'
import "./howitwork.scss"
import WorkItem from '../MiniComponents/workItem/WorkItem'
import { Assets } from '../Assets/Assets'

const HowItWork = () => {
  return (
    <div className='work-container container'>
        <div className="work-title">
            <h1>How It Work</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit.</p>
        </div>
        <div className="work-items">
            <WorkItem image={Assets.person} title={"Learn More Online"} parag={"Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit."}/>
            <WorkItem image={Assets.note} title={"Writing Notes"} parag={"Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit."}/>
            <WorkItem image={Assets.list} title={"Interactive Sessions"} parag={"Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit."}/>
            <WorkItem image={Assets.settings} title={"Life Time Support"} parag={"Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit."}/>
        </div>
    </div>
  )
}

export default HowItWork