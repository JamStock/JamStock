import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from '../style/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import SignUpCheck from '../../Models/account/signUpCheck';
import { response } from 'express';
import { pattern, patternBirthday, patternEmail, patternNincName, inputLength } from '../../Models/account/RegExp';
import Url from '../../Models/func/fetchURL'
import { count } from 'console';


let id: boolean ;
let pass: boolean ;
let rePass: boolean ;
let nickname: boolean ;
let birthday: boolean ;
let email: boolean ;

const SignupScreen: React.FC<any> = ({ navigation }) => {
  const [idText, setIdText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [passwordCheckText, setPasswordCheckText] = useState('');
  const [nicknameText, setNicknameText] = useState('');
  const [birthdayText, setBirthdayText] = useState('');
  const [emailText, setEmailText] = useState('');

  const [idValidation, setIdValidation] = useState('ID는 영어 소문자와 한글을 이용해 최소 1자~최대 10자');
  const [passwordValidation, setPasswordValidation] = useState('비밀번호는 영어 소문자와 숫자를 포함해 최소 1자~최대 15자');
  const [passwordCheckValidation, setPasswordCheckValidation] = useState('비밀번호 한번 더 입력');
  const [nicknameValidation, setNicknameValidation] = useState('닉네임은 영어 소문자와 한글을 이용해 최소 1자~최대 10자');
  const [birthdayValidation, setBirthdayValidation] = useState('생년월일은 19990808 형식')
  const [emailValidation, setEmailValidation] = useState('이메일 주소 입력');

  const IdChecking = () => {
    //! 아이디 유효성 검사
    if (idText.length >= inputLength.nicknameLength.min && idText.length <= inputLength.nicknameLength.max) {
      const result = pattern.test(idText);

      if (result) {
        fetch(`${Url}:3080/checkSignUp`,
          {
            method: "POST",
            body: JSON.stringify({ idText }),
          })
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            // console.log(data)
            if (data) {
              console.log('아이디성공', id, pass, rePass, nickname, birthday, email)
              
              setIdValidation('유효한 값입니다.')
              id = true;
            }
            else {
              id = false
              setIdValidation('이미 사용중인 ID입니다. 다른 ID를 입력해주세요.')

            }
          })
          .catch(error => {
            console.error('회원가입 에러가 발생했습니다::: ', error);
          });

      }
      else {
        id = false
        setIdValidation('입력하신 ID의 값이 형식에 맞지 않습니다.')
      }
    }
    else {
      id = false
      setIdValidation('입력하신 ID의 길이가 유효하지 않습니다.')

    }

  };
  const pwChecking = () => {
    //! 비밀번호 유효성 검사
    if (passwordText.length >= inputLength.pwcharLength.min && passwordText.length <= inputLength.pwcharLength.max) {
      const result = pattern.test(passwordText);

      if (result) {
        pass = true;
        console.log('비밀번호성공', id, pass, rePass, nickname, birthday, email)
        setPasswordValidation('유효한 값입니다.')
      }
      else {
        pass = false
        setPasswordValidation('입력하신 password의 값이 형식에 맞지 않습니다.')
      }
    }
    else {
      pass = false
      setPasswordValidation('입력하신 password의 길이가 유효하지 않습니다.')
    }

  };
  const rePwChecking = () => {
    //! 비밀번호 확인
    if (passwordCheckText == passwordText) {
      rePass = true;
      console.log('비밀번호성공', id, pass, rePass, nickname, birthday, email)
      setPasswordCheckValidation('password와 동일합니다.')
    }
    else {
      rePass = false
      setPasswordCheckValidation('입력하신 값과 password가 동일하지 않습니다.')
    }
  };

  const nickNameChecking = () => {
    //! 닉네임 유효성 검사
    if (nicknameText.length >= inputLength.nicknameLength.min && nicknameText.length <= inputLength.nicknameLength.max) {
      const result = patternNincName.test(nicknameText);

      if (result) {
        fetch(`${Url}:3080/checkSignUp`,
          {
            method: "POST",
            body: JSON.stringify({ nicknameText }),
          })
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            // console.log(data)
            if (data) {
              nickname = true;
              console.log('닉네임성공', id, pass, rePass, nickname, birthday, email)
              setNicknameValidation('유효한 값입니다.')
            }
            else {
              nickname = false
              setNicknameValidation('이미 사용중인 닉네임입니다. 다른 닉네임을 입력해주세요.')
            }
          })
      }
      else {
        nickname = false
        setNicknameValidation('입력하신 nickname의 값이 형식에 맞지 않습니다.')
      }
    }
    else {
      nickname = false
      setNicknameValidation('입력하신 nickname의 길이가 유효하지 않습니다.')

    }

  };
  const birthdayChecking = () => {
    //! 생일 유효성 검사
    if (patternBirthday.test(birthdayText)) {

      // 생년월일 유효성 검사 (예: 2023-06-05인 경우 2023년 6월 5일이 있는지 확인)
      const year = parseInt(birthdayText.slice(0, 4), 10);
      const month = parseInt(birthdayText.slice(4, 6), 10);
      const day = parseInt(birthdayText.slice(6, 8), 10);
      const date = new Date(year, month - 1, day);
      console.log("aaaa: ", date)

      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        // 생년월일이 유효하지 않을 경우
        birthday = false
        setBirthdayValidation('입력하신 birthday의 값이 존재하지 않는 날짜입니다.')
      }
      else {
        birthday = true;
        console.log('생일성공', id, pass, rePass, nickname, birthday, email)
        setBirthdayValidation('유효한 값입니다.')
      }
    }
    else {
      setBirthdayValidation('입력하신 birthday의 값이 형식과 맞지 않습니다.')
    }

  };
  const emailChecking = () => {
    //! 이메일 유효성 검사
    const result = patternEmail.test(emailText);
    if (result) {
      email = true;
      console.log('이메일성공', id, pass, rePass, nickname, birthday, email)
      setEmailValidation('유효한 값입니다.')
    }
    else {
      email = false
      setEmailValidation('입력하신 email값이 형식에 맞지 않습니다.')
    }

  };

  const checking = () => {
    if (id && pass && rePass && nickname && birthday && email) {
      return true;
    }
    else {
      console.log(id, pass, rePass, nickname, birthday, email)
      return false;
    }

  }

  const signUpCheck = () => {
    if (checking()) {
      fetch(`${Url}:3080/resultSignUp`,
        {
          method: "POST",
          body: JSON.stringify({ idText, passwordText, nicknameText, birthdayText, emailText }),
        }).then(json => {
          setIdText('')
          setPasswordText('')
          setPasswordCheckText('')
          setBirthdayText('')
          setEmailText('')
          setNicknameText('')
        })
        .catch(error => {
          console.error('회원가입 에러가 발생했습니다::: ', error);
        });
      navigation.navigate('login')
    }

  }


  return (
    <View style={Styles.loginBox}>
      {/* 뒤로가기 */}
      <TouchableOpacity style={Styles.backButton} onPress={() => navigation.pop()}>
        <Icon name="left" size={25} color='#A5C7FB' style={{ marginTop: '50%' }} />
      </TouchableOpacity>

      {/* 회원가입 타이틀 */}
      <View style={Styles.signUpTitleWrap}>
        <Text style={Styles.signUpTitle}>Sign Up</Text>
        <Image style={Styles.signUpImage} source={require('../../Resource/Icon/JamStock_Pig.png')}></Image>
      </View>

      {/* 회원가입 입력창 */}
      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>ID</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setIdText(text)}
          value={idText}
          onEndEditing={IdChecking}
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{idValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Password</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setPasswordText(text)}
          value={passwordText}
          onEndEditing={pwChecking}
          keyboardType="default"
          secureTextEntry={true}
          placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{passwordValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Password check</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setPasswordCheckText(text)}
          value={passwordCheckText}
          onEndEditing={rePwChecking}
          keyboardType="default"
          secureTextEntry={true}
          placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{passwordCheckValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Nickname</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setNicknameText(text)}
          value={nicknameText}
          onEndEditing={()=>{nickNameChecking()}}
          keyboardType="default"
          placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{nicknameValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Birthday</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setBirthdayText(text)}
          value={birthdayText}
          onEndEditing={birthdayChecking}
          placeholder=""
          keyboardType="numeric"
          maxLength={8}
        />
      </View>
      <Text style={Styles.signUpValidation}>{birthdayValidation}</Text>

      <View style={Styles.signUpListWrap}>
        <Text style={Styles.signUpListText}>Email</Text>
        <TextInput
          style={Styles.signUpInput}
          onChangeText={text => setEmailText(text)}
          value={emailText}
          onEndEditing={emailChecking}
          keyboardType="default"
          placeholder=""
        />
      </View>
      <Text style={Styles.signUpValidation}>{emailValidation}</Text>


      {/* 회원가입 완료 버튼 */}
      <TouchableOpacity style={Styles.signUpNFindBtn} onPress={() => {
        signUpCheck()
      }}>
        <Text style={{ fontSize: StylesText.sizeMedium.fontSize, textAlign: 'center', marginTop: 9 }}>가입 완료</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SignupScreen;