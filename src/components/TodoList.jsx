import React from 'react';
import List from './List';
import { useStore } from '../hooks/UseStore';

const TodoList = () => {

    // Importing the custom hook
    const { data, DeleteTask, SetTask, ShowModal, UpdateStatus } = useStore()
    
    // Using memoization to avoid unnecessary invoking of map function and data remains cached
    let content = React.useMemo(() => {
        if (data.length > 0) {
            return data.map((todo) => <List key={todo.id} todo={todo} ShowModal={ShowModal} SetTask={SetTask} DeleteTask={DeleteTask} UpdateStatus={UpdateStatus} />)
        } else { return null }
        // eslint-disable-next-line 
    }, [data]);

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            {content}
        </div>
    );
};


export default TodoList;