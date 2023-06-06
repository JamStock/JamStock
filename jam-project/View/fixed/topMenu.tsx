import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
// import Hamberger from './hamberger_remake';


const TopMenu: React.FC<any> = ({ navigation }) => {
  
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    <View style={Styles.topRoot}>
      <TouchableOpacity style={Styles.logoWrap} onPress={() => navigation.navigate('home')}>
        <Text style={Styles.logoText}>JamStock</Text>
        <Image
          style={Styles.logoImage}
          source={require('../../Resource/Icon/JamStock_Pig.png')}
        />
      </TouchableOpacity>
      <View style={Styles.topWrap}>
        {/* 장바구니로 이동 */}
        <TouchableOpacity onPress={() => navigation.navigate('cart')}>
          <Image
            style={Styles.logoImage}
            source={require('../../Resource/Icon/shoppingcart.png')}
          />
        </TouchableOpacity>
        {/* 햄버거 메뉴 이동 */}
        <TouchableOpacity
          style={Styles.hambergerWrap}
          onPress={() => navigation.navigate('hamberger')}
        >
          <View style={Styles.hambergerBar}></View>
          <View style={Styles.hambergerBar}></View>
          <View style={Styles.hambergerBar}></View>
        </TouchableOpacity>
      </View>
    </View>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default TopMenu;