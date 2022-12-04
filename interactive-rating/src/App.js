import Front from "./components/Front";
import Back from "./components/Back";
import React from "react";
function App() {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [curValue, setCurValue] = React.useState(0)

  function handleSubmit() {
    if (parseInt(curValue) === 0) return;
    setIsSubmit(true)
    console.log('onSubmit event has been fired', curValue);

  }

  if (isSubmit) {

    return (<main className='box-container'>
      <Back curValue={curValue} />
    </main>)

  }
  return (
    <main className='box-container'>
      <Front handleSubmit={handleSubmit} setCurValue={setCurValue} />
    </main>
  );
}

export default App;
