import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cardSlice";
import utilsSlice from "../features/utilsSlice";
import { taskApi } from "../../src/services/taskService";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        cardSlice,
        utilsSlice,
        [taskApi.reducerPath]: taskApi.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(taskApi.middleware)
})

setupListeners(store.dispatch)

export default store;