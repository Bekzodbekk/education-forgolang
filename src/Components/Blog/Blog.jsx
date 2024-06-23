import React from 'react'
import "./blog.scss"
import BlogItem from '../MiniComponents/BlogItems/BlogItem'
import { Assets } from '../Assets/Assets'

const Blog = () => {
  return (
    <div className='blog-con'>
        <div className="container">
            <div className="blog-title">
                <h1>Our Latest Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam at entum.</p>
            </div>
            <div className="blog-items">
                <BlogItem image={Assets.blogImage1} title={"Product Marketing Creative Camping Brand Image"} parag={"Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa."} link={"#"}/>
                <BlogItem image={Assets.blogImage1} title={"Product Marketing Creative Camping Brand Image"} parag={"Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa."} link={"#"}/>
                <BlogItem image={Assets.blogImage1} title={"Product Marketing Creative Camping Brand Image"} parag={"Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa."} link={"#"}/>
            </div>
            <button>View All</button>
        </div>  

    </div>
  )
}

export default Blog