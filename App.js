import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Activity from './src/screens/Activity';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import Status from './src/screens/Status';
import FriendProfile from './src/screens/FriendProfile';
import EditProfile from './src/screens/EditProfile';
import Ionic from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  //아래 하단바 함수
  const BottomTabScreen = () => {
    return(
      <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              height: 70,
            },
          tabBarIcon : ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            } 
            return <Ionic name={iconName} size={size} color={color} />
          }
        })}
      >
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Search' component={Search} />
          <Tab.Screen name='Activity' component={Activity} />
          <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='Bottom' component={BottomTabScreen} />
        <Stack.Screen name='Status' component={Status} />
        <Stack.Screen name='FriendProfile' component={FriendProfile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App