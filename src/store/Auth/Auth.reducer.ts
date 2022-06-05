import { AuthActionKeys, AuthActionUnion } from './Auth.actions';
import { AuthStateProps } from './interface/AuthStateProps';

const initialState: AuthStateProps = {
	isLoading: false,
	isLogged: false,
	loggedMessage: undefined,
};

const authReducer = (state = initialState, action: AuthActionUnion): AuthStateProps => {
	switch (action.type) {
	case AuthActionKeys.AUTH_LOGIN_REQUEST: {
		let newState = state ;
		newState = {
			isLoading: true,
			isLogged: false,
		};
		return newState;
	}

	case AuthActionKeys.AUTH_LOGIN_SUCCESS: {
		let newState = state ;
		newState = {
			isLoading: true,
			isLogged: true,
			loggedMessage: action.payload,
		};
		return newState;
	}

	case AuthActionKeys.AUTH_LOGIN_FAILURE: {
		let newState = state ;
		newState = {
			isLoading: true,
			isLogged: false,
			loggedMessage: action.payload,
		};
		return newState;
	}

	default:
		return state;
	}
};

export default authReducer;
