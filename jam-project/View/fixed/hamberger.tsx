import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import { useNavigation } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import LoginScreen from '../page/login';
import SignupScreen from '../page/signUp';


type HambergerProps = {
  navigation: any;
}

const Hamberger: React.FC<HambergerProps> = ({ navigation }) => {
  return (
    <View style={Styles.hamBox}>
      <View style={Styles.hamTop}>
        {/* <Text style={Styles.hamName}>쨈픽 님</Text> */}
        <TouchableOpacity style={Styles.hamButton} onPress={() => navigation.navigate('signUp')}>
          <Text style={Styles.hamButtonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.hamButton} onPress={() => navigation.navigate('login')}>
          <Text style={Styles.hamButtonText}>로그인</Text>
        </TouchableOpacity> 
      </View>

      <View style={Styles.hamCategory}>
        <View style={Styles.hamCategoryList}>
          <TouchableOpacity style={Styles.hamListWrap} onPress={() => navigation.navigate('myPage')}>
            <Text style={Styles.hamListText}>마이페이지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>나의 잔고</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>실시간 정보</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>주식 추천</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>종목 검색</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.hamListWrap}>
            <Text style={Styles.hamListText}>용어 가이드</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Hamberger;