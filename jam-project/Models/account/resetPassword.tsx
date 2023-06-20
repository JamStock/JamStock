import { response } from "express";
import React from "react";
import { Alert } from "react-native";
import url from '../func/fetchURL'

export const ResetPassword=(id:string,email:string,password:string)=>{
  // console.log("함수 실행은 되나 : "+id, email, password)

  let resetPassword={
    ID:id,
    email:email,
    password:password
  }

  fetch(`${url}:3080/resetPassword`,{
  method:'POST',
  body:JSON.stringify(resetPassword)
  })
  .then((response)=> {return response.json()})
  .then((data)=>{
    // console.log(typeof data[0])
    // console.log("fetch "+JSON.parse(data))
    
    let datas=JSON.parse(data)
    // console.log(datas.result)

    // DB에서 받은 결과 도출
    if(datas.result==='success'){
      Alert.alert('',`비밀번호를 재설정하였습니다!`)
    }else{
      Alert.alert('','입력하신 정보가 일치하지 않습니다.')
    }
  })
  .catch(err=>console.error('warning!!!',err))
}