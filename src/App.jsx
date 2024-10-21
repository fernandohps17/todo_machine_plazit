import React from 'react'
import CreateTodoButton from './Components/CreateTodoButton'
import TodoCounter from './Components/TodoCounter'
import TodoList from './Components/TodoList'
import TodoSearch from './Components/TodoSearch'
import TodoItem from './Components/TodoItem'
import Layout from './Components/Layout'

const defaultTodos = [
  { text: 'Aprender React JS', completed: true },
  { text: 'Aprender JavaScript', completed: true },
  { text: 'Aprender Node JS', completed: true },
  { text: 'Aprender typeScript', completed: true },
]

function App() {

  return (
    <>
      <Layout>
        <TodoCounter total={10} completed={5} />
        <TodoSearch />
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