import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { cookieReducers } from "./cookie-slice";
import { postsApi } from "./posts-api";
import { searchReducer } from "./search-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        postsApi: postsApi.reducer,
        search: searchReducer,
        cookie: cookieReducers,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
});

export default store;