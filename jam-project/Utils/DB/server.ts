import express, { Request, Response } from 'express';
import { signCheck, signResult } from '../../Models/DB/signUp';
import { DBInfo } from './DBConnect';
import { bidAskPriceInsert, stockCodeSend } from '../../Models/DB/bidAskPrice';
import { loveCheck, loveInput } from '../../Models/DB/companyLove';

const app = express();
DBInfo.connect(() => {
  console.log('Database open! port is 3306')
})


// 로그인 시 DB 연동
app.post('/login', (req: Request, res: Response) => {

  let body = "";

  req.on("data", (data) => {
    body += data;
  });

  req.on("end", () => {

    // 넘겨받은 아이디와 비밀번호를 변수에 담기
    let loginDataid = JSON.parse(body).id


    // 쿼리문으로 해당 아이디가 유저 목록에 있는지 확인
    DBInfo.query(`select ID, password, nickname from userinfo where ID='${loginDataid}'`, (error, result) => {
      // console.log(result)

      // 결과값을 전달.
      res.json(result)
    })
  });
});

// 회원가입 시 확인
app.post('/checkSignUp', (req: Request, res: Response) => {
  signCheck(req, res);

});

// 회원가입 결과
app.post('/resultSignUp', (req: Request, res: Response) => {
  signResult(req, res);

});


app.post('/priceData', (request: Request, response: Response) => {
  //주식의 매수호가, 매도호가 저장
  bidAskPriceInsert(request, response);

});


app.get('/stockCodeData', (request: Request, response: Response) => {
  //주식의 매수호가, 매도호가 저장
  stockCodeSend(request, response);

});

// 아이디 찾기 DB 연동
app.post('/findID', (req: Request, res: Response) => {
  let datas = ''
  req.on('data', (data) => {
    datas += data
  })

  req.on('end', () => {

    const finderEmail = JSON.parse(datas).email
    const finderBirthdauy = JSON.parse(datas).birthday

    console.log(finderEmail, finderBirthdauy)

    DBInfo.query(`select ID from userinfo where email='${finderEmail}' and birthday='${finderBirthdauy}'`, (err, result) => {
      if (err) console.error(err)
      console.log(result)
      res.json(JSON.stringify(result))
    })

  })

})

// 비밀번호 재설정 DB 연동
app.post('/resetPassword', (req: Request, res: Response) => {
  let datas = ''

  req.on('data', (data) => {
    datas += data
  })

  req.on('end', () => {

    const ID = JSON.parse(datas).ID
    const email = JSON.parse(datas).email
    const password = JSON.parse(datas).password

    // console.log(ID, email, password)

    DBInfo.query(`select * from userinfo where email='${email}' and ID='${ID}'`, (err, result) => {

      let results: any = result

      // console.log(results)
      // console.log(results[0])
      console.log(results.length)

      if (results.length === 0) {
        console.log("조회되는 값이 없어~ : " + results)
        res.json(JSON.stringify({ result: "fail" }))
      }
      else if (results.length === 1) {
        console.log("조회되는 값이 있어~ : " + results)

        // res.json(JSON.stringify({ result: "sucess" }))


        DBInfo.query(`update userinfo set password="${password}" where id="${ID}" and email="${email}"`, (err, result) => {

          if (err) { console.error("쿼리내의 쿼리야" + err) }

          else {
            console.log("쿼리내의 쿼리야" + result)
            res.json(JSON.stringify({ result: "success" }))
          }
        })
      }
      else if (err) {
        console.error(err)
      }

    })

  })

})

// 좋아요 확인
app.post('/likeCheck', (req: Request, res: Response) => {
  loveCheck(req, res);

});

// 좋아요 클릭 시 DB 저장
app.post('/companyLike', (req: Request, res: Response) => {
  loveInput(req, res);

});

// 마이페이지 정보 불러오기
app.post('/myPage', (req: Request, res: Response) => {
  let datas = ''
  req.on('data', (data) => {
    datas += data
  })
  req.on('end', () => {

    let userData = {}

    DBInfo.query(`select nickname, email, birthday from userinfo where id='${JSON.parse(datas)}'`, (err, result:any) => {
      if (err) console.log(err)
      Object.assign(userData, result[0])
      
      DBInfo.query(`select upperlimit, lowerlimit from useroption where id='${JSON.parse(datas)}'`, (err, result:any) => {
        if (err) console.log(err)
        Object.assign(userData, result[0])
        console.log(userData)
        res.json(JSON.stringify(userData))
      })
    })

  })
})

// 최초 입장 여부 DB 확인
app.post('/entrance',(req,res)=>{
  let datas = ''
  req.on('data', (data)=>{
    datas+=data
  })
  req.on('end',()=>{
    const user = JSON.parse(datas)
    DBInfo.query(`select firstentrance from ${user}`,(err,result)=>{
      console.log(result)
      // if(result===0){
      res.json(result)
      // }
    })

  })
})

// 서버 포트 설정
app.listen(3080, () => {
  console.log("서버 돌아감");
});