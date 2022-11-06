import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TopBar from './components/TopBar';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <>
      <TopBar />
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigation;
