import React, { FC } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';

import { GlobalReducerStateProps } from '../../store/Base/interface/GlobalReducerStateProps';
import { AuthActions } from '../../store/Auth/Auth.actions';

import { styles } from './styles';

const Home: FC<Props> = ({ isLoading, isLogged, loggedMessage }) => {
	const dispatch = useDispatch();

	function handleLogin() {
		if (!isLogged) {
      dispatch(AuthActions.userLoginRequest(true));
    }
		if (isLogged) {
      dispatch(AuthActions.userLoginRequest(false));
    }
  }

	return (
		<>
			<Text>Open up App.js to start working on your app!</Text>
			{isLoading && <Text>Loading!!</Text>}
      {isLogged && <Text>{`${isLogged}`}</Text>}
			{loggedMessage && <Text>{loggedMessage}</Text>}

			{!isLogged &&
        <TouchableOpacity
        	onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
			}
			{isLogged &&
        <TouchableOpacity
        	onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.button}>Out</Text>
        </TouchableOpacity>
			}
		</>
	);
}

const mapState = (state: GlobalReducerStateProps) => ({
	...state.auth,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(Home);
