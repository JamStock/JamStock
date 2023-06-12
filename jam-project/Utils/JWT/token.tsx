import jwt from 'jsonwebtoken'
import * as SecureStore from 'expo-secure-store';

// ! 토큰 생성
const makeToken = (payload: object, secert: string, option: object) => {
  return jwt.sign(payload, secert, option)
}

// ! 토큰 검증
const checkToken = (token: string, secert: string) => {
  try {
    const check = jwt.verify(token, secert)
    return true
  } catch (err) {
    console.log('토큰이 유효하지않음', err)
    return false
  }
}

// ! 토큰 저장
const saveToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync('token', token)
  } catch (err) { console.log('토큰저장실패', err) }
}

// ! 로그인 유지
const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      // 토큰이 존재하는 경우 유효성 검사 등 추가 작업 수행
      console.log('토큰 확인:', token);
    } else {
      // 토큰이 없는 경우 로그인 페이지로 이동
      console.log('토큰이 없습니다.');
    }
  } catch (error) {
    console.log('토큰 확인 실패:', error);
  }
};

export { makeToken, saveToken, getToken, checkToken }