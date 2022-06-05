import { all, takeLatest } from 'redux-saga/effects';
import { AuthActionKeys } from './Auth/Auth.actions';
import { userLogin } from './Auth/Auth.sagas';

export function* rootSaga() {
	yield all([
		takeLatest(AuthActionKeys.AUTH_LOGIN_REQUEST, userLogin)
	]);
}
