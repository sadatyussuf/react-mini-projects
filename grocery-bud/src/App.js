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

  const [alertCheck, setAlertCheck] = useState(false)
  const [alertClass, setAlertClass] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    const uuid = Date.now()

    if (!inputText) {
      setAlertClass('alert-danger')
      setMessage('please enter a value')
      setAlertCheck(true)
    } else {
      if (!editBtn) {
        const todo = {
          'id': uuid,
          'text': inputText
        }
        console.log(todo)
        setTodos([...todos, todo])

        setMessage('item added to the list')
        // setAlertCheck(true)
        // setAlertClass('alert-success')
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
        setMessage('value changed')

        // setAlertCheck(true)
        // setAlertClass('alert-success')
      }

      setAlertCheck(true)
      setAlertClass('alert-success')
    }
    setInputText('')

  }

  const handleClearAll = () => {
    // 
    console.log('clear all')
    localStorage.removeItem('todos')
    setTodos([])
    setMessage('empty list')
    setAlertClass('alert-danger')
    setAlertCheck(true)

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
    setMessage('item removed')
    setAlertCheck(true)
    setAlertClass('alert-danger')
  }


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertCheck(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alertCheck])



  return (
    <section className="section-center">
      {alertCheck && <Alert message={message} alertClass={alertClass} />}
      <Entry inputText={inputText} setInputText={setInputText} handleSubmit={handleSubmit} editBtn={editBtn} />

      <Output todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} handleClearAll={handleClearAll} />
    </section>
  );
}

export default App;
