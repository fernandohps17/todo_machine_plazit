import React from 'react'
import { FaPlus } from "react-icons/fa";
import './CreateTodoButton.scss'

const CreateTodoButton = () => {
    return (
        <button className='create_todo_button'>
            <FaPlus />
        </button>
    )
}

export default CreateTodoButton
