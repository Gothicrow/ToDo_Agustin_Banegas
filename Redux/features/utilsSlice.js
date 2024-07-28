import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
    name: "utils",
    initialState: {
        isShowModalColors: false,
        isShowModalLanguaje: false,
    },
    reducers: {
        showModalColors: (state, action) => {
            state.isShowModalColors = action.payload
        },
        showModalLanguaje: (state, action) => {
            state.isShowModalLanguaje = action.payload
        }
    }
})

export const { showModalColors, showModalLanguaje } = utilsSlice.actions

export default utilsSlice.reducer