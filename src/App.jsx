import React, { useState } from 'react'
import CreateTodoButton from './Components/CreateTodoButton'
import TodoCounter from './Components/TodoCounter'
import TodoList from './Components/TodoList'
import TodoSearch from './Components/TodoSearch'
import TodoItem from './Components/TodoItem'
import Layout from './Components/Layout'

const defaultTodos = [
  { text: 'Aprender React JS', completed: true },
  { text: 'Aprender JavaScript', completed: false },
  { text: 'Aprender Node JS', completed: true },
  { text: 'Aprender typeScript', completed: false },
]

function App() {

  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = defaultTodos.length;

  return (
    <>
      <Layout>
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {
            defaultTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
            ))
          }
        </TodoList>
        <CreateTodoButton />
      </Layout>
    </>
  )
}

export default App