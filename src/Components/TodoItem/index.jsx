import React from 'react'

const TodoItem = ({text, completed}) => {
    return (
        <>
            <li>
                <span>v</span>
                <p>{text}</p>
                <span>x</span>
            </li>
        </>
    )
}

export default TodoItem
