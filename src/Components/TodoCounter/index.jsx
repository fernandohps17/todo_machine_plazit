import React from 'react'

const TodoCounter = ({total, completed}) => {
    return (
        <div>
            <h1>Has completado {completed} de {total} TODOS</h1>
        </div>
    )
}

export default TodoCounter
