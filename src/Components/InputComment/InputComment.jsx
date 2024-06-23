import React from 'react'
import "./inputComment.scss"

const InputComment = () => {
    return (
        <div className='inputComment-con'>
            <div className="container">
                <div className="input-title">
                    <h1>What Our Students Say</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Enter your email...' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default InputComment