import AsyncStorage from '@react-native-async-storage/async-storage';


// 로그인 시 AsyncStorage에 아이디, 닉네임, 로그인횟수 저장
const saveLogin = async (userId: string, nickname:string, times:string) => {
  try {
    await AsyncStorage.setItem('login', userId);
    await AsyncStorage.setItem('nickname', nickname);
    await AsyncStorage.setItem('times', times);
    console.log(times, '등록완료~')
  } catch (error) {
    console.log('AsyncStorage에 저장 중 오류 발생:', error);
  }
}

// 로그아웃 시 AsyncStorage에서 로그인 정보들 제거
const removeLogin = async () => {
  try {
    await AsyncStorage.removeItem('login');
    await AsyncStorage.removeItem('nickname');
    await AsyncStorage.removeItem('times');
  } catch (error) {
    console.log('AsyncStorage에서 제거 중 오류 발생:', error);
  }
}

// 앱 실행 시 AsyncStorage에서 닉네임 가져오기
const getLoginInfo = async (info:string) => {
  try {
    const user = await AsyncStorage.getItem(info)
    return user;
  } catch (error) {
    console.log('AsyncStorage에서 값 가져오는 중 오류 발생:', error);
    return null;
  }
}

// // 앱 실행 시 AsyncStorage에서 아이디 가져오기
// const getLoginInfoID = async () => {
//   try {
//     const UserID = await AsyncStorage.getItem('login')
//     return UserID;
//   } catch (error) {
//     console.log('AsyncStorage에서 값 가져오는 중 오류 발생:', error);
//     return null;
//   }
// }


// 로그인 상태 확인
const stateLogin = async (info:string) => {
  const userId = await getLoginInfo(info);
  return userId !== null;
}

export { saveLogin, removeLogin, getLoginInfo, stateLogin }