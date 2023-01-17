import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async() => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const tours = await res.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
},[])


  const removeTours = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours == 0){
    return (
      <main>
        <div className='title'>
          <h4>No More Tours</h4>
          <button onClick={(fetchTours)} className='btn'>Refresh</button>
      </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours}/>
    </main>
  )
}

export default App