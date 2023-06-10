import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { findID } from '../../Models/func/findID';
import { ResetPassword } from '../../Models/func/resetPassword';
import { pattern, patternBirthday, patternEmail, patternNincName, inputLength } from '../../Models/func/RegExp'


const FindAccountScreen: React.FC<any> = ({ navigation }) => {

  const [idText, setIdText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [passwordCheckText, setPasswordCheckText] = useState('');
  const [birthdayText, setBirthdayText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [pwemailText, setPWEmailText] = useState('');

  const [passwordValidation, setPasswordValidation] = useState('비밀번호는 영어 소문자와 숫자로 최소 1자~10자까지');
  const [passwordCheckValidation, setPasswordCheckValidation] = useState('비밀번호 한번 더 입력');


  let password = false;


  const pwChecking = () => {
    //! 비밀번호 유효성 검사
    if (passwordText.length >= inputLength.pwcharLength.min && passwordText.length <= inputLength.pwcharLength.max) {
      const result = pattern.test(passwordText);

      if (result) {
      setPasswordValidation('유효한 값입니다.')
        password = true;
      }
      else {
        setPasswordText('')
        setPasswordValidation('입력하신 password의 값이 형식에 맞지 않습니다.')
      }
    }
    else {
      setPasswordText('')
      setPasswordValidation('입력하신 password의 길이가 유효하지 않습니다.')

    }

  };
  const rePwChecking = () => {
    //! 비밀번호 확인
    if (passwordCheckText == passwordText) {
      setPasswordCheckValidation('password와 동일합니다.')
    }
    else {
      setPasswordCheckValidation('입력하신 값과 password가 동일하지 않습니다.')
      setPasswordCheckText('')
    }

  };

  return (
    <View style={Styles.loginBox}>
      {/* 뒤로가기 */}
      <TouchableOpacity style={Styles.backButton} onPress={() => navigation.pop()}>
        <Icon name="left" size={25} color='#A5C7FB' style={{ marginTop: '50%' }} />
      </TouchableOpacity>

      {/* ID찾기 타이틀 */}
      <View style={Styles.signUpTitleWrap}>
        <Text style={Styles.accountTitle}>아이디를 찾으시나요?</Text>
        <Image style={Styles.signUpImage} source={require('../../Resource/Icon/JamStock_Pig.png')}></Image>
      </View>

      {/* 입력창 */}
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Email</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setEmailText(text)}
          value={emailText}
          placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Birthday</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setBirthdayText(text)}
          value={birthdayText}
          placeholder=""
        />
      </View>

      {/* 아이디 찾기 버튼 */}
      <TouchableOpacity style={Styles.accountBtn} onPress={() => {
        // 아이디 찾기 버튼을 클릭하면 값이 DB로 전송 및 DB에서 데이터 받아서 검증 로직
        findID(emailText, birthdayText)
        setEmailText("")
        setBirthdayText("")
      }
      }>
        <Text style={{ fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 9 }}>아이디 찾기</Text>
      </TouchableOpacity>


      {/* PW찾기 타이틀 */}
      <View style={Styles.signUpTitleWrap}>
        <Text style={[Styles.accountTitle, { fontSize: 30 }]}>비밀번호를 잊으셨나요?</Text>
        <Image style={Styles.signUpImage} source={require('../../Resource/Icon/JamStock_Pig.png')}></Image>
      </View>

      {/* 입력창 */}
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>ID</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setIdText(text)}
          value={idText}
          placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Email</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setPWEmailText(text)}
          value={pwemailText}
          placeholder=""
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Password</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setPasswordText(text)}
          value={passwordText}
          onSubmitEditing={pwChecking}
          placeholder={passwordValidation}
        />
      </View>
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Password check</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => {
            setPasswordCheckText(text)
          }}
          value={passwordCheckText}
          onSubmitEditing={rePwChecking}
          placeholder={passwordCheckValidation}
        />
      </View>

      {/* 비밀번호 재설정 버튼 */}
      <TouchableOpacity style={Styles.accountBtn} onPress={() => {
        ResetPassword(idText, pwemailText, passwordText)
        setIdText("")
        setPWEmailText("")
        setPasswordText("")
        setPasswordCheckText("")
      }
      }>
        <Text style={{ fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 9 }}>비밀번호 재설정</Text>
      </TouchableOpacity>

    </View>
  );
};

export default FindAccountScreen;