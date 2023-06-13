import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Styles } from "../style/styles";
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import Icon from "react-native-vector-icons/AntDesign";
import { realtimedata } from "../../Models/func/realtimedata";


interface Companydata {
  logo: string
  companyname: string
  price: number
}

const companylist = (data: Companydata) => {
  return (
    <View style={Styles.rankingCompany}>
      <TouchableOpacity style={Styles.rankingCompanyName}>
        <Text style={Styles.rankingCompanyText}>{data.companyname}</Text>
      </TouchableOpacity>
      <View style={Styles.rankingCompanyPrice}>
        <Text style={Styles.rankingCompanyText}>
          {data.price}
        </Text>
      </View>
    </View>
  )
}


export const RealtimeScreen: React.FC<any> = ({ navigation }) => {

  // 함수 도입 필요
  const menuCilck = () => {
    console.log('과연뭘까')
  }

  return (
    <View style={Styles.rankingBox}>
      <TopMenu navigation={navigation} />

      {/* 메인 부분 */}
      <View style={Styles.ranking}>

        {/* 랭킹 카테고리 */}
        <View style={Styles.rankingMenu}>
          <TouchableOpacity style={Styles.rankingMenuButton} onPress={menuCilck}>
            <Text>상승</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.rankingMenuButton} onPress={menuCilck}>
            <Text>하락</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.rankingMenuButton} onPress={menuCilck}>
            <Text>최고가</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.rankingMenuButton} onPress={menuCilck}>
            <Text>최저가</Text>
          </TouchableOpacity>
        </View>

        {/* 랭킹 목록 */}
        <View style={Styles.rankingList}>

          <View style={Styles.rankingMenu}>
            <Text>
              {new Date().getHours()}시 {new Date().getMinutes()}분 기준
            </Text>

            {/* 새로고침 되는 기능 필요 */}
            <TouchableOpacity >
              <Icon name="reload1" size={13} />
            </TouchableOpacity>

          </View>

          {/* 데이터를 별도 파일에 작성해서 import함 */}
          <FlatList
            data={realtimedata}
            renderItem={({ item }) => companylist(item)} />

        </View>

      </View>

      <BottomMenu navigation={navigation} />
    </View>
  )
}