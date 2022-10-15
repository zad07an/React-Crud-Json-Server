import React from 'react'
import { FaTimes } from 'react-icons/all'
import './Todo_Item.css'

export default function Todo_Item({todo, deleteTodo, updateTodo}) {




  return (
    <div className={`todo_item ${todo.reminder ? 'todo_reminder' : null}`} onDoubleClick={() => updateTodo(todo)}>
      <div className="todo_day">
        <p><span className='todo_day_placeholder'>Todo:</span>{todo.todo}</p>
        <span><span className='todo_day_placeholder'>When:</span>{todo.day}</span>
      </div>
      <div className="delete_todo_item">
        <span onClick={() => deleteTodo(todo)}><FaTimes/></span>
      </div>
    </div>
  )
}
