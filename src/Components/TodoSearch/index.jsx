import React from 'react'
import './TodoSearch.scss'

const TodoSearch = () => {

  return (
    <input className='todo_search' onChange={(event) => {console.log(event.target.value)}} type="text" placeholder='Escribe la activadad por hacer' />
  )
}

export default TodoSearch
