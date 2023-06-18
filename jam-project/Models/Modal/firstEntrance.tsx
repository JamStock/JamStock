import React, { useEffect, useMemo, useState } from "react";
import { Modal, View, Image, TouchableOpacity } from "react-native";
import { Styles } from "../../View/style/styles";
import Icon from "react-native-vector-icons/AntDesign";
import { changeMessage } from "./modalMessage";
import { callUser } from "../../Utils/Storage/callID";

// 무한 렌더 오류발생으로 
export const Entrance = () => {
  // const userid = callUser()[0]
  // const times = callUser()[2]
  const [userid, , times] = useMemo(() => callUser(), [])

  const [entrance, setEntrance] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (times !== "true") {
      setEntrance(false)
    } else {
      setEntrance(true)
    }
  }, [times])

  return (
    <View>
      <Modal
        visible={entrance}
        animationType="fade"
        transparent={true}
      >
        <View style={Styles.entranceBox}>
          <View style={Styles.entranceTextBox}>
            {
              changeMessage(count, userid)
            }
            <TouchableOpacity
              style={{
                width: "95%", height: "20%", display: "flex", flexDirection: "row-reverse",
              }}
              onPress={() => {
                if (count > 1) {
                  // 지갑에 5백만원 들어가는 로직+옵션도 집어넣어버렷
                  setEntrance(false)
                } else {
                  setCount(prevCount => prevCount + 1)
                }
              }}
            >
              <Icon name="doubleright" />
            </TouchableOpacity>
          </View>
          <Image style={Styles.entranceImage} source={require('../../Resource/Icon/JamStock_Pig2.png')} />
        </View>
      </Modal>

    </View>
  )
}