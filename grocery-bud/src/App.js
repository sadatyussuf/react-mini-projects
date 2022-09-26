import { useState, useEffect } from 'react'

import Entry from './components/Entry'
import Output from './components/Output'
import Alert from './components/Alert'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos')
    return localData ? JSON.parse(localData) : []
  })
  const [message, setMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    const uuid = Date.now()

    if (!inputText) {
      console.log('its empty')
    } else {
      const todo = {
        'id': uuid,
        'text': inputText
      }
      console.log(todo)
      setTodos([...todos, todo])
      setMessage('item added to the list')
    }

    setInputText('')

  }

  const handleClearAll = () => {
    // 
    console.log('clear all')
    localStorage.removeItem('todos')
    setTodos([])
  }

  const handleEdit = () => {
    // 
    console.log('edit')
  }
  const handleDelete = () => {
    // 
    console.log('delete')
  }


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <section className="section-center">
      <Alert message={message} />
      <Entry inputText={inputText} setInputText={setInputText} handleSubmit={handleSubmit} />

      <Output todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} handleClearAll={handleClearAll} />
    </section>
  );
}

export default App;
