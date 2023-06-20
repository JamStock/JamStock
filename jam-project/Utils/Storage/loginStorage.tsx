import AsyncStorage from '@react-native-async-storage/async-storage';


// 로그인 시 AsyncStorage에 아이디 저장
const saveLogin = async (userId: string, nickname:string) => {
  try {
    await AsyncStorage.setItem('login', userId);
    await AsyncStorage.setItem('nickname', nickname);
    console.log(userId, '등록완료~')
  } catch (error) {
    console.log('AsyncStorage에 저장 중 오류 발생:', error);
  }
}

// 로그아웃 시 AsyncStorage에서 아이디 값 제거
const removeLogin = async () => {
  try {
    await AsyncStorage.removeItem('login');
    await AsyncStorage.removeItem('nickname');
  } catch (error) {
    console.log('AsyncStorage에서 제거 중 오류 발생:', error);
  }
}

// 앱 실행 시 AsyncStorage에서 아이디 가져오기
const getLoginInfo = async () => {
  try {
    const Usernickname = await AsyncStorage.getItem('nickname')
    return Usernickname;
  } catch (error) {
    console.log('AsyncStorage에서 값 가져오는 중 오류 발생:', error);
    return null;
  }
}

// 앱 실행 시 AsyncStorage에서 아이디 가져오기
const getLoginInfoID = async () => {
  try {
    const UserID = await AsyncStorage.getItem('login')
    return UserID;
  } catch (error) {
    console.log('AsyncStorage에서 값 가져오는 중 오류 발생:', error);
    return null;
  }
}

// 로그인 상태 확인
const stateLogin = async () => {
  const userId = await getLoginInfo();
  return userId !== null;
}

export { saveLogin, removeLogin, getLoginInfo, getLoginInfoID, stateLogin }