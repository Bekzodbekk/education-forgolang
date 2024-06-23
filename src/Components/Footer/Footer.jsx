import React from 'react'
import "./footer.scss"
import { Assets } from '../Assets/Assets'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="education-contact">
                    <h1>Education</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet, vestibulum euismod nullam the elementum. Urna, posuere nisi sit gravid.</p>
                    <h1>Follow Us</h1>

                    <div className="btn-contact">
                        <a href="#"><img src={Assets.facebook} alt="facebook" /></a>
                        <a href="#"><img src={Assets.twitter} alt="twitter" /></a>
                        <a href="#"><img src={Assets.instagram} alt="instagram" /></a>
                        <a href="#"><img src={Assets.linkedin} alt="linkedin" /></a>
                    </div>
                </div>
                <div className="feature">
                    <h1>Feature Links</h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Graduation</a></li>
                        <li><a href="#">Scholarship</a></li>
                        <li><a href="#">Admissions</a></li>
                        <li><a href="#">International</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>
                <div className="support">
                    <h1>Support</h1>
                    <ul>
                        <li><a href="#">Language</a></li>
                        <li><a href="#">WordPress</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <h1>Contact Us</h1>
                    <p>230,Mirpur Area, Mirpur 10, Dhaka,Bangladesh</p>
                    <p>+017 4845 7269</p>
                    <p>info@gmail.com</p>
                    <p>www.yourdomain.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer