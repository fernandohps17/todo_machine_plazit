import React from 'react'
import CreateTodoButton from './Components/CreateTodoButton'
import TodoCounter from './Components/TodoCounter'
import TodoList from './Components/TodoList'
import TodoSearch from './Components/TodoSearch'
import TodoItem from './Components/TodoItem'
import Layout from './Components/Layout'

const AppUI = ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error
}) => {
    return (
        <>
            <Layout>
                <TodoCounter total={totalTodos} completed={completedTodos} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
                <TodoList>
                    {loading && <p>Estamos cargando...</p>}
                    {error && <p>Desesperate, hay un error</p>}
                    {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p>}
                    {
                        searchedTodos.map(todo => (
                            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                        ))
                    }
                </TodoList>
                <CreateTodoButton />
            </Layout>
        </>
    )
}

export default AppUI