import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        task: {
            id: 0,
            title: "",
            date: "",
            time: "",
            description: "",
            image: ""
        }
    },
    reducers: {
        updateTask: (state, newTask) => {
            state.task = newTask
        },
        updateTasksArray: (state, newArray) => {
            state.tasks = newArray
        }
    }
})

export const { updateTask, updateTasksArray } = taskSlice.actions

export default taskSlice.reducer