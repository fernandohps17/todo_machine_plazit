import React from 'react'
import { GoPlus } from "react-icons/go";
import './CreateTodoButton.scss'

const CreateTodoButton = () => {
    return (
        <button className='create_todo_button'>
            <GoPlus />
        </button>
    )
}

export default CreateTodoButton
