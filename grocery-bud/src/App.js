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


  const [editBtn, setEditBtn] = useState(false)
  const [editTodo, setEditTodo] = useState({})


  const handleSubmit = (e) => {
    e.preventDefault()
    const uuid = Date.now()

    if (!inputText) {
      console.log('its empty')
    } else {
      if (!editBtn) {
        const todo = {
          'id': uuid,
          'text': inputText
        }
        console.log(todo)
        setTodos([...todos, todo])
        setMessage('item added to the list')
      }
      if (editBtn) {
        // the edit btn was clicked
        for (let i in todos) {
          if (todos[i].id === editTodo.id) {
            todos[i].text = inputText
            break
          }
        }
        setEditBtn(false)
      }
    }
    setInputText('')
  }

  const handleClearAll = () => {
    // 
    console.log('clear all')
    localStorage.removeItem('todos')
    setTodos([])
  }

  const handleEdit = (currentTodo) => {
    // 
    console.log('edit')
    console.log(currentTodo)
    const editText = currentTodo.text
    setEditTodo(currentTodo)
    setInputText(editText)
    setEditBtn(true)
  }
  const handleDelete = (currentTodo) => {
    // 
    console.log('delete')
    const remainingTodos = todos.filter((todo) => todo.id !== currentTodo.id)
    setTodos(remainingTodos)

  }


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <section className="section-center">
      <Alert message={message} />
      <Entry inputText={inputText} setInputText={setInputText} handleSubmit={handleSubmit} editBtn={editBtn} />

      <Output todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} handleClearAll={handleClearAll} />
    </section>
  );
}

export default App;
