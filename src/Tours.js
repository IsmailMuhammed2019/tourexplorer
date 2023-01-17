import React, {useState, useEffect} from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTours}) => {
  return (
    <section>
      <h2 className='title'>Our Tours</h2>
      <div className='underline'></div>
      {tours.map((tour) => {
        return (
          <Tour key={tour.id} {...tour} removeTours={removeTours}/>
        )
      })}
    </section>
  )
}

export default Tours