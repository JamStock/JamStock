import express from "express";

const app = express()
const port = 3000

app.get("/",(req,res)=>{
  res.send("OB:)")
}).listen(port,()=>{
  console.log(port+"도는 중")
})