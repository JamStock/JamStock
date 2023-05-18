import express  from "express";

const app = express()
const port = 3000

app.get("/",(req,res)=>{
  res.send("아주 화가 나")
}).listen(port,()=>{
  console.log("서버 도는 중")
})