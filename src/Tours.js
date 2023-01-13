import React from 'react'
import Tour from './Tour'
const Tours = ({tours}) => {
  return(
    <section>
      <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'></div>
      </div>
      {tours.map((tour) => {
        return (
          <div>
            <Tour key={tour.id} {...tour}/>
          </div>
        )
      })}
    </section>
  )
}

export default Tours
