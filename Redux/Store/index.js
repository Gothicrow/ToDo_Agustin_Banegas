import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cardSlice";
import usersSlice from "../features/usersSlice";
import { taskApi } from "../../src/services/taskService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../../src/services/authService";

const store = configureStore({
    reducer: {
        cardSlice,
        usersSlice,
        [taskApi.reducerPath]: taskApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(taskApi.middleware)
            .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store;