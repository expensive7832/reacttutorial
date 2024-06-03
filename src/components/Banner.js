import React from 'react'
import "./banner.css"

function Banner({text, img}) {
  return (
    <div style={{backgroundImage: `url(${img})`}} className="banner d-flex flex-column justify-content-center">
    <h3 className='text-white'>{text}</h3>
    </div>
  )
}

export default Banner