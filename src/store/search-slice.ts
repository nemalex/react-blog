import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchHidden : true,
}

const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : {
        show (state) {
            state.searchHidden = false;
        },
        hide (state) {
            state.searchHidden = true;
        },
        toggle (state) {
            state.searchHidden = !state.searchHidden;
        }
    },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;