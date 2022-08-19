import React from 'react'
import "./About.css"
import john from "./images/john-doe.png"

function About() {
  return (
    <div className='about'>
        <div className='container'>
            <img src={john} alt="" />
            <div className="col-2">
                <h2>About</h2>
                <span className="line"></span>
                <p>Intense is an international Financial Planning company with offices in multiple jurisdictions over the world. WOrking with intense givee me the ability to advise international expatriates living in the middle east from where I live in USA</p>
                <p>I am John Doe, a senior advisor for an indpendently owned financial planning company called intense</p>
                <button className='button'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default About