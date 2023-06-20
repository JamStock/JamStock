import React, { useState } from "react";
import { Modal, View, Image, Text, TouchableOpacity } from "react-native";
import { Styles } from "../../View/style/styles";
import { response } from "express";
import  Icon  from "react-native-vector-icons/AntDesign";
import url from '../func/fetchURL'
import {callUser} from '../../Utils/Storage/callID'

let [entrance, setEntrance] = useState(false)

fetch(`${url}/entrance`, {
  method: 'POST',
  headers: {
    'Content-Type': 'aplication/json'
  },
  body: JSON.stringify(`${callUser()[0]}`)
})
  .then(response => response.json())
  .then(data => {
    console.log("온게없을텐데",data)
  }).catch(err => console.error('warning!' + err))


const Entrance = () => {
  <View style={Styles.entranceBox}>
    <Modal
      visible={entrance}
      animationType="fade"
      transparent={false}
      onRequestClose={() => {
        setEntrance(true)
      }}
    >
      <Text>
        안녕하세요!{"\n"}
        JamStock에 오신 걸 환영합니다!{"\n"}
        저는 JamStock의 마스코트 쨈픽입니다!
      </Text>
      <TouchableOpacity

      >
        <Icon name="doubleright" />
      </TouchableOpacity>
    </Modal>

  </View>
}