mport * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Maps from './components/maps';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />
      <Stack.Screem
        name:"Dashboard"
        component={Dashboard} 
        options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="Maps" 
       component={Maps} 
       options={
         { title: 'Maps' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
