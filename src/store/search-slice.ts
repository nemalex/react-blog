import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchHidden: true,
    searchTerm: "",
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        show(state) {
            state.searchHidden = false;
        },
        hide(state) {
            state.searchHidden = true;
        },
        toggle(state) {
            state.searchHidden = !state.searchHidden;
        },
        setTerm(state, { payload }) {
            state.searchTerm = payload;
        },
    },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;