import { useState, useEffect } from 'react'
import Header from './components/Header'
import Shades from './components/Shades';

import data from './utilis/conversions'

import Values from "values.js"



function App() {
  const [hexCode, setHexCode] = useState("")
  const [shades, setShades] = useState([])
  const [error, setError] = useState(false)

  const generateColors = () => {

    const newData = data(hexCode)
    if (newData === false) {
      setError(true)
      setHexCode("")
    }
    else {
      setError(false)
      console.log(data(hexCode))
      setShades(newData)

    }

  }

  useEffect(() => {
    const color = new Values('#f15025')
    const data = color.all(10)
    console.log(data)
    setShades(data)
  }, [])

  return (
    <div>
      <Header hexCode={hexCode} setHexCode={setHexCode} generateColors={generateColors} error={error} />

      <Shades shades={shades} />
    </div>

  );
}

export default App;
