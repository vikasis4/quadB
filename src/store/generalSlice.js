import { createSlice } from "@reduxjs/toolkit";

// Creating Slice which will store Edit Component Initial Data in task and ShowModal variable to show/hide Modal
let initialState = {
    showModal: false,
    task:{}
};

const general = createSlice({
    name: 'general',
    initialState,
    // 2 Reducers are created to toggle Modal state and to set initial state of modal
    reducers: {
        showModal: (state) => {
            state.showModal = !state.showModal
        },
        setTask: (state, action) => {
            state.task = action.payload
        }
    }
})

export const { showModal, setTask } = general.actions
export default general.reducer