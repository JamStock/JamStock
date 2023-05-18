import {default as express, Request, Response } from "express";

const app = express()
const port = 3000

app.get("/", (req: Request, res: Response) => {
  res.send("아주 화가 나")
}).listen(port, () => {
  console.log("서버 도는 중")
})