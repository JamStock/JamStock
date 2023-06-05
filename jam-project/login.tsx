import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'



const LoginScreen: React.FC<any> = ({ navigation }) => {
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const loginResult = () => {
    console.log("id: ", loginText, " pw: ", passwordText);
    fetch
    // Perform search logic or any other operations with the entered text
  };

  return (
    <View style={Styles.loginBox}>
      {/* 뒤로가기 */}
      <TouchableOpacity style={Styles.backButton} onPress={() => navigation.pop()}>
      <Icon name="left" size = {25} color = '#A5C7FB' style={{marginTop: '50%'}}/>
      </TouchableOpacity>
      <Text style={Styles.loginTitle}>Login</Text>
      <Image style={Styles.loginImage} source={require('./resource/JamStock_Pig_bukkeu.png')}></Image>
      
      {/* ID, PW 입력창 */}
      <View style={Styles.idPwWrap}>
        <Text style={Styles.idPwText}>ID</Text>
        <TextInput
            style={Styles.idPwInput}
            onChangeText={text => setLoginText(text)}
            value={loginText}
            placeholder="ID를 입력해 주세요"
        />
      </View>
      <View style={Styles.idPwWrap}>
        <Text style={Styles.idPwText}>PW</Text>
        <TextInput
            style={Styles.idPwInput}
            onChangeText={text => setPasswordText(text)}
            value={passwordText}
            placeholder="PW를 입력해 주세요"
        />
      </View>

      {/* 회원가입, 계정찾기, 로그인 버튼 */}
      <View style={Styles.loginPageBtnWrap}>
        <TouchableOpacity style={Styles.loginPageBtn} onPress={() => navigation.navigate('signUp')}>
          <Text style={Styles.loginPageBtnText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.loginPageBtn} onPress={() => navigation.navigate('account')}>
          <Text style={Styles.loginPageBtnText}>계정찾기</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={Styles.loginPageLoginBtn} onPress={() => 
        {
          loginResult() 
          navigation.navigate('home')
        }
      }>
        <Text style={{fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 7}}>로그인</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default LoginScreen;