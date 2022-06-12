import { useState, useEffect } from 'react'

import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)

  }

  //* Fetch Tours api
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  //* Using useEffect to rerender the data after every refresh. 
  useEffect(() => {
    fetchTours()
  }, [])

  // * if loading is true show loading....
  if (loading) {
    return <main>
      <Loading></Loading>
    </main>
  }

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className='btn' onClick={() => fetchTours()}>refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
