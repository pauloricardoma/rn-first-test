import { call, put } from 'redux-saga/effects';
import { AuthActions, AuthActionUnion } from './Auth.actions';

export function* userLogin({ payload }: AuthActionUnion) {
	try {
		// const data = yield call(chamadaApi.login());
		if (payload === true) {
			const response = 'Logado!!';
			yield put(AuthActions.userLoginSuccess(response));
		} else {
			const newResponse = 'Usuário triste!';
			yield put(AuthActions.userLoginSuccess(newResponse));
		}

	} catch (error: unknown) {
		const errorResponse = 'Error aqui man!';
		yield put(AuthActions.userLoginFailure(errorResponse));
		console.log(error);
	}
}
