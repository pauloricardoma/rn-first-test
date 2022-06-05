import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from '../../views/Home';

function App() {
	return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Home />

      <Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
