import React from 'react'
import "./blogItem.scss"

const BlogItem = ({image, title, parag, link}) => {
  return (
    <div className='blogItem-con'>
        <div className="blog-image">
            <img src={image} alt="" />
        </div>
        <div className="blog-info">
            <h1>{title}</h1>
            <p>{parag}</p>
            <a href={link}>Read More...</a>
        </div>
    </div>
  )
}

export default BlogItem