import React from 'react'

function Card({title, price, img}) {
  return (
    <div className='card'>

        <img style={{width: "5rem", height:"5rem"}} className="card-img-top " src={img}/>
        
        <div className="card-body">
            <p>{title}</p>
            <i>{price}</i>
        </div>
    </div>
  )
}

export default Card