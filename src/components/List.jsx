import React from 'react'

// This component renders our list items

function List({ todo, DeleteTask, UpdateStatus, SetTask, ShowModal }) {

    const editfxn = () => { SetTask(todo); ShowModal() };

    return (
        <div className="flex justify-between items-center p-4 border-b">
            <div className={`flex-grow hover:cursor-pointer ${todo.completed ? 'line-through' : ''}`} onClick={() => UpdateStatus(todo.id)}>
                <input type="checkbox" readOnly checked={todo.completed} />  {todo.text}
            </div>
            <button className="ml-4 text-red-600" onClick={editfxn}>
                Edit
            </button>
            <button className="ml-4 text-red-600" onClick={() => DeleteTask(todo.id)}>
                Delete
            </button>
        </div>
    )
}

export default React.memo(List)