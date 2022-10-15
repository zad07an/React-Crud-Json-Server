
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Add_Todo from './components/Add_Todo/Add_Todo'
import Header from './components/Header/Header'
import Todos from './components/Todos/Todos'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/todos')
    .then((res) => res.json())
    .then((data) => setTodos(data))
    .catch((err) => console.log(err))
  }, [])



  const fetchTodo = async (todo) => {
    const res = await fetch(`http://localhost:5000/todos/${todo.id}`)
    const data = await res.json();

    return data
  }

  const handleSubmit = async (todo) => {
    const res = await fetch(`http://localhost:5000/todos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })

    const data = await res.json();

    setTodos([...todos, data])
  }

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id.id}`, {
      method: 'DELETE',
    })
    setTodos(todos.filter((todo) => todo.id !== id.id))
  }

  const updateTodo = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const updatedTodo = {...todoToToggle, reminder: !todoToToggle.reminder}

    const res = await fetch(`http://localhost:5000/todos/${id.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    })

    const data = await res.json()

    setTodos(todos.map((item) => item.id === id.id ? {...item, reminder: data.reminder} : item))
  }

  return (
    <div className="App">
      <div className="todo_container">
        <Header/>
        <Add_Todo handleSubmit={handleSubmit}/>
        <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      </div>
    </div>
  )
}

export default App
