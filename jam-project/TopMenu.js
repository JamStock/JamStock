import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import { Styles, StylesText } from './styles.js';
import { useNavigation } from '@react-navigation/native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function TopMenuScreen() {
  const navigation = useNavigation()

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
        <View style={Styles.topRoot}>
          <View style={Styles.logoWrap}>
            <Text style={Styles.logoText}>JamStock</Text>
            <Image
              style={Styles.logoImage}
              source={require('./resource/JamStock_Pig.png')}
            />
          </View>
          <View style={Styles.topWrap}>
            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
              <Image
                  style={Styles.logoImage}
                  source={require('./resource/shoppingcart.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.hambergerWrap} onPress={() => navigation.navigate('signUp')}>
              <View style={Styles.hambergerBar}></View>
              <View style={Styles.hambergerBar}></View>
              <View style={Styles.hambergerBar}></View>
            </TouchableOpacity>
          </View>
        </View>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}