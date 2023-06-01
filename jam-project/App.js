import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Styles, StylesColors } from './styles.js';
import LoginScreen from './login.js';
import HomeScreen from './home.js';
import SignupScreen from './signUp.js';
import TopMenuScreen from './topMenu.js'
import BottomMenuScreen from './bottomMenu.js';

const Stack = createNativeStackNavigator();
// const Tab = crea
export default function App() {
  const hideTopAndBottom = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signUp" component={SignupScreen} options={{ headerShown: false, tabBarStyle: { display: "none" } }} />
      </Stack.Navigator>
      {!hideTopAndBottom && <TopMenuScreen />}
      {!hideTopAndBottom && <BottomMenuScreen />}
    </NavigationContainer>
  );
}


