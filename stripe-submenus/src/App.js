import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Popup from './components/Popup'
import ContextProvider from './context/MenuContext'

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Hero />
      <Popup/>
      
    </ContextProvider>
  );
}

export default App;
