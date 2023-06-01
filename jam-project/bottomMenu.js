import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Styles, StylesText } from './styles.js';
import { useNavigation } from '@react-navigation/native';

export default function BottomMenuScreen() {
  const navigation = useNavigation()

  return (
    <View style={Styles.bottomBox}>
      <View style={Styles.bottomView}>
        {/* 버튼은 이미지를 넣을 수 없어서 사진을 포함한 버튼기능인 TouchableOpacity을 사용. */}
        <TouchableOpacity style={Styles.bottomTouch} onPress={() => navigation.navigate('')}>
          <Image
            source={require('./resource/realtime.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>실시간</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity style={Styles.bottomTouch} onPress={() => navigation.navigate('')}>
          <Image
            source={require('./resource/recommand.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>주식 추천</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity style={Styles.bottomTouch} onPress={() => navigation.navigate('')}>
          <Image
            source={require('./resource/search.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>검색</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity style={Styles.bottomTouch} onPress={() => navigation.navigate('')}>
          <Image
            source={require('./resource/guide.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>가이드</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity style={Styles.bottomTouch} onPress={() => navigation.navigate('')}>
          <Image
            source={require('./resource/wallet.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>지갑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}