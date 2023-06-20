import { useEffect, useState } from "react";
import { getLoginInfoID, getLoginInfo } from "./loginStorage";


export const callUser = () =>{
  // 스토리지 내의 아이디값을 받을 변수
  const [id, setID] = useState('')
  const [nickname, setNickname] = useState('')  

  useEffect(() => {
    const checkLogin = async () => {
      // 스토리지내의 아이디값을 불러옴
      const loginID = await getLoginInfoID();
      // 해당 아이디를 setID에 할당.
      setID(`${loginID}`)

      // 스토리지내의 닉네임값을 불러옴
      const loginNickname = await getLoginInfo()

      setNickname(`${loginNickname}`)

    };
    
    checkLogin();
  }, []);

  return [id, nickname]
}