import Hero from './components/Hero'
import Navbar from './components/Navbar';
import ContextProvider from './context/MenuContext'

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Hero />
    </ContextProvider>
  );
}

export default App;
