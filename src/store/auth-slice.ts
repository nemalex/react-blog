import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state) {
			state.loggedIn = true;
			localStorage.setItem('isLoggedIn', 'true');
		},
		logout(state) {
			state.loggedIn = false;
			localStorage.setItem('isLoggedIn', 'false');
		},
	},
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;