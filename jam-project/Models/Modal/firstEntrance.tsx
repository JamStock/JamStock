import React, { useState } from "react";
import { Modal, View, Image, Text, TouchableOpacity } from "react-native";
import { Styles } from "../../View/style/styles";
import { response } from "express";
import Icon from "react-native-vector-icons/AntDesign";
import url from '../func/fetchURL'
import { callUser } from '../../Utils/Storage/callID'

export const Entrance = () => {
  let [entrance, setEntrance] = useState(true)

  fetch(`${url}/entrance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: JSON.stringify(callUser()[0])
  })
    .then(response => response.json())
    .then(data => {
      console.log("온게없을텐데", data)
    }).catch(err => console.error('warning!' + err))


  return (
    <View>
      <Modal
        visible={entrance}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setEntrance(false)
        }}
      >
        <View style={Styles.entranceBox}>
          <Text style={Styles.entranceText}>
            안녕하세요!{"\n"}
            JamStock에 오신 걸 환영합니다!{"\n"}
            저는 JamStock의 마스코트 쨈픽입니다!
          </Text>
          <TouchableOpacity
            onPress={() => { setEntrance(false) }}
          >
            <Icon name="doubleright" />
          </TouchableOpacity>
        </View>
      </Modal>

    </View>
  )
}