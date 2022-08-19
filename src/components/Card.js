import React from 'react'

const Card = ({data}) => {
  return (
    <div className="card">
        <img src={data.img} alt="user1" />
        <p>{data.message}</p>
        <p><span>{data.name}</span></p>
        <p>{data.title}</p>
    </div>
  )
}

export default Card