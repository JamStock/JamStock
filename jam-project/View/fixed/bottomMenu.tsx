import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Styles } from '../style/styles';
import { getLoginInfo } from '../../Utils/Storage/loginStorage';

const BottomMenu: React.FC<any> = ({ navigation }) => {

  const [menuState, SetmenuState] = useState(true)

  useEffect(() => {
    const checkLogin = async () => {
      const loginCheck = await getLoginInfo('nickname');
      // console.log("여긴 하단부",loginCheck)
      if (loginCheck !== null) {
        SetmenuState(false);
        // 로그인 후 스토리지에서 닉네임 가져오기
      } else {
        SetmenuState(true);
      }
    };

    checkLogin();
  }, []);

  return (
    <View style={Styles.bottomBox}>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('realtime')}
        >
          <Image
            source={require('../../Resource/Icon/realtime.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>실시간</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          disabled={menuState}
          onPress={() => navigation.navigate('recommand')}
        >
          <Image
            source={require('../../Resource/Icon/recommand.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>주식 추천</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('search')}
        >
          <Image
            source={require('../../Resource/Icon/search.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>검색</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          onPress={() => navigation.navigate('guide')}
        >
          <Image
            source={require('../../Resource/Icon/guide.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>가이드</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTouch}
          disabled={menuState}
          onPress={() => navigation.navigate('wallet')}
        >
          <Image
            source={require('../../Resource/Icon/wallet.png')}
            style={Styles.bottomImg}
          />
          <Text style={Styles.bottomText}>지갑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BottomMenu;