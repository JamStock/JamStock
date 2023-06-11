
// 알람 기준 타입 지정
interface AlarmRange {
  item: string
  url: string
}

// ! 알람 금액 기준에 따른 안내문구 및 이미지정보
export const AlarmRange = (price: number): AlarmRange => {
  if (price >= 200 && price < 1200) {
    return {
      item: '춥파춥스 1개를 구매 가능하세요!',
      url: '../../Resource/Alarm/chupa.png'
    }
  } else if (price >= 1200 && price < 4000) {
    return {
      item: 'PC방 1시간을 이용 할 수 있으세요!',
      url: '../../Resource/Alarm/pc.png'
    }
  } else if (price >= 4000 && price < 8000) {
    return {
      item: '아메리카노 한 잔을 드실 수 있으세요!',
      url: '../../Resource/Alarm/coffee.png'
    }
  } else if (price >= 8000 && price < 15000) {
    return {
      item: '아이스크림 한 통을 구매 가능하세요!',
      url: '../../Resource/Alarm/icecream.png'
    }
  } else if (price >= 15000 && price < 25000) {
    return {
      item: '혼자 영화 한편 보실 수 있으세요!',
      url: '../../Resource/Alarm/movie.png'
    }
  } else if (price >= 25000 && price < 50000) {
    return {
      item: '치킨 한마리를 드실 수 있으세요!',
      url: '../../Resource/Alarm/chicken.png'
    }
  } else if (price >= 50000 && price < 100000) {
    return {
      item: '양주 한 병을 구입할 수 있으세요!',
      url: '../../Resource/Alarm/jackdaniels.png'
    }
  } else if (price >= 100000 && price < 200000) {
    return {
      item: '메이커 신발을 구입 할 수 있으세요!',
      url: '../../Resource/Alarm/shoes.png'
    }
  } else if (price >= 200000 && price < 500000) {
    return {
      item: '킹크랩 한 마리를 먹을 수 있으세요!',
      url: '../../Resource/Alarm/kingcrab.png'
    }
  } else if (price >= 200000 && price < 500000) {
    return {
      item: '명품 지갑을 구입 할 수 있으세요!',
      url: '../../Resource/Alarm/wallet.png'
    }
  } else if (price >= 1000000) {
    return {
      item: '2박 3일 제주도 여행을 다녀올 수 있으세요!',
      url: '../../Resource/Alarm/jeju.png'
    }
  } else {
    return {
      item: '너는.. 200원도 안되는 걸 왜 알람을 받으세여..?',
      url:''
    }
  }
}