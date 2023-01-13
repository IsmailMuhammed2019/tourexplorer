import React, { useState } from 'react'

const Tour = ({ id, name, image, price, info }) => {
  const [readMore, setReadMore ] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />

      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0,200)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show less' : 'Read more'}
        </button>
        <button className='delete-btn'>Not Interested</button>
      </footer>
    </article>
  )
}

export default Tour
