import React, { useState } from "react";
import { Modal, View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { Styles, StylesColors } from "../../View/style/styles";
import { InsertOption } from "../DB/firstOption";


export const changeMessage = (count: number, userid:string) => {
  const [upper, setUpper] = useState('')
  const [lower, setLower] = useState('')

  console.log(count)
  if (count === 0) {
    return (
      <Text style={Styles.entranceText}>
        안녕하세요!{"\n"}
        JamStock에 오신 걸 환영합니다!{"\n"}
        저는 JamStock의 마스코트 쨈픽입니다!
      </Text>
    )
  } else if (count === 1) {
    return (
      <Text style={Styles.entranceText}>
        알림을 수신 받으실 설정을 해주세요.{"\n"}
        구매금액보다
        <TextInput
          style={{ width: "15%", backgroundColor: StylesColors.subColorDeep.backgroundColor }}
          value={upper}
          onChangeText={text => setUpper(text)} keyboardType="numeric"
          maxLength={3}
        // placeholder="00"
        />
        % 이상 오른 경우,{"\n"}
        구매금액보다
        <TextInput
          style={{ width: "100%", backgroundColor: StylesColors.subColorDeep.backgroundColor }}
          value={lower}
          onChangeText={text => setLower(text)} keyboardType="numeric"
          maxLength={3}
        // placeholder="00"
        />
        % 이상 떨어진 경우,
      </Text>
    )
  } else {
    InsertOption(upper, lower, userid)

    return (
      <Text style={Styles.entranceText}>
        설정이 완료되었습니다!{"\n"}
        가입을 기념하여 초기 자본금 5백만원을{"\n"}
        입금해드렸습니다.{"\n"}
        500% 수익의 행운이 따르시길!
      </Text>
    )
  }
}