import React, { useEffect, useState } from "react";
import { View, Image, Modal, Text, TouchableOpacity } from "react-native";
import { Styles } from "../../View/style/styles";
import { AlarmRange } from "./alarmRange";

export const Alram = () => {
  // 유저의 잔고 금액+유저 설정 % 를 보고 알림을 띄워줘야함.
  // 기준치가 넘으면 모달을 띄울거니까 아래 모달만 쓰면 되지않나.

  // ! modal on/off 용
  const [alarmModal, setAlarmModal] = useState(true)
  // 기본으로 꺼두고, 기준치가 되면 true로 바껴야함.

  // 기준 금액
  // let range = 50000
  
  // 값을 비교하는 로직을 이곳에 넣고, 해당 값이 되면 반환을 만듦되징


  // useEffect(() => {
  //   setAlarmModal(false)
  // }, [])

  // 안드로이드 하드웨어 백버튼 클릭 시 모달 닫히기.
  return (
    <View>
      <Modal
        visible={alarmModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setAlarmModal(false)
        }}
      >
        <View style={Styles.modalContainer}>
          <View style={Styles.modalBox}>

            <Image
              style={Styles.modalImage}
              source={AlarmRange(range).url}
            />

            <Text style={Styles.modalText}>
              축하합니다! {"\n"}
              {AlarmRange(range).item}{"\n"}
            </Text>

            <TouchableOpacity
              style={Styles.modalCloseButton}
              onPress={() => setAlarmModal(false)}
            >
              <Text>닫기</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </View>
  )

}