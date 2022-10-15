import axios from 'axios'
import React, { useState } from 'react'
import './Add_Todo.css'

export default function Add_Todo({handleSubmit,}) {

  const [todo, setTodo] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!todo.trim()) {
      return
    }

    handleSubmit({todo, day, reminder,});

    setTodo('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className="form_controler">
        <label htmlFor="todo">Todo</label>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} name='todo' id='todo' placeholder='Add todo' />
      </div>
      <div className="form_controler">
        <label htmlFor="day">Day and time</label>
        <input type="text" value={day} onChange={(e) => setDay(e.target.value)} name='day' id='day' placeholder='Add day and time' />
      </div>
      <div className="form_controler_checkbox">
        <label htmlFor="reminder">Set reminder?</label>
        <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.checked)} name='reminder' id='reminder' />
      </div>
      <div className="add_button">
        <button>Add</button>
      </div>
    </form>
  )
}
