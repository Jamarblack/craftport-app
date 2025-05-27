import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RequestScreen from './screens/RequestScreen';
import TemplateScreen from './screens/TemplateScreen';

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

