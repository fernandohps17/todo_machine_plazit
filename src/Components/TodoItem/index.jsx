import { IoIosClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import React from 'react'
import './TodoItem.scss'

const TodoItem = ({text, completed}) => {
    return (
        <>
            <li className='todo_item'>
                <span className='todo_item_check'><IoMdCheckmark /></span>
                <p className='todo_item_text'>{text}</p>
                <span className='todo_item_close'><IoIosClose /></span>
            </li>
        </>
    )
}

export default TodoItem
