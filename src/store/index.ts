import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { postsApi } from "./posts-api";

const store = configureStore({
    reducer : {
        auth : authReducer,
        postsApi : postsApi.reducer,

    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
})

export default store;
