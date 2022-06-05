import { Action, ActionsUnion, createAction } from '../Base/actionHelpers';

export enum AuthActionKeys {
  AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST',
  AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE',
}

export const AuthActions = {
	userLoginRequest: (request: boolean): UserLoginActionRequest =>
		createAction(AuthActionKeys.AUTH_LOGIN_REQUEST, request),
	userLoginSuccess: (response: string): UserLoginActionSuccess =>
		createAction(AuthActionKeys.AUTH_LOGIN_SUCCESS, response),
	userLoginFailure: (err: string): UserLoginActionFailure =>
		createAction(AuthActionKeys.AUTH_LOGIN_FAILURE, err),
};

export type AuthActionUnion = ActionsUnion<typeof AuthActions>

export type UserLoginActionRequest = Action<AuthActionKeys.AUTH_LOGIN_REQUEST, boolean>;
export type UserLoginActionSuccess = Action<AuthActionKeys.AUTH_LOGIN_SUCCESS, string>;
export type UserLoginActionFailure = Action<AuthActionKeys.AUTH_LOGIN_FAILURE, string>;
