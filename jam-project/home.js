import React from 'react';
import {View, Text, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import { Styles, StylesText, StylesColors } from './Styles.js';
import TopMenu from './TopMenu';


export default function homeScreen({navigation}) {

  return (
    <View style={Styles.homeRoot}>
      <TopMenu navigation={navigation} />
      {/* <TextInput
        onChangeText={text => console.log(text)}
        value=""
        placeholder="Enter text"
      /> */}
      <View style={Styles.homeWrap}>
        {/* <Button title="Login" onPress={() => navigation.navigate('Signup')} /> */}
        <View></View>
        <View></View>
      </View>
    </View>
    
  );
}

// fetch("http://localhost:3008/home", {
//     method: "POST",
//   })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log("count: ", result)

//   })