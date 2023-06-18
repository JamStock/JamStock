import url from '../func/fetchURL'


// DB 전송할 정보들에 대해 받아서 넣기.
//  lower, upper, wallet

export const InsertOption = (upper: string, lower: string, userid:string) => {

  const inputInfo = {
    userid: userid,
    upperlimit: Number(upper),
    lowerlimit: Number(lower),
    deposit: 5000000
  }

  console.log(inputInfo)

  fetch(`${url}/entrance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: JSON.stringify(inputInfo)
  })
    .then(response => response.json())
    .then(data => {
      console.log("온게없을텐데")
    })
    .catch(err => console.error('warning!' + err))
}


