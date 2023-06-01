import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Styles, StylesText } from './styles';
import { NavigationContainer } from '@react-navigation/native';

type BottomMenuProps = {
  navigation: any;
  // Replace `any` with your navigation type
};

const BottomMenu: React.FC<BottomMenuProps> = ({ navigation }) => {
  return (
    <View style={Styles.bottomBox}>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('')}
        >
          <Image
            source={require('./resource/realtime.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>실시간</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('recommand')}
        >
          <Image
            source={require('./resource/recommand.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>주식 추천</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('')}
        >
          <Image
            source={require('./resource/search.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>검색</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('')}
        >
          <Image
            source={require('./resource/guide.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>가이드</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('wallet')}
        >
          <Image
            source={require('./resource/wallet.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>지갑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomMenu;