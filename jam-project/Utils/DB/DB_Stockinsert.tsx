// import { debug } from 'console'
import mysql from 'mysql2'
import {spawn} from 'child_process'
import express, {Request, Response} from 'express'
import fs from 'fs'

// 버퍼로 나옴
// let datas = fs.readFileSync('./stockInfo.json')

// 버퍼를 풀어준다.(한글로)
// console.log(datas.toString('utf-8'))
// console.log(typeof datas.toString('utf-8'))

// json 을 파싱한다. 그러면 이제 객체 완성.
// console.log(JSON.parse(datas.toString('utf-8'))['kospi'])
// console.log(JSON.parse(datas))

// let dataObject = JSON.parse(datas.toString('utf-8'))['kosdaq']
// console.log(dataObject)

export const DBInfo = mysql.createConnection({
  host:'192.168.100.77',
  database:'jamstock',
  user:'euni',
  password:'0000',
  port:3306
})

DBInfo.connect(()=>{
console.log('DB connect')
})

DBInfo.query(`select code, companyname from stockdata`, (err, result:any[])=>{
  if(err) console.error(err)
  console.log(result)

  // for(let i=0; i<result.length;i++){
  //   DBInfo.query(`insert into stockcallprice(code, companyname) value('${result[i].code}', '${result[i].companyname}')`, (err, result)=>{
  //         if(err) console.error(err)
  //         console.log('success')
  //       })
  // }
  // for(let companyname in dataObject){
  //   DBInfo.query(`insert into stockdata(code, companyname) value('${dataObject[companyname]}', '${companyname}')`, (err, result)=>{
  //     if(err) console.error(err)
  //     console.log('kosdaq success')
  //   })
})



// DBInfo.end()

// const app=express()

// app.get('/',(req:Request, res:Response)=>{
  // const result = spawn('python',['../../Models/stock/stockCodeName.py'])

  // result.stdout.on('data',(data)=>{
  //   res.send('뭔데')
  // })
// }).listen(2222,()=>{
  // console.log('connecting')
// })
