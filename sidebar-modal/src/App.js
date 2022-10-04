import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'

import ButtonsContextProvider from './contexts/ToggleModalContext';


function App() {
  return (

    <>
      <ButtonsContextProvider>
        <Home />
        <Modal />
        <Sidebar />
      </ButtonsContextProvider>
    </>
  );
}

export default App;
