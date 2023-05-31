import {spawn} from 'child_process'
import express from 'express'

const app = express()

app.get('/',(req, res)=>{
  const result = spawn('python',['stock_api_test.py'])

  result.stdout.on('data',(data)=>{
    // console.log(data)
    res.send()
  })
}).listen(2080)
