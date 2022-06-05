import { combineReducers } from 'redux';
import auth from './Auth/Auth.reducer';

export const rootReducer = combineReducers({
	auth
});
