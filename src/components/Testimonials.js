import React from 'react'
import user1 from "./images/user1.jpeg"
import user2 from "./images/user2.jpeg"
import user3 from "./images/user3.jpeg"
import Card from './Card'
import "./Testimonials.css"

function Testimonials() {
    const testimonialData = [
        {id: 1, img: user1, name: "Johnson M.J.", position: "Director of \"Financial Times\"", message: "It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is a true professional who does his work really well. Thanks John."},
        {id: 2, img: user2, name: "Carol Harper", position: "Director at Risktec Solutions Ltd", message: "In just 2 very short meetings with John he managed to find the solution personally catered to my situation expectations. Punctual, well informed and very reliable"},
        {id: 3, img: user3, name: "Snow J.R.", position: "Managing Director of BPW Global", message: "A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns."},
    ]

  return (
    <div className='testimonials' id='testimonials'>
        <div className="container">
            <h2>Testimonials</h2>
            <span className="line"></span>
            <div className="content">
                {testimonialData.map((data) => <Card data={data} key={data.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default Testimonials