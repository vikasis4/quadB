import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, editTask, updateStatus } from '../store/toDoSlice'
import { showModal, setTask } from '../store/generalSlice'

// creating the custom hook to avoid the hassle of importing and setting up the store and reducers

export function useStore() {

    const data = useSelector(state => state.todo)
    const genData = useSelector(state => state.general)
    const dispatch = useDispatch()

    function AddTask(data) { dispatch(addTask(data)) };
    function DeleteTask(data) { dispatch(deleteTask(data)) };
    function EditTask(data) { dispatch(editTask(data)) };
    function UpdateStatus(data) { dispatch(updateStatus(data)) };

    function ShowModal() { dispatch(showModal()) };
    function SetTask(data) { dispatch(setTask(data)) };

    return { data, genData, AddTask, DeleteTask, EditTask, UpdateStatus, ShowModal, SetTask }
}