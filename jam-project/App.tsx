import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Styles, StylesColors } from './View/style/styles';
import LoginScreen from './View/page/login';
import HomeScreen from './View/page/home';
import SignupScreen from './View/page/signUp';
import TopScreen from './View/fixed/topMenu'
import BottomScreen from './View/fixed/bottomMenu';
import WalletScreen from './View/page/wallet';
import RecommandScreen from './View/page/recommand'
// import {RealtimeScreen} from './View/page/realtime'
import { GuideScreen } from './View/page/guide';
// import HambergerScreen from './View/fixed/hamberger';
import HambergerScreen from './View/fixed/hamberger_remake';
import FindAccountScreen from './View/page/findAccount';
import SearchScreen from './View/page/search';
import CompanyDetailScreen from './View/page/companyDetail';
import CompanyDetailBuyScreen from './View/page/companyDetailBuy';
import { MyPageScreen } from './View/page/myPage';
import { CartScreen } from './View/page/cart';



export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name="hamberger" component={HambergerScreen} options={{ headerShown: false }} />
          <Stack.Screen name="topMenu" component={TopScreen} />
          <Stack.Screen name="bottomMenu" component={BottomScreen} />
          <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="signUp" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="wallet" component={WalletScreen} options={{ headerShown: false }} />
          <Stack.Screen name="recommand" component={RecommandScreen} options={{ headerShown: false }} />
          <Stack.Screen name="guide" component={GuideScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="realtime" component={RealtimeScreen} options={{headerShown: false}}/> */}
          <Stack.Screen name="account" component={FindAccountScreen} options={{ headerShown: false }} />
          <Stack.Screen name="search" component={SearchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="companyDetail" component={CompanyDetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="companyDetailBuy" component={CompanyDetailBuyScreen} options={{ headerShown: false }} />
          <Stack.Screen name="myPage" component={MyPageScreen} options={{ headerShown: false }} />
          <Stack.Screen name="cart" component={CartScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
      );
}