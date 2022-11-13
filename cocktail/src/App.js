import Navbar from "./components/Navbar";
import Main from "./components/Main"
import About from "./pages/About"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useGlobalContext } from "./context/Context"

function App() {
  // const { loading } = useGlobalContext()
  // console.log(loading)
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />

      </Routes>
    </Router>

  );
}

export default App;
