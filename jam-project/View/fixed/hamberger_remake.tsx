import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginScreen from '../page/login';
import SignupScreen from '../page/signUp';
import { MyPageScreen } from '../page/myPage';
import WalletScreen from '../page/wallet';
// import { RealtimeScreen } from '../page/realtime';
import RecommandScreen from '../page/recommand';
import SearchScreen from '../page/search';
import { GuideScreen } from '../page/guide';


const Hamberger: React.FC<any> = ({ navigation }) => {
  const Drawer = createDrawerNavigator();

  return (
      <Drawer.Navigator
        initialRouteName='home'
        backBehavior='history'
        screenOptions={{ drawerPosition: 'right' }}
      >

        <Drawer.Screen name="회원가입" component={SignupScreen} options={{ drawerLabel: 'SignUp' }} />
        <Drawer.Screen name="로그인" component={LoginScreen} options={{ drawerLabel: 'Login' }} />
        <Drawer.Screen name="마이 페이지" component={MyPageScreen} options={{ drawerLabel: 'MyPage' }} />
        <Drawer.Screen name="지갑" component={WalletScreen} options={{ drawerLabel: 'Wallet' }} />
        {/* <Drawer.Screen name="실시간 정보" component={RealtimeScreen} options={{ drawerLabel: 'Realtime' }} /> */}
        <Drawer.Screen name="주식 추천" component={RecommandScreen} options={{ drawerLabel: 'Recommand' }} />
        <Drawer.Screen name="종목 검색" component={SearchScreen} options={{ drawerLabel: 'Search' }} />
        <Drawer.Screen name="용어 가이드" component={GuideScreen} options={{ drawerLabel: 'Guide' }} />

      </Drawer.Navigator>
  );
}

export default Hamberger;