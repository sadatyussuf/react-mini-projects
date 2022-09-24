import { useState } from 'react'

import Entry from './components/Entry'
import Output from './components/Output'

function App() {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('its alive')

  }
  return (
    <section className="section-center">
      <Entry inputText={inputText} setInputText={setInputText} handleSubmit={handleSubmit} />


      <Output />
    </section>
  );
}

export default App;
