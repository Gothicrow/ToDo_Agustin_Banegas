import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        task: null
    },
    reducers: {
        updateTask: (state, { payload }) => {
            state.task = payload.task
        },
        updateTasksArray: (state, { payload }) => {
            state.tasks = Object.values(payload.newArray)
        }
    }
})

export const { updateTask, updateTasksArray } = taskSlice.actions

export default taskSlice.reducer