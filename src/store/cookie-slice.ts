import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	agreed : false,
}

const cookieSlice = createSlice({
    name: 'cookie',
    initialState,
    reducers: {
        agree(state) {
            state.agreed = true;
			localStorage.setItem('cookieAgreed', 'true');
        },
    },
});

export const cookieReducers = cookieSlice.reducer;
export const cookieActions = cookieSlice.actions;