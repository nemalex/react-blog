import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	loggedIn : false,
}

const authSlice = createSlice({
	name : 'auth',
	initialState,
	reducers : {
		login (state) {
			state.loggedIn = true;
		},
		logout (state) {
			state.loggedIn = false;
		},
	},
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;