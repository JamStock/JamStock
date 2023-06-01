import React from 'react';
import {View, Text} from 'react-native';
import TopMenuScreen from './topMenu.js';
import BottomMenuScreen from './bottomMenu.js';

export default function SignupScreen() {
  const hideTopAndBottom = true;
  return (
    <View>
      <Text>Sign Up Screen</Text>
      {hideTopAndBottom ? null : <TopMenuScreen />}
      {hideTopAndBottom ? null : <BottomMenuScreen />}
    </View>
  );
}