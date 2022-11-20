import React from 'react'

const Card = ({title, body}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. {body}</p>
      </div>
    </div>
  )
}

export default Card