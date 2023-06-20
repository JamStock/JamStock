import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../style/styles";
import TopMenu from '../fixed/topMenu';
import BottomMenu from '../fixed/bottomMenu';
import { recommandbubble } from "../../Models/func/recommandBubble";

const RecommandScreen: React.FC<any> = ({ navigation }) => {

  const [theme, setTheme] = useState('')

  return (
    <View style={Styles.recommandBox}>
      <TopMenu navigation={navigation} />

      <View style={{ width: '100%', height: '80%' }}>

        {/* 테마 키워드 */}
        <View style={Styles.recommandTheme}>
          <TouchableOpacity
            style={Styles.recommandKeywordYellow}
            onPress={() => {
              setTheme('semiconductor')
            }}
          >
            <Text style={{ textAlign: 'center' }}>반도체</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordPurple}
            onPress={() => {
              setTheme('medical')
            }}>
            <Text style={{ textAlign: 'center' }}>의료·바이오</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordPink}
            onPress={() => {
              setTheme('ai')
            }}
          >
            <Text style={{ textAlign: 'center' }}>인공지능</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordYellow}
            onPress={() => {
              setTheme('food')
            }}
          >
            <Text style={{ textAlign: 'center' }}>음식</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordPink}
            onPress={() => {
              setTheme('car')
            }}
          >
            <Text style={{ textAlign: 'center' }}>자동차</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordPink}
            onPress={() => {
              setTheme('drink')
            }}
          >
            <Text style={{ textAlign: 'center' }}>주류</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordPurple}
            onPress={() => {
              setTheme('bigcompany')
            }}>
            <Text style={{ textAlign: 'center' }}>국내 30위</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordYellow}
            onPress={() => {
              setTheme('ent')
            }}
          >
            <Text style={{ textAlign: 'center' }}>ENT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordPurple}
            onPress={() => {
              setTheme('travel')
            }}
          >
            <Text style={{ textAlign: 'center' }}>항공·여행</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordPink}
            onPress={() => {
              setTheme('shipbuilding')
            }}>
            <Text style={{ textAlign: 'center' }}>담배</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordYellow}
            onPress={() => {
              setTheme('game')
            }}>
            <Text style={{ textAlign: 'center' }}>게임</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.recommandKeywordPurple}
            onPress={() => {
              setTheme('beauty')
            }}>
            <Text style={{ textAlign: 'center' }}>뷰티</Text>
          </TouchableOpacity>
        </View>

        {/* 기업 */}
        {recommandbubble(theme, navigation)}

      </View>

      <BottomMenu navigation={navigation} />
    </View>
  )
}

export default RecommandScreen