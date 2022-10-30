import Navbar from "./components/Navbar";
import Product from "./components/Product";

import { useMyContextProvider } from './context/MyContext'


function App() {

  const { isLoading } = useMyContextProvider()



  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }


  return (
    <main>
      <Navbar />
      <Product />
    </main>
  );
}

export default App;
