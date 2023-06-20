import React, {useState} from 'react'
import url from "../func/fetchURL"

export const myPageInfo = (id:string) =>{

  const [nickname, setNickname] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [upper, setUpper] = useState('')
  const [lower, setLower] = useState('')


  fetch(`${url}:3080/myPage`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(id)
  })
  .then(response=>{return response.json()})
  .then(data=>{
  
    setNickname(JSON.parse(data).nickname)
    setEmail(JSON.parse(data).email)
    setBirthday((JSON.parse(data).birthday).toString())
    setUpper(JSON.parse(data).upperlimit)
    setLower(JSON.parse(data).lowerlimit)
  
  }).catch(err=>{
    console.error('error : ',err)
  })

  return {nickname, birthday, email, upper, lower}
}