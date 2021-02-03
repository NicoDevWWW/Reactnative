/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
	Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./App/Containers/Screen1";
import Screen2 from "./App/Containers/Screen2";

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
		<Stack.Navigator>
			<Stack.Screen name='Home Screen' component={HomeScreen}/>
			<Stack.Screen name='Screen2' component={Screen2}/>
		</Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
	scrollView: {
	backgroundColor: Colors.lighter,
	},
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingVertical: 5
	},
});

export default App;
