import React from 'react'
import './TodoCounter.scss'

const TodoCounter = ({total, completed}) => {
    return (
        <div className='todo_counter'>
            <p>Has completado <span>{completed}</span> de <span>{total}</span> TODOS</p>
        </div>
    )
}

export default TodoCounter
