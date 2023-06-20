import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'


export const Alarm = (price:number) => {
if(price>=200||price<1200){
  return '../../Resource/Alarm/chupa.png'
}else if(price>=1200||price<4000){
  return '../../Resource/Alarm/pc.png'
}else if(price>=4000||price<8000){
  return '../../Resource/Alarm/coffee.png'
}else if(price>=8000||price<15000){
  return '../../Resource/Alarm/icecream.png'
}else if(price>=15000||price<25000){
  return '../../Resource/Alarm/movie.png'
}else if(price>=25000||price<50000){
  return '../../Resource/Alarm/chicken.png'
}else if(price>=50000||price<100000){
  return '../../Resource/Alarm/jackdaniels.png'
}else if(price>=100000||price<200000){
  return '../../Resource/Alarm/shoes.png'
}else if(price>=200000||price<500000){
  return '../../Resource/Alarm/kingcrab.png'
}else if(price>=200000||price<500000){
  return '../../Resource/Alarm/wallet.png'
}else if(price>=1000000){
  return '../../Resource/Alarm/jeju.png'
}

}