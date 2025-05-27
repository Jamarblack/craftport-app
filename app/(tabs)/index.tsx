import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/homescreen';
import RequestScreen from './screens/requestscreen';
import TemplateScreen from './screens/templatescreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Templates" component={TemplateScreen} />
        <Stack.Screen name="Request" component={RequestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
