import {authActions} from './auth-slice';

export const localStorageLoginAction = () => {
	return async (dispatch: any) => {
		// dispatch(setLoading)
		// await login()
		// dispatch(success)
		// dispatch(error)
		localStorage.setItem('isLoggedIn', 'true');
		dispatch(authActions.login())
	}
}