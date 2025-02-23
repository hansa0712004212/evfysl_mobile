import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { Platform, View } from 'react-native';
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator initialRouteName={'EvfyHome'} screenOptions={{
      headerShown: true,
      headerTransparent: true,
      tabBarPosition: 'bottom',
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: {
        height: Platform.OS === "android" ? 46 : 70,
        borderColor: '#25e',
        backgroundColor: '#37f'
      },
      tabBarShowLabel: true
    }} >
      <BottomTab.Screen name='EvfyHome' component={Home}
        options={{
          headerShown: true,
          title: 'Home'
        }} />
      <BottomTab.Screen name='Settings' component={Settings}
        options={{
          headerShown: true,
          title: 'Settings'
        }} />
    </BottomTab.Navigator>
  );
};

const MainStackNavigator = () => {
  const linking = {
    prefixes: ['evfysl://', 'https://evfysl.sahassoft.com'],
    config: {
      screens: {
        Home: 'Home'
      }
    }
  };

  return (
    <NavigationContainer ref={navigationRef} linking={linking} fallback={<View style={{ flex: 1, backgroundColor: '#25e' }}></View>}>
      <Stack.Navigator initialRouteName={'Splash'}
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
          headerStyle: {
            backgroundColor: '#00000000'
          },
          headerTintColor: '#ffffffff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
