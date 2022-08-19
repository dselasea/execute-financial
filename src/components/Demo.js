import React from 'react'
import "./Demo.css"

function Demo() {
  return (
    <div className='demo' id='demo'>
        <div className="container">
            <div className="col-1">
                <p>More Than 100 Financial Planners,</p>
                <p>One Philosophy</p>
                <p>Every single one of our financial advisors receives rigorous training according to John Doe's philosophy based on academic research (including that of a Noble laureate in Economics) and Behavorial Finance.</p>
                <button className='button'>Get your financial analysis</button>
            </div>
            <div className="col-2">
                <iframe width="570" height="320" src="https://www.youtube.com/embed/PJCr_aoOv68" title="Build A Chat App With React And Firebase v9" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Demo