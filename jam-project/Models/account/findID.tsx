import { response } from "express";
import React from "react";
import { Alert } from "react-native";
import url from '../func/fetchURL'

export const findID=(email:string,birthday:string)=>{
  let findID={
    email:email,
    birthday:birthday
  }

  console.log('여기는 findID입니다.'+findID.email)

  fetch(`${url}:3080/findID`,{
  // fetch('http://192.168.30.76:3080/findID',{
  method:'POST',
  body:JSON.stringify(findID)
  })
  .then((response)=> {return response.json()})
  .then((data)=>{
    // console.log(typeof data[0])

    let datas=JSON.parse(data)[0]

    // DB에서 받은 결과 도출
    if(typeof datas==='object'){
      Alert.alert('잼픽이가 찾은 아이디!',`고객님의 아이디는 ${datas.ID}입니다!`)
    }else{
      Alert.alert('','입력하신 정보가 일치하지 않습니다.')
    }
  })
  .catch(err=>console.error('warning!!!',err))
}