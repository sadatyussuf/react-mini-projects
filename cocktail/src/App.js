import Navbar from "./components/Navbar";
import Main from "./components/Main"
import About from "./pages/About"
import Error from "./pages/Error";
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
        <Route path="*" element={<Error />} />

      </Routes>
    </Router>

  );
}

export default App;
