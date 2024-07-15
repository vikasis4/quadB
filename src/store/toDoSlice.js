import { createSlice } from '@reduxjs/toolkit'

// Setting the initial state by checking if the cache data is available
let cache = localStorage.getItem('data')
let initialState = cache ? JSON.parse(cache) : [];

// Creating the to-do slice
export const toDo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Action to add a new task
        addTask: (state, action) => {
            state.push(action.payload)
        },
        // Action to delete a task
        deleteTask: (state, action) => {
            var index = state.findIndex((e) => e.id == action.payload);
            state.splice(index, 1);
        },
        // Action to edit a task
        editTask: (state, action) => {
            var index = state.findIndex((e) => e.id == action.payload.id);
            state[index].text = action.payload.text;
        },
        // Action to update the completion status of a task
        updateStatus: (state, action) => {
            var index = state.findIndex((ev) => ev.id == action.payload);
            state[index].completed = !state[index].completed;
        }
    }
})

export const { addTask, deleteTask, editTask, updateStatus } = toDo.actions

export default toDo.reducer