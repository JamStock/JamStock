import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { Styles, StylesText, StylesColors } from './styles.js';
// import TopMenu from './topMenu.js';
// import BottomMenu from './bottomMenu.js';


export default function HomeScreen({navigation}) {
  return (
    <View style={Styles.homeRoot}>
      {/* <TopMenu navigation={navigation} /> */}
      <View style={Styles.homeWrap}>
        {/* <Button title="Login" onPress={() => navigation.navigate('Signup')} /> */}
        <View></View>
        <View></View>
      </View>
      {/* <BottomMenu navigation={navigation} /> */}
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