import React from 'react'
import TodoItem from '../TodoItem'

const TodoList = (props) => {
  return (
    <div>
      {props.children}      
    </div>
  )
}

export default TodoList
