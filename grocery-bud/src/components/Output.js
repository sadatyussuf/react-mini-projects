import React from 'react'

import { FaEdit, FaTrash } from 'react-icons/fa';

const Output = ({ todos, handleDelete, handleEdit, handleClearAll }) => {
    return (
        <>
            {todos.length > 0 && <div className="grocery-container">
                <div className="grocery-list">
                    {
                        todos.map((todo) => {
                            // const {}
                            return (
                                <article key={todo.id} className="grocery-item">
                                    <p className="title">{todo.text}</p>
                                    <div className='btn-container'>
                                        <button type='button' className='edit-btn' onClick={handleEdit}>
                                            <FaEdit />
                                        </button>
                                        <button type='button' className='delete-btn' onClick={handleDelete}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
                <button className='clear-btn' onClick={handleClearAll}>clear items</button>
            </div>}
        </>
    )
}

export default Output