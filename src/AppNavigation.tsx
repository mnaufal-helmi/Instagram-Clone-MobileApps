import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SearchBar from './components/SearchBar';
import BottomBar from './components/BottomBar';
import TopBar from './components/TopBar';
import HomeScreen from './screens/HomeScreen';
import ScreenSearch from './screens/ScreenSearch';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <>
      {/* <TopBar /> */}
      <SearchBar />
      <Stack.Navigator>
        {/* <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="home"
          component={ScreenSearch}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigation;
