import { Alert } from "react-native";
import { saveLogin } from "../../Utils/Storage/loginStorage";
import Url from '../func/fetchURL'


// logindata 에 대한 타입 지정
interface logindata {
  id: string
  password: string
}

// 로그인 결과에 대한 함수
export const loginResult = (data: logindata, navigation: any) => {

  // 패치 시 주소는 실행하는 컴터 ip
  fetch(`${Url}:3080/login`, {
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

      // 데이터 변수에 json화 한 값을 담는다.
      const datas = JSON.stringify(json)

      if (datas.split(`"`)[3] === undefined) {
        // 아이디가 없음
        Alert.alert('아이디 실패', '아이디가 일치하지 않습니다.')
      } else if (datas.split(`"`)[7] !== data.password) {
        // 비밀번호 틀림
        Alert.alert('비밀번호 실패', '비밀번호가 일치하지 않습니다.')
      } else {
        // 아이디 비번 있으니까 입장~
        console.log(datas.split(`"`)[15])
        Alert.alert('환영합니다!', '잼픽이와 함께 하는 JamStock에 오신 것을 환영합니다!')
        navigation.navigate('home')
        saveLogin(datas.split(`"`)[3], datas.split(`"`)[11], datas.split(`"`)[15])
      }
    }
    ).catch((err) => {
      console.log('warning in login : ', err)
    })
};