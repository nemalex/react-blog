import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./posts-api";

const store = configureStore({
    reducer : {
        postsApi : postsApi.reducer,
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
})

export default store;