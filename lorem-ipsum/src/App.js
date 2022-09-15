import { useState } from 'react'

import Form from './components/Form'
import Lorem from './components/Lorem'
import data from './utilis/data'



function App() {
  const [value, setValue] = useState('0')
  const [text, setText] = useState([])

  const generateText = () => {
    const lengthOfData = data.length

    if (parseInt(value) === 0 || parseInt(value) < 0 || parseInt(value) === 1 || value === "") {

      const newData = data.slice(0, 1)
      console.log(newData)
      setText(newData)
    }
    else if (parseInt(value) === lengthOfData | parseInt(value) > lengthOfData) {
      // 
      const newData = [...data.slice(0, lengthOfData)]
      console.log(newData)
      setText(newData)
    }
    else {
      let parseValue = parseInt(value)
      const newData = [...data.slice(0, parseValue)]
      console.log(newData)
      setText(newData)
    }
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <Form value={value} setValue={setValue} generateText={generateText} />

      <Lorem text={text} />
    </section>
  );
}

export default App;
