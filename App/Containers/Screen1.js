// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
		<Button title='Got to screen 2' onPress={() => navigation.navigate('Screen2')}/>
    </View>
  );
}

export default HomeScreen
