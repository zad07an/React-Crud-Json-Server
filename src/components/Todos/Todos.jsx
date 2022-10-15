import React from 'react'
import Todo_Item from '../Todo_Item/Todo_Item'
import './Todos.css'

export default function Todos({todos, deleteTodo, updateTodo}) {

  return (
    <div className='todos'>
      {
        todos.map((todo) => {
          return <Todo_Item key={todo.id} updateTodo={updateTodo} todo={todo} deleteTodo={deleteTodo} />
        })
      }
    </div>
  )
}
