import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Popup from './components/Popup'
import Sidebar from './components/Sidebar'
import ContextProvider from './context/MenuContext'

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Popup />

    </ContextProvider>
  );
}

export default App;
