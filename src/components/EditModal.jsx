import React from 'react'
import { useStore } from '../hooks/UseStore';

// This component is the edit component where we can update pur task

function EditModal() {
    
    const { genData, EditTask, ShowModal } = useStore();
    const [text, setText] = React.useState();
    
    // Loading the initial data into text state for the edit component
    React.useEffect(() => {
        setText(genData.task.text)
    }, [genData])

    const handleSubmit = async () => {
        EditTask({ text, id: genData.task.id })
        setText('');
        ShowModal()
    };

    return (
        <div className='absolute inset-0 bg-slate-900 opacity-70' style={{ display: genData.showModal ? 'block' : "none" }}>
            <form className=" flex justify-center items-center h-full w-full">
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Add a new todo"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button onClick={handleSubmit} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Edit
                    </button>
                    <button onClick={() => ShowModal()} name="close" className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 ml-4 text-sm border-4 text-white py-1 px-2 rounded">
                        Close
                    </button>
                </div>
            </form>


        </div>
    )
}

export default EditModal