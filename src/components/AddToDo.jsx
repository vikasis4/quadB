import React, { useState } from 'react';
import { useStore } from '../hooks/UseStore';

// This is the component where we can add data to our todo list

const AddTodo = () => {

    const [text, setText] = useState('');
    const { data, AddTask } = useStore();


    const handleSubmit = async (e) => {
        e.preventDefault();
        AddTask({ text, id: data.length + 1, completed: false })
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Add a new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default AddTodo;
