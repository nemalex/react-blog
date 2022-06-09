import {authActions} from './auth-slice';

export const localStorageLoginAction = () => {
	return async (dispatch: any) => {
		localStorage.setItem('isLoggedIn', 'true');
		dispatch(authActions.login())
	}
}

export const localStorageLogoutAction = () => {
	return async (dispatch: any) => {
		localStorage.setItem('isLoggedIn', 'false');
		dispatch(authActions.logout())
	}
}
