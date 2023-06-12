import { Alert } from "react-native";
import { makeToken, saveToken } from "../../Utils/JWT/token";

export const loginResult = (loginText: string, passwordText: string, navigation: any) => {
  // console.log("id: ", loginText, " pw: ", passwordText);

  // 아이디 비밀번호를 변수에 담는다.
  const data = {
    id: loginText,
    pw: passwordText
  }

  // 패치 시 주소는 실행하는 컴터 ip
  fetch('http://121.184.34.150:3080/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },

    // 입력받은 데이터를 바디에 담아서 전송
    body: JSON.stringify(data)
  }
  ).then((response) => {

    // 서버로 부터 응답을 회신받는다.
    return response.json()
  })
    .then(json => {


      // console.log("테스트중" + JSON.stringify(json))
      // console.log(typeof data)

      // 데이터 변수에 json화 한 값을 담는다.
      const data = JSON.stringify(json)

      // console.log(data.split(`"`)[3])

      if (data.split(`"`)[3] === undefined) {
        // 아이디가 없음
        Alert.alert('아이디 실패', '아이디가 일치하지 않습니다.')
      } else if (data.split(`"`)[7] !== passwordText) {
        // 비밀번호 틀림
        Alert.alert('비밀번호 실패', '비밀번호가 일치하지 않습니다.')
      } else {
        // 아이디 비번 있으니까 입장~

        // 존맛탱 주기 
        const token = makeToken({ id: data.split(`"`)[3] }, 'jampig', { expiresIn: '1m' })
        saveToken(token)
        console.log(token)

        Alert.alert('환영합니다!', '잼픽이와 함께 하는 JamStock에 오신 것을 환영합니다!')
        navigation.navigate('home')
      }
    }
    ).catch(() => {
      console.log('error')
    })
};