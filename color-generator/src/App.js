import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [hexCode, setHexCode] = useState("#f15025")

  const generateColors = () => {
    // 
  }

  return (
    <div className="App">
      <Header hexCode={hexCode} setHexCode={setHexCode} generateColors={generateColors} />
    </div>
  );
}

export default App;
